let userScore = 0; //user score
let compScore = 0;  //computer score
let result ='';     //result from each round 
let userScoretotal = 0; //total user score
let compScoretotal = 0; //total computer score

// function containing the selection of computer
function computerPlay()
    {
    let items = ['Rock', 'Paper', 'Scissors'];
    let compChoice = items[Math.floor(Math.random()* items.length)];
    return compChoice; //return the selection of the computer.
    }
//function that user plays with computer
function playRound(playerSelection, computerSelection)
    {   //if both select same, it is a tie
        if(((playerSelection == 'PAPER') && (computerSelection =='PAPER'))||
          ((playerSelection == 'ROCK') && (computerSelection =='ROCK'))||
          ((playerSelection =='SCISSORS'))&& ((computerSelection == 'SCISSORS')))
            {
                result = "It's a Tie!";
                return(" Your Score " +userScore+ " Computer Score " +compScore+"  "+ result);
                
            }
        else if(((playerSelection == 'PAPER')&&(computerSelection =='ROCK'))||
               ((playerSelection == 'ROCK')&&(computerSelection =='SCISSORS'))||
               ((playerSelection == 'SCISSORS')&&(computerSelection =='PAPER')))

            {
                result = " You Win!! Paper beats Rock! ";
                userScore += 1;
                //compScore -= 1;
                return(" Your Score " +userScore+ " Computer Score " +compScore+"  "+ result);
                 
            }
        else if(((playerSelection =='ROCK') && (computerSelection == 'PAPER'))||
               ((playerSelection == 'SCISSORS')&&(computerSelection =='ROCK'))||
               ((playerSelection == 'PAPER')&&(computerSelection =='SCISSORS')))
            {
                result = " You loose!! Paper beats Rock! ";
                compScore += 1;
                //userScore -= 1;
                return(" Your Score " +userScore+ " Computer Score " +compScore+"  "+ result);
            }
        /* else if((playerSelection == 'SCISSORS')&&(computerSelection =='ROCK'))
            {
                result = " You loose!! Rock beats Scissors! ";
                compScore += 1;
                //userScore -= 1;
                return(" Your Score " +userScore+ " Computer Score " +compScore+"  "+ result);
            }
        else if((playerSelection == 'ROCK')&&(computerSelection =='SCISSORS'))
            {
                result = " You Win!! Rock beats Scissors! ";
                //compScore -= 1;
                userScore += 1;
                return(" Your Score " +userScore+ " Computer Score " +compScore+"  "+ result);
            }
        else if((playerSelection == 'PAPER')&&(computerSelection =='SCISSORS'))
            {
                result = " You loose!! Scissors beats Paper! ";
                compScore += 1;
                //userScore -= 1;
                return(" Your Score " +userScore+ " Computer Score " +compScore+"  "+ result);
            }
        else if((playerSelection == 'SCISSORS')&&(computerSelection =='PAPER'))
            {
                result = "  You Win!! Scissors beats Paper!";
                //compScore -= 1;
                userScore += 1;
                return(" Your Score: " +userScore+ " Computer Score: " +compScore+"  "+ result);
            } */
               
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
        //Adding total scores 
        userScoretotal += userScore;
        compScoretotal += compScore;
        //comparing user score with computer score
    if (userScoretotal > compScoretotal)
        {
        //console.log(" You are the Winner! with total score: "+userScoretotal);
        alert(" You are the Winner! with total score:  "+userScoretotal);
        }
    else if(userScoretotal == compScoretotal)
        {
        //console.log(" Computer is the Winner! with total score: "+compScoretotal);
        alert(" Both of you scores same!! with computer score: "+compScoretotal +" = "+ userScoretotal);
        }
    else{
        alert(" Computer is the Winner! with total score: " +compScoretotal);
        }    
    }
//calling the game to paly 5 rounds    
 game();


