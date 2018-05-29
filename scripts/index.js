$(document).ready(function() {

  $(window).scroll(function() {
    // var mainbodyOffset = $(".main-body").offset().top;
    // var mainbodyOuterHeight = $(".main-body").outerHeight();
    // var windowHeight = $(window).height();
    var scrollTop = $(this).scrollTop();

    if(scrollTop > 50){
      $('#bio_section').fadeIn();
    }
  });

});
