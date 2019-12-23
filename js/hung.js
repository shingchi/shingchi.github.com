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

    // 返回顶部
    gt: function (selector, offset) {
      var currentPosition, timer;
      var offset = offset ? offset : 50;
      var trigger = document.querySelector(selector);
      var touchTime = Date.now();

      trigger.addEventListener('click', () => {
        // 以单击相隔时间来兼容手机
        if (Date.now() - touchTime < 800) {
          timer = setInterval(() => {
            // Current Position
            currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
            currentPosition -= offset;

            if (currentPosition > 0) {
              window.scrollTo(0, currentPosition);
            } else {
              window.scrollTo(0, 0);
              clearInterval(timer);
            }
          }, 1);
        } else {
          touchTime = Date.now();
        }
      });
    },

    // 弹出菜单
    tg: function (selector, nav) {
      var trigger = document.querySelector(selector);
      var nav = document.querySelector(nav);

      trigger.addEventListener('click', () => {
        nav.classList.toggle('is-show');
      });
    },

    // 返回
    gb: function (selector) {
      var trigger = document.querySelector(selector);

      if (!trigger) return;

      trigger.addEventListener('click', () => {
        window.history.back();
      });
    },

    // 昼夜模式切换
    st: function (selector) {
      var currentTheme = window.localStorage && window.localStorage.getItem('theme');
      var isDark = currentTheme === 'dark';
      var trigger = document.querySelector(selector);

      document.body.classList.toggle('is-dark', isDark);

      trigger.addEventListener('click', () => {
        document.body.classList.toggle('is-dark');
        window.localStorage && window.localStorage.setItem('theme', document.body.classList.contains('is-dark') ? 'dark' : 'light');
      });
    }

  };

  return Hung;
}));
