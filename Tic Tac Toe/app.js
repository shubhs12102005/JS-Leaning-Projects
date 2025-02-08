<<<<<<< HEAD
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgConntainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const WinPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const ResetGame = () =>{
    turnO = true;
    enableBoxes();
    msgConntainer.classList.add("hide");
};

let b = document.getElementById("box");
boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if(turnO){   //It condition means turnO is true
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X"; 
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgConntainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of WinPattern) {
        let Pos1val = boxes[pattern[0]].innerText;
        let Pos2val = boxes[pattern[1]].innerText;
        let Pos3val = boxes[pattern[2]].innerText;

        if(Pos1val != "" && Pos2val != "" && Pos3val != ""){
            if(Pos1val === Pos2val && Pos2val === Pos3val){
                showWinner(Pos1val);    
            }
        }

    }
};

resetbtn.addEventListener("click",ResetGame);
newbtn.addEventListener("click",ResetGame);
=======
let btns = document.querySelectorAll(".btn");
let win = document.getElementById("win");
let messageContainer = document.querySelector(".message-container");
let main = document.querySelector("main");
let resetbtn = document.querySelector(".reset-btn");
let rebtn = document.getElementById("reset-btn");
let newbtn = document.getElementById("new-btn");

const WinPattern = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
];

let turnO = true;
btns.forEach((btn) =>{
    btn.addEventListener("click", () =>{
        if(turnO){
            btn.innerText = "O";
            turnO = false;
        } else {
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true;
        checkWinner();
    })
})


function checkWinner(){
    for(let pattern of WinPattern){
        let Pos1val = btns[pattern[0]].innerText;
        let Pos2val = btns[pattern[1]].innerText;
        let Pos3val = btns[pattern[2]].innerText;

        if(Pos1val != "" && Pos2val != "" && Pos3val != ""){
            if(Pos1val === Pos2val && Pos2val === Pos3val){
                showWinner(Pos1val);
            }
        }
    }
}

function showWinner(Pos1val){
    win.innerText = `Congratulations, ${Pos1val} is Winner`;
    messageContainer.classList.remove("hide");
    main.classList.add("hide");
    resetbtn.classList.add("hide");
}

function resetGame(){
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
    }
    turnO = true;
    messageContainer.classList.add("hide");
    main.classList.remove("hide");
    resetbtn.classList.remove("hide");

}


rebtn.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);

>>>>>>> f91ec13 (Added all projects)
