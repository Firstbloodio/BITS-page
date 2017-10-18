var $ = require('jquery');
var teams = require('../data/teams.json');



module.exports = componentsCreator = {

    createTeamCard: function(data, index) {

        return (
            '    <div class="card tooltip" data-tooltip-content="#tooltip_team_' + index + '">\n' +
            '                    <img class="avatar" src="'+ data.avatar +'">\n' +
            '                    <div class="team-card-info">\n' +
            '                        <div class="country-flag ' + data.country + '"></div>\n' +
            '                        <div class="team-name">' + data.team +'</div>\n' +
            '                    </div>\n' +
            '                    <div class="team-card-vote">\n' +
            '                        <a id="'+ data.gleamID +'" class="vote-button">VOTE</a>\n' +
            // '                        <div class="votes">Votes: <span>'+ data.votes +'</span></div>\n' +
            '                    </div>\n' +
            '                </div>'
        )
    },

    createGleamModal: function(gleamID) {
        $('#modal-backdrop').removeClass('hidden');
        $('.gleam-modal').removeClass('hidden');
        $("body").css("overflow","hidden");

        $("#close-modal-btn").click(function() {
            $('#modal-backdrop').addClass('hidden');
            $('.gleam-modal').addClass('hidden');
            $('.gleam-content').empty();
            $("body").css("overflow","auto");
        });

        var index = teams.findIndex(function(team) {
            return team.gleamID === gleamID.toString();
        });

        var teamName =  teams[index].team;
        var gleamCampaign = ' <h2>Vote for ' + teamName + '</h2>' +
            '<iframe id="gleam-iframe" class="hidden" src="https://gleam.io/'+ gleamID +'" frameBorder="0" allowfullscreen></iframe>' +
            '<div id="loading-text">LOADING...</div>'

        $('.gleam-content').append(gleamCampaign);

        var iframe = document.getElementById('gleam-iframe');

        iframe.addEventListener("load", function() {
            $('iframe').removeClass('hidden');
            $('#loading-text').addClass('hidden');
        });
    },


    processTeams: function(teams) {

        teams.sort(function(a, b) {
            return b.votes - a.votes;
        });

        for (i = 0; i < teams.length; i++) {
            var data = teams[i];
            $('#teams-in-grid').append(this.createTeamCard(data, i));

            var position = 1 + i;

            $('.tooltip_templates').append(
                '<span id ="tooltip_team_' + i + '">' +
                ' <div class="tooltip-card">' +
                    '<div class="team-entry-date">'+ data.date + '</div>' +
                '    <div class="team-votes-position">' +
                '       <div><span>Votes: </span>'+ data.votes +'</div>' +
                '       <div><span>Position: </span>'+ position +'</div>' +
                '   </div>' +
                '</div>' +
                ' </span> '
            )

            // will use this script when webhook is added to get total votes
            // if(i >= 8) {
            //     $('#teams-out-grid').append(this.createTeamCard(data));
            // } else {
            //     $('#teams-in-grid').append(this.createTeamCard(data));
            // }
        }

        $('.tooltip').tooltipster({
            side: "bottom",
            theme: 'tooltipster-shadow'
        });
    }
};



