/*********  burger ************/
let user_icon = document.querySelector('.burger');
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.main-menu');
  let logo = document.querySelector('.logo');
  user_menu.classList.toggle('show');
  user_icon.classList.toggle('active');
  logo.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.burger')) {
    let user_menu = document.querySelector('.main-menu');
    let logo = document.querySelector('.logo');
    user_menu.classList.remove('show');
    user_icon.classList.remove('active');
    logo.classList.remove('active');
  }
});

$('.main-menu__link').click(function () {
  $('.main-menu').removeClass('show');
  $('.burger').removeClass('active');
  $('.logo').removeClass('active');
});


/*****************   изменение html       *****************************/
$(window).resize(function (event) {
  adaptive_function();
});
function adaptive_header(w, h) {
  var headerMenu = $('.main-menu');/* куда закинуть блок */
  var headerUser = $('.header-user, .header-social');/* блок, который закинуть */
  if (w < 1001) {/* ширина */
    if (!headerUser.hasClass('done')) {
      headerUser.addClass('done').appendTo(headerMenu);
    }
  } else {
    headerUser.removeClass('done').appendTo($('.header-info'));/* вернуть блок на прежнее место */
  }
}

function adaptive_function() {
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  adaptive_header(w, h);
}
adaptive_function();

/**********************  portfolio-filter (isotope) с active кнопкой  ************/
function masonryFunc() {
  var $container = $('.portfolio__gallery');
  $container.isotope({
    masonry: {
      itemSelector: '.portfolio__block',
      columnWidth: '.portfolio__block',
      gutter: 30,
      isFitWidth: false
    }
  });

  $('.portfolio__link').click(function () {
    $('.active').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 500,
        animationEngine: "jquery"
      }
    });
    return false;
  });
}
masonryFunc()
setTimeout(masonryFunc, 10)

/***********   фильтр (catalog-main) *******************/
document.addEventListener("DOMContentLoaded", function () {
  tail.select(".select", {
    searchFocus: false
  });
});
/***********   button показать еще   ***********/
$('.filter-cards__btn').click(function () {
  $('.filter-cards__dropdown').slideToggle();
});

/************  читать полностью ********/
$('.info-catalog__link').click(function () {
  $('.info-catalog__text').addClass('active');
});
