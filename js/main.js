$(document).ready(function() {
  // header menu toggle
  $('.js-btn-nav').on('click', function (e) {
    $('body').toggleClass('is-menu-opened');
    $('.header__nav').toggleClass('is-show');
    e.preventDefault();
  });

  // header hide menu when click
  $('.js-header-nav-link').on('click', function (e) {
    $('body').removeClass('is-menu-opened');
    $('.header__nav').removeClass('is-show');
  });

  // fullpage scroll init
  $('#fullpage').fullpage({
    anchors: true,
    menu: '#nav',
    navigation: true,
    responsive: 1200,
    responsiveHeight: 680,
    anchors: ['intro', 'about', 'ecvida-today', 'info-clients', 'info-business', 'contacts-section']
  });

  // slider slick init
  if ($('.js-slider-ecvida-today-news').length > 0) {
    $('.js-slider-ecvida-today-news').slick({
      arrows: true,
      infinite: false,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            arrows: false,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 421,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  if ($('.js-slider-news-init').length > 0) {
    $('.js-slider-news-init').slick({
      arrows: true,
      infinite: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
    });
  }

  if ($('.js-slider-modal-column').length > 0) {
    $('.js-slider-modal-column').slick({
      arrows: true,
      infinite: false,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 421,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
    });
  }

  // modal fancybox
  $('[data-fancybox]').fancybox({
    touch: false,
    afterClose: function() {
      $.fn.fullpage.setAllowScrolling(true);
      $.fn.fullpage.setKeyboardScrolling(true);
    },
    beforeShow: function() {
      if ($('.js-slider-modal-column').length > 0) {
        $('.js-slider-modal-column').slick('setPosition');
      }
      $.fn.fullpage.setAllowScrolling(false);
      $.fn.fullpage.setKeyboardScrolling(false);
    }
  });

  // init mask tel/phone
  if ($('.js-phone-mask')[0]){
    $('.js-phone-mask').inputmask({
      'mask': '+ 7 (999) 999-99-99',
      'clearIncomplete': true
    });
  }

  // modal privacy
  $('.js-privacy-trigger').on('click', function (e) {
    $('.form-contacts__privacy-text').slideToggle(400);
    e.preventDefault();
  });
});