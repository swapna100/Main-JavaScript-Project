var userScore = 0;
var compScore = 0;
var result ='';
var userScoretotal = 0;
var compScoretotal = 0;


function computerPlay()
{
var items = ['Rock', 'Paper', 'Scissors'];
let compChoice = items[Math.floor(Math.random()* items.length)];
return compChoice;
}
function playRound(playerSelection, computerSelection)
    {   
            if(((playerSelection == 'PAPER') && (computerSelection =='PAPER'))||
              ((playerSelection == 'ROCK') && (computerSelection =='ROCK'))||
              ((playerSelection =='SCISSORS'))&& ((computerSelection == 'SCISSORS')))
            {
                result = "It's a Tie!";
                return(" You Scored " +userScore+ " Computer Scored " +compScore+"  "+ result);
                
            }
            else if((playerSelection == 'PAPER')&&(computerSelection =='ROCK'))
            {
                 result = "Paper beats Rock! You Won!!";
                 userScore += 1;
                 compScore -= 1;
                 return(" You Scored " +userScore+ " Computer Scored " +compScore+"  "+ result);
                 
            }
            else if((playerSelection =='ROCK') && (computerSelection == 'PAPER'))
            {
                result = "Paper beats Rock!You loose!!";
                compScore += 1;
                userScore -= 1;
                return(" You Scored " +userScore+ " Computer Scored " +compScore+"  "+ result);
            }
            else if((playerSelection == 'SCISSORS')&&(computerSelection =='ROCK'))
            {
                result = "Rock beats Scissors!You loose!!";
                compScore += 1;
                userScore -= 1;
                return(" You Scored " +userScore+ " Computer Scored " +compScore+"  "+ result);
            }
            else if((playerSelection == 'ROCK')&&(computerSelection =='SCISSORS'))
            {
                result = "Rock beats Scissors!You Won!!";
                compScore -= 1;
                userScore += 1;
                return(" You Scored " +userScore+ " Computer Scored " +compScore+"  "+ result);
            }
            else if((playerSelection == 'PAPER')&&(computerSelection =='SCISSORS'))
            {
                result = "Scissors beats Paper!You lost!!";
                compScore += 1;
                userScore -= 1;
                return(" You Scored " +userScore+ " Computer Scored " +compScore+"  "+ result);
            }
            else if((playerSelection == 'SCISSORS')&&(computerSelection =='PAPER'))
            {
                result = "Scissors beats Paper!You Won!!";
                compScore -= 1;
                userScore += 1;
                return(" You Scored " +userScore+ " Computer Scored " +compScore+"  "+ result);
            }
               
                
                
    }

//alert("Computer Choose" +comp_choice.toLowerCase());
//console.log(comp_choice);

function game()
{
    for(let i=0; i< 5; i++)
    {
        var computerSelection ;
        computerSelection = computerPlay();
        computerSelection = computerSelection.toUpperCase();
        var playerSelection;
        playerSelection = prompt('Type "Rock" or "Paper" or "Scissors"');
        playerSelection = playerSelection.toUpperCase();
        var play;
        play = playRound(playerSelection, computerSelection);
        console.log(play);
        alert(play);
        
                //alert("You Scored" +userScore);
                //alert("Computer Scored" +compScore);
    }
    userScoretotal = userScore;
    compScoretotal = compScore
    if (userScoretotal > compScoretotal)
    {
        //alert("You are the Winner! with total = "+userScoretotal);
        console.log("You are the Winner! with total = "+userScoretotal);
        alert("You are the Winner! with total = "+userScoretotal);
    }
    else
    {
        //alert("Computer is the Winner! with total = "+compScoretotal);
        console.log("Computer is the Winner! with total = "+compScoretotal);
        alert("Computer is the Winner! with total = "+compScoretotal);
    }
}


//console.log(computerSelection);

//let output;
game();
//console.log(output);

//output = playRound(playerSelection, computerSelection);
//console.log(output);
//alert(" computer choose " + computerSelection+" user choose "+playerSelection+ " result "+output);
