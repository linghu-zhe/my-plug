// ==UserScript==
// @name         超链接悬浮增加红色下划线
// @version      0.1.0
// @author       LingHu
// @homepage     https://github.com/linghu-zhe/my-plug.git
// @namespace    https://github.com/linghu-zhe/my-plug.git
// @description  超链接悬浮增加红色下划线-LingHu
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzAzMDU3MTI2MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNTI4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNjYuNzgyNjA5IDEwMDEuNzM5MTNoODk2Ljc3OTEzdi02Ni43ODI2MDhINjYuNzgyNjA5eiIgZmlsbD0iI0ZBNEU0RSIgcC1pZD0iMTA1MjkiPjwvcGF0aD48cGF0aCBkPSJNNTE1LjE2MTA0MyA4NDYuODQ4Yy0yMTAuMDc1ODI2IDAtMzgwLjk3MjUyMi0xNzAuODk2Njk2LTM4MC45NzI1MjEtMzgwLjk1MDI2MVYyMi4yNjA4N2g2Ni43ODI2MDh2NDQzLjYzNjg2OWMwIDE3My4yMzQwODcgMTQwLjk1NTgyNiAzMTQuMTY3NjUyIDMxNC4xODk5MTMgMzE0LjE2NzY1MiAxNzMuMjM0MDg3IDAgMzE0LjE4OTkxMy0xNDAuOTMzNTY1IDMxNC4xODk5MTQtMzE0LjE2NzY1MlYyMi4yNjA4N2g2Ni43ODI2MDh2NDQzLjYzNjg2OWMwIDIxMC4wNTM1NjUtMTcwLjg5NjY5NiAzODAuOTUwMjYxLTM4MC45NzI1MjIgMzgwLjk1MDI2MSIgZmlsbD0iIzRBNEE0QSIgcC1pZD0iMTA1MzAiPjwvcGF0aD48L3N2Zz4=
// @grant        none
// @connect      *
// @match        *://*/*
// @license      MIT License
// @downloadURL https://update.greasyfork.org/scripts/482790/%E8%B6%85%E9%93%BE%E6%8E%A5%E6%82%AC%E6%B5%AE%E5%A2%9E%E5%8A%A0%E7%BA%A2%E8%89%B2%E4%B8%8B%E5%88%92%E7%BA%BF.user.js
// @updateURL https://update.greasyfork.org/scripts/482790/%E8%B6%85%E9%93%BE%E6%8E%A5%E6%82%AC%E6%B5%AE%E5%A2%9E%E5%8A%A0%E7%BA%A2%E8%89%B2%E4%B8%8B%E5%88%92%E7%BA%BF.meta.js
// ==/UserScript==


(function() {
    'use strict';
    try {
        // 页面上的a标签悬浮出现红色下划线
        let aList = document.getElementsByTagName("a");
        if (aList && aList.length) {
            for (let i = 0; i < aList.length; i++) {
                let element = aList[i];
                element.onmouseover = function () {
                    element.style.textDecoration = "underline red";
                }
                element.onmouseout = function () {
                    element.style.textDecoration = "unset";
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
})();
