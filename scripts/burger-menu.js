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

  $(document).ready(function() {
    $('.option-two').hide();
    $('.option-mp').click(function() {
        $('.option-one').show();
        $('.option-two').hide();
        $(this).addClass('active-modal');
        $('.option-tr').removeClass('active-modal');
    });

    $('.option-tr').click(function() {
        $('.option-one').hide();
        $('.option-two').show();
        $(this).addClass('active-modal');
        $('.option-mp').removeClass('active-modal');
    });
});

$(document).ready(function() {
  $('.increment').mousedown(function(event) {
      event.preventDefault();
      
      var counter = $(this).closest('.counter');
      var quantity = parseInt(counter.find('.quantity').text());
      quantity++;
      counter.find('.quantity').text(quantity);
  });

  $('.decrement').mousedown(function(event) {
      event.preventDefault();
      
      var counter = $(this).closest('.counter');
      var quantity = parseInt(counter.find('.quantity').text());
      if (quantity > 1) {
          quantity--;
          counter.find('.quantity').text(quantity);
      }
  });
});

