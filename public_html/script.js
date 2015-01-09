/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function() {
    $(".practice").css("background-color", "yellow");

    $('p:last').css({"background-color": "blue", "color": "white"});

    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    $('h1').bind('click', mouseClick);
});

function mouseOverMe() {
    $("p").html("Hey");
}
function mouseOutMe() {
    $('h1').html('Hello');
}
function mouseClick() {
    $('p').html('Hello people!!!!!!!!');
}