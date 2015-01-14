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
    
    $('replaceWText').bind('click',replaceWText);
    
    $('randApara').bind('click',addAPara);
    
    $('removeApara').bind('click', removeAPara);
    
    $('#show').css('visibility', 'hidden');
    
    $('#hide').bind('click', hideThePage);
    
    $('#show').bind('click', showThePage);
});

function hideThePage(){
    $('#show').css('visibility', 'visible');
    $('#div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage(){
    $('div').show('fold', {}, 2500);
     $('show').hide('puff', {}, 2500);
}

function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('randPara').append('<p>|""| (0 0) |""| </p>');
}

function replaceWText(){
    $('#randPara').html('<h1>Peeka boo</h1>');
}

function mouseOverMe() {
    $("p").html("Hey");
}
function mouseOutMe() {
    $('h1').html('Hello');
}
function mouseClick() {
    $('p').html('Hello people!!!!!!!!');
}