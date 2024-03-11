$('.carousel').slick({
  arrows: true,
  infinite: false,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [{
      breakpoint: 1250,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
      }
  },
  {
    breakpoint: 980,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2,

    }
},
  {
      breakpoint: 700,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

      }
  }]
});

$('.carousel2').slick({
    arrows: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [{
        breakpoint: 1250,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
        }
    },]
  });


