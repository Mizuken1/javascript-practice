const quizQuestions =[
    {
        question:"What is the name of Naruto Uzumaki's signature move?",
        a:"Chidori",
        b:"Rasengan",
        c:"Sharingan",
        d:"Amaterasu",
        correct: "b"
    },

    {
        question: "Who is the first character to discover the truth about the Titans inside the walls?",
        a:"Eren Yeager",
        b:"Mikasa Ackerman",
        c:"Levi Ackerman",
        d:"Armin Alert",
        correct:"d"
    },
    {
        question: "Who is Goku's brother?",
        a:"Raditz",
        b:"Vegeta",
        c:"Nappa",
        d:"Piccolo",
        correct:"a"
    },
    {
        question: " What is the name of Luffy’s signature attack?",
        a:"Gum Gum pistol",
        b:"Fire fist",
        c:"Thunder Bolt",
        d:"Ice Time",
        correct: "a"
    },
    {
        question:"What is the hero name of Izuku Midoriya?",
        a:"Red Riot",
        b:"Deku",
        c:"Lemillion",
        d:"Shoto",
        correct:"b"
    }
]

const Btn=document.getElementById('button');
const questionCounter= document.getElementById('p');
const question= document.getElementById('question');
const option_a= document.getElementById('option_a');
const option_b= document.getElementById('option_b');
const option_c= document.getElementById('option_c');
const option_d= document.getElementById('option_d');
const container = document.querySelector('.questions-container');
const outOfElement = document.querySelector('.out-of');



let currentQuiz=0;
let score=0;
function getSelected() {
    const answers = document.querySelectorAll('.radios');  
    let selectedAnswer;

    answers.forEach((answerEl) => {
        if (answerEl.checked) {
            selectedAnswer = answerEl.id;  
        }
        
    });

    return selectedAnswer;  
}

function uncheck(){
    const answers = document.querySelectorAll('.radios');
    answers.forEach((answerEl) => {
        if (answerEl.checked) {
            answerEl.checked=false;  
        }
    });
}


function loadQuiz(){
question.innerText=quizQuestions[currentQuiz].question;
option_a.innerText=quizQuestions[currentQuiz].a
option_b.innerText=quizQuestions[currentQuiz].b
option_c.innerText=quizQuestions[currentQuiz].c
option_d.innerText=quizQuestions[currentQuiz].d
questionCounter.innerHTML=`0${currentQuiz+1}`;
currentQuiz++;

}

function displayScore(score) {
    outOfElement.remove();
    Btn.remove();
    questionCounter.remove();
    container.innerHTML = ` 
    <div class="scoreboard-container">
        <div class="scoreboard">
            <h1>Congratulations!</h1>
            <p id="final-score">Your score is <span id="score">${score}</span> / <span id="total">0${quizQuestions.length}</span></p>

        </div>
    </div>`;  // Then update the content
}

if(currentQuiz===0){
loadQuiz();}

Btn.addEventListener("click",function(){

    const answer = getSelected();  
    console.log("answer:"+answer);
   
    
    if(answer){ 
        
        if(answer==quizQuestions[currentQuiz-1].correct){
        score++;
    }
             uncheck();

        if(currentQuiz<quizQuestions.length){
            loadQuiz();
                }else{
                displayScore(score);
            }

            if(currentQuiz==quizQuestions.length){
                  Btn.innerText="Submit";  }
    }

    

});






