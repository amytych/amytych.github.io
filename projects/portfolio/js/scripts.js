$(function() {
  'use strict';

  var $slides = $('#slides'),
    $slideTooltipToggler = $('.slide-tooltip-toggler');


  // Initialize intro slides
  $slides
    .superslides({
      inherit_width_from: '.wrapper',
      pagination: false
    })
    .on('animated.slides', function () {
      // update slide tooltip index
      $(this).find('.slides-container > li').each(function (index, el) {
        if ($(el).css('display') === 'block') {
          $slideTooltipToggler.data('dialog', 'slide-tooltip-' + index);
          return false;
        }
      });
    })
    .on('animating.slides', function () {
      // Hide the tooltip before animatin the slides
      $slideTooltipToggler.removeClass('icon-close toggler-active').addClass('icon-circle');
      $('.slide-tooltip').addClass('visually-hidden').css('opacity', 0);
    });


  // Dialogs (navigation, slide tooltips)
  $('.dialog-toggler').on('click', function (event) {
    var $toggler = $(this),
      dialogId = $toggler.data('dialog'),
      $dialog = $('#' + dialogId);

    if ($toggler.hasClass('toggler-active')) {
      $toggler.removeClass('toggler-active');
      $dialog.css('opacity', 0);
      setTimeout(function () {
        $dialog.addClass('visually-hidden');
      }, 150);
    } else {
      $toggler.addClass('toggler-active');
      $dialog.removeClass('visually-hidden').css('opacity', 1);
    }

    event.preventDefault();
  });


  // Update slide tooltip toggler class
  $slideTooltipToggler.on('click', function (event) {
    var $toggler = $(this);

    if ($toggler.hasClass('toggler-active')) {
      $toggler.removeClass('icon-circle').addClass('icon-close');
    } else {
      $toggler.removeClass('icon-close').addClass('icon-circle');
    }

    event.preventDefault();
  });


});
