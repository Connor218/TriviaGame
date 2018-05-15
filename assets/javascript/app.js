var pick;
var test;
var count = 20;
var correct = 0;
var incorrect = 0;
var num = 0;
var questions = [
    ["What super villain once broke Batman's back?", "Joker", "Bane","Killer Croc", "Ras al Ghul", "B"],
    ["What were the names of Bruce Wayne's parents?", "Thomas and Martha", "George and Elaine", "James and Elizabeth", "Wayne and Alice", "A"],
    ["What former District Attorney became the villain known as Two-Face?", "Floyd Lawton", "Jason Blood","Edward Nygma", "Harvey Dent", "D"],
    ["What villain did Arnold Schwarzenegger play in Batman & Robin?", "Two-Face", "Bane", "Mr.Freeze", "Killer Croc", "C"],
    ["What superpower does the Joker have?", "None", "Super Strength", "Super Speed", "Super Intelligence", "A"],
];



    function getQ(){
        if(num >= questions.length){
            $("pick").html("<div>You got"+correct+" of "+questions.length+" questions correct</div>");
            $("test").html("Test Completed");
            num = 0;
            correct = 0;
            return false;
        }

    
    $("test").html("Question "+(num +1)+" of "+questions.length);
        Q = questions[num][0];
        choiceA = questions[num][1];
        choiceB = questions[num][2];
        choiceC = questions[num][3];
        choiceD = questions[num][4];

        $("#questi").html(question);
        $("#quest").html(choiceA);
        $("#quest").html(choiceB);
        $("#quest").html(choiceC);
        $("#quest").html(choiceD);

        $("#button").on("click", )
    }
