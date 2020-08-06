$(function() {


//---------------------------tabs-audio-filter-----------------------
  $('.tabs__wrap').hide();
  $('.tabs__wrap:first').show();
  $('.tabs ul a:first').addClass('active');
  $('.tabs ul a').click(function(event){
    event.preventDefault();
    $('.tabs ul a').removeClass('active');
    $(this).addClass('active');
    $('.tabs__wrap').hide();
    var selectTab = $(this).attr('href');
    $(selectTab).fadeIn();
  });

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

// ------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('nav').toggleClass('nav--active');
  });

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

// // ------------------------------panno-button-----------------------------
//   $('.panno__pluse').click(function(event){
//     event.preventDefault();
//     $('.panno__img--three').addClass('panno__img--four');
//     $('.panno__img--two').addClass('panno__img--three');
//     $('.panno__img').addClass('panno__img--two');

//     $('.panno__audio span').css('width', function(index, value){
//         var newWidth = value.replace('px','')*1.35;
//         return newWidth;
//     });
//       $('.panno__audio span').css('height', function(index, value){
//           var newheight = value.replace('px','')*1.35;
//           return newheight;
//     });
//   });

// // ------------------------------panno-button-----------------------------
//   $('.panno__minus').click(function(event){
//     event.preventDefault();

//     if($(".panno__img").hasClass("panno__img--four")) {
//       $('.panno__img--four').removeClass('panno__img--four');
//       $('.panno__img--two').removeClass('panno__img--three');
//       $('.panno__img').removeClass('panno__img--two');
//     }
  
    
    
//   });

// ------------------------------panno-button-----------------------------
  $('.panno__pluse').click(function(event){
    event.preventDefault();
    $('.panno__img').css('width', function(index, value){
        var newWidth = value.replace('px','')*1.35;
        return newWidth;
    });
    $('.panno__img').css('height', function(index, value){
        var newheight = value.replace('px','')*1.35;
        return newheight;
    });
    $('.panno__audio span').css('width', function(index, value){
      var newWidth = value.replace('px','')*1.35;
      return newWidth;
  });
    $('.panno__audio span').css('height', function(index, value){
        var newheight = value.replace('px','')*1.35;
        return newheight;
    });
  });

  $('.panno__minus').click(function(event){
    event.preventDefault();
    $('.panno__img').css('width', function(index, value){
      var newWidth = value.replace('px','')/1.35;
      return newWidth;
    });
    $('.panno__img').css('height', function(index, value){
      var newheight = value.replace('px','')/1.35;
      return newheight;
    });
    $('.panno__audio span').css('width', function(index, value){
      var newWidth = value.replace('px','')/1.5;
      return newWidth;
    });
    $('.panno__audio span').css('height', function(index, value){
      var newheight = value.replace('px','')/1.5;
      return newheight;
    });
  });

// ------------------------------panno-scroll-----------------------------
  (function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory((root.dragscroll = {}));
    }
  }(this, function (exports) {
    var _window = window;
    var _document = document;
    var mousemove = 'mousemove';
    var mouseup = 'mouseup';
    var mousedown = 'mousedown';
    var EventListener = 'EventListener';
    var addEventListener = 'add'+EventListener;
    var removeEventListener = 'remove'+EventListener;
    var newScrollX, newScrollY;

    var dragged = [];
    var reset = function(i, el) {
        for (i = 0; i < dragged.length;) {
            el = dragged[i++];
            el = el.container || el;
            el[removeEventListener](mousedown, el.md, 0);
            _window[removeEventListener](mouseup, el.mu, 0);
            _window[removeEventListener](mousemove, el.mm, 0);
        }

        // cloning into array since HTMLCollection is updated dynamically
        dragged = [].slice.call(_document.getElementsByClassName('dragscroll'));
        for (i = 0; i < dragged.length;) {
            (function(el, lastClientX, lastClientY, pushed, scroller, cont){
                (cont = el.container || el)[addEventListener](
                    mousedown,
                    cont.md = function(e) {
                        if (!el.hasAttribute('nochilddrag') ||
                            _document.elementFromPoint(
                                e.pageX, e.pageY
                            ) == cont
                        ) {
                            pushed = 1;
                            lastClientX = e.clientX;
                            lastClientY = e.clientY;

                            e.preventDefault();
                        }
                    }, 0
                );

                _window[addEventListener](
                    mouseup, cont.mu = function() {pushed = 0;}, 0
                );

                _window[addEventListener](
                    mousemove,
                    cont.mm = function(e) {
                        if (pushed) {
                            (scroller = el.scroller||el).scrollLeft -=
                                newScrollX = (- lastClientX + (lastClientX=e.clientX));
                            scroller.scrollTop -=
                                newScrollY = (- lastClientY + (lastClientY=e.clientY));
                            if (el == _document.body) {
                                (scroller = _document.documentElement).scrollLeft -= newScrollX;
                                scroller.scrollTop -= newScrollY;
                            }
                        }
                    }, 0
                );
            })(dragged[i++]);
        }
    }

      
    if (_document.readyState == 'complete') {
        reset();
    } else {
        _window[addEventListener]('load', reset, 0);
    }

    exports.reset = reset;
  }));


