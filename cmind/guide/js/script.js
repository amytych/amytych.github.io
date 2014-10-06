(function (w, d) {
  'use strict';

  var header = d.getElementById('header');
  var resizeHeader = function () {
    var height = w.innerHeight,
      width = w.innerWidth;

    // Resize only on landscape
    if (height < width) {
      header.style.minHeight = height + 'px';
    } else {
      header.style.minHeight = 0;
    }
  }

  w.addEventListener('resize', resizeHeader, true);
  resizeHeader();

}(window, document))


