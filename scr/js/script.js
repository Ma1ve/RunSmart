/* $(document).ready(function(){
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
}); */

var slider = tns({
    container: '.carousel__iner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
    
  });

document.querySelector('.slick-prev').addEventListener('click',function () {
  slider.goTo("prev");
})

document.querySelector('.slick-next').addEventListener('click',function () {
  slider.goTo("next");
})

