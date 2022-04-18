var a = document.getElementById('break1');
var b = document.getElementById('break2');
var c = document.getElementById('break3');
var d = document.getElementById('break4');
var e = document.getElementById('break5');
var f = document.getElementById('break6');
var g = document.getElementById('break7');
var h = document.getElementById('break8');
var i = document.getElementById('break9');


function playAudio(x) {
  x.play();
}
 


$('.pick1').on('click', function() {
$('.pick1').css('animation','swing 2s');
setTimeout(function () {
    playAudio(a);
}, 420);
    setTimeout(function () {
    $('.p1').css('background',"url(style/images/Cracked.jpg)");
   
}, 700);

    setTimeout(function () {
    window.location.href="wall2.html";
}, 2200);
});



$('.pick2').on('click', function() {
$('.pick2').css('animation','swing 2s');
setTimeout(function () {
    playAudio(b);
}, 420);
    setTimeout(function () {
    $('.p1').css('background',"url(style/images/Cracked.jpg)");
   
}, 700);

    setTimeout(function () {
    window.location.href="wall3.html";

}, 2000);

});



$('.pick3').on('click', function() {
$('.pick3').css('animation','swing 2s');
setTimeout(function () {
    playAudio(c);
}, 420);
    setTimeout(function () {
    $('.p1').css('background',"url(style/images/Cracked.jpg)");
   
}, 700);

    setTimeout(function () {
    window.location.href="wall4.html";
}, 2200);
});



 $('.pick4').on('click', function() {
$('.pick4').css('animation','swing 2s');
setTimeout(function () {
    playAudio(d);
}, 420);
    setTimeout(function () {
    $('.p1').css('background',"url(style/images/Cracked.jpg)");
   
}, 700);

    setTimeout(function () {
    window.location.href="wall5.html";
}, 2200);
});



 $('.pick5').on('click', function() {
$('.pick5').css('animation','swing 2s');
setTimeout(function () {
    playAudio(e);
}, 420);
    setTimeout(function () {
    $('.p1').css('background',"url(style/images/Cracked.jpg)");
   
}, 700);
    setTimeout(function () {
    window.location.href="wall6.html";
}, 2200);
});



 $('.pick6').on('click', function() {
$('.pick6').css('animation','swing 2s');
setTimeout(function () {
    playAudio(f);
}, 420);
    setTimeout(function () {
    $('.p1').css('background',"url(style/images/Cracked.jpg)");
   
}, 700);

    setTimeout(function () {
    window.location.href="wall7.html";
}, 2200);
});



$('.pick7').on('click', function() {
$('.pick7').css('animation','swing 2s');
setTimeout(function () {
    playAudio(g);
}, 420);
    setTimeout(function () {
    $('.p1').css('background',"url(style/images/Cracked.jpg)");
   
}, 700);

    setTimeout(function () {
    window.location.href="wall8.html";
}, 2200);
});



$('.pick8').on('click', function() {
$('.pick8').css('animation','swing 2s');
setTimeout(function () {
    playAudio(h);
}, 420);
    setTimeout(function () {
    $('.p1').css('background',"url(style/images/Cracked.jpg)");
   
}, 700);

    setTimeout(function () {
    window.location.href="wall9.html";
}, 2200);
});



$('.pick9').on('click', function() {
$('.pick9').css('animation','swing 2s');
setTimeout(function () {
    playAudio(i);
}, 420);
    setTimeout(function () {
    $('.p1').css('background',"url(style/images/Cracked.jpg)");
   
}, 700);
    setTimeout(function () {
    window.location.href="sky.html";
}, 2200);
});


window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.flex');
    
    for(var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;
        
    if(revealtop < windowheight - revealpoint) {
    reveals[i].classList.add('active');
    }
   else{
       reveals[i].classList.remove('active');
   } 
  }
}

$('#m').on('click', function() {
    window.location.href="https://brick-motorboat.glitch.me/";
});