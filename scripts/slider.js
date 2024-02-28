$('.carousel').slick({
  arrows: false,
  infinite: false,
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

