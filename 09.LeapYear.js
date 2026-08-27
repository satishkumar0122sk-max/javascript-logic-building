// Write a JavaScript program that checks whether a given year is a leap year.

let year = 2000;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log( year," this is leap year");
} else {
  console.log("no");
}
