(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.Hung = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  var Hung = {

    // 阅读进度
    rp: function (selector) {
      var progress = document.querySelector(selector);
      var progressBar = progress.querySelector('.rProgress-bar');

      console.log(Hung._gw());

      progressBar.style.width = Hung._gw() + 'px';

      window.addEventListener('scroll', function () {
        progressBar.style.width = Hung._gw() + 'px';
      });
    },

    _gw: function () {
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var pageHeight = document.body.clientHeight;
      var width = (scrollTop / (pageHeight - windowHeight) * windowWidth).toFixed();

      return width;
    },

    // 昼夜模式切换
    st: function (selector) {
      var currentTheme = window.localStorage && window.localStorage.getItem('theme');
      var isDark = currentTheme === 'dark';
      var trigger = document.querySelector(selector);

      document.body.classList.toggle('is-dark', isDark);

      trigger.onclick = function () {
        document.body.classList.toggle('is-dark');
        window.localStorage && window.localStorage.setItem('theme', document.body.classList.contains('is-dark') ? 'dark' : 'light');
      }
    },

  };

  return Hung;
}));
