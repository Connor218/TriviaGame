function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What super villain once broke Batman's back?", ["Joker", "Bane","Killer Croc", "Ras al Ghul"], "Bane"),
    new Question("What were the names of Bruce Wayne's parents?", ["Thomas and Martha", "George and Elaine", "James and Elizabeth", "Wayne and Alice"], "Thomas and Martha"),
    new Question("What former District Attorney became the villain known as Two-Face?", ["Floyd Lawton", "Jason Blood","Edward Nygma", "Harvey Dent"], "Harvey Dent"),
    new Question("What villain did Arnold Schwarzenegger play in Batman & Robin?", ["Two-Face", "Bane", "Mr.Freeze", "Killer Croc"], "Mr.Freeze"),
    new Question("What superpower does the Joker have?", ["None", "Super Strength", "Super Speed", "Super Intelligence"], "None")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





