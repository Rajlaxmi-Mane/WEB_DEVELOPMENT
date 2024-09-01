let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turno = true;
let newGame = document.querySelector("#newGame");
let msg = document.querySelector(".msg-container");
let msgtxt = document.querySelector("#msg");


let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turno = true;
    enableBoxes();
    msgtxt.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno == true) {
            box.innerText = "o";
            turno = false;

        }
        else {
            box.innerText = "x";
            turno = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msgtxt.innerText = ` Congratulation winner is ${winner} `;
    msgtxt.classList.remove("hide");
    disableBox();
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {
                console.log(` winner is ${position1}`);
                showWinner(position1);
            }
        }
    }
}

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame)
