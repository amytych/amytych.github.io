(function (w, d) {
  'use strict';

  var header = d.getElementById('header');
  var resizeHeader = function () {
    header.style.minHeight = w.innerHeight + 'px';
  }

  w.addEventListener('resize', resizeHeader, true);
  resizeHeader();

}(window, document))


