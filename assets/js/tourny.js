// The Tournament Starts here.

var bigData = {
  teams : [
    [{name: "ProDotA", flag: "US"},  {name:"People's Choice"}],
    [{name: "Danish Bears"},  {name:"Gambit"}],
    [{name: "Crescendo"},  {name:"Singularity"}],
    [{name: "Anji"},  {name:"Mystery Team"}],
  ],
  results : [[ /* WINNER BRACKET */
    [[null, null], [null, null], [null, null], [null, null]],
    [[null, null], [null, null]],
    [[null, null]]
  ], [         /* LOSER BRACKET */
    [[null, null], [null, null]],
    [[null, null], [null, null]],
    [[null, null]],
    [[null, null]]
  ], [         /* FINALS */
    [[null, null]]
  ]]
}

var qulifierData = {
  teams : [
    [{name: "Team 1"},  {name:"Team 2"}],
    [{name: "Team 1"},  {name:"Team 2"}],
    [{name: "Team 1"},  {name:"Team 2"}],
    [{name: "Team 1"},  {name:"Team 2"}],
  ],
  results : [[ /* WINNER BRACKET */
    [[null, null], [null, null], [null, null], [null, null]],
    [[null, null], [null, null]],
  ]]
}

$(function() {
  $('#bracket').bracket({
    teamWidth: 150,
    init: bigData,
    decorator: {
      edit: edit_fn,
      render: render_fn
    }
  })
  $('#qualifier').bracket({
    teamWidth: 150,
    init: qulifierData,
    decorator: {
      edit: edit_fn,
      render: renderQualifier
    }
  })
})

function render_fn(container, data, score, state) {
  switch(state) {
    case "empty-bye":
      container.append("No team")
      return;
    case "empty-tbd":
        container.append("TBD")
      return;

    case "entry-no-score":
    case "entry-default-win":
    case "entry-complete":
      // container.append(data.name);
      container.append('<img src="../images/team/png/'+data.flag+'.png" style = "height:50%;" /> ').append(data.name)
      return;
  }
}

function renderQualifier(container, data, score, state) {
  switch(state) {
    case "empty-bye":
      container.append("No team")
      return;
    case "empty-tbd":
        container.append("TBD")
      return;

    case "entry-no-score":
    case "entry-default-win":
    case "entry-complete":
      container.append('')
      return;
  }
}

/* Edit function is called when team label is clicked */
function edit_fn(container, data, doneCb) {
  return false;
  var input = $('<input type="text">')
  input.val(data ? data.flag + ':' + data.name : '')
  container.html(input)
  input.focus()
  input.blur(function() {
    var inputValue = input.val()
    if (inputValue.length === 0) {
      doneCb(null); // Drop the team and replace with BYE
    } else {
      var flagAndName = inputValue.split(':') // Expects correct input
      doneCb({flag: flagAndName[0], name: flagAndName[1]})
    }
  })
}
