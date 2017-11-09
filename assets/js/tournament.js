var brackets = {
  "teams": [
    ["Mind's Eye", "Leviathan"],
    ["CES", "G-Pride"],
    ["Sacred", "Blue Pikachu"],
    ["Luccini Gaming", "Elite Wolves"]
  ],
  "results": [            // List of brackets (three since this is double elimination)
    [ // R1 Upper bracket
      [[0,2], // match A
      [,],  // match B
      [1,0],  // match D
      [2,0]], // match E
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
