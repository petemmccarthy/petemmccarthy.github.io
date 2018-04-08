
$(document).ready(function(){

  $(".profile-link").click(function() {
      $('html, body').animate({
          scrollTop: $("#profile").offset().top
      }, 800);
  });

  $("#top-link").click(function() {
      $('html, body').animate({
          scrollTop: $(".about").offset().top
      }, 800);
  });

});
