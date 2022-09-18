$(function(){

$(window).scroll(function(){
  if($(this).scrollTop()>0){
    $('.head').addClass('pc-size');
    $('.head').addClass('color');
  }else{
    $('.head').removeClass('pc-size');
    $('.head').removeClass('color');
  }
});

$(window).resize(function(){
  if (window.matchMedia("(max-width: 768px)").matches){
    $('.head').removeClass('pc-size');
    $('.head').addClass('sma-size');
  }else if($(this).scrollTop()>0){
    $('.head').removeClass('sma-size');
    $('.head').addClass('pc-size');
  }else{
    $('.head').removeClass('sma-size');
    $('.head').removeClass('pc-size');
    $('.head').removeClass('color');
  }
})

$(window).scroll(function(){
  if($(this).scrollTop() > 300){
    $('.arrow').fadeIn();
  }else{
    $('.arrow').fadeOut();
  }
})
$('.arrow').click(function(){
  $('html,body').animate({
    'scrollTop':0
  },300);
})

$('.humb').click(function(){
  $('.header').toggleClass('open');
})


$('.slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
});

$(window).scroll(function(){
  let wintop=$(this).scrollTop();
  if(wintop>180){
    $('.top-inner').addClass('lock');
  }else{
    $('.top-inner').removeClass('lock');
  }
})
  
})