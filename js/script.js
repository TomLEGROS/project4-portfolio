$(document).ready(function(){
  $('.sidenav').sidenav();
});


$(".dropdown-trigger").dropdown();

$(document).ready(function(){
  $('.modal').modal();
});

$('.carousel').carousel();
setInterval(function() {
  $('.carousel').carousel('next');
}, 5000);

$(document).ready(function(){
    $('.parallax').parallax();
  });

  $(document).ready(function(){
  $('.collapsible').collapsible();
});

var click = 0;
var yamete = new Audio('audio/yamete.mp3');

function easteregg(){
  document.getElementById("neko").classList.add('hide');
  click += 1;
  document.getElementById('a').innerHTML="click : " + click;
  if (click == 10){
    document.getElementById("neko").classList.remove('hide');
    yamete.play();
    click = 0


  }
}
