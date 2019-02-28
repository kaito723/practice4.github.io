$(function(){
  $('.introduce-img').hover(function(){
    $(this).find('h3').show();
  });
  $('.introduce-img').mouseleave(function(){
    $(this).find('h3').hide();
  });

  var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,

  pagination: '.swiper-pagination',
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev'
});

$(function(){
  var  $topWrapper=$('.top-wrapper'),
       $win=$(window);

    $win.on('load scroll', function(){
      var $value=$(this).scrollTop();
      if($value>100){
        $('.return-top').fadeIn();
      }else{
        $('.return-top').fadeOut();
      }
    });
});

$('.return-top').click(function(){
    $('html').animate({scrollTop: 0});
  });
});
