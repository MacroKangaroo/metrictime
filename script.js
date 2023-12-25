


// new code to put number inside 


function convertToMetricTime() {
    let now = new Date();
    let start = new Date();
    start.setHours(7, 0, 0); // Set start time to 7 AM

    let diffInMinutes = (now - start) / 60000; // Difference in minutes
    let metricHour = Math.ceil(diffInMinutes / 10);
    
    if (metricHour < 1) return "Before Metric Time";
    if (metricHour > 100) return "After Metric Time";
    return metricHour;
}

function updateClock() {
    let metricTime = convertToMetricTime();
    document.getElementById('metricTimeText').textContent = metricTime.toString().padStart(2, '0');
    updateCircularTimer(metricTime);
}

function updateCircularTimer(metricTime) {
    // Get the current time
    let now = new Date();
    let currentMinute = now.getMinutes() % 10; // Get the minute in the current 10-minute segment
    let currentSecond = now.getSeconds();

    // Calculate the fraction of the 10-minute segment that has passed
    let segmentFraction = (currentMinute * 60 + currentSecond) / 600;

    // Calculate the new stroke-dashoffset for the timer circle
    let circumference = 2 * Math.PI * 90; // 90 is the radius of the circle
    let offset = circumference * (1 - segmentFraction);

    // Update the stroke-dashoffset to create the timer effect
    document.getElementById('timerPath').style.strokeDashoffset = offset.toString();
}





setInterval(updateClock, 1000); // Update every second
updateClock(); // Initialize clock
