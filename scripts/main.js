"use strict";

// timer 
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor(t / 1000 % 60);
  var minutes = Math.floor(t / 1000 / 60 % 60);
  var hours = Math.floor(t / (1000 * 60 * 60) % 24);
  return {
    total: t,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    if (t.total <= 0) {
      document.getElementById('countdown').className = 'hidden';
      document.getElementById('deadline-message').className = 'visible';
      clearInterval(timeinterval);
      return true;
    }

    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 7200 * 1000);
initializeClock('countdown', deadline); // date

function zero_first_format(value) {
  if (value < 10) {
    value = '0' + value;
  }

  return value;
}

function date_time() {
  var current_datetime = new Date();
  var day = zero_first_format(current_datetime.getDate());
  var month = zero_first_format(current_datetime.getMonth() + 1);
  var year = current_datetime.getFullYear();
  return day + '.' + month + '.' + year;
}

document.getElementById('current_date_time_block').innerHTML = date_time(); // mask

$('.phone_mask').mask('+3(999)999-99-99');