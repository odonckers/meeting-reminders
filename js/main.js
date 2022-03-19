var h = 0
var m = 0
var umgap = 0

function changeVal(choice) {
  if (choice == 'sunday') {
    h = 10
    m = 0
    umgap = 60
    clock()
    jQuery(function($) {
      $("#firstpage").hide();
      $("#countdown1").show();
      $("#countdown2").show();
    });
  } else if (choice == 'thursday'){
    h = 19
    m = 30
    umgap = 60
    clock()
    jQuery(function($) {
      $("#firstpage").hide();
      $("#countdown1").show();
      $("#countdown2").show();
    });
    
  }
}

//defining var notTime as false boolean
var notTime = false;


function clock() {

  const currentDate = new Date();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  var hour = parseInt(h) 
  var minute = parseInt(m)
  const seconds = urlParams.get("s") ?? 0;
  var mGap = parseInt(umgap)
  const smGap = urlParams.get("smgap") ?? 1;

  var countDownDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    hour,
    minute,
    seconds
  ).getTime();

  const x = setInterval(myClock, 1000);
    
  function myClock() {
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
  }
}