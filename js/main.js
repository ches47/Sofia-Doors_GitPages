$(function(){

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 15000,
        max: 50000,
        from: 15000,
        to: 35000,
    });

    $('.slider-slick').slick({
        centerMode: true,
        centerPadding: '0px',
        dots: true,
        nextArrow: false,
        prevArrow: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 1
            }
          }
        ]
    });
    
    $('.center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

    $('.project-slider__slick-img').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    prevArrow: '<i class="fas fa-long-arrow-alt-left"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-right"></i>'
    });   

    $('.design-proffesional__img').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        autoplay: false,
        prevArrow: '<i class="fas fa-angle-up"></i>',
        nextArrow: '<i class="fas fa-angle-down"></i>'
    });

    $('.production__content-desc').slick({
      prevArrow: '<i class="fas fa-long-arrow-alt-left"></i>',
      nextArrow: '<i class="fas fa-long-arrow-alt-right"></i>'
    });

    $('.set__show').slick({
      vertical: true,
      arrows: false,
      dots: true,
      verticalSwiping: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      infinite: false,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
          }
        }
      ]
    });

    $('.set__switch .tab').on('click', function(event) {
      var id = $(this).attr('data-id');
        $('.set__switch').find('.tab-item').removeClass('active-tab').hide();
        $('.set__switch .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });

    // Показ блока по клику (для цвета) Catalog Page 
    $(document).ready(function(){
      $('.content_toggle').click(function(){
        $('.content_block').slideToggle(300);      
        return false;
      });
    });

    // Показ блока по клику (для Харак-ки) Catalog Page 
    $(document).ready(function(){
      $('.content_toggle2').click(function(){
        $('.content_block2').slideToggle(300);      
        return false;
      });
    });

    // Показ блока по клику (для Стоимость) Catalog Page 
    $(document).ready(function(){
      $('.content_toggle3').click(function(){
        $('.content_block3').slideToggle(300);      
        return false;
      });
    });

    // Показ блока по клику (для Размер) Catalog Page 
    $(document).ready(function(){
      $('.content_toggle4').click(function(){
        $('.content_block4').slideToggle(300);      
        return false;
      });
    });

    // + -  (для цвета) Catalog Page 
    $('button').on("click", function(){
      $(this).toggleClass('active');
    });

    // Adaptive 
    $('.menu__btn').on('click', function() {
      $('.menu__list').slideToggle();  
    });

    //(Кнопка "Показать все") Catalog Page 
    $(function () {
      $('.doors__main-block').slice(0, 3).show();
      $('#loadMore').on('click', function(e) {
        e.preventDefault();
        $('.doors__main-block:hidden').slice(0, 3).slideDown();
      }) 
      
    })    
});

