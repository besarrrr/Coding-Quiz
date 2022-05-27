const startQuizBtn = document.getElementById('start-quiz');
var questionContainerElement = document.getElementById('question-container')

startQuizBtn.addEventListener("click", startQuiz) 

function startQuiz(){
    console.log("start")
    startQuizBtn.classList.add('hide')
    questionContainerElement.classList.remove('hide')
}


function selectAnswer(){

}


 