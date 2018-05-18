$(document).ready(function(){
    var questions = [{
        q:"Q1",
        o:["01", "02", "03", "04"],
        a:"01"
    }]
    var pick;
    var test;
    var choice;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var num = 0;
    var userSelection = [];

// var questions = [
//     ["What super villain once broke Batman's back?", "Joker", "Bane","Killer Croc", "Ras al Ghul", "B"],
//     ["What were the names of Bruce Wayne's parents?", "Thomas and Martha", "George and Elaine", "James and Elizabeth", "Wayne and Alice", "A"],
//     ["What former District Attorney became the villain known as Two-Face?", "Floyd Lawton", "Jason Blood","Edward Nygma", "Harvey Dent", "D"],
//     ["What villain did Arnold Schwarzenegger play in Batman & Robin?", "Two-Face", "Bane", "Mr.Freeze", "Killer Croc", "C"],
//     ["What superpower does the Joker have?", "None", "Super Strength", "Super Speed", "Super Intelligence", "A"],
// ];
        questions.forEach(function(x){
        userSelection.push(null)
    });

    $("#start").on("click", function(){
        $(this).addClass("hide");
        startTime();
        displayQuestions();
    })

    $(document).on("click", ".done-btn", function(){
        clearInterval(timeRemain);
        gameOver();
    });

    $(document).on("click", ".option", function(){
        var groupIndex = $(this).attr("data-q");
        var buttonValue = $(this).text();
        $('button[data-q="'+groupIndex+'"]').removeClass("selected");
        $(this).addClass("selected");  
        userSelection.splice(groupIndex, 1, buttonValue);
        console.log(userSelection);
    });

    function startTime(){
        var time = 20;
        $("#timer-wrap").removeClass("hide");
        timeRemain = setInterval(function(){
            $("#timer").text("");
            time--;
            $("#timer").text(time);
            
            if(time === 0){
                clearInterval(timeRemain);
                gameOver();
            }
        },1000);

    }

    function displayQuestions(){
        $("#game-wrap").removeClass("hide");
        var doneBtn = $("<button>").addClass("done-btn").text("Done");

        for(var i = 0; i < questions.length; i++){
            var current = questions[i];
            var questionWrap = $("<div>").addClass("q-wrap");
            var questionTitle = $("<h3>").text(current.q);
            var buttonWrap = $("<div>").addClass("b-wrap");
            for(var j = 0; j < current.o.length; j++){
                var currentOpt = current.o[j];
                var button = $("<button>");
                button.addClass("option btn btn-primary");
                button.attr("data-index", j);
                button.attr("data-q", i);
                button.text(currentOpt);
                $(buttonWrap).append(button);
            }
            $(questionWrap).append(questionTitle, buttonWrap);
            $("#game-questions").append(questionWrap, doneBtn);
        }
    }

    function gameOver(){
        $("#game-questions").empty();
        evaluateResults();
        displayResults();
    }

    function evaluateResults(){
        
        for(var i = 0; i < questions.length; i++){
            if(userSelection[i] === null){
                unanswered++;
                incorrect++;
            }
            else if(userSelection[i] === questions[i].a) {
                correct++
            }
            else {
                incorrect++
            }
        }
    }

    function displayResults(){
        // 
        var resultsData = $("<div>");
        var correctWrap = $("<p>").text("Correctly answered:" + correct);
        var incorrectWrap = $("<p>").text("Incorrectly answered:" + incorrect);
        var unansweredWrap = $("<p>").text("Unanswered:" + unanswered);

        $(resultsData).append(correctWrap, incorrectWrap, unansweredWrap);
        $("#results-wrap").append(resultsData);
    }

});