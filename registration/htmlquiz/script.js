

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffleQuestions,correctQuestionsIndex;
let quizScore =0;


startButton.addEventListener('click',startGame)

nextButton.addEventListener('click',() =>(
    correctQuestionsIndex++
    setNextQuestion()

)

function startGame(){
    start.button,classList,add('hide')
    shuffleQuestions=questions.sort(() =>Math.random() -0.5)
    correctQuestionsIndex=0
    questionContainer.classList.remove('hide')
    setNextQuestion(correctQuestionsIndex)
    quizScore=0
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[correctQuestionsIndex])

}

function showQuestion(question){
    questionElement.innerText= question.question;
    question.answer.forEach((answer) =>{
const button =document.createElement('button')
button.innerText=answer.text;
button.classList.add('btn')
if(answer.correct){
    button.dataset.correct=correct
}
button.addEventListener('click',selectAnswer)
answerButtonsElement.appendChild(button)
    }

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton=e.target
    const correct =selectedButton.dataset.correct

    setStatusClass(document,body,correct)
    Array.from(answerButtonsElement.children).forEach((button)=>{
    })
    setStatusClass(button.dataset.correct)
}
if(shuffleQuestions.length > correctQuestionsIndex +1){
    nextButton,ClassList.remove("hide")
}else {
    startButton.innerText ="restart"
    startButton.classList.remove("hide")
}
if(selectedButton.dataset == correct){
    quizScore++
}
document.getElementById('right-answers').innerText =quizScore
}


function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }else{
        element.classList.add("wrong")
    }
    }






function clearStatusClass(element) {
    element.classList.remove('correct')
element.classList.remove('wrong')
}
const questions =[
    {
question: 'which one of these is a JavaScript framework?',
answers:[
  { text: "Python", correct: false},
  { text: "Django", correct: false},
  { text: "React", correct: true},
  { text: "Eclipse", correct: false},
],
    },
    {
    question: 'who is the prime minister of India?',
answers:[
  { text: "Narenda Modi", correct: true},
  { text: "Rahul Gandhi", correct: false},
],
},
{
question: 'what is 4*3?',
answers:[
  { text: "6", correct: false},
  { text: "12", correct: true},

],
},
]