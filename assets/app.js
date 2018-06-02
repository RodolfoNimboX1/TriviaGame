$(document).ready(function() {

    // Variable declaration
    var correctAns = 0;
    var incorrectAns = 0;

    //Questions and answers
    // game questions based on here: https://www.buzzfeed.com/emmacooke24/can-you-score-100-in-this-incredibly-hard-rick-and-morty
    var question1 = "What does Rick use to travel between dimensions and universes?";
    var answer1 = ["Space Laser", "Portal Gun", "Tardis", "Universe Key"];
    var correct1 = "Portal Gun";

    var question2 = "Who is Morty based on?";
    var answer2 = ["Frankenstein", "Marty from Back to The Future", "Hugo Strange", "Adam Webber from Blast from the Past"];
    var correct2 = "Marty from Back to The Future";
    
    var question3 = "Who are Rick's two best friends?";
    var answer3 = ["Birdperson and Squanchy", "Eagleperson and Scrunchy", "Beakperson and Squinchy", "Hawkperson and Sqelchy"];
    var correct3 = "Birdperson and Squanchy";
        
    var question4 = "What are the Ball Fondlers?";
    var answer4 = ["Rick and Morty's arch nemisis", "Rick and Morty's most hated TV show", "Rick and Morty's favourite TV show", "A crime fighting team that fights crime"];
    var correct4 = "Rick and Morty's favourite TV show";
    
    var question5 = "What is the name of the park that Rick builds inside an Australian homeless man?";
    var answer5 = ["Anatomy Park", "Anatomical Fair", "Anatomy Works", "Anatomical World"];
    var correct5 = "Anatomy Park";

    var question6 = "What is Scary Terry's catchphrase?";
    var answer6 = ["Here's looking at you", "Kablam", "Bitch", "Dickhead"];
    var correct6 = "Bitch";

    // function that on click start button changes the content to the first question of the game

    $("#start").on("click", function(){
        $("#game-section").empty();
        firstQuestion ();
    });

    // restart game
    $("#restart").on("click", function(){
        $("#restart").empty();
        var correctAns = 0;
        var incorrectAns = 0;
        firstQuestion ();
    });

// function to render first question

function firstQuestion () {
    var renderQuestion = $("#render-questions");
    var question = $("<h3>").text(question1);
    renderQuestion.append(question);

    for (var i = 0; i < answer1.length; i++) {
        var answerList = $("<ol>");
        var answers = $("<ul>");
        var btn = $("<button>").text(answer1[i]);
        btn.attr("id", answer1[i]);
        btn.attr("class", "btn btn-outline-primary");
        answers.append(btn);
        answerList.append(answers);
        renderQuestion.append(answerList);
};

// onclick event listner
$("button").on("click", function(){
    var myAnswer = $(this).attr("id");
    console.log(myAnswer);

    if (myAnswer == correct1) {
        alert("*BURP* Correct!");
        stopTimer ();        
        correctAns++;
        $("#wins").text(correctAns);
        $("#render-questions").empty();
        displayNext ();
        reset ();
// give a few seconds before it changes to the next question
    } else {
        alert("No, DUMB! The right answer was -obviously- Portal Gun, that's my device.");
        incorrectAns--;
        $("#losses").text(incorrectAns);
        $("#render-questions").empty();
        displayNext ();
        reset ();
// give a few seconds before it changes to the next question
    };
});

run();
};

// timer functions

var time = 20;
var intervalID;

function run() {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
};

function decrement () {
    time--;
    $("#timer").text(time);

    if (time === 0) {
        stopTimer ();
        alert("Time's up *burp* you loose!");
        incorrectAns--;
        $("#losses").text(incorrectAns);
        $("#render-questions").empty();
    };
};

function stopTimer () {
    clearInterval(intervalID);
};

// timer for loading next questions
var count= 0;

function displayNext () {
    count++;
    setTimeout(secondQuestion, 5000);
};

function displayNext3 () {
    count++;
    setTimeout(thirdQuestion, 5000);
};

function displayNext4 () {
    count++;
    setTimeout(fourthQuestion, 5000);
};

function displayNext5 () {
    count++;
    setTimeout(fifthQuestion, 5000);
};

function displayNext6 () {
    count++;
    setTimeout(sixthQuestion, 5000);
}
// reset timer

function reset () {
    time = 20;
}

// render next questions
function secondQuestion () {
    var renderQuestion = $("#render-questions");
    var question = $("<h3>").text(question2);
    renderQuestion.append(question);

    for (var i = 0; i < answer2.length; i++) {
        var answerList = $("<ol>");
        var answers = $("<ul>");
        var btn = $("<button>").text(answer2[i]);
        btn.attr("id", answer2[i]);
        btn.attr("class", "btn btn-outline-primary");
        answers.append(btn);
        answerList.append(answers);
        renderQuestion.append(answerList);
};

// onclick event listner
$("button").on("click", function(){
    var myAnswer = $(this).attr("id");
    console.log(myAnswer);

    if (myAnswer == correct2) {
        alert("Nice...Nice...reeaaaAAAL NICE. Yes, this is a Jerry quote.");
        stopTimer ();        
        correctAns++;
        $("#wins").text(correctAns);
        $("#render-questions").empty();
        displayNext3 ();
        reset ();
// give a few seconds before it changes to the next question
    } else {
        alert("Oh my god. You had one job! The right answer is Marty from Back to The Future. Jeez.");
        incorrectAns--;
        $("#losses").text(incorrectAns);
        $("#render-questions").empty();
        displayNext3 ();
        reset ();
// give a few seconds before it changes to the next question
    };
});

run();
};

function thirdQuestion () {
    var renderQuestion = $("#render-questions");
    var question = $("<h3>").text(question3);
    renderQuestion.append(question);

    for (var i = 0; i < answer3.length; i++) {
        var answerList = $("<ol>");
        var answers = $("<ul>");
        var btn = $("<button>").text(answer3[i]);
        btn.attr("id", answer3[i]);
        btn.attr("class", "btn btn-outline-primary");
        answers.append(btn);
        answerList.append(answers);
        renderQuestion.append(answerList);
};

// onclick event listner
$("button").on("click", function(){
    var myAnswer = $(this).attr("id");
    console.log(myAnswer);

    if (myAnswer == correct3) {
        alert("Birdperson got married :( and squanchy squanches everywhere!");
        stopTimer ();        
        correctAns++;
        $("#wins").text(correctAns);
        $("#render-questions").empty();
        displayNext4 ();
        reset ();
// give a few seconds before it changes to the next question
    } else {
        alert("WRONG! The correct answer was Birdperson and Squanchy. My buddies.");
        incorrectAns--;
        $("#losses").text(incorrectAns);
        $("#render-questions").empty();
        displayNext4 ();
        reset ();
// give a few seconds before it changes to the next question
    };
});

run();
};

function fourthQuestion () {
    var renderQuestion = $("#render-questions");
    var question = $("<h3>").text(question4);
    renderQuestion.append(question);

    for (var i = 0; i < answer4.length; i++) {
        var answerList = $("<ol>");
        var answers = $("<ul>");
        var btn = $("<button>").text(answer4[i]);
        btn.attr("id", answer4[i]);
        btn.attr("class", "btn btn-outline-primary");
        answers.append(btn);
        answerList.append(answers);
        renderQuestion.append(answerList);
};

// onclick event listner
$("button").on("click", function(){
    var myAnswer = $(this).attr("id");
    console.log(myAnswer);

    if (myAnswer == correct4) {
        alert("And that's the waaaayyythe news goes! *burp* Correct.");
        stopTimer ();        
        correctAns++;
        $("#wins").text(correctAns);
        $("#render-questions").empty();
        displayNext5 ();
        reset ();
// give a few seconds before it changes to the next question
    } else {
        alert("WRONG! Rick and Morty's favourite TV show");
        incorrectAns--;
        $("#losses").text(incorrectAns);
        $("#render-questions").empty();
        displayNext5 ();
        reset ();
// give a few seconds before it changes to the next question
    };
});

run();
};

function fifthQuestion () {
    var renderQuestion = $("#render-questions");
    var question = $("<h3>").text(question5);
    renderQuestion.append(question);

    for (var i = 0; i < answer5.length; i++) {
        var answerList = $("<ol>");
        var answers = $("<ul>");
        var btn = $("<button>").text(answer5[i]);
        btn.attr("id", answer5[i]);
        btn.attr("class", "btn btn-outline-primary");
        answers.append(btn);
        answerList.append(answers);
        renderQuestion.append(answerList);
};

// onclick event listner
$("button").on("click", function(){
    var myAnswer = $(this).attr("id");
    console.log(myAnswer);

    if (myAnswer == correct5) {
        alert("Yes! YESSS! Anatomy Park is my baby");
        stopTimer ();        
        correctAns++;
        $("#wins").text(correctAns);
        $("#render-questions").empty();
        displayNext6 ();
        reset ();
// give a few seconds before it changes to the next question
    } else {
        alert("Well la di da! You know, Anatomy Park was the best idea we've pitched.");
        incorrectAns--;
        $("#losses").text(incorrectAns);
        $("#render-questions").empty();
        displayNext6 ();
        reset ();
// give a few seconds before it changes to the next question
    };
});

run();
};

function sixthQuestion () {
    var renderQuestion = $("#render-questions");
    var question = $("<h3>").text(question6);
    renderQuestion.append(question);

    for (var i = 0; i < answer6.length; i++) {
        var answerList = $("<ol>");
        var answers = $("<ul>");
        var btn = $("<button>").text(answer6[i]);
        btn.attr("id", answer6[i]);
        btn.attr("class", "btn btn-outline-primary");
        answers.append(btn);
        answerList.append(answers);
        renderQuestion.append(answerList);
};

// onclick event listner
$("button").on("click", function(){
    var myAnswer = $(this).attr("id");
    console.log(myAnswer);

    if (myAnswer == correct6) {
        alert("You can run, but you can't hide BITCH!");
        stopTimer ();        
        correctAns++;
        $("#wins").text(correctAns);
        $("#render-questions").empty();
        restartGame ();
// give a few seconds before it changes to the next question
    } else {
        alert("You know, scary terry is a safe spin off with miniature scissors instead of knives. Oh yeah *brup* the right answer is BITCH.");
        incorrectAns--;
        $("#losses").text(incorrectAns);
        $("#render-questions").empty();
        restartGame ();
// give a few seconds before it changes to the next question
    };
});

run();
};

// restat game

function restartGame () {
var restartBTN = $("<button>").text("Do you wanna try again?");
restartBTN.attr("type", "button");
restartBTN.attr("class", "btn btn-info");
restartBTN.attr("id", "start");
$("#restart").append(restartBTN);
};

});