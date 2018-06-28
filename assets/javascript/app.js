$("#start").click(function(){
    $("#questions").empty();
});
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
   document.getElementById("timer").innerHTML="Time remaining: " + count + " seconds left"; 
}

var clockRunning = false;

 function start() {
   intervalId = setInterval(count, 1000);
 }

 //trying to get questions in array
var questions = $(".first, .second, .third, .fourth");
$(questions).each(function() {
    console.log(this)
})
console.log(questions);

//this puts the value of each button in console log for Q1
var userGuess1 = $(function(){
        $("#firstChoice").click(function() {     
           console.log($("input[name=choice1]:checked").val());
           
        });
        
    });
//this puts the value of each button in console log for Q2
var userGuess2 = $(function(){
    $("#secondChoice").click(function() {     
        console.log($("input[name=choice2]:checked").val());
        
    });
    
});
//this puts the value of each button in console log for Q3
var userGuess3 = $(function(){
    $("#thirdChoice").click(function() {     
        console.log($("input[name=choice3]:checked").val());
        
    });
    
});

//this puts the value of each button in console log for Q4
var userGuess4 = $(function(){
    $("#fourthChoice").click(function() {     
        console.log($("input[name=choice4]:checked").val());
        
    });
    
});


/*
$(document).on("click", ".answer", function(){
    
});*/

$("#submit").on("click", function(){
    var correctCounter = 0;
    var incorrectCounter = 0;
       

    function userCorrect () {    
        if (userGuess1 === "correct") {
            correctCounter++;
            $('#win').text(correctCounter);
            console.log(correctCounter);
        }
        else {
            incorrectCounter++
            $('#loss').text(incorrectCounter);
        }
    }
});