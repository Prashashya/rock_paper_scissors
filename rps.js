var count1=0;
var count2=0;
var num1;
var header= document.querySelector("h1");

function restart()
{
  count1=0;
  count2=0;
  document.querySelectorAll("h5")[1].innerHTML=count2;
  document.querySelectorAll("h5")[0].innerHTML=count1;
}



function counterchecker()
{
  if(count1>=5 || count2>=5)
  {
    if(count1==5)
    {
      document.querySelector("h1").innerHTML="Player 1 is the winner! Please Refresh!";
      setInterval(restart,1000);
    }
    else{
      document.querySelector("h1").innerHTML="Player 2 is the winner! Please Refresh!";
      setInterval(restart,1000);
    }
  }
}



function get_random_color() {
    var letters = '0123456789ABCDEFabcdef'.split('');
    var color = '#';
    for (var i=0; i<6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function changeHeaderColor(){
  let colorinput= get_random_color();
  document.querySelector("h1").style.color= colorinput;
}

setInterval(changeHeaderColor, 1000);

document.getElementById("but1").onclick= function(){button1()};
function button1(){
  var n1= Math.floor(Math.random()*3)+1;
  var rpsimg1="pic"+n1+".jpg";
  document.querySelectorAll("img")[0].setAttribute("src", rpsimg1);
  num1=n1;
}

document.getElementById("but2").onclick= function(){button2()};
function button2()
{
  var num2= Math.floor(Math.random()*3)+1;
  var rpsimg2="pic"+num2+".jpg";
  document.querySelectorAll("img")[1].setAttribute("src", rpsimg2);


  if(num1==1 && num2==2)
  {
    document.querySelector("h1").innerHTML="Player 1 wins!"
    count1+=1;
    counterchecker();
    document.querySelectorAll("h5")[0].innerHTML=count1;
  }
  else if(num1==2 && num2==3)
  {
    document.querySelector("h1").innerHTML="Player 1 wins!"
    count1+=1;
    counterchecker();
    document.querySelectorAll("h5")[0].innerHTML=count1;
  }
  else if (num1==3 && num2==1) {
    document.querySelector("h1").innerHTML="Player 1 wins!"
    count1+=1;
    counterchecker();
    document.querySelectorAll("h5")[0].innerHTML=count1;
  }
  else if(num1==num2)
  {
    document.querySelector("h1").innerHTML="Draw!";
  }

  else{
    document.querySelector("h1").innerHTML="Player 2 wins!"
    count2+=1;
    counterchecker();
    document.querySelectorAll("h5")[1].innerHTML=count2;
  }




}
