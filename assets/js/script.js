//1. When I click the start button, a series of questions begin
var questionsAndAnswers=[ //<--- Array of Objects
    {
        question: "What does [] always denote in Javascript?",
        choices: ["object","function","array","event"],
        answer: "array"
    },

    {
        question: "What Element is used to wrtie CSS & Javascript in HTML?",
        choices: ["<meta>","<head>","<footer>","<script>"],
        answer: "<script>"
    },

    {
        question: "What is setInterval()?",
        choices: ["funtion","variable","object","event"],
        answer: "function"
    },
]
//2. The timer begins to countdown when I start the quiz
//3. When I select the correct answer, I move on to the next one, but when I select a wrong answer, time is also reduced from the countdown
//4. The quiz ends when I answer all the questions or time reaches 0
//5. I can enter my initals and save my score at the end of the quiz