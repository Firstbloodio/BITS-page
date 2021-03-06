var $ = require('jquery');
var moment = require('moment');
require('../../tooltipster');

var countries = require('../data/countries.json');
var teams = require('../data/teams.json');
var matches = require('../data/matches.json')

var componentCreator = require('./components');


$(document).ready(function(){

    var mobileMenuOpen = false;

    /* setting state for mobile menu */

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

    var url = window.location.pathname;
    var loc = window.location.hash;

    if (url === "/index.html" || loc === "") {
        /* setting up the timer */

        // var eventTime = moment("10/29/2017 23:59", "M/D/YYYY H:mm").unix()*1000;
        // var currentTime = moment.now();
        //
        // var diff = moment.duration(eventTime - currentTime);
        //
        // var days = diff.days();
        // var hours = diff.hours();
        // var minutes = diff.minutes();
        // var seconds = diff.seconds();
        //
        // $('#countdown-days').text(days);
        // $('#countdown-hours').text(hours);
        // $('#countdown-minutes').text(minutes);
        //
        // setInterval(function(){
        //     var currentTime = moment.now();
        //
        //     var diff = moment.duration(eventTime - currentTime);
        //
        //     var days = diff.days();
        //     var hours = diff.hours();
        //     var minutes = diff.minutes();
        //     var seconds = diff.seconds();
        //
        //     $('#countdown-days').text(days);
        //     $('#countdown-hours').text(hours);
        //     $('#countdown-minutes').text(minutes);
        // }, 60000);


        /* initialise the teams */

        if (teams.length > 0) {

            $('.no-team').addClass('hidden');

            // $('.grid-separator').addClass('hidden'); //temp

            //ajax call here

            $.ajax({
                url: "https://bits-api.firstblood.io/votes",
                type: "GET",
                crossDomain: true,
                dataType: "json",
                success: function (response) {
                    componentCreator.processTeams(teams, response);
                    // $('.vote-button').click(function () {
                    //     var id = $(this)[0].id;
                    //
                    //     if ($(window).width() < 768) {
                    //         $(this).addClass('e-widget generic-loader');
                    //         var index = teams.findIndex(function(team) {
                    //             return team.gleamID === id.toString();
                    //         });
                    //         var teamLink =  teams[index].gleamID;
                    //         $(this).attr('href', 'https://gleam.io/'+ teamLink);
                    //         $(this).attr('target', '_blank');
                    //     } else {
                    //         componentCreator.createGleamModal(id);
                    //     }
                    // });
                },
                error: function (xhr, status) {
                }
            });
        }

        $("#vote-button").click(function() {
            $('html, body').animate({
                scrollTop: $("#vote-section").offset().top
            }, 1000);
        });

        /* scroll down to vote */

    }
    if (url === "/schedule.html") {
        componentCreator.processMatches(matches);
    }

    if (url === "/rules.html") {
    }


    var options = {
        width: 434,
        height: 258,
        channel: "firstbloodio"

    };
    var player = new Twitch.Player("firstbloodio-stream", options);
    player.setVolume(0.5);

    player.addEventListener(Twitch.Player.OFFLINE, function(){
        $('.header').removeClass('twitch_online');
        $('.header-shapes').removeClass('twitch_online');
        $('.header-gradient').removeClass('twitch_online');
        $('.twitch-embed-container').addClass('hidden');
        $('.bottom-info').removeClass('hidden');
    })

    player.addEventListener(Twitch.Player.ONLINE, function(){
        $('.header').addClass('twitch_online');
        $('.header-shapes').addClass('twitch_online');
        $('.header-gradient').addClass('twitch_online');
        $('.twitch-embed-container').removeClass('hidden');
        $('.bottom-info').addClass('hidden');
    })

    player.addEventListener(Twitch.Player.READY, function(){
    })


    player.addEventListener(Twitch.Player.PLAY, function(){
    })

});


