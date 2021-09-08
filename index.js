var randomnumber1=Math.floor(Math.random()*6+1);
var randomdice1= "dice"+randomnumber1+".png";
var imgsource1= "images/" + randomdice1;
document.querySelector(".img1").setAttribute("src",imgsource1);
var randomnumber2=Math.floor(Math.random()*6+1);
var randomdice2= "dice"+randomnumber2+".png";
var imgsource2= "images/" + randomdice2;
document.querySelector(".img2").setAttribute("src",imgsource2);
if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="🤩Player1 wins";
}
if(randomnumber1<randomnumber2)
{
    document.querySelector("h1").innerHTML="Player2 wins🤩";
}if(randomnumber1===randomnumber2)
{
    document.querySelector("h1").innerHTML="Draw";
}