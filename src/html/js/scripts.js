"use strict";

var lazyLoadInstance = null;

if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /rv:10.0/i.test(navigator.userAgent)) {
  //Добавить класс ie в боди
  document.body.className = "ie"; //Перенаправить на другую страницу

  window.location = '/ie.html';
}

var smallDevice = window.matchMedia("(max-width: 600px)");
var tabletDevice = window.matchMedia("(max-width: 1180px)");
var dextoptDevice = window.matchMedia("(min-width: 1181px)");
$(document).ready(function () {
  var width = $(window).width();
  var height = $(window).height();
  svg4everybody();
  lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
    load_delay: 100
  });
  $('.slick-initialized').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy",
      load_delay: 100
    });
  });
  $('body').on('click', '.js-main__btn', function (e) {
    e.preventDefault();
    var parent = $(this).closest('.main-text');
    parent.find('.main-text__info-wrp').slideToggle(300);
    parent.toggleClass('_open');
  });
  $('body').on('click', '.card-info__add-item', function (e) {
    e.preventDefault();
    $(this).toggleClass('_active');
  });
  $('body').on('click', '.js-data__edit', function (e) {
    e.preventDefault();
    $(this).addClass('_noactive');
    $('.js-data__save').addClass('_active');
    $('.js-data__nomouse').prop('disabled', false);
    $('.js-data__cancel').addClass('_active');
  });
  $('.ms-banner').slick({
    infinite: false,
    speed: 1100,
    autoplay: true,
    autoplaySpeed: 4000,
    swipeToSlide: true,
    dots: true,
    responsive: [{
      breakpoint: 601,
      settings: {
        arrows: false
      }
    }]
  });
  $('.js-popular__sl').slick({
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    infinite: false,
    responsive: [{
      breakpoint: 1181,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true
      }
    }, {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    }]
  });

  if ($('.styler').length) {
    $('.styler').styler();
  }

  tabsCategory();
  smallDevice.addListener(smallDeviceChange);
  tabletDevice.addListener(tabletDeviceChange);
  dextoptDevice.addListener(dextoptDeviceChange);
  smallDeviceChange(smallDevice);
  tabletDeviceChange(tabletDevice);
  dextoptDeviceChange(dextoptDevice); //Корзина

  $('body').on('click', '.btn-green._ct, ._card-btn [id$="add_basket_link"]', function (e) {
    var item = $(e.currentTarget);
    setTimeout(basketProcess, 300);
  }); //END Корзина
});

function basketProcess(action, item_id) {
  var postData = {};

  switch (action) {
    case 'CLEAR_ALL':
      postData = {
        'TYPE': 'BASKET',
        'CLEAR_ALL': 'Y'
      };
      break;

    case 'ADD':
      postData = {
        'TYPE': 'BASKET',
        'ACTION': 'ADD',
        'ITEM_ID': item_id
      };
      break;

    case 'DELETE':
      postData = {
        'TYPE': 'BASKET',
        'ACTION': 'DELETE',
        'ITEM_ID': item_id
      };
      break;

    default:
      break;
  }

  BX.ajax({
    url: '/ajax/action_basket.php',
    method: 'POST',
    data: postData,
    dataType: 'html',
    onsuccess: function onsuccess(data) {
      /*$('#side_basket').html(data);*/
      $('#basket-item-table').empty();
      BX.onCustomEvent('OnBasketChange');
    }
  });
} // $('#side_basket').on("change", function () {
//   BX.onCustomEvent('OnBasketChange');
// });


$(window).resize(function () {
  tabsCategory();
  var width = $(window).width();

  if (width <= 1180) {
    setTimeout(function () {
      basketWrpHeightMob();
    }, 0);
    setTimeout(function () {
      basketWrpHeightMob();
    }, 2000);
  } else {
    setTimeout(function () {
      basketWrpHeight();
      basketBodyHeight();
    }, 0);
    setTimeout(function () {
      basketWrpHeight();
      basketBodyHeight();
    }, 2000);
  }
});

var headerMenuAppendMob = function headerMenuAppendMob() {
  $('.js-header__socials').appendTo('.header-menu__footer');
  $('.header-top__account').appendTo('.header-menu__footer');
};

var headerMenuAppendDex = function headerMenuAppendDex() {
  $('.js-header__socials').appendTo('.header');
  $('.header-top__account').appendTo('.header-top__wrp');
};

var headerMenu = function headerMenu() {
  var h = window.innerHeight;
  var headerHeight = $('.header').height();
  $('.header-menu').css({
    'height': h - headerHeight + 'px'
  });
};

var tabsCategory = function tabsCategory() {
  $('[data-tab-head]').each(function () {
    changeParam($(this));
  });
  $('body').on('click', '[data-to-category]:not(.disabled)', function (e) {
    e.preventDefault();
    var tabParent = $(this).closest('[data-tab]');

    if (!$(this).hasClass('_active')) {
      var indexCat = $(this).attr('data-to-category');
      $(this).addClass('_active').siblings('._active').removeClass('_active');
      tabParent.find('[data-category="' + indexCat + '"]').addClass('_active').siblings('._active').removeClass('_active');
      changeParam($(this).closest('[data-tab-head]'));
    }
  });

  function changeParam(elem) {
    var activeLine = elem.find('[data-tab-line]');
    var activeTab = elem.find('._active[data-to-category]');
    var activeTabParam = {
      width: activeTab.outerWidth(true),
      left: activeTab.position().left
    };
    activeLine.css({
      'width': "".concat(activeTabParam.width + 1, "px"),
      'left': "".concat(activeTabParam.left - 0.5, "px")
    });
  }
};

var basketWrpHeight = function basketWrpHeight() {
  var height = $(window).height();
  var headerHeight = parseInt($('.wrp').css('padding-top'));
  var basketWrpFixHeight = $('.basket-wrp');
  var basketHeight = height - headerHeight;
  basketWrpFixHeight.css('height', "".concat(basketHeight, "px"));
};

var basketBodyHeight = function basketBodyHeight() {
  var basketWrapHeight = $('.basket-wrp').outerHeight(true);
  var basketHeaderHeight = $('.basket-head').outerHeight(true);
  var basketFooterHeight = $('.basket-footer').outerHeight(true);
  var basketBodyFixHeight = $('.basket-body');
  var basketFixedHeight = basketWrapHeight - basketHeaderHeight - basketFooterHeight;
  basketBodyFixHeight.css('height', "".concat(basketFixedHeight, "px"));
};

var basketWrpHeightMob = function basketWrpHeightMob() {
  var basketBodyFixHeight = $('.basket-body');
  basketBodyFixHeight.css('height', 'auto');
  var basketWrapHeight = $('.basket-wrp').outerHeight(true);
  var basketHeaderHeight = $('.basket-head').outerHeight(true);
  var basketFooterHeight = $('.basket-footer').outerHeight(true);
  var basketFixedHeight = basketWrapHeight - basketHeaderHeight - basketFooterHeight;
  basketBodyFixHeight.css({
    'height': "".concat(basketFixedHeight, "px")
  });
};

var headerPhones = function headerPhones() {
  $("body").on('click', '.header-top__tel', function () {
    $(this).find(".header-top__tel-links").toggleClass('open');
  });
  $(document).mouseup(function (e) {
    var div = $('.header-top__tel');

    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".header-top__tel-links").removeClass('open');
    }
  });
};

var clickEffect = function clickEffect() {
  $("html").on("mousedown", function (e) {
    $("i._cursor").addClass("active").css("left", e.pageX).css("top", e.pageY);
  });
  $("i._cursor").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
    return $("i._cursor").removeClass("active");
  });
};

var basketMobEvent = {
  eventTarget: '.basket-mob',
  init: function init() {
    var obj = this;

    if ($(this.eventTarget).length) {
      $('footer').addClass('_basketMargin');
    }

    $('body').on('click', this.eventTarget, function () {
      if ($(this).hasClass('_open')) {
        obj.close();
      } else {
        obj.open();
      }
    });
  },
  open: function open() {
    $('.basket-mob').addClass('_open');
    $('.js-basket').addClass('_open');
    $('html').addClass('_overflow');
    basketWrpHeightMob();
  },
  close: function close() {
    $('.basket-mob').removeClass('_open');
    $('.js-basket').removeClass('_open');
    $('html').removeClass('_overflow');
    basketWrpHeightMob();
  }
};
var burgerEvent = {
  eventTarget: '.hamburger',
  init: function init() {
    var obj = this;
    $('body').on('click', this.eventTarget, function () {
      if ($(this).hasClass('is-active')) {
        obj.close();
      } else {
        obj.open();
      }
    });
  },
  open: function open() {
    $(this.eventTarget).addClass("is-active");
    $('main').addClass("_before");
    headerMenu();
    basketMobEvent.close();
    $('.header-menu').addClass('open');
    $('html').addClass('_overflow');
  },
  close: function close() {
    $(this.eventTarget).removeClass("is-active");
    $('main').removeClass("_before");
    basketMobEvent.close();
    $('.header-menu').removeClass('open');
    $('html').removeClass('_overflow');
  }
};

function smallDeviceChange(e) {
  if (e.matches) {} else {}
}

function tabletDeviceChange(e) {
  var isAjax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (e.matches) {
    headerMenu();
    basketWrpHeightMob();
    headerPhones();
    headerMenuAppendMob();

    if (!isAjax) {
      basketMobEvent.init();
      burgerEvent.init();
    }

    if ($('.js-scroll.mCustomScrollbar').length) {
      $('.js-scroll.mCustomScrollbar').mCustomScrollbar('destroy');
    }
  } else {}
}

function dextoptDeviceChange(e) {
  if (e.matches) {
    if ($('.js-scroll').length) {
      $('.js-scroll').mCustomScrollbar({});
    }

    setTimeout(function () {
      basketWrpHeight();
      basketBodyHeight();
    }, 0);
    headerMenuAppendDex();
    clickEffect();
    $('html._overflow').removeClass('_overflow');
    $('main._before').removeClass('_before');
  } else {}
}

window.onload = function () {
  $('.basket-body').addClass('_active');
  $('.basket-footer').addClass('_active');
  $('.basket-head').addClass('_active');
};