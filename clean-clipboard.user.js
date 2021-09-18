// ==UserScript==
// @name         净化剪贴板
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  从简书、力扣、知乎复制的文字都会被加上版权声明，这个脚本会去除这个版权声明
// @author       Miroxyz
// @match        *://*.juejin.cn/*
// @match        *://*.leetcode-cn.com/*
// @match        *://*.zhihu.com/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  document.addEventListener("copy", function (e) {
    e.preventDefault();
    var copytext = window.getSelection().toString();
    navigator.clipboard.writeText(copytext);
  });
})();