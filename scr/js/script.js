$(document).ready(function(){
  $('.carousel__iner').slick({
    speed: 500,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/sol-lef.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/icons/sol-righ.png"></button>',
    responsive:[{
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false
      }
    }]
  }
  );
});