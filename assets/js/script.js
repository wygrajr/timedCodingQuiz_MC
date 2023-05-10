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
var top = document.getElementId("#top");
var hs = document.getElementId("#hs");
var highScores = document.getElementId("#highScores");
var countDown = document.getElementId("#countDown");
var penalty = document.getElementId("#penalty");
var intro = document.getElementId("#intro");
var start = document.getElementId("#start");
var quiz = document.getElementId("#quiz");
var questions = document.getElementId("#questions");
var question = document.getElementId("#question");
var choices = document.getElementId("#choices");
var choices1 = document.getElementId("#choices1");
var choices2 = document.getElementId("#choices2");
var choices3 = document.getElementId("#choices3");
var choices4 = document.getElementId("#choices4");
var score = document.getElementId("#score");
var outcome = document.getElementId("#outcome");
var submitScore = document.getElementId("#submitScore");
var initials = document.getElementId("#initials");
var names = document.getElementId("#name");
var submit = document.getElementId("#submit");


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

function quiz() {
    var currentQuestion = questionsAndAnswers[currentQuestionIndex];
  var promptEl = document.getElementById("questions")
    promptEl.textContent = currentQuestion.prompt;
    choicesEl.innerHTML = "";
    currentQuestion.options.forEach(function(choice, i) {
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("value", choice);
        choiceButton.textContent = i + 1 + ". " + choice;
        choiceButton.onclick = questionLoop;
        multipleChoices.appendChild(choiceButton);
    });
}

function questionLoop() {
    if (this.value !== questionsAndAnswers[currentQuestionIndex].answer) {
      time -= 10;
      if (time < 0) {
        time = 0;
      }
      countDown.textContent = time;
      reaction.textContent = `Wrong! The correct answer was ${questionsAndAnswers[currentQuestionIndex].answer}.`;
      reaction.style.color = "red";
    } else {
        reaction.textContent = "Correct!";
        reaction.style.color = "green";
    }
    reaction.setAttribute("class", "reaction");
    setTimeout(function() {
        reaction.setAttribute("class", "reaction hide");
    }, 2000);
    currentQuestionIndex++;
    if (currentQuestionIndex === questionsAndAnswers.length) {
      quizFinal();
    } else {
      quiz();
    }
}
//4. The quiz ends when I answer all the questions or time reaches 0

function quizFinal() {
    clearInterval(timerId);
    var final = document.getElementById("quizFinal");
    final.removeAttribute("class");
    var finalScore = document.getElementById("score");
    finalScore.textContent = time;
    quizContainer.setAttribute("class", "hide");
}

function clockTick() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
      quizFinal();
    }
}
//5. I can enter my initals and save my score at the end of the quiz