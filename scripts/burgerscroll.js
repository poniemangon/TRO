$(document).ready(function(){
  let lastScrollTop = 0;
  const $scrollIcon = $('.fa-bars');

  $(window).scroll(function(event){
      let currentScroll = $(this).scrollTop();

      if ($(window).width() <= 1250) {
          if (currentScroll > lastScrollTop){
              $scrollIcon.stop().fadeIn();
          } else {
              $scrollIcon.stop().fadeOut();
          }
      } else {
          
          $scrollIcon.stop().fadeOut();
      }

      lastScrollTop = currentScroll;
  });
});
