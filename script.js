var date = document.getElementById("date");
var day = document.getElementById("day");
var month = document.getElementById("month");
var year = document.getElementById("year");

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML = new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate();
day.innerHTML = weekDays[new Date().getDay()];
month.innerHTML = months[new Date().getMonth()];
year.innerHTML = new Date().getFullYear();
