/*
tell to input 
generate random number from 1 2 3 and return r p s.
won or lose based on selection
    case insensitive
game fn for 5 rounds
*/ 

let playerSelection;
let score = 5;

function capitalize(baaa)
{
    let a = baaa.slice(0,1);
    let b = baaa.slice(1);
    let a1 = a.toUpperCase();
    let b1 = b.toLowerCase();
    //console.log(a1+b1);
    //baaa=a1+b1;
    return(a1+b1);
}

function getRndInteger(){
    //console.log( Math.floor(Math.random()*3)+1);
    return( Math.floor(Math.random()*3)+1);
}

function computerPlay(a){
        if(a===1){
            return("Rock");
        }
        else if(a===2){
            return("Paper");
        } 
        else if(a===3){
            return("Scissor");
        }
}


let computerSelection;
computerSelection = computerPlay(getRndInteger());
//console.log(computerSelection);

function getResult(abc){
    if (abc==="win"){
        score++;
        return("You Won! " + playerSelection + " beats " + computerSelection);
    }
    else if (abc==="loss"){
        score--;
        return("You Lose! " + computerSelection + " beats " + playerSelection);
    }
}
function playRound(i,u){
    if(i===u){
        return("Tie!");
    }
    else if(i==="Rock"){
        if(u==="Paper"){console.log(getResult("loss"));}
        else if(u==="Scissor"){console.log(getResult("win"));}
    }
    
    else if(i==="Paper"){
        if(u==="Scissor"){console.log(getResult("loss"));}
        else if(u==="Rock"){console.log(getResult("win"));}
    }

    else if(i==="Scissor"){
        if(u==="Rock"){console.log(getResult("loss"));}
        else if(u==="Paper"){console.log(getResult("win"));}
    }
}

function game(){
    for(let i = 0; i<5; i++){

        playerSelection = prompt("Can you figure out how to win every game?","Type rock, paper or scissor!");
        playerSelection=capitalize(playerSelection);
        //computerSelection = computerPlay(getRndInteger());
        let showResult = playRound(playerSelection,computerSelection);
        console.log(showResult);
        //newmode
        computerSelection = playerSelection; 
    }
}

game();
if (score<5){
    alert("You lost this game of 5 rounds!");
}
else {
    alert("You won this game of 5 rounds!")
}
