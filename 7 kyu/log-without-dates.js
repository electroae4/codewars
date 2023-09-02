// DESCRIPTION:
// You will be given an array of events, which are represented by strings. The strings are dates in HH:MM:SS format.
// It is known that all events are recorded in chronological order and two events can't occur in the same second.
// Return the minimum number of days during which the log is written.
//
//   Example:
//
// Input -> ["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]
// Output -> 1
//
// Input -> ["12:12:12"]
// Output -> 1
//
// Input -> ["12:00:00", "23:59:59", "00:00:00"]
// Output -> 2
//
// Input -> []
// Output -> 0


// SOLUTION
function checkLogs(log) {
  // return the mininum number of days
  let timesInSeconds = [];
  let days = 0;

  for (let time of log) {
    let timeArr = time.split(':');
    let seconds = parseInt(timeArr[0]) * 60 * 60 + parseInt(timeArr[1]) * 60 + parseInt(timeArr[2]);
    timesInSeconds.push(seconds);
  }

  if (timesInSeconds.length > 0) {
    days++;
    for (let i = 1; i < timesInSeconds.length; i++) {

        if (timesInSeconds[i] <= timesInSeconds[i-1]) {
          days++;
        }
      }
  }
  return days;
}
