"use strict";
(function() {
    $('h1').css('background-color', 'rebeccapurple')
    $('h1').click(function() {
        $(this).css('background-color', 'yellow')
    });

    $('p').dblclick(function() {
        $(this).css('font-size', '18px')
    })
    $('li').hover(
        function() {
            $(this).css('background-color', '#FF0');
        },
        function() {
            $(this).css('background-color', '#FFF');
        }
    );




})()