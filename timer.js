//Update Countdowntime
function updateCountDownTime() {
  var days = document.querySelector("#days");
  var hours = document.querySelector("#hours");
  var minutes = document.querySelector("#minutes");
  var seconds = document.querySelector("#seconds");

  const currentYear = new Date().getFullYear();
  const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h <10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
  console.log();
}
setInterval(updateCountDownTime, 1000);
