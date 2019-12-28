var one="arrow";
var two="Inverted arrow";
var three="x";
var four="big rectangle";
var five="small rectangle";
var six="Hat";
var seven="Big triangle";
var eight="small triangle";
function nextPiece(){
  var y=Math.random()*2;
  var x="";
  if (y<1){
    x="  OUT";
  }
  else{
    x="  IN";
  }
  var i=Math.random()*8;
  if (i<1){
    document.getElementById("answer").innerHTML= one+x;
  }
  else if(i<2){
    document.getElementById("answer").innerHTML= two+x;
  }
  else if(i<3){
    document.getElementById("answer").innerHTML= three+x;
  }
  else if(i<4){
    document.getElementById("answer").innerHTML=four+x;
  }
  else if(i<5){
    document.getElementById("answer").innerHTML= five+x;
  }
  else if(i<6){
    document.getElementById("answer").innerHTML= six+x;
  }
  else if(i<7){
    document.getElementById("answer").innerHTML= seven+x;
  }
  else if(i<8){
    document.getElementById("answer").innerHTML= eight+x;
  }
}
