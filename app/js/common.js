$(function() {

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

// ------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('nav').toggleClass('nav--active');
  });

  // //-------------------------------анімація цифр---------------------------------------
  //   var show = true;
  //   var countbox = ".about-statistics__container";
  //   $(window).on("scroll load resize", function () {
  //       if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
  //       var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
  //       var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
  //       var w_height = $(window).height(); // Высота окна браузера
  //       var d_height = $(document).height(); // Высота всего документа
  //       var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
  //       if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
  //           $('.about-statistics__item h3').spincrement({
  //               thousandSeparator: "",
  //               duration: 2000
  //           });
  //           show = false;
  //       }
  //   });

  //------------------------------cart slider-----------------------------
  var tovarPreviews = new Swiper('.tovar__previews', {
    spaceBetween: 15,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });

  //------------------------------tovar slider-----------------------------
  var cartImg = new Swiper('.tovar__img', {
    spaceBetween: 30,
    thumbs: {
      swiper: tovarPreviews
    }
  });

});

