$('button').click(function(){
    $('#quiz').slideDown();
    $(this).hide();
});

var score = 0;
var questionNumber = 0;
var count = 120
var questionsArray = [
    //First Question
    {
        answer: 1,
        question: "In what year did Illinois become the 21st U.S. state?",
        possibleAnswers: ["1815", "1818", "1819"]
        
    },

    //Second Question
    {
        answer: 2,
        question: "How many square miles were destroyed in the Great Chicago Fire of 1871?",
        possibleAnswers: ["2", "3","4"]
    },

];
console.log(questions);

var correctCounter = 0;
var incorrectCounter = 0;
var allAnswered = false;



var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
function timer(){
  
    count=count-1;
  
    if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }
   document.getElementById("timer").innerHTML="Time remaining: " + count + "seconds"; // watch for spelling
}
    


//this is where we'll create our questions//
function createQuestions (){
    console.log('running createQuestions');
for (var i = 0; i < questionsArray.length; i++) {
    var questionWrap = $("<div id = questions>");
    var questionP = $("<p>" + questionsArray[i].question + "</p>");
    var ul = $('<ul>');
    var questionBox = $('#questions');
    questionWrap.append(questionP);
    questionBox.append(questionWrap);
    for(var j = 0; j < questionsArray[i].possibleAnswers.length; j++){
        var li = $('<input type=radio class="answers" data-correct="'+ questionsArray[i].answer + newFunction() +'" data-userAnswer="' + j + '">' + questionsArray[i].possibleAnswers[j] + "</li>");
        ul.append(li)
    }
    questionBox.append(ul);
    
  }


    function newFunction() {
        return " ";
    }
} 
createQuestions();

$(document).on("click", ".answers", function(){
    handleAnswerClick();
    
})

function runGame(){
    createQuestions();
    timer();
    endgame();
}

function handleAnswerClick(){
    var userguess = $(this).attr('data-userAnswer');
    var correctguess = $(this).attr('data-correct');
    if (userguess === correctguess) {
        correctCounter++
    } else {
        incorrectCounter++
    }
}