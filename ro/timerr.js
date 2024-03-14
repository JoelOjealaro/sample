function updateTimer(){
    //set the date we're counting down to (March 2 2024 11:30:00)
var countDownDate = new Date("March 2 2024 1:00:00").getTime();

//update countdown every second
var x = setInterval(function(){
    //Get current date and time
    var now = new Date().getTime();

    //calculate the distance between noa and the countdown date
    var distance = countDownDate - now;

    //calculate days, hours, minutes, and seconds
    var day = Math.floor(distance/(1000*60*60*24));
    var hour = Math.floor((distance %(1000*60*60*24))/(1000*60*60));
    var minute = Math.floor((distance %(1000*60*60))/(1000*60));
    var second = Math.floor((distance %(1000*60))/1000);

    //display countdown timer
    document.getElementById("day").innerHTML = day;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;

    //if the timer ends, rest after 10 days
    if(distance < 0){
        clearInterval(x);
        countDownDate = new Date();
        countDownDate.setDate(countDownDate.getDate() + 10);
        updateTimer(); //restart the timer
    }

}, 1000) 
}
updateTimer();