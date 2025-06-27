let userScore=0;
let compScore=0;
let name=prompt("Enter your Name");
const username=document.querySelector("#name");
username.innerText=`${name}`;
const choices=document.querySelectorAll(".choice");//selecting every element which has the class 'choice'
const msg=document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice =() =>{
    const options=["rock","paper","scissors"];
     const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    console.log("It is a draw!");
    msg.innerText=`It's a draw! Both chose the same option.`;
    msg.style.backgroundColor="LightGray";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You win!");
        msg.innerText=`${name} Wins!${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="LightGreen";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("Computer wins!");
        msg.innerText=`Computer Wins. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
    }

const playGame=(userChoice)=>{//for comp choice
    
console.log("user choice is=",userChoice);
const compChoice=genCompChoice();
console.log("comp choice is=",compChoice)
if(userChoice===compChoice){
drawGame();
}else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
     
}
    }
choices.forEach((choice)=>{//we want individual choice
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
playGame(userChoice);
    });
});
let modeBtn=document.querySelector("#btn1");
let body=document.querySelector("body");
let currMode="light";
modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        
        currMode="light";
         body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log("Mode chnaged to", currMode);
})

