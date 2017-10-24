
$(document).ready(function(){
  $("#profile-link").click(function() {
    // console.log("hello");
      $('html, body').animate({
          scrollTop: $("#profile").offset().top
      }, 1000);
  });

  $("#top-link").click(function() {
    // console.log("hello");
      $('html, body').animate({
          scrollTop: $(".about").offset().top
      }, 800);
  });

});
