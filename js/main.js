const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const smGap = urlParams.get("smgap") ?? 1
const mGap = urlParams.get("mgap") ?? 60
const minute = urlParams.get("m") ?? 60
const seconds = urlParams.get("s") ?? 0

const currentDate = new Date();
const countDownDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate(),
  currentDate.getHours(),
  minute,
  seconds
).getTime();
const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const minuteSeconds = minutes + (100 / 60 * seconds) * 0.01

  const selGap = minuteSeconds <= smGap ? smGap : mGap
  const percentageRemaining = 360 - 100 / selGap * minuteSeconds * 0.01 * 360

  document.getElementById("countdown-circle").style.background = `
    conic-gradient(#345996 ${percentageRemaining}deg, #f1f1f1 0%)
    `
  document.getElementById("digital-countdown").innerHTML = minutes + ":" + seconds;

  if (minuteSeconds <= smGap) {
    document.getElementById("reminders-text").innerHTML = `
      <p>The meeting is about to begin</p>
      <p>Please remain muted until the meeting beings. You will need to mute and unmute yourself while commenting</p>
      <p>If you choose to have your camera on, please be alert to maintain a modest appearance and background</p>
      <p>Use the raise hand feature to participate</p>
      `
  }

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("digital-countdown").innerHTML = "0:00";
  }
}, 1000);
