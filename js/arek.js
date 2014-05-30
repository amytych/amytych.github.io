var Arek = {
  init: function () {
    Arek.superHiperFancySpamProtection();
    Arek.superHiperFancyBackgroundColorRotator();
  },

  superHiperFancySpamProtection: function () {
    var e = 'moc.liamg@hcytyma:otliam';
    document.getElementsByTagName('a')[0].href = e.split('').reverse().join('');
  },

  superHiperFancyBackgroundColorRotator: function () {
    setInterval(function () {
      var rgb = [255, 255, 255];
      rgb = rgb.map(function () {
        return Math.floor(Math.random() * 55) + 200;
      });
      document.getElementsByTagName('body')[0].style.backgroundColor = 'rgba(' + rgb.join() + ',.5)';
    }, 3 * 1000);
  }
};
Arek.init();

