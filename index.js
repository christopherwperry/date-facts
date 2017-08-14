const chalk = require('chalk');

const moment = require('moment');

let now = moment().format('LLLL');
let day = moment().format('DDD');
let seconds = moment().format('');
let dls = moment().isDST();
let year = 2017
let status;
let leap_status;
let leap = moment(year).isLeapYear();
let mmt = moment();
let mmtMidnight = mmt.clone().startOf('day');
let diffSec = mmt.diff(mmtMidnight, 'seconds');

if (dls) {
  status = "is";
} else {
  status = "is not";
}

if (leap) {
  leap_status = "is";
} else {
  leap_status = "is not";
}

console.log("Today is: " + (chalk.blueBright(now)) + ".");
console.log("It is the " + (chalk.magentaBright(day)) + (chalk.magentaBright("th")) + " day of the year.");
console.log("It is " + chalk.cyanBright(diffSec) + " seconds into the day.");
console.log("It " + (chalk.green(status)) + " during Daylight Savings Time.");
console.log("It " + (chalk.red(leap_status))+ " a leap year.");
