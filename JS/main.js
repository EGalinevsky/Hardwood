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
  const modalClose = $("[data-close]")

  modalCall.on("click", function(event){
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('show');
    $("body").addClass('no-scroll');

    setTimeout(function(){
        $(modalId).find(".modal__dialog").css({
          transform: "rotateX(0)"
        });
      }, 100);    
});


  modalClose.on("click", function(event){
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.find(".modal__dialog").css({
      transform: "rotateX(90deg)"
    });

    setTimeout(function(){
      modalParent.removeClass('show');
      $('body').removeClass('no-scroll');
      
      }, 100);  

    
  });

    $(".modal").on("click", function(event){

      let $this =$(this)

      $this.find(".modal__dialog").css({
        transform: "rotateX(90deg)"
      });

      setTimeout(function(){
        $this.removeClass('show');
        $('body').removeClass('no-scroll');
        
        }, 200);
      
      });

      $(".modal__dialog").on("click", function(event){
      event.stopPropagation();
    
  });
});

$(".burger__menu").on("click", function(event){
  event.preventDefault();
  $(this).toggleClass('burger__item__active');
  console.log("fefef");
})

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