// DESCRIPTION:
// Instructions
// Write a function that takes a negative or positive integer, which represents the number of minutes before (-) or after (+) Sunday midnight, and returns the current day of the week and the current time in 24hr format ('hh:mm') as a string.
//
//   Examples
// 0  =>  should return 'Sunday 00:00'
// -3  =>  should return 'Saturday 23:57'
// -59  =>  should return 'Saturday 23:51'
// -1439  =>  should return 'Saturday 00:01'
// -1441  =>  should return 'Friday 23:59'
// 45  =>  should return 'Sunday 00:45'
// 759  =>  should return 'Sunday 12:39'
// 1236  =>  should return 'Sunday 20:36'
// 1447  =>  should return 'Monday 00:07'
// 7832  =>  should return 'Friday 10:32'
// 18876  =>  should return 'Saturday 02:36'
// 259180  =>  should return 'Thursday 23:40'
// -349000  =>  should return 'Tuesday 15:20'

// SOLUTION:
function dayAndTime(n) {
  let day, hour, minute;

  if (n >= 0) {
    switch (Math.floor(n/1440) % 7) {
      case 0: day = 'Sunday'; break;
      case 1: day = 'Monday'; break;
      case 2: day = 'Tuesday'; break;
      case 3: day = 'Wednesday'; break;
      case 4: day = 'Thursday'; break;
      case 5: day = 'Friday'; break;
      case 6: day = 'Saturday'; break;
    }
    hour = ('0' + Math.floor((n % 1440) / 60)).slice(-2)
    minute = ('0' + (n % 1440) % 60).slice(-2);

  } else {
    switch (Math.floor(-n/1440) % 7) {
      case 0: day = 'Saturday'; break;
      case 1: day = 'Friday'; break;
      case 2: day = 'Thursday'; break;
      case 3: day = 'Wednesday'; break;
      case 4: day = 'Tuesday'; break;
      case 5: day = 'Monday'; break;
      case 6: day = 'Sunday'; break;
    }
    hour = ('0' + Math.floor((1440 - (-n) % 1440) / 60)).slice(-2)
    minute = ('0' + (1440 - (-n) % 1440) % 60).slice(-2);
  }

  return `${day} ${hour}:${minute}`;
}
