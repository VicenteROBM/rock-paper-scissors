        /* Add a div for displaying results and change all of your console.logs 
        into DOM methods.
        Display the running score, and announce 
        a winner of the game once one player reaches 5 points.
        You will likely have to refactor (rework/rewrite) your original 
        code to make it work for this. That’s OK! Reworking old code 
        is an important part of a programmer’s life.
        
        I need to make it so everytime a button is pushed the score goes up, for 
        each corresponding player and when score == 5 stop the game, show a button to 
        restart the game
        */
        
        const UserScore = document.querySelector("#UserScore")
        const ComputerScore = document.querySelector("#ComputerScore")

        console.log(UserScore)
        console.log(ComputerScore)


        function getComputerChoice(){
            let ComputerChoice = Math.floor(Math.random()*3)
            if(ComputerChoice === 0){
                ComputerChoice = "rock"
            }else if(ComputerChoice === 1){
                ComputerChoice = "paper"
            }else if(ComputerChoice === 2){
                ComputerChoice = "scissors"
            }
            return ComputerChoice
        }
    
        function PlayRound(input){
            let human = input
            let computer = getComputerChoice()
            let result = ""
            if(human == computer){
                result +="tie"
            }else if(human == "rock" && computer == "paper"){
                result +="lose"
            }else if(human == "rock" && computer == "scissors"){
                result +="win"
            }else if(human == "paper" && computer == "scissors"){
                result +="lose"
            }else if(human == "paper" && computer == "rock"){
                result +="win"
            }else if(human == "scissors" && computer == "rock"){
                result +="lose"
            }else if(human == "scissors" && computer == "paper"){
                result +="win"

            }
            return console.log(result)
        }
