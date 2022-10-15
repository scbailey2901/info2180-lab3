"use strict"
window.addEventListener("DOMContentLoaded",() =>{
  const game = document.querySelector("#game");
  const board = game.querySelector("#board");
  const controls= game.querySelector(".controls");
  const btn = controls.querySelector(".btn");
  const boxes=Array.from(board.querySelectorAll("div"));
  const status=game.querySelector("#status");
  let gameActive=false;

  btn.addEventListener("click", function(){
    for(const arr of boxes){
      arr.classList.add("square");
    }  
    gameActive=true;
  });

  const winningMoves=[[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]]
  //var currentPlayer="X";
  //var cells = ["","","","","","","","",""];
  //const cellUpdate=function(index){
  //  cells[index]=currentPlayer;
 // }
 /*for(const arr of boxes){
  let currPlayer="O";
  var filled=[];
  var symbols=["X","O"];
  var activePlayers=0;
  let text=document.createElement("p");
  let textinfo=document.createTextNode("ht");
  game.appendChild(text);
  text.appendChild(textinfo);
  text.setAttribute("class","`:square.${currPlayer}`");
  text.classList.add(`:square.${currPlayer}`);
}//remember for */



var currPlayer="X";
 var filledIndex=[];
 let letterOrderings=["","","","","","","","",""];
 for(const box of boxes){
  box.addEventListener("click",function(){
    if(box.innerHTML==""){
      letterOrderings.push(currPlayer);
      if(currPlayer=="X"){
        let xtext=document.createElement("p");
        let xtextinfo=document.createTextNode("");
        xtextinfo.textContent=currPlayer;
        box.appendChild(xtext);
        xtext.appendChild(xtextinfo);
        xtext.setAttribute("class",":square.X");
        xtext.classList.add(":square.X");
        currPlayer="O";
      }else if(currPlayer=="O"){
        let otext=document.createElement("p");
        let otextinfo=document.createTextNode("");
        otextinfo.textContent=currPlayer;
       //s box.classList.remove("xtext");
        box.appendChild(otext);
        otext.appendChild(otextinfo);
        otext.setAttribute("class",":square.O");
        otext.classList.add(":square.O");
        currPlayer="X";
      }

      boxes.forEach(box => {
        letterOrderings.push(box.innerText);
        
      });
    }
})};
console.log(letterOrderings);
  
for (const box of boxes) {
  box.addEventListener("mouseenter", function(){
    box.classList.add("hover");
  });
  box.addEventListener("mouseleave",function(){
    box.classList.remove("hover");
    box.classList.add("hover.O")
  });
}

var checkWinner=function(){
  for(let i;i<winningMoves.length;i++){
    const condition=winningMoves[i];
    const a=letterOrderings[condition[0]];
    const b=letterOrderings[condition[1]];
    const c=letterOrderings[condition[2]];

    if (a=="" || b=="" || c==""){
      continue;
    }else if(a==b==c){
      status.innerHTML=`Congradulations! ${currPlayer} is the Winner!`
      gameActive=false;
    }
  }
};





  


});
