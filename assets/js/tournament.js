var brackets = {
  "teams": [
    ["Team 1", "Team 2"],
    ["Team 3", "Team 4"],
    ["Team 5", "Team 6"],
    ["Team 7", "Team 8"]
  ],
  "results": [            // List of brackets (three since this is double elimination)
    [ // R1 Upper bracket
      [[,], // match A
      [,],  // match B
      [,],  // match D
      [,]], // match E
      // R2 Upper bracket
      [[,], // match G
      [,]], // match H
      // Upper Bracket Final
      [[,]] // match L
    ],
    [ // R1 Loser bracket
      [[,], // match C
      [,]], // match F
      // R2 Loser bracket
      [[,], // match I
      [,]],  // match J
      // R3 Loser bracket
      [[,]], // match C
      // Lower Bracket Final
      [[,]], // match C

    ],
    [          // Grand Final
      [
        [,]    // match N
      ],
    ]
  ]
}





$(document).ready(function(){

    $('#brackets').bracket({
        teamWidth: 220,
        scoreWidth: 20,
        matchMargin: 100,
        roundMargin: 50,
        skipConsolationRound: true,
        init: brackets
    })

});
