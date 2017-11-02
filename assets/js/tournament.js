var brackets = {
  "teams": [
    ["CES", "Mind's Eye"],
    ["G-Pride", "Sacred"],
    ["Elite Wolves", "Luccini Gaming"],
    ["Blue Pikachu", "Leviathan"]
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
        matchMargin: 107,
        roundMargin: 50,
        skipConsolationRound: true,
        init: brackets
    })

});
