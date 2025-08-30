const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Mars", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
    {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: [
      { text: "Harper Lee", correct: true },
      { text: "J.K. Rowling", correct: false },
      { text: "Ernest Hemingway", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "O2", correct: false },
      { text: "CO2", correct: false },
      { text: "H2O", correct: true },
      { text: "NaCl", correct: false },
    ],
  },
  {
    question: "How many continents in the world?",
    answers: [
      { text: "7", correct: true },
      { text: "6", correct: false },
      { text: "8", correct: false },
      { text: "5", correct: false },
    ],
  },
];


let startScreen = document.querySelector(".startScreen");
let quizScreen = document.querySelector(".quizScreen");
let resultScreen = document.querySelector(".resultScreen");
let startButton = document.querySelector(".startButton");
let restartButton = document.querySelector(".restartButton");
let questionTitle = document.querySelector("#questionTitle");
let questionNumber = document.querySelector("#questionNumber");
let totalQuestions = document.querySelector("#totalQuestions");
let score = document.querySelector("#score");
let answer = document.querySelector(".answer");
let progressBar = document.querySelector(".progressBar");
let finalScore = document.querySelector("#finalScore");
let totalScore = document.querySelector("#totalScore");
let remark = document.querySelector("#remark");

startButton.addEventListener("click",()=>{
    startScreen.style.display = "none";
    quizScreen.style.display = "flex";
    showQuestion();
});

let currentQuestionIndex = 0;
let resultScore = 0;
let allQuestions = questions.length;
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
    questionNumber.textContent = currentQuestionIndex + 1;
    totalQuestions.textContent = questions.length;
    score.textContent = resultScore;
    let pBar = document.createElement("div");
    let pBarWidth = 400 / questions.length;
    pBar.style.width = pBarWidth + "px";
    progressBar.append(pBar);
    answer.innerHTML = "";
    currentQuestion.answers.forEach(ans =>{
        let option = document.createElement("button");
        option.textContent = ans.text;
        option.classList.add("answerButton");
        option.addEventListener("click",() => showAnswer(ans.correct));
        answer.append(option);
    });
}

function showAnswer(isCorrect){
    if(isCorrect){
        resultScore += 1;
    }
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showResult();
    }
}

function showResult(){
    quizScreen.style.display = "none";
    resultScreen.style.display = "flex";
    restartButton.addEventListener("click",()=>{
        resultScore = 0;
        currentQuestionIndex = 0;
        resultScreen.style.display = "none";
        quizScreen.style.display = "flex";
        progressBar.innerHTML = "";
        showQuestion();
    });
    finalScore.textContent = resultScore;
    totalScore.textContent = questions.length;
    if(resultScore <= allQuestions/5){
      remark.textContent = "Give it another try!!";
    }
    else if(resultScore <= 2*allQuestions/5){
      remark.textContent = "Keep Learning!!";
    }
    else if(resultScore <= 3*allQuestions/5){
      remark.textContent = "Not Bad!!";
    }
    else if(resultScore <= 4*allQuestions/5){
      remark.textContent = "Good Job!!";
    }
    else{
      remark.textContent = "Excellent!!";
    }        
}
