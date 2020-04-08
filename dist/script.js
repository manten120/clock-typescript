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
    var msg = "\u73FE\u5728\u6642\u523B " + Hour + " : " + Min + " : " + Sec + " ";
    var clockArea = document.getElementById('clockArea');
    if (clockArea != null) {
        clockArea.textContent = msg;
    }
};
setInterval('showClock()', 1000);
