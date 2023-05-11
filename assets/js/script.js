//1. When I click the start button, a series of questions begin
var questionsAndAnswers=[ //<--- Array of Objects
    {
        question: "What does [] always denote in Javascript?",
        choices: ["object","function","array","event"],
        answer: 2 //<--- can call by array position
    },

    {
        question: "What Element is used to wrtie CSS & Javascript in HTML?",
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
var choices1 = document.getElementById("choices1");
var choices2 = document.getElementById("choices2");
var choices3 = document.getElementById("choices3");
var choices4 = document.getElementById("choices4");
var score = document.getElementById("score");
var outcome = document.getElementById("outcome");
var submitScore = document.getElementById("submitScore");
var initials = document.getElementById("initials");
var names = document.getElementById("name");
var submit = document.getElementById("submit");


//2. The timer begins to countdown when user starts the quiz
var timeInterval;
var timeLeft;

function startTimer(){
  timeLeft=900
  timeInterval=
    setInterval(function(){
      countDown.textContent=Math.floor(timeLeft/10)+"secs";
      timeLeft--;
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

start.addEventListener("click", beginQuiz);
//3. When I select the correct answer, I move on to the next one, but when I select a wrong answer, time is also reduced from the countdown
var activeQuestion=0;

function questionList(){
  var randomQuestion=Math.random();
  var ranQuestMax=randomQuestion*questionsAndAnswers.length;
  var ranQuestRange=0+ranQuestMax;
  activeQuestion=Math.floor(ranQuestRange);

  question.textContent=questionsAndAnswers[activeQuestion].question;
  choices1.textContent=questionsAndAnswers[activeQuestion].choices[0];
  choices2.textContent=questionsAndAnswers[activeQuestion].choices[1];
  choices3.textContent=questionsAndAnswers[activeQuestion].choices[2];
  choices4.textContent=questionsAndAnswers[activeQuestion].choices[3];

  choices1.style.display="block";
  choices2.style.display="block";
  choices3.style.display="block";
  choices4.style.display="block";
}
//4. The quiz ends when I answer all the questions or time reaches 0

//5. I can enter my initals and save my score at the end of the quiz