
let boxes=document.querySelectorAll(".box");
let btn=document.querySelector("#reset-btn");
let msg=document.querySelector("#msg");
let  newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msgcontainer");
let turn0=true;
const patt=[[0 ,1, 2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
  // console.log('clicked');
   if(turn0){
    box.innerHTML="0";
    turn0=false;
   }
   else{
    box.innerHTML="X";
    turn0=true;
   }
   box.disabled=true;
   checkwinner();
    })

})
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
msg.innerText=`Congratulation, Winner is ${winner}`;
msgcontainer.classList.remove("hide");
disablebox();
}
const checkwinner=()=>{
    for( let pattern of patt){
      let pos1val=boxes[pattern[0]].innerText;
      let pos2val=boxes[pattern[1]].innerText;
      let pos3val=boxes[pattern[2]].innerText;
      if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val==pos2val&&pos2val==pos3val){
            console.log("Winner",pos1val);
            showWinner(pos1val);
        }
      }
    }
}
newgamebtn.addEventListener("click",resetgame);
reset-btn.addEventListener("click",resetgame);
