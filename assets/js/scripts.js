$(document).ready(function(){
 $('.slide-show').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.slide-selector'
  });
  $('.slide-selector').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slide-show',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false
  });
})