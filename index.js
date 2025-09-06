let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let new_btn = document.querySelector("#new-btn");
let message_conatiner = document.querySelector(".msg-conatiner")
let msg = document.querySelector("#msg");

let turn0 = true

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turn0 = true;
    enableboxes();
    message_conatiner.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if(turn0) {
            box.innerHTML = "o";
            turn0 = false
        }else {
            box.innerHTML = "x"
            turn0 = true;
        }

        box.disabled = true;

        checkWinner()
    })
})

const disabledboxes = () => {
    for(let box of  boxes) {
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerHTML = `Congrulations, winner is ${winner}`;
    message_conatiner.classList.remove("hide");
    disabledboxes();
}

const checkWinner = () => {
    for(pattern of winpattern) {
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let posVal = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(posVal != "" && pos2Val != "" && pos3Val != "") {
            if(posVal === pos2Val && pos2Val === pos3Val) {
                console.log("winner", posVal);
                showWinner(posVal)
            }
        }
    }
};

new_btn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);
