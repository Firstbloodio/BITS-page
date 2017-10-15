require('jquery-modal');

var $ = require('jquery');
var moment = require('moment');


var countries = require('../data/countries.json');
var teams = require('../data/teams.json');

var componentCreator = require('./components');


$(document).ready(function(){

    var eventTime = moment("12/16/2017 9:00", "M/D/YYYY H:mm").unix();
    var currentTime = moment.now();

    var diff = moment.duration(currentTime - eventTime);

    var days = diff.days();
    var hours = diff.hours();
    var minutes = diff.minutes();
    var seconds = diff.seconds();

    $('#countdown-days').text(days);
    $('#countdown-hours').text(hours);
    $('#countdown-minutes').text(minutes);

    setInterval(function(){
        var currentTime = moment.now();

        var diff = moment.duration(eventTime.diff(currentTime));

        var days = diff.days();
        var hours = diff.hours();
        var minutes = diff.minutes();
        var seconds = diff.seconds();

        $('#countdown-days').text(days);
        $('#countdown-hours').text(hours);
        $('#countdown-minutes').text(minutes);
    }, 60000);



    if (teams.length > 0) {

        $('.no-team').addClass('hidden');

        $('.grid-separator').addClass('hidden'); //temp

        componentCreator.processTeams(teams);
        $('.vote-button').click(function () {
            var id = $(this)[0].id;
            componentCreator.createGleamModal(id);
        });
    }

    $("#vote-button").click(function() {
        $('html, body').animate({
            scrollTop: $("#vote-section").offset().top
        }, 1000);
    });




});


