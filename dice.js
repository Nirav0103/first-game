
var player1 = Math.floor(Math.random() * 6) + 1 ;
var image1 = "./images/dice" + player1 + ".png";
document.querySelector(".img1").setAttribute("src", image1);

var player2 = Math.floor(Math.random() * 6) + 1 ;
var image2 = "./images/dice" + player2 + ".png";
document.querySelector(".img2").setAttribute("src", image2);

if(player1 > player2)
{
    document.querySelector(".winner").innerHTML = "winner is player1";
}
else if(player1 === player2)
{
    document.querySelector(".winner").innerHTML = "draw";
}
else
{
    document.querySelector(".winner").innerHTML = "winner is player2";
}



