
var color = ["green","red","yello","blue"];
var gamePattern = [];
var userClickeddPattern = [];
var level = 0;
var started = false;
$(".btn").click(function(){

    var userPattern = this.id;
    userClickeddPattern.push(userPattern);
    playSound(userPattern);
    answerCheck(userClickeddPattern.length-1);
    animation(userPattern);

   
});
function nextSequence(){

    userClickeddPattern=[];
    level++;
    $("#level-title").text("level " + level);
    var randomNum = Math.floor((Math.random() * 4));
    var randomColor = color[randomNum];
    gamePattern.push(randomColor);

    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColor);
   

   
    
}
function playSound(name){
    
    var audio = new Audio("./sounds/" + name + ".mp3")
    audio.play();
    
       
}

function animation(name){

    $("#" + name).addClass("pressed");
    setTimeout(function () {
         $("#" + name).removeClass("pressed");
    },100);
}

$(document).keypress(function(){
    if(!started)
    {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
        

});

function answerCheck(currentLevel){
    if(gamePattern[currentLevel] === userClickeddPattern[currentLevel])
    {
        if(gamePattern.length === userClickeddPattern.length)
            {
                setTimeout(function(){
                    nextSequence();
                }, 1000);
            }
    }
    
    else
    {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
    }
}
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}