$(document).ready(function(){

  // gnb
  $('.menu').css('margin-left','-350px');
  $('.fa-bars').click(function(){
      $('.menu').animate({'margin-left':'0px'},400);
  });
  $('.fa-x').click(function(){
    $('.menu').animate({'margin-left':'-350px'},400);
  });
  
  
  
  
  
  // 슬라이드

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




  // 휠스크롤 동작
  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    //$('.status').text(sPos);

    if(sPos>=800){
      $('header').css({'background':'rgba(173, 108, 104, 0.8)'});
      $('aside').css({'display':'block'});
    }else{
      $('header').css({'background':'none'});
      $('aside').css({'display':'none'});
    }
  });


  // 모달창
  $('.modal li:last-child').click(function(){
    $('.modal').fadeOut();
  });
});