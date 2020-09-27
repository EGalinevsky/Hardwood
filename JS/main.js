$(function () {
  $("[data-slider]").slick({
    infinite: true,
    fade: true,
    dots: true,
    dotsClass: 'before-slider_dots',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  });
});

$(function () {
  /*Smooth scroll */
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var blockId = $(this).data('scroll');
    var blockOfset = $(blockId).offset().top;

    $("html, body").animate({
      scrollTop: blockOfset
    }, 500);
  })
});

$(function(){
  const modalCall = $("[data-modal]");

  modalCall.on("click", function(event){
    // event.preventDefault();
    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('show');

    console.log(modalId);
  });
});

new Vivus(
  'svg1d',
  {
    type: 'sync',
    duration: 100,
  }
);

new Vivus(
  'svg2d',
  {
    type: 'sync',
    duration: 150,
  }
);

new Vivus(
  'svg3d',
  {
    type: 'sync',
    duration: 200,

  }
); 