var brackets = {
    teams : [
        ["Team 1", "Team 2"], /* first matchup */
        ["Team 3", "Team 4"],
        ["Team 5", "Team 6"],
        ["Team 7", "Team 8"],
        ["Team 9", "Team 10"],
        ["Team 11", "Team 12"],
        ["Team 13", "Team 14"],
        ["Team 15", "Team 16"], /* second matchup */
    ],
    results : [
        [[1,2], [3,4]],       /* first round */
        [[4,6], [2,1]]        /* second round */
    ]
};





$(document).ready(function(){

    $('#brackets').bracket({
        teamWidth: 220,
        scoreWidth: 20,
        matchMargin: 100,
        roundMargin: 50,
        init: brackets
    })

});
