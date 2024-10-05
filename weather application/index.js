const apiKey= "bf8c0e8ecfb33bbd6d0d60b9b116951a";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var temprature= document.getElementById('temprature');
var cityName= document.getElementById('city');
var searchBar=document.getElementById('searchBar');
var searchBtn=document.getElementById('searchBtn');
var weatherImg= document.getElementById('weatherImg');
var humidity= document.getElementById('humidity');
var windStat=document.getElementById('wind-stat');

async function checkWeather(city){
   
    
    const response= await fetch(apiUrl+city+`&appid=${apiKey}`); 

    if(!response.ok){ 
        document.querySelector(".error").style.display="block";
       document.querySelector(".weather-container").style.display="none"; 
      
       
        
    }else{
        document.querySelector(".error").style.display="none";
    var data= await response.json();

    temprature.innerHTML=Math.round(data.main.temp)+`°c`;
    cityName.innerHTML=data.name;
    const weatherCondition= data.weather[0].main;
    weatherImg.src=`images/${weatherCondition}.png`;
    humidity.innerHTML= data.main.humidity+`%`;

    document.querySelector(".weather-container").style.display="block";
    console.log(data);}}




searchBtn.addEventListener("click",function(){

    checkWeather(searchBar.value);

});

searchBar.addEventListener("keydown",function(){

    if(event.key==="Enter"){
        checkWeather(searchBar.value);
    }
})

