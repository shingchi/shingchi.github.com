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

      progressBar.style.width = Hung._gw() + 'px';

      window.addEventListener('scroll', ()=> {
        progressBar.style.width = Hung._gw() + 'px';
      });
    },

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

    // 社会主义核心价值观
    gsv: function () {
      const words = ['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善'];
      let i = 0;
      var top, left, timer;

      document.addEventListener('click', (event) => {
        top = event.pageY - 20;
        left = event.pageX;
        i = (i + 1) % words.length;
        var node = document.createElement('span');

        node.textContent = words[i];
        node.setAttribute('style', 'opacity:1;position:absolute;top:' + top + 'px;left:' + left + 'px;font-weight:bold;color:' + Hung._gc());

        document.body.appendChild(node);

        // 淡出
        var offset = 0;
        var opacity = 1 / 15;

        timer = setInterval(() => {
          if (offset < 150) {
            offset += 10;
            node.style.top = (node.offsetTop - 10) + 'px';
            node.style.opacity = node.style.opacity - opacity;
          } else {
            node.remove();
          }
        }, 100);
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
    },

    // 获取阅读进度比
    _gw: function () {
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var pageHeight = document.body.clientHeight;
      var width = (scrollTop / (pageHeight - windowHeight) * windowWidth).toFixed();

      return width;
    },

    // 随机 RGB
    _gc: function () {
      return 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    }

  };

  return Hung;
}));
