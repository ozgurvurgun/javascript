let date = new Date();
let week = [
  "sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let result_month_day = date.getDate(); //! month day

let result_week_day = date.getDay(); //! week day
// console.log(week[result_week_day]);

let result_year = date.getFullYear(); //! year
let result_hours = date.getHours(); //! hours
let result_seconds = date.getTime(); //! miliseconds hours

//! set date
// date.setFullYear(2025);
// date.setMonth(2);
// date.setDate(15);

//! born day
let born_day = new Date(2000, 9, 17);
let age = date.getFullYear() - born_day.getFullYear();
console.log(age);
