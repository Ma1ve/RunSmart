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

$(function() {
  
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container-fixed').find('div.catalog__contend').removeClass('catalog__contend_active').eq($(this).index()).addClass('catalog__contend_active');
  });

  $('.catalog__view').each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  })

  $('.catalog-item__back').each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  })


  


  /* function toggleSlide(item) {
    $('.item').each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  })
  } */

});