// The Tournament Starts here.

var bigData = {
  teams : [
    [{name: "ProDotA",flag: "pg"},  {name:"Elements Pro", flag: "ep"}],
    [{name: "Danish Bears" ,flag: "db"},  {name:"Gambit", flag: "ge"}],
    [{name: "Crescendo" ,flag: "co"},  {name:"Singularity",flag: "ts"}],
    [{name: "Cyber Anji",flag: "ca"},  {name:"M19", flag:'m19'}],
  ],
  results : [[ /* WINNER BRACKET */
    [[1, 0], [1, 0], [1, 0], [0, 1]],
    [[0, 1], [1, 0]],
    [[0, 1]]
  ], [         /* LOSER BRACKET */
    [[1, 0], [1, 2]],
    [[1, 2], [1, 2]],
    [[1, 2]],
    [[1, 2]]
  ], [         /* FINALS */
    [[1, 2]]
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
    teamWidth: 145,
    init: bigData,
    skipConsolationRound: true,
    skipSecondaryFinal: true,
    decorator: {
      edit: edit_fn,
      render: render_fn
    }
  })
  $('#qualifier').bracket({
    teamWidth: 100,
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
      container.append('<img src="images/team/'+data.flag+'.png" style = "height:80%;" /> ').append(data.name)
      return;
  }
}

$(function() {

  })


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
