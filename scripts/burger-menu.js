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


