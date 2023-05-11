//1. When I click the start button, a series of questions begin
var questionsAndAnswers=[ //<--- Array of Objects
    {
        question: "What does [] always denote in Javascript?",
        choices: ["object","function","array","event"],
        answer: 2 //<--- can call by array position
    },

    {
        question: "What Element is used to write CSS & Javascript in HTML?",
        choices: ["<meta>","<head>","<footer>","<script>"],
        answer: 3
    },

    {
        question: "What is setInterval()?",
        choices: ["funtion","variable","object","event"],
        answer: 0
    },
]

// Turn IDs into varables to manipulate in functions
var onTop = document.getElementById("onTop");
var hs = document.getElementById("hs");
var highScores = document.getElementById("highScores");
var countDown = document.getElementById("countDown");
var penalty = document.getElementById("penalty");
var intro = document.getElementById("intro");
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var questions = document.getElementById("questions");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var score = document.getElementById("score");
var outcome = document.getElementById("outcome");
var submitScore = document.getElementById("submitScore");
var initials = document.getElementById("initials");
var names = document.getElementById("name");
var submit = document.getElementById("submit");

// Get questions with choices to show when the start button is clicked on

var activeQuestion=0;

function questionList(){
  var randomQuestion=Math.random();
  var ranQuestMax=randomQuestion*questionsAndAnswers.length;
  var ranQuestRange=0+ranQuestMax;
  activeQuestion=Math.floor(ranQuestRange);

  question.textContent=questionsAndAnswers[activeQuestion].question;
  choice1.textContent=questionsAndAnswers[activeQuestion].choices[0];
  choice2.textContent=questionsAndAnswers[activeQuestion].choices[1];
  choice3.textContent=questionsAndAnswers[activeQuestion].choices[2];
  choice4.textContent=questionsAndAnswers[activeQuestion].choices[3];

  choice1.style.display="block";
  choice2.style.display="block";
  choice3.style.display="block";
  choice4.style.display="block";
}

//2. The timer begins to countdown when user starts the quiz

//Timer starts when quiz begins
var timeInterval;
var timeLeft;

function startTimer(){
  timeLeft=900
  timeInterval=
    setInterval(function(){
      countDown.textContent=Math.floor(timeLeft/10)+"secs";
      timeLeft--;
      if (timeLeft===0){
        scoreScreen()
        clearInterval(timeInterval);
      }
    },100);
}

function startScreen(){
  onTop.style.display="block";
  hs.style.display="block";
  intro.style.display="block";
  quiz.style.display="none";
  submitScore.style.display="none";
  countDown.style.display="90secs";
}

// Starts quiz and calls for timer + questions to start
function beginQuiz(){
  startTimer();
  onTop.style.display="block";
  hs.style.display="none";
  intro.style.display="none";
  quiz.style.display="block";
  submitScore.style.display="none";

  questionList();
}

startScreen();

start.addEventListener("click", beginQuiz); // <--- Activates button

//3. When I select the correct answer, I move on to the next one, but when I select a wrong answer, time is also reduced from the countdown

//4. The quiz ends when I answer all the questions or time reaches 0
function nextQuestion(){
  questionsAndAnswers.splice(activeQuestion,1);
  if (questionsAndAnswers.length===0){
    scoreScreen()
    clearInterval(timeInterval);
    countDown.textContent = "";
  } else {
    questionList();
  }
}

function correct(){
  outcome.textContent="Nice Job!"
  var tryTimer=setTimeout(function() {
    outcome.textContent="";
    clearTimeout(tryTimer);
  }, 1000)
}

function incorrect(){
  outcome.textContent="X"
  penalty.style.visibility="visible";
  var tryTimer=setTimeout(function() {
    outcome.textContent="";
    penalty.style.visibility="hidden"
    clearTimeout(tryTimer);
  }, 1000)
}

function option1(){
  if (questionsAndAnswers[activeQuestion].answer===0){
    correct();
  } else{
    timeLeft = timeLeft-100;
    incorrect();
  }
  nextQuestion();
}

function option2(){
  if (questionsAndAnswers[activeQuestion].answer===1){
    correct();
  } else{
    timeLeft = timeLeft-100;
    incorrect();
  }
  nextQuestion();
}

function option3(){
  if (questionsAndAnswers[activeQuestion].answer===2){
    correct();
  } else{
    timeLeft = timeLeft-100;
    incorrect();
  }
  nextQuestion();
}

function option4(){
  if (questionsAndAnswers[activeQuestion].answer===3){
    correct();
  } else{
    timeLeft = timeLeft-100;
    incorrect();
  }
  nextQuestion();
}

function finalScore(){
  if (timeLeft===0){
    score.textContent = 0;
  } else {
    score.textContent = timeLeft;
  }
}

function scoreScreen(){
  onTop.style.display="block";
  hs.style.display="none";
  intro.style.display="none";
  quiz.style.display="none";
  submitScore.style.display="block";
  finalScore();
}

choice1.addEventListener("click", option1)
choice2.addEventListener("click", option2)
choice3.addEventListener("click", option3)
choice4.addEventListener("click", option4)

//5. I can enter my initals and save my score at the end of the quiz