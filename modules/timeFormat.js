var os = require('os');

function timeFormating() {

	var second;
	var minute;
	var hour;
	var time;
	var totalTime = os.uptime();
	hour = totalTime / 3600;
	minute = (totalTime % 3600) / 60;
	second = (totalTime % 3600) % 60;
	time = Math.round(hour,0) + 'h ' + Math.round(minute,0) + 'min ' + Math.round(second,0) + 'sec';
	console.log(time);
	return time;
};
console.log(timeFormating())

exports.print = timeFormating;


