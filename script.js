let userScore = 0; //user score
let compScore = 0;  //computer score
let result ='';     //result from each round 
// function containing the selection of computer
function computerPlay()
    {
        let items = ['Rock', 'Paper', 'Scissors'];
        let compChoice = items[Math.floor(Math.random()* items.length)];
        return compChoice; //return the selection of the computer.
    }
//function that user plays with computer
function playRound(playerSelection, computerSelection)
    {   
        if((playerSelection == 'PAPER')&&(computerSelection =='ROCK')||
        (playerSelection == 'ROCK')&&(computerSelection =='SCISSORS')||
        (playerSelection == 'SCISSORS')&&(computerSelection =='PAPER'))
        {
            result = ` You Win!! ${playerSelection} beats ${computerSelection} `;
            userScore += 1;
        //compScore -= 1;
        return(" Your Score " +userScore+ " Computer Score " +compScore+"  "+ result);
        }
        else if((playerSelection =='ROCK') && (computerSelection == 'PAPER')||
            (playerSelection == 'SCISSORS')&&(computerSelection =='ROCK')||
            (playerSelection == 'PAPER')&&(computerSelection =='SCISSORS'))
        {
            result = ` You loose!! ${computerSelection} beats ${playerSelection} `;
            compScore += 1;
            //userScore -= 1;
            return(" Your Score " +userScore+ " Computer Score " +compScore+"  "+ result);
        }
        else
        {
            //else it is a tie
            result = "It's a Tie!";
            return(" Your Score " +userScore+ " Computer Score " +compScore+"  "+ result);
        } 
    }
               
function game()
    {
        for(let i=0; i< 5; i++)
        {   
            //calling function for computer to select
            let computerSelection = computerPlay(); 
            computerSelection = computerSelection.toUpperCase(); 
            //asking user to select
            let playerSelection = prompt('Type "Rock" or "Paper" or "Scissors"'); 
            playerSelection = playerSelection.toUpperCase();
            // calling the playRound to play
            let play = playRound(playerSelection, computerSelection);
            //console.log(play);
            alert(play);
        }
        
        if (userScore > compScore)
        {
            //console.log(" You are the Winner! with total score: "+userScoretotal);
            alert(" You are the Winner! with total score:  "+userScore);
        }
        else if(userScore == compScore)
        {
            //console.log(" Computer is the Winner! with total score: "+compScoretotal);
            alert(" Both of your scores are same!! Computer score: "+compScore +" equals to Player score: "+ userScore);
        }
        else
        {
            alert(" Computer is the Winner! with total score: " +compScore);
        }    
    }
//calling the game to paly 5 rounds    
 game();


