"use strict"
window.addEventListener("DOMContentLoaded",() =>{
  const game = document.querySelector("#game");
  const board = game.querySelector("#board");
  const controls= game.querySelector(".controls");
  const btn = controls.querySelector(".btn");
  var boxes=Array.from(board.querySelectorAll("div"));
  var status=game.querySelector("#status");
  let gameActive=false;
  var currPlayer="X"

  btn.addEventListener("click", function(){
    for(const arr of boxes){
      arr.classList.add("square");
    }  
    gameActive=true;
    //status.textContent="Hello";
    //status.id="status.you-won";
    
  });

  const winningMoves=[[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];

  var checkWinner=function(){
    for(let i;i<winningMoves.length;i++){
      const condition=winningMoves[i];
      console.log(condition);
      const a=letterOrderings[condition[0]];
      const b=letterOrderings[condition[1]];
      const c=letterOrderings[condition[2]];
  
      if (a=="" || b=="" || c==""){
        continue;
      }else if(a==b==c){
        status.textContent="Congratulations! "+ currPlayer +" is the Winner!";
        gameActive=false;
      }
    
  };}
  const winner=() =>{
    if (letterOrderings[0]===currPlayer){
      if(letterOrderings[3]===currPlayer && letterOrderings[6]===currPlayer){
        status.textContent="Congratulations! "+ currPlayer +" is the Winner!";
        status=document.getElementById("status");
        status.classList.add("you-won"); 
        return true;
      }
      if(letterOrderings[1]===currPlayer && letterOrderings[2]===currPlayer){
        status.textContent="Congratulations! "+ currPlayer +" is the Winner!";
        status=document.getElementById("status");
        status.classList.add("you-won"); 
        return true;
      }
      if(letterOrderings[4]===currPlayer && letterOrderings[8]===currPlayer){
        status.textContent="Congratulations! "+ currPlayer +" is the Winner!";
        status=document.getElementById("status");
        status.classList.add("you-won"); 
        return true;
      }
    }
    if(letterOrderings[2]===currPlayer){
      if(letterOrderings[5]===currPlayer && letterOrderings[8]===currPlayer){
        status.textContent="Congratulations! "+ currPlayer +" is the Winner!";
        status=document.getElementById("status");
        status.classList.add("you-won"); 
        return true;
      }
      if(letterOrderings[4]===currPlayer && letterOrderings[6]===currPlayer){
        status.textContent="Congratulations! "+ currPlayer +" is the Winner!";
        status=document.getElementById("status");
        status.classList.add("you-won"); 
        return true;
      }
    }if(letterOrderings[3]===currPlayer){
      if(letterOrderings[4]===currPlayer && letterOrderings[5]===currPlayer){
        status.textContent="Congratulations! "+ currPlayer +" is the Winner!";
        status=document.getElementById("status");
        status.classList.add("you-won"); 
        return true;
      }
    }
    if(letterOrderings[6]===currPlayer){
      if(letterOrderings[7]===currPlayer && letterOrderings[8]===currPlayer){
        status.textContent="Congratulations! "+ currPlayer +" is the Winner!";
        status=document.getElementById("status");
        status.classList.add("you-won"); 
        return true;
      }}
      
  };

  /*const restart=()=>{
    //status.textContent="Hello";
    letterOrderings.forEach((letter,i)=>{
      letterOrderings[i]="";
    });
    console.log(letterOrderings);

    for(var box of boxes){
      box.removeChild(box.lastChild);
      box.removeChild(box.firstChild);
      box.innerText="";
      status.innerText="Move your mouse over a square and click to play an X or an O.";  }

    };*/
    
var currPlayer="X";
 var filledIndex=[];
 let letterOrderings=["","","","","","","","",""];
 boxes.forEach((box,index)=> {
  box.addEventListener("click",function(){
    if(box.innerHTML=="" && gameActive==true){
      if(currPlayer=="X"){
        let xtext=document.createElement("p");
        let xtextinfo=document.createTextNode("");
        xtextinfo.textContent=currPlayer;
        box.appendChild(xtext);
        xtext.appendChild(xtextinfo);
        xtext.setAttribute("class","square X");
        //var squareX=this.getElementsByClassName("square X");
        //xtext.classList.add(squareX);
        letterOrderings[index]=xtextinfo.textContent;
        if(winner()){
          status.innerText="Congratulations! "+ currPlayer +" is the Winner!";
          //restart();
          return;
        };
        //letterOrderings=letterOrderings.splice(index, 2, xtextinfo);
        currPlayer="O";
 
      }else if(currPlayer=="O"){
        let otext=document.createElement("p");
        let otextinfo=document.createTextNode("");
        otextinfo.textContent=currPlayer;
       //s box.classList.remove("xtext");
        box.appendChild(otext);
        otext.appendChild(otextinfo);
        otext.setAttribute("class","square O");
        otext.classList.add(":square.O");
        letterOrderings[index]=otextinfo.textContent;
        if(winner()){
          status.innerText="Congratulations! "+ currPlayer +" is the Winner!";
          //restart();
          return;
        };
        currPlayer="X";
      };
 }})
 
});
 //console.log(letterOrderings);

for (const box of boxes) {
  box.addEventListener("mouseenter", function(){
    box.classList.add("hover");
  });
  box.addEventListener("mouseleave",function(){
    box.classList.remove("hover");
    box.classList.add("hover.O");
  });
}

btn.addEventListener("click",function(){
  letterOrderings=["","","","","","","","","",""];
  for(var box of boxes){
    while(box.firstChild){
      box.removeChild(box.firstChild);
    }
  }
  status.classList.remove("you-won");
  status.innerText="Move your mouse over a square and click to play an X or an O.";  


});})

