$(document).ready(function(){
    let lastScrollTop = 0;
    const $scrollIcon = $('.fa-bars');


    $(window).scroll(function(event){
      let currentScroll = $(this).scrollTop();

      if ($(window).width() <= 1250) {
        if (currentScroll > lastScrollTop){

          $scrollIcon.fadeIn();
        } else {

          $scrollIcon.fadeOut();
        }
      }
      lastScrollTop = currentScroll;
    });
  });