"use strict";
var addZero = function (num) {
    var ret;
    if (num < 10) {
        ret = "0" + num;
    }
    else {
        ret = num;
    }
    return ret;
};
var showClock = function () {
    var Time = new Date();
    var Hour = addZero(Time.getHours());
    var Min = addZero(Time.getMinutes());
    var Sec = addZero(Time.getSeconds());
    var msg = " " + Hour + "\u6642 " + Min + "\u5206 " + Sec + "\u79D2";
    var clockArea = document.getElementById('clockArea');
    if (clockArea != null) {
        clockArea.textContent = msg;
    }
};
setInterval('showClock()', 1000);
