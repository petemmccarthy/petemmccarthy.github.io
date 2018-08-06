
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

  // $(window).scroll(function() {
  //   var scroll = $(window).scrollTop();
  //   var card = $(".card")
  //     console.log(scroll)
  //   if (scroll >= 50) {
  //       $(".card").addClass("moveOut");
  //       $(".card").removeClass("moveIn");
  //   } else {
  //       $(".card").removeClass("moveOut");
  //       $(".card").addClass("moveBackIn");
  //   }
  // });

});
