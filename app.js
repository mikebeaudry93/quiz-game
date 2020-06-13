const startBtnElement = document.querySelector('#start-btn')
const questionElement = document.querySelector('.question')
const questionContainerElement = document.querySelector('.question-container')
const answersDiv = document.querySelector('.answers')
const nextBtnElement = document.querySelector('#next-btn')

let shuffledArrayOfQuestions, x 

startBtnElement.addEventListener('click', startGame)
nextBtnElement.addEventListener('click' , () => {
    x++ 
    nextQuestion()
    clearShowAnwser()
}) 


function clearShowAnwser () {
    document.getElementById('answer-is').innerText = ''
}

function startGame () {
    questionContainerElement.classList.remove('hide')
    startBtnElement.classList.add('hide')
    document.querySelector('.winner').classList.add('hide')
    shuffledArrayOfQuestions = questions.sort(() => Math.random() - .5)
    x = 0
    // console.log(shuffledArrayOfQuestions[2])
    clearShowAnwser()
    nextQuestion()
}
 
function nextQuestion() {
    // console.log(shuffledArrayOfQuestions.length, x)
    resetQuestion();
    displayQuestion(shuffledArrayOfQuestions[x])
    
}

function resetQuestion() {
    // clearStatusClass(document.body)
    nextBtnElement.classList.add('hide')
    while(answersDiv.firstChild) {
        answersDiv.removeChild(answersDiv.firstChild)
    }
}

function displayQuestion(array) {
    // console.log(array)
    questionElement.innerText = array.question
    array.answers.forEach(item => {
        const option = document.createElement('div')
        option.classList.add('answer')
        option.innerText = item.text
        if (item.correct) {
            option.classList.add('correct')
        }
        answersDiv.appendChild(option)
        option.addEventListener('click', selectAnswer)
    })
    
}

function selectAnswer (e) {
    const optionSelected = e.target 
    // isGameOver();

    if (optionSelected.classList.contains('correct') && questions.length > x + 1) {
        // console.log(shuffledArrayOfQuestions.length)
        document.getElementById('answer-is').innerText = 'Correct!'
        optionSelected.classList.add('border-green')

        document.querySelector('.ding').play()

        nextBtnElement.classList.remove('hide')

        document.querySelectorAll('.answer').forEach(item => {
           item.classList.remove('border-red')
        })

    } else if (optionSelected.classList.contains('correct') && questions.length === x + 1) {

        optionSelected.classList.add('border-green')

        document.querySelector('.ding').play()
        nextBtnElement.classList.remove('hide')

        document.querySelectorAll('.answer').forEach(item => {
            item.classList.remove('border-red')
         })

        document.getElementById('answer-is').innerText = 'Correct! Game over.'
        
        document.querySelector('.winner').classList.remove('hide')
        startBtnElement.innerHTML = 'Restart'
        startBtnElement.classList.remove('hide')
        nextBtnElement.classList.add('hide')

    } else {

        const randomResponse = wrongAnswers.sort(() => Math.random() - .5)
        const allAnswers = document.querySelectorAll('.answer')
        
        document.getElementById('answer-is').innerText = randomResponse[0]
        document.querySelector('.buzzer').play();

        allAnswers.forEach(item => {
            item.classList.remove('border-green')
            item.classList.remove('border-red')
           
        })
        this.classList.add('border-red');
       
    };
    
    // if (questions.length === x + 1) {
    //     startBtnElement.innerHTML = 'Restart'
    //     startBtnElement.remove('hide')
    //     nextBtnElement.classList.add('hide')
    // }
}

// function clearStatusClass(element) {
//     element.classList.remove('correct')
//     element.classList.remove('wrong')
// }

// function isGameOver (){
//     if (questions.length === x + 1) {
//         const finishGameBtn = document.createElement('button')
//         finishGameBtn.innerText = 'Finish Game'
//         finishGameBtn.classList.add('finish-game-btn')
//         console.log(this)
//         document.querySelector('.controls').appendChild(finishGameBtn)
//         nextBtnElement.classList.add('hide')

//     }
// }



const wrongAnswers = [
    'Wrong answer... Please try again',
    'Oops... Give it another shot',
    "That doesn't seem right..."
]

const questions = [
    {
        question: 'What is 8 x 2?',
        answers: [
            {id: 1, text: '16', correct: true},
            {id: 2, text: '22', correct: false},
            {id: 3, text: '82', correct: false},
            {id: 4, text: '10', correct: false},
        ]
    },
    {
        question: 'What is 1 + 1?',
        answers: [
            {text: '11', correct: false},
            {text: 'Window', correct: false},
            {text: '2', correct: true},
            {text: '42', correct: false},
        ]
    },
    {
        question: 'Which Italian city is famous for its leaning tower?',
        answers: [
            {text: 'Venice', correct: false},
            {text: 'Rome', correct: false},
            {text: 'Italy', correct: false},
            {text: 'Pisa', correct: true},
        ]
    },
    {
        question: 'Black-eyed peas are not peas. What are they?',
        answers: [
            {text: 'Seeds', correct: false},
            {text: 'Beans', correct: true},
            {text: 'Fruit', correct: false},
            {text: 'Vegetables', correct: false},
        ]
    },
    {
        question: 'How much fun are you having?',
        answers: [
            {text: 'No fun at all', correct: false},
            {text: 'This is the best game ever!', correct: true},
            {text: 'Could be worse', correct: false},
            {text: 'Moderate levels of fun', correct: false},
        ]
    },
    {
        question: 'What color eyes do most humans have?',
        answers: [
            {text: 'Blue', correct: false},
            {text: 'Green', correct: false},
            {text: 'Light brown', correct: false},
            {text: 'Brown', correct: true},
        ]
    },
    {
        question: 'What is the world’s smallest inhabited island?',
        answers: [
            {text: 'Procida', correct: false},
            {text: 'Rowley Island', correct: false},
            {text: 'Bishop Rock', correct: false},
            {text: 'Hub Island', correct: true},
        ]
    },
    {
        question: 'How many months have 28 days?',
        answers: [
            {text: '2', correct: false},
            {text: '1', correct: false},
            {text: 'All of them', correct: true},
            {text: "Depends if there's a leap year or not", correct: false},
        ]
    },
    {
        question: 'The answer is really big.',
        answers: [
            {text: 'THE ANSWER', correct: true},
            {text: 'Really big', correct: false},
            {text: 'An elephant', correct: false},
            {text: "The data given is insufficient", correct: false},
        ]
    },
    {
        question: 'A newborn kangaroo is about the size of a ...?',
        answers: [
            {text: 'Plum', correct: false},
            {text: 'Grapefruit', correct: false},
            {text: 'Lima Bean', correct: true},
            {text: "Watermelon", correct: false},
        ]
    }
]