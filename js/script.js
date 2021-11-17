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
