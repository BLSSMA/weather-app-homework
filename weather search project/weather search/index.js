let apiKey = `01dd2bca25c0t00b3d253f443e0of791`;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key={key}&units={imperial}`;

function tempReading(){
let currentTemp=document.querySelector(`#temp`);
currentTemp.innerHTML = Math.round(response.data.temperature.current);
}

axios.get(apiUrl).then(tempReading);

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
