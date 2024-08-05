const cards=[
    {card:11, image:"playingcards/ace.png"},
    {card:2, image:"playingcards/2.png"},
    {card:3, image:"playingcards/3.png"},
    {card:4, image:"playingcards/4.png"},
    {card:5, image:"playingcards/5.png"},
    {card:6, image:"playingcards/6.png"},
    {card:7, image:"playingcards/7.png"},
    {card:8, image:"playingcards/8.png"},
    {card:9, image:"playingcards/9.png"},
    {card:10, image:"playingcards/jack.png"},
    {card:10, image:"playingcards/queen.png"},
    {card:10, image:"playingcards/king.png"},
]



console.log(cards[0].card);

var container=document.getElementById('cards-container')
var startBtn=document.getElementById('startBtn');
var newBtn=document.getElementById('newBtn');
var title=document.getElementById('title');
var sumScreen=document.getElementById('sum');
var restartBtn= document.getElementById('restart');
var sum=0;
var count=0;
var hasBlackJack= false;
var gameStarted=false;
var started=1;


function startGame(){
    title.textContent="Do you want to draw a new card?";
    started+=1;
     if(gameStarted==false){
    generatecard();
    gameStarted=true;
    }
   if(gameStarted==true){
        startBtn.innerHTML="RESTART";
        if(started>2){
            startBtn.innerHTML="RESTART";  
        restartGame();
        }
    }
}

startBtn.addEventListener("click", function(){
   
    startGame();
});

console.log(count);

newBtn.addEventListener("click",function(){
    if(gameStarted==true){
   generatecard();}else{
    title.textContent="START the game to get new card!"
   }
});



function generatecard(){
    
    if(sum<21){
    const randomNumber=generateNumber();
    
    sum+=cards[randomNumber-1].card;
    console.log(randomNumber);
    container.style.padding=0;
    var imgElement=document.createElement('img');
    imgElement.src=cards[randomNumber-1].image;
    imgElement.style.boxShadow = "0 4px 8px rgba(0, 0, 0.2)";
    imgElement.style.margin="0.2rem";
    imgElement.style.borderRadius="0.2rem";
    imgElement.style.height="8rem";
    container.appendChild(imgElement);
    sumScreen.textContent=`Sum: ${sum}`;
    if(sum==21){
        title.textContent="BLACKJACK! you won";
    }else if(sum>21){
        title.textContent="YOU LOST! restart the game";
    }
}
    
}

function generateNumber(){
    return Math.floor( Math.random() * 12 )+1;
    }

    
function restartGame(){
        sum=0;
        sumScreen.textContent=`Sum:`;
        var images = container.getElementsByTagName('img');
        container.style.padding="4.2rem";
        Array.from(images).forEach(function(image){
            container.removeChild(image);
        })
        startBtn.innerHTML="START GAME";
        title.textContent="START the game to get new card!"
        gameStarted=false;
        started=1;
    }
    


