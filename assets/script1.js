//API Quiz

startButtonEl = document.querySelector("#start-button");
startButtonEl.innerHTML = "Start Quiz";
questionEl = document.getElementById('quiz-container');
// var questionOne = questionArray[i];
// var answers = answerArray[i];
questionEl = document.getElementById('quiz-container');
//Question 1 Var
var questionOne = 'API stands for?';
var b = document.createElement('div');
b.innerHTML = questionOne;
document.getElementById('quiz-container').appendChild(b);

var answerA = 'Application Programming Interfaces';
var aA = document.createElement('button');
aA.innerHTML = answerA;
document.getElementById('A-button').appendChild(aA);

var answerB = 'All Preschoolers Investigate'
var bB = document.createElement('button');
bB.innerHTML = answerB;
document.getElementById('B-button').appendChild(bB);

var answerC = 'Application Progamming Internet';
var cC = document.createElement('button');
cC.innerHTML = answerC;
document.getElementById('C-button').appendChild(cC);

//Question 2 Var 

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

function getQuiz() {
    // for (var i = 0; i <= questionArray.length; i++) {
    //     questionEl.innerHTML = (questionArray[i]);
    // }

    questionOneFunc();

};

var score = 0

function questionOneFunc() {

    if (answerA) {
        console.log("Correct");
        aA.style.backgroundColor = "green";
        
        score++;
    }
    else {
        bB.style.backgroundColor = "red";
        cC.style.backgroundColor = "red";
    }

};









aA.addEventListener("click", questionOneFunc);
//startButtonEl.addEventListener("click", getQuiz);