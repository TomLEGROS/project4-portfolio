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
