//slider home
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

//slider works
$(function () {
  $('.worksSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots:true
  });
  $(".slickPrev").on("click",  function(event){
    event.preventDefault();

    $('.worksSlider').slick("slickPrev");
  })
  $(".slickNext").on("click",  function(event){
    event.preventDefault();

    $('.worksSlider').slick("slickNext")
  })
});

//slider reviews
$(function(){
  $('.reviews__item').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100000,   
    responsive: [{
      breakpoint: 840,
      settings:{
        slidesToShow: 2,
      }
    }, {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
      }
    },
    ]
  });
  
});

// scroll to block
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

//button close and open
$(function(){
  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");
  var noShow =$('.header');
  // var noShow = $('.header__noShow');

  modalCall.on("click", function(event){
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(noShow).addClass('header__noShow');
    $(modalId).addClass('show');
    $("body").addClass('no-scroll');

    setTimeout(function(){
        $(modalId).find(".modal__dialog").css({
          transform: "rotateX(0)"
        });
      }, 100);    

      $('#worksSlider').slick('setPosition');
});


  modalClose.on("click", function(event){
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.find(".modal__dialog").css({
      transform: "rotateX(90deg)"
    });
    

    setTimeout(function(){

      $('#header').removeClass('header__noShow');
      modalParent.removeClass('show');
      $('body').removeClass('no-scroll');
      
      }, 200);  

    
  });

    $(".modal").on("click", function(event){

      let $this =$(this)

      $this.find(".modal__dialog").css({
        transform: "rotateX(90deg)"
      });

      setTimeout(function(){
        $('#header').removeClass('header__noShow');
        $this.removeClass('show');
        $('body').removeClass('no-scroll');
        
        }, 200);
      
      });

      $(".modal__dialog").on("click", function(event){
      event.stopPropagation();
    
  });
});

//burger menu
$(".burger__menu").on("click", function(event){
  event.preventDefault();
  $(this).toggleClass('burger__item__active');
  $('.logo__right').toggleClass('logo__right__active');
  $('.navigation-link').toggleClass('navigation-link_active')
  
})
// animated svg 1
new Vivus(
  'svg1d',
  {
    type: 'sync',
    duration: 100,
  }
);

// animated svg 2
new Vivus(
  'svg2d',
  {
    type: 'sync',
    duration: 150,
  }
);

// animated svg 3
new Vivus(
  'svg3d',
  {
    type: 'sync',
    duration: 200,

  }
); 

//send form to the email



    
    
    

    

// document.addEventListener('DOMcontentLoaded', function(){
    


//     // function formValidate(form){
//     //   let error = 0;


//     //   let formReq = document.querySelectorAll('._req');

//     //   for (let index = 0; index < formReq.length; index++) {
//     //     const input = formReq[index];
//     //     formRemoveError(input);

//     //     if (input.classList.contains('_email')) {

//     //     } else{
//     //       if (input.value === '') {
//     //         formAddError(input);
//     //       }
//     //     }
        
//     //   }
//     // }

//     // function formAddError(input) {
//     //   input.parentElement.classList.add('_error')
//     //   input.classList.add('_error')
//     // }

//     // function formRemoveError(input) {
//     //   input.parentElement.classList.remove('_error')
//     //   input.classList.remove('_error')
//     // }
// });