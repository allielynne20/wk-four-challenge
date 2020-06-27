//API Quiz 

var startButtonEl = document.querySelector("#start-button");
startButtonEl.innerHTML = "Start Quiz";
//nextButtonEl = document.querySelector("#next-button");
var questionEl = document.getElementById('questions');
var currentQuestionIndex = 0;
var choicesEl = document.getElementById('choices');
var confirmAnswer = document.getElementById('confirm');
var quizEnd = document.getElementById('game-over');
var gameOver = document.createElement('h2');

//Array of 7 questions for my quiz
// questionArray = [
//     "API stands for?",
//     "The DOM allows us to control?",
//     "console.log displays?",
//     "querySelector is used to?",
//     "A 'thing' that happens to html elements is called?",
//     "Which is NOT an event?",
//     "What does a Callback function do?"
// ];

// answerArray = [
//     { a: "Application Programming Interfaces", b: "All Preschoolers Investigate", c: "Application Progamming Internet" },
//     { a: "HTML and CSS", b: "Pop Up adds", c: "The internet" },
//     { a: "both", b: "any message that needs to be displayed to the user", c: "variables defined in it" },
//     { a: "returns the first element in the document that matches the specified selector, or group of selectors", b: "make headers bigger in size", c: "link your javascript file to your html" },
//     { a: "an event", b: "a hostile take over", c: "a button" },
//     { a: "dragons", b: "button click", c: "dragging" },
//     { a: "passes as an argument to another function to be called back later", b: "calls your significant other back", c: "speed dials your grandma" }
// ];

//getQuestion function() that displays the array items in the quiz-container
// function getQuestions() {
//     for (i = 0; i <= questionArray.length; i++) {
//         questionEl.innerHTML = (questionArray[i]);
//         //Object.values(questionArray[i]);
//         console.log(event.target.questionEl);
//         //console.log(questionEl);
//         //return (questionArray[i].question);
//         if (questionArray[i], i++) {
//             //continue;
//             console.log(questionArray[i]);
//         }
//         // else {
//         //     return -1;
//         // }

//     };

// };


function startQuiz() {
    //this function will run when the Start button is clicked 
    var startScreen = document.getElementById('start-screen');
    //this will remove the class styling from the question container to the 
    startScreen.setAttribute('class', 'hide');
    questionEl.removeAttribute('class');
    getQuestion();
}

function getQuestion() {
    //this function loads the array of questions
    var currentQuestion = questions[currentQuestionIndex];
    //the current index in the array 
    var title = document.getElementById('question-title');
    //this linked the questions to my div I want to diplay them in 
    title.textContent = currentQuestion.title;
    //this turns the question in the index of the array to text content
    choicesEl.innerHTML = "";
    //this clears the string for the next index of choices 
    currentQuestion.choices.forEach(function (choice, i) {
        //the forEach uses the current index choices and attaches buttons to them 
        var button = document.createElement('button');
        //created element button
        button.setAttribute('class', 'choice');
        //gave the button an attribute class of choice 
        button.setAttribute('value', choice);
        //gave the button a value of the choice value in the array
        button.textContent = i + 1 + '. ' + choice;
        //this displays the text to show the "current index(+1). the value of the choice"  
        button.onclick = checkAnswer;
        //when the buttons are clicked it runs the checkAnswer
        choicesEl.appendChild(button);
        //this appends the buttons to the choices div 
    })
}


//User's score will be counting for correct answers only
var score = 0;


//check the answer of the question
var checkAnswer = function () {
    //this function checks to see if the answer is correct or not
    if (this.value !== questions[currentQuestionIndex].answer) {
        confirmAnswer.textContent = "Wrong!";
        //subtract 10 seconds from the timer
    }
    else {
        confirmAnswer.textContent = "Correct!";
        score++
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        //call function for quiz end 
        //console.log("test");
        endQuiz();
    }
    else {
        getQuestion();
    }
}

function endQuiz () {
    //this function ends the quiz
    gameOver.textContent = "End of Quiz! You have a score of " + score + "out of 7!";
    quizEnd.appendChild(gameOver);
}

//start the loop through the array of questions, the timer, and end the timer when the loop is finished or the time reaches 0 
// startGame = function () {
//     //start the timer
//     //render the questions 
//     //This for loop will run through the array of questions 
//     for (i = 0; i < questionArray.length; i++) {
//         var answer = true //button that is the correct answer 

//             (questionArray[i].q);

//         //if the button chosen is true then correct (add to score) but if the button chosen is false then wrong (subtract from time)
//         if () {
//             //show an element/ text that says "Correct!" 
//             score++
//         }
//         else {
//             //show an element/ text that says "Wrong!"
//             //subtract from timecount
//         }
//         //the loop ends the timer
//     };
// };

//locally store the user's initials and score
// var scoreAlert = function () {
//     userScore = ("Game Over! You got" + score + "/" + questionArray.length + "!");
// };

//function for timer
//clicking start quiz button should start the timer

//function to subtract time from timer 

//input for initials and score to locally store them 
//would this be a form? 

//button or something that gets the locally stored initials and score ?



//add event listeners for button clicks 
startButtonEl.addEventListener("click", startQuiz);

