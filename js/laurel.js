/**
 * [description]
 * @param  {[type]} global  [description]
 * @param  {[type]} factory [description]
 * @return {[type]}         [description]
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Rushi = factory());
}(this, function () { 'use strict';

  var bgColor = '#e5e4db';
  var scrollBar = '.scrollbar';
  var scrollTop = '.scrolltop';

  function Rushi() {
    if (!(this instanceof Rushi)) {
      warn('Rushi is a constructor and should be called with the `new` keyword');
    }

    this._render();
  }

  /**
   * 执行
   * @return {[type]} [description]
   */
  Rushi.prototype._render = function () {
    this.changeBackgroundColor();
    this.on();
  };

  /**
   * 更换护眼背景
   * @return {[type]} [description]
   */
  Rushi.prototype.changeBackgroundColor = function () {
    var hour = new Date().getHours();

    if (hour < 6 || hour > 19) {
      document.body.style.backgroundColor = bgColor;
    }
  };

  /**
   * 滚动进度条
   * @return {[type]} [description]
   */
  Rushi.prototype.scrollBar = function () {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var pageHeight = document.body.clientHeight;
    var width = (scrollTop / (pageHeight - windowHeight) * windowWidth).toFixed();

    document.querySelector(scrollBar).style.width = width + 'px';
  }

  /**
   * 监听事件
   * @return {[type]} [description]
   */
  Rushi.prototype.on = function () {
    var button = document.querySelector(scrollTop);

    // 监听返回顶部按钮
    button.onclick = function () {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    window.onscroll = function () {
      // 返回顶部按钮
      if (document.documentElement.scrollTop > 700 || document.body.scrollTop > 700) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }

      // 添加阅读进度条
      Rushi.prototype.scrollBar();
    };
  };

  return Rushi;

}));
