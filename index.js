var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomeImg1 = "./images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomeImg1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomeImg2 = "./images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomeImg2);

if(randomNumber1 > randomNumber2)
{
    var winner = "player1";
}
else if(randomNumber1 === randomNumber2)
{
    winner = "draw";
}
else
{
    winner = "player2";
}

document.getElementsByClassName('winner')[0].innerHTML = winner;


