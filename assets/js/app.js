require('jquery-modal');

var $ = require('jquery');
var moment = require('moment');


var countries = require('../data/countries.json');
var teams = require('../data/teams.json');

var componentCreator = require('./components');


$(document).ready(function(){

    var mobileMenuOpen = false;

    $(window).bind( 'hashchange', function(e) {
        var anchor = document.location.hash;
        if( anchor === '#one' ) {

        } else if ( anchor === '#two' ) {

        } else if ( anchor === '#three' ) {

        }
        console.log(anchor);
    });

    var eventTime = moment("10/29/2017 23:59", "M/D/YYYY H:mm").unix()*1000;
    var currentTime = moment.now();

    var diff = moment.duration(eventTime - currentTime);

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

    if (mobileMenuOpen) {
        $(".mobile-menu").removeClass('hidden');
    } else {
        $(".mobile-menu").addClass('hidden');
    }

    $(".menu-lines").click(function() {
        if(!mobileMenuOpen) {
            $(".mobile-menu").removeClass('hidden');
            mobileMenuOpen = true;
        } else {
            $(".mobile-menu").addClass('hidden');
            mobileMenuOpen = false;
        }

    });


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 25) {
            $(".banner").addClass("dark");
        } else {
            $(".banner").removeClass("dark");
        }
    });




});


