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
var quizContainer = document.querySelector("#quiz");
var countDown = document.querySelector("#countDown");
var multipleChoices = document.querySelector("#choices");
var submitButton = document.querySelector("#submit");
var startButton = document.querySelector("#start");
var initals = document.querySelector("#name");
var results = document.querySelector("#result");

//2. The timer begins to countdown when I start the quiz

var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

function quizStart() {
    timerId = setInterval(clockTick, 1000);
    countDown.textContent = time;
    var intro = document.getElementById("intro");
    intro.setAttribute("class", "hide");
    quizContainer.removeAttribute("class");
    quiz();
}

//3. When I select the correct answer, I move on to the next one, but when I select a wrong answer, time is also reduced from the countdown
//4. The quiz ends when I answer all the questions or time reaches 0
//5. I can enter my initals and save my score at the end of the quiz