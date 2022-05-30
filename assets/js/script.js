const startQuizBtn = document.getElementById('start-quiz');
var questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const endQuizContainer = document.getElementById('end-screen')
var timerEl = document.getElementById('counter-time')
var submitScore = document.getElementById('submit-scores')
var initialsInput = document.querySelector('#initials')
var finalScoreEl = document.getElementById("final-score");

let  randomizeQuestions, questionIndex

startQuizBtn.addEventListener("click", startQuiz) 

answerButtonsElement.addEventListener('click', () => {
   questionIndex++
  if (questionIndex === questions.length){
    endQuiz()
  }else {
    questionOrder()
  }
})

submitScore.addEventListener('click', function(event){
    event.preventDefault();
    var user = {
        initials: initialsInput.value.trim()
    }
   
    localStorage.setItem("userdata", JSON.stringify(user))
})

function countdown(){
    var timeLeft = 60;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } 
    else if (timeLeft === 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } 
    else {
      timerEl.textContent = "00";
      clearInterval(timeInterval);
    }
  }, 1000);

}

function startQuiz(){
    console.log("start")
    startQuizBtn.classList.add('hide') 
    intro.classList.add('hide')
    randomizeQuestions = questions.sort(() => Math.random() - .5)
    questionIndex = 0
    questionContainerElement.classList.remove('hide')
    questionOrder()
    countdown()
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function questionOrder(){
    resetState()
    showQuestion(randomizeQuestions[questionIndex]) 
   
}

function resetState(){
 while (answerButtonsElement.firstChild){
     answerButtonsElement.removeChild
     (answerButtonsElement.firstChild)
 }
}

function selectAnswer(e){ 

  console.log("click")
}

function endQuiz() {
    endQuizContainer.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    finalScoreEl.textContent = timerEl.textContent;

 }

 const questions = [
     {
     question: "In JavaScript, what element is used to store and manipulate text usually in multiples?",
     answers: [
         {text:"Function", correct: false},
         {text:"Strings", correct: true},
         {text:"Arrays", correct: false},
         {text:"Variables", correct: false}
     ]
     },
     {
        question: "What kind of statement is used to execute actions based on a trigger or condition?",
        answers: [
            {text:"RegExp or Regular Expression", correct: false},
            {text:"Boolean Variable", correct: false},
            {text:"Fired Event", correct: false},
            {text:"Conditional Statement", correct: true}
        ]
        },
        {
            question: "What is the element called that can continue to execute a block of code as long as the specified condition remains TRUE?",
            answers: [
                {text:"Debugger", correct: false},
                {text:"Clone", correct: false},
                {text:"Loop", correct: true},
                {text:"Repeater", correct: false}
            ]
            },
            {
                question: "In JavaScript, what element is used to store multiple values in a single variable?",
                answers: [
                    {text:"Function", correct: false},
                    {text:"Arrays", correct: true},
                    {text:"Strings", correct: false},
                    {text:"Variables", correct: false}
                ]
                },
 ]
