const startQuizBtn = document.getElementById('start-quiz');
var questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let  randomizeQuestions, questionIndex

startQuizBtn.addEventListener("click", startQuiz) 
answerButtonsElement.addEventListener('click', showQuestion)

function startQuiz(){
    console.log("start")
    startQuizBtn.classList.add('hide') 
    intro.classList.add('hide')
    randomizeQuestions = questions.sort(() => Math.random() - .5)
    questionIndex = 0
    questionContainerElement.classList.remove('hide')
    questionOrder()
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