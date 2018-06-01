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

// function to tender first question

function firstQuestion () {
    var renderQuestion = $("#game-section");
    var question = $("<h3>").text(question1);
    renderQuestion.append(question);

    for (var i = 0; i < answer1.length; i++) {
        var answerList = $("<ol>");
        var answers = $("<ul>").text(answer1[i]);
        answerList.append(answers);
        renderQuestion.append(answerList);
    }
};

});