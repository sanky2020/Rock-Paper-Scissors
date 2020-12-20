function computerPlay(){ //function for the computer to select (rock/paper/scissor) randomly

        let random = Math.floor((Math.random()*3)); //returns random number between 1 to 3

        if (random==1){ // assigned no.1 to "rock"
            return "rock";
        }

        else if (random==2){ //assigned no.2 to "paper"
            return "paper";
        }

        else{ return "scissor";} //assigned the remaining number to "scissor"
    }

    let win=0,lose=0,tie=0,result,display; //defining variables globally (win,lose,tie) and declaring them with the value 0
    
    function playRound(playerSelection, computerSelection) {

        if( playerSelection=="rock" && computerSelection=="scissor" || //Setting up game's rule.
        playerSelection=="paper" && computerSelection=="rock" || 
        playerSelection=="scissor" && computerSelection=="paper"){ 
            win++; 
            result= ("You selected"+" "+playerSelection+ " & Computer selected"+" "+computerSelection+ "<br><br> " + playerSelection+ " beats "+ computerSelection+"<br><br>"+ "Player = "+ win +", "+"Computer = "+lose+", "+" Tie = "+tie);
            document.getElementById('result').innerHTML= result;
            return;
        }
        else if(playerSelection==computerSelection){ 
            tie++;
            result= ("You both Selected"+" "+playerSelection+ "<br><br> " + " Its a Tie "+"<br><br>"+ "Player = "+ win +", "+"Computer = "+lose+", "+" Tie = "+tie);
            document.getElementById('result').innerHTML= result;
            return;
        }
        else{
            lose++; 
            result= ("You selected"+" "+playerSelection+ " & Computer selected"+" "+computerSelection+ "<br><br> " + computerSelection+ " beats "+ playerSelection+"<br><br>"+ "Player = "+ win +", "+"Computer = "+lose+", "+" Tie = "+tie);
            document.getElementById('result').innerHTML= result;
            return;
        }        
}
        const rock= document.querySelector('#rock');
        rock.addEventListener('click',()=>{
            playerOption="rock";
            game();
        });

        const paper= document.querySelector('#paper');
        paper.addEventListener('click',()=>{
            playerOption="paper";
            game();
        });

        const scissor= document.querySelector('#scissor');
        scissor.addEventListener('click',()=>{
            playerOption="scissor";
            game();
        });

        const reset= document.querySelector('#reset');
        reset.addEventListener('click',() =>{
            win=0,lose=0,tie=0;
        });

        const playagain= document.querySelector('#playagain');
        playagain.addEventListener('click',() =>{
            win=0,lose=0,tie=0;
        });
    
function game(){ //main function ()

let playerSelection = playerOption; 
let computerSelection = computerPlay(); //adding computer selected value to variable computerSelection
playRound(playerSelection,computerSelection); 

if(win==5 ||lose==5){
    alert('Game over! Press Ok to see the result');
    
    console.log("Number of Game Won"+" = "+win); //displays winning count
    console.log("Number of Game Lost"+" = "+lose); //displays lost count
    console.log("Number of Game Tied"+" = "+tie); //diaplays game tied count

    if(win>lose){       //applying condition to decide whether you won or lost
        result +=("<br><br>"+"Result : YOU WON");
} 
else {    
    result +=("<br><br>"+"Result : YOU LOST");
}
document.getElementById('result').innerHTML= result;
return;
}
}
