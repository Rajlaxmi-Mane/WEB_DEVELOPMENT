let userScore = 0;
let compScore = 0;

const user_score_txt=document.querySelector("#user-score");
const comp_score_txt=document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genComputerChoice = () => {
    // rock  paper  scissor
    const options = ["rock", "paper", "scissors"];

    // generating random index for selecting any one of the option of options array
    let randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

const drawGame=()=>{
    console.log("draw");
    msg.innerText="It's draw, play again."
    msg.style.backgroundColor="tomato";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin) {
        console.log("you Win");

        // updating the msg container
        msg.innerText=`You win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

        // if userwin score will be updated
        userScore++;
        user_score_txt.innerText=userScore;
        
    }else{
        console.log("you loose");
        msg.innerText=`You lose ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red"

        // if computers win computer score will be updated
        compScore++;
        comp_score_txt.innerText=compScore;
    }
}

const playGame = (userChoice) => {

    console.log(`user choice = ${userChoice}`);
    
    //generate computer choice
    const compChoice=genComputerChoice();
    console.log(`computer choice= ${compChoice}`);
    if (userChoice==compChoice) {
        // draw game
        drawGame();
    }else{
        let userWin=true;
        if (userChoice==="rock") {
            //compchoices =scissors, paper
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            // compchoices=rock scissors
           userWin= compChoice==="scissors"?false:true;
        }
        else{
           //compchoices= rock,paper
           userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice,);
    }
    

}
// whwnever user click on any choice immediately addEventListener gets invokeds
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(`${userChoice} was clicked`);
        playGame(userChoice);
    })
})