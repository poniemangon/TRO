$(document).ready(function() {
    $(".fa-bars").click(function() {
    $(".burgermenu").slideToggle();
    });
  });

$(document).ready(function() {
    $(".toggle-box-one").click(function() {
    $(".hidden-p-one").slideToggle();
    $(".flip-one").toggleClass("rotated");
    });
  });

$(document).ready(function() {
    $(".toggle-box-two").click(function() {
    $(".hidden-p-two").slideToggle();
    $(".flip-two").toggleClass("rotated");
    });
  });
$(document).ready(function() {
    
    $(".fa-cart-shopping").click(function() {
      $(".overlay").toggle();
      $(".cart").fadeIn().animate({right: '0'}, 300);
    });
  
  $(".close-cart").click(function() {
      $(".overlay").fadeOut();
      $(".cart").animate({right: '-800px'}, 600).fadeOut();
    });
  });
  

  $(document).ready(function(){
    
    $(".fa-plus").click(function() {
      $(".overlay").toggle();
      $(".modal-payment").fadeIn();
    });
  
  $(".close-modal").click(function() {
      $(".overlay").fadeOut();
      $(".modal-payment").fadeOut();
    });
  });