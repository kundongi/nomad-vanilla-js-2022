const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const today = document.querySelector("span#today");
const clock = document.querySelector("span#clock");

function getDateClock() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const dayOfMonth = String(date.getDate()).padStart(2, "0");
  const day = days[date.getDay()];

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  today.innerText = `${year}-${month}-${dayOfMonth} ${day}`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(getDateClock, 1000);
