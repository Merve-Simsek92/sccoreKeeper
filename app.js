let scorePlayer1=document.querySelector("#spanPlayer1");
let scorePlayer2=document.querySelector("#spanPlayer2");

let button1=document.querySelector("#btnPlayer1");
let button2=document.querySelector("#btnPlayer2");
let btnReset=document.getElementById("btnReset")

let inputScore=document.querySelector("#winScore")

let scoreP1=0;
let scoreP2=0;
let winScore=5;


button1.addEventListener("click",increaseP1);
button2.addEventListener("click",increaseP2);
btnReset.addEventListener("click",resetScores);
inputScore.addEventListener("change",()=> resetScores());

function endGame(winner){
  button1.disabled=true;
  button2.disabled=true;
  if(winner===1){
    scorePlayer1.style.color="Green";
    scorePlayer2.style.color="rgb(255,0,0)";

  }else if(winner===2){
    scorePlayer2.style.color="Green";
    scorePlayer1.style.color="rgb(255,0,0)";
}}
function increaseP1(){
  scoreP1++;
  if(scoreP1>=winScore) endGame(1);

  scorePlayer1.innerHTML=scoreP1;
}
function increaseP2() {
  scoreP2++;
  if(scoreP2>=winScore) endGame(2);
  scorePlayer2.innerHTML=scoreP2;
}
function resetScores(){
  scoreP1=0;
  scoreP2=0;
  winScore=inputScore.value ||5;
  if(winScore<=0) winScore=5;
    inputScore.value=winScore;
    scorePlayer1.innerHTML=scoreP1;
    scorePlayer2.innerHTML=scoreP2;
    button1.removeAttribute("disabled");
    button2.removeAttribute("disabled");
    scorePlayer1.style.color="black"
    scorePlayer1.style.color="black";
    
  }




// ()=>{
// if(scoreP1<winScore){
//   scoreP1++;
//   scorePlayer1.innerHTML=scoreP1;
  
// }
//   else{
     
//   }
// })