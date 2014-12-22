$(function() {
  'use strict';

  var $slides = $('#slides'),
    $slideTooltipToggler = $('.slide-tooltip-toggler'),
    $accordionTogglers = $('.accordion > dt'),
    $accordionPanels = $('.accordion > dd').hide(),
    $popupGallery = $('.popup-gallery');


  // Lighbox/popup gallery
  if ($popupGallery.length) {
    $('.popup-gallery').each(function () {
      $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        closeOnBgClick: false,
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },
        callbacks: {
          open: function () {
            this.logo = $('<span/>', {'class': 'mfp-logo'}).appendTo(this.container);
            this.slideTooltipToggler = $('<a/>', {
              'href': '#',
              'class': 'btn-circle btn-icon btn-light icon-circle slide-tooltip-toggler dialog-toggler',
              'data-dialog': this.ev[0].id + '-slide-tooltip-' + this.index
            }).appendTo($('body'));
            this.frames = $('<div id="left"/><div id="right"/><div id="top"/><div id="bottom"/>').appendTo($('body'));

            this.arrowLeft.addClass('btn-circle btn-light btn-icon icon-prev');
            this.arrowRight.addClass('btn-circle btn-light btn-icon icon-next');
            this.currTemplate.closeBtn.addClass('btn-circle btn-large btn-light btn-icon icon-close').text('');
          },
          close: function () {
            this.slideTooltipToggler.remove();
            this.frames.remove();
          },
          change: function () {
            if (this.slideTooltipToggler) {
              // update slide tooltip index
              this.slideTooltipToggler.data('dialog', this.ev[0].id + '-slide-tooltip-' + this.index);

              // Hide visible tooltip
              this.slideTooltipToggler.removeClass('icon-close toggler-active').addClass('icon-circle');
              $('.slide-tooltip').addClass('visually-hidden').css('opacity', 0);
            }
          }
        }
      });
    });
  }


  // Simple accordion
  if ($accordionPanels.length) {
    $('.accordion > dt > a').on('click', function (event) {
        var $this = $(this),
          $target =  $this.parent().next();

        if (!$target.hasClass('active')) {
          $accordionTogglers.removeClass('active');
          $this.parent().addClass('active');
          $accordionPanels.removeClass('active').slideUp(150);
          $target.addClass('active').slideDown(150);
        } else {
          $this.parent().removeClass('active');  
          $accordionPanels.removeClass('active').slideUp(150);
        }
        
      event.preventDefault();
    });
  }


  // Initialize intro slides
  if ($slides.length) {
    $slides
      .superslides({
        inherit_width_from: '.wrapper',
        pagination: false
      })
      .on('animated.slides', function () {
        // var desiredLength = +$slides.data('length'),
        //   actualLength = $slides.find('img').length,
        //   current = $slides.superslides('current'),
        //   url, $img;
        
        // // If it's the last slide and we don't have all images on the page
        // if (actualLength - 1 === current && actualLength < desiredLength) {
        //   url = 'slides/slide-' + (current + 1) + '.jpg';
        //   $img = $('<img>', {'src': url, 'alt': ''});
        //   $img.on('load', function () {
        //     $slides.superslides('update');
        //   })
        //   $slides.find('.slides-container').append($img);
        // }

        var current = $slides.superslides('current');

        // update slide tooltip index
        $slideTooltipToggler.data('dialog', 'slide-tooltip-' + current);
      })
      .on('animating.slides', function () {
        // Hide the tooltip before animatin the slides
        $slideTooltipToggler.removeClass('icon-close toggler-active').addClass('icon-circle');
        $('.slide-tooltip').addClass('visually-hidden').css('opacity', 0);
      });
  }


  // Dialogs (navigation, slide tooltips)
  $('body').on('click', '.dialog-toggler', function (event) {
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
  $('body').on('click', '.slide-tooltip-toggler', function (event) {
    var $toggler = $(this);

    if ($toggler.hasClass('toggler-active')) {
      $toggler.removeClass('icon-circle').addClass('icon-close');
    } else {
      $toggler.removeClass('icon-close').addClass('icon-circle');
    }

    event.preventDefault();
  });

});
