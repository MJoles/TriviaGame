

var score = 0
//setting clock seconds to 160
var count = 160

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
function timer(){
  count=count-1;  
    if (count <= 0)
  {
     clearInterval(counter);     
     return;
  }
   document.getElementById("timer").innerHTML="Time remaining: " + count + "seconds"; 
}

var clockRunning = false;

 function start() {
   intervalId = setInterval(count, 1000);
 }

 //trying to get questions in array
//var questions = $(".first, .second, .third, .fourth");
//console.log(questions);

//this puts the value of each button in console log
var userGuess1 = $(function(){
        $("#firstChoices").click(function() {     
           console.log($("input[name=choice1]:checked").val());
           
        });
    });

    var correctCounter = 0;
    var incorrectCounter = 0;
    var allAnswered = false;

function userCorrect () {
    if (userGuess1 == "correct") {
        correctCounter++
    }
    else {
        incorrectCounter++
    }
    console.log(correctCounter);
}



