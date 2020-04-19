var randomNumber1=Math.random();
randomNumber1*=6;
randomNumber1=Math.floor(randomNumber1)+1;
var string1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src", string1);

var randomNumber2=Math.random();
randomNumber2*=6;
randomNumber2=Math.floor(randomNumber2)+1;
var string2 ="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", string2);


if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player1Won🚩";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player2Won🚩";
}
else
{
  document.querySelector("h1").innerHTML="DRAW🏁";
}
