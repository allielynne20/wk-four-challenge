//API Quiz 

startButtonEl = document.querySelector("#start-button");
startButtonEl.innerHTML = "Start Quiz";
//nextButtonEl = document.querySelector("#next-button");
questionEl = document.getElementById('welcome');

//Array of 7 questions for my quiz
questionArray = [
    "API stands for?",
    "The DOM allows us to control?",
    "console.log displays?",
    "querySelector is used to?",
    "A 'thing' that happens to html elements is called?",
    "Which is NOT an event?",
    "What does a Callback function do?"
];

answerArray = [
    { a: "Application Programming Interfaces", b: "All Preschoolers Investigate", c: "Application Progamming Internet" },
    { a: "HTML and CSS", b: "Pop Up adds", c: "The internet" },
    { a: "both", b: "any message that needs to be displayed to the user", c: "variables defined in it" },
    { a: "returns the first element in the document that matches the specified selector, or group of selectors", b: "make headers bigger in size", c: "link your javascript file to your html" },
    { a: "an event", b: "a hostile take over", c: "a button" },
    { a: "dragons", b: "button click", c: "dragging" },
    { a: "passes as an argument to another function to be called back later", b: "calls your significant other back", c: "speed dials your grandma" }
];

//getQuestion function() that displays the array items in the quiz-container
function getQuestions() {
    for (i = 0; i <= questionArray.length; i++) {
        questionEl.innerHTML = (questionArray[i]);
        //Object.values(questionArray[i]);
        console.log(event.target.questionEl);
        //console.log(questionEl);
        //return (questionArray[i].question);
        if (questionArray[i], i++) {
            //continue;
            console.log(questionArray[i]);
        }
        // else {
        //     return -1;
        // }

    };

};

startButtonEl.innerHTML = "Next";



//User's score will be counting for correct answers only
var score = 0;



//check the answer of the question
checkAnswer = function () {
    //console.log(event);
    var correctAnswer = questionArray[i].correctAnswer;

    if (correctAnswer) {
        return correctAnswer
    }
    else {
        return "Wrong!"
        //subtract 10 seconds from the timer 
    }
};

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
startButtonEl.addEventListener("click", getQuestions);

