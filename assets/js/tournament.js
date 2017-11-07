var brackets = {
  "teams": [
    ["Blue Pikachu", "Leviathan"],
    ["CES", "Mind's Eye"],
    ["Elite Wolves", "Luccini Gaming"],
    ["G-Pride", "Sacred"]
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
        roundMargin: 25,
        skipConsolationRound: true,
        init: brackets
    })

});
