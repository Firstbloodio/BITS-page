// The Tournament Starts here.

var bigData = {
  teams : [
    [{name: "PD",flag: "pg"},  {name:"EPG", flag: "ep"}],
    [{name: "DB" ,flag: "db"},  {name:"GMB", flag: "ge"}],
    [{name: "CSD" ,flag: "co"},  {name:"SNG",flag: "ts"}],
    [{name: "ANJ",flag: "ca"},  {name:"M19", flag:'m19'}],
  ],
  results : [[ /* WINNER BRACKET */
    [[2, 0], [1, 2], [0, 2], [2, 0]],
    [[1, 2], [1, 2]],
    [[2, 0]]
  ], [         /* LOSER BRACKET */
    [[0, 1], [2, 0]],
    [[2, 1], [0, 2]],
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
    teamWidth: 80,
    matchMargin: 30,
    roundMargin: 25,
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
