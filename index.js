const readlineSync = require("readline-sync");



var score = 0;

var highScores = [
  {
    name: "Shraddha",
    score: 5
  },

  {
    name: "Shaurya",
    score: 4
  },

  {
    name: "Shravya",
    score: 3
  }
]

var questions = [
  {
    question: "where do I live?",
    answer: "Pune"
  },

  {
    question: "Am I above 25?",
    answer: "yes"
  },

  {
    question: "My favourite color?",
    answer: "Red"
  },

  {
    question: "My favourite super hero?",
    amswer: "wonder woman"
  },

  {
    question: "My favourite Indian dish?",
    answer: "Rajma-chawal"
  }
];

function welcome() {
  var userName = readlineSync.question('May I have your name? ');
  console.log('Hi ' + userName + '!' + "to Do YOU KNOW ME?");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {

    console.log("right");
    score = score + 1;
  } else {
    console.log("wrong");
  }
  console.log("current score is :", score);
  console.log("___________________");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You Scored:", score);

  console.log("Ckeck out the high scores");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome();
game();
showScores();