function getCurrentDayOfWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  return dayOfWeek;
}

function updateCurrentDay() {
  const dayOfWeekElement = document.getElementById("dayOfWeek");
  const currentDayOfWeek = getCurrentDayOfWeek();
  dayOfWeekElement.textContent = `Current Day of the Week: ${currentDayOfWeek}`;
}
updateCurrentDay();

function getCurrentUTCTime() {
  const currentTime = new Date();
  const hours = currentTime.getUTCHours();
  const minutes = currentTime.getUTCMinutes();
  const seconds = currentTime.getUTCSeconds();
  const milliseconds = currentTime.getUTCMilliseconds();

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(
    milliseconds
  ).padStart(3, "0")}`;

  return formattedTime;
}

function updateCurrentUTCTime() {
  const currentTimeElement = document.getElementById("currentTime");
  const currentUTCTime = getCurrentUTCTime();
  currentTimeElement.textContent = `Current UTC Time: ${currentUTCTime}`;
}

updateCurrentUTCTime();
