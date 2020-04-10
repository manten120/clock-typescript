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
    var month = Time.getMonth() + 1;
    var day = Time.getDate();
    var Hour = addZero(Time.getHours());
    var Min = addZero(Time.getMinutes());
    var Sec = addZero(Time.getSeconds());
    var dayOfWeekNum = Time.getDay();
    var dayName = ["日", "月", "火", "水", "木", "金", "土"];
    var dayOfWeek = dayName[dayOfWeekNum];
    var dayMsg = month + "/" + day + "(" + dayOfWeek + ") ";
    var clockMsg = Hour + "\u6642 " + Min + "\u5206 " + Sec + "\u79D2";
    var dayArea = document.getElementById('dayArea');
    var clockArea = document.getElementById('clockArea');
    if (dayArea != null) {
        dayArea.textContent = dayMsg;
    }
    if (clockArea != null) {
        clockArea.textContent = clockMsg;
    }
};
setInterval('showClock()', 1000);
