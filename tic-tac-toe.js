window.addEventListener("DOMContentLoaded",() =>{
  const game = document.querySelector("#game");
  const board = game.querySelector("#board");
  const controls= game.querySelector(".controls");
  const btn = controls.querySelector(".btn");
  const boxes=Array.from(board.querySelectorAll("div"));

  btn.addEventListener("click", function(){
    for(const arr of boxes){
      arr.classList.add("square");
    }
  })
});


