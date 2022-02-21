const currentDate = new Date();

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const hour = urlParams.get("h") ?? currentDate.getHours() + 1;
const minute = urlParams.get("m") ?? 0;
const seconds = urlParams.get("s") ?? 0;
const mGap = urlParams.get("mgap") ?? 60;
const smGap = urlParams.get("smgap") ?? 1;

const countDownDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate(),
  hour,
  minute,
  seconds
).getTime();

//defining var notTime as false boolean
var notTime = false;

const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + hours * 60;
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const minuteSeconds = minutes + (100 / 60 * seconds) * 0.01;

  const isShort = minuteSeconds <= smGap;

  const selGap = isShort ? smGap : mGap;
  const percentageRemaining = 360 - 100 / selGap * minuteSeconds * 0.01 * 360;
  document.getElementById("countdown-circle").style.background = `
    conic-gradient(#345996 ${percentageRemaining}deg, #f1f1f1 0%)
    `;

  const digitalCountdownElem = document.getElementById("digital-countdown");

  if (isShort) {
    digitalCountdownElem.innerHTML = `${minutes * 60 + seconds}`;
 //alert("TEST ALERT isShort if statement ran");

   // document.getElementById("reminders-text").innerHTML = `
   //   <p>The meeting is about to begin</p>
   //   <p>Please remain muted until the meeting beings. You will need to mute and unmute yourself while commenting</p>
   //   <p>If you choose to have your camera on, please be alert to maintain a modest appearance and background</p>
   //   <p>Use the raise hand feature to participate</p>
   //   `;

   //if statement that's not running for some reason???
   if (notTime === false) {
    document.getElementById("reminders-text").innerHTML = `
    <div id="reminders-text" class="reminders-group">
    <video autoplay muted playsinline>
    <source src="final1.webm">
    </div>
    `
    notTime = true;
  };
  } else {
    const extraZero = seconds <= 9 ? "0" : ""
    digitalCountdownElem.innerHTML = minutes + ":" + extraZero + seconds;
    // setting var to false in else statement
    notTime = false;
  }
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("digital-countdown").innerHTML = "0";
  }
}, 1000);