var Btn1H= document.getElementById('Btn1H');
var Btn2H= document.getElementById('Btn2H');
var Btn3H= document.getElementById('Btn3H');

var Btn1G= document.getElementById('Btn1G');
var Btn2G= document.getElementById('Btn2G');
var Btn3G= document.getElementById('Btn3G');

var newgameBtn= document.getElementById('new-game');
var homeScoreScreen= document.getElementById('Home-score');
var guestScoreScreen= document.getElementById('Guest-score');

var homeScore=0;
var guestScore=0;

Btn1H.addEventListener("click", function(){
    homeScore+=1;
    homeScoreScreen.textContent=homeScore;
    if(homeScore>guestScore){
        document.getElementById('HOME-mat').style.color='yellow';
        document.getElementById('GUEST').style.color='white';
    }else if(guestScore>homeScore){
        document.getElementById('GUEST').style.color='yellow';
        document.getElementById('HOME-mat').style.color='white';
    }
});
Btn2H.addEventListener("click", function(){
    homeScore+=2;
    homeScoreScreen.textContent=homeScore;
    if(homeScore>guestScore){
        document.getElementById('HOME-mat').style.color='yellow';
        document.getElementById('GUEST').style.color='white';
    }else if(guestScore>homeScore){
        document.getElementById('GUEST').style.color='yellow';
        document.getElementById('HOME-mat').style.color='white';
    }
})
Btn3H.addEventListener("click", function(){
    homeScore+=3;
    homeScoreScreen.textContent=homeScore;
    if(homeScore>guestScore){
        document.getElementById('HOME-mat').style.color='yellow';
        document.getElementById('GUEST').style.color='white';
    }else if(guestScore>homeScore){
        document.getElementById('GUEST').style.color='yellow';
        document.getElementById('HOME-mat').style.color='white';
    }
})


Btn1G.addEventListener("click", function(){
    guestScore+=1;
    guestScoreScreen.textContent=guestScore;
    if(homeScore>guestScore){
        document.getElementById('HOME-mat').style.color='yellow';
        document.getElementById('GUEST').style.color='white';
    }else if(guestScore>homeScore){
        document.getElementById('GUEST').style.color='yellow';
        document.getElementById('HOME-mat').style.color='white';
    }
})
Btn2G.addEventListener("click", function(){
    guestScore+=2;
    guestScoreScreen.textContent=guestScore;
    if(homeScore>guestScore){
        document.getElementById('HOME-mat').style.color='yellow';
        document.getElementById('GUEST').style.color='white';
    }else if(guestScore>homeScore){
        document.getElementById('GUEST').style.color='yellow';
        document.getElementById('HOME-mat').style.color='white';
    }
})
Btn3G.addEventListener("click", function(){
    guestScore+=3;
    guestScoreScreen.textContent=guestScore;
    if(homeScore>guestScore){
        document.getElementById('HOME-mat').style.color='yellow';
        document.getElementById('GUEST').style.color='white';
    }else if(guestScore>homeScore){
        document.getElementById('GUEST').style.color='yellow';
        document.getElementById('HOME-mat').style.color='white';
    }
})

if(homeScore>guestScore){
    document.getElementById('HOME-mat').style.color='yellow';
    document.getElementById('GUEST').style.color='white';
}else if(guestScore>homeScore){
    document.getElementById('GUEST').style.color='yellow';
    document.getElementById('HOME-mat').style.color='white';
}


newgameBtn.addEventListener("click",function(){

    homeScore=0;
    homeScoreScreen.textContent=0;
    guestScore=0;
    guestScoreScreen.textContent=0;
    document.getElementById('GUEST').style.color='white';
        document.getElementById('HOME-mat').style.color='white';

})