const hoursBox= document.getElementById('hours');
const daysBox= document.getElementById('days');
const minutesBox= document.getElementById('minutes');
const secondsBox= document.getElementById('seconds');

function getDate(){
const currdate= new Date();
const newYearDate= new Date('1 jan 2025');

const totalseconds= Math.floor(newYearDate-currdate)/1000;
const days= Math.floor(totalseconds/(60*60*24));
const hours= Math.floor(totalseconds/(60*60))%24;
const minutes= Math.floor(totalseconds/(60))%60;
const second= Math.floor(totalseconds%60);
console.log(days, hours, minutes, second);
secondsBox.innerHTML= formatTime(second);
daysBox.innerHTML=days;
minutesBox.innerHTML= formatTime(minutes);
hoursBox.innerHTML= formatTime(hours);



}

function formatTime(time){

    return time<10 ? (`0${time}`):time;
}





getDate();

setInterval(getDate,1000);
