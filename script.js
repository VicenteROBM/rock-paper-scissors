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
        
       let rock = document.getElementById("rock")
       let paper = document.getElementById("paper")
       let scissors = document.getElementById("scissors")
       let userScore = document.getElementById("userScore")
       let userScorejs = 0
       let computerScore = document.getElementById("computerScore")
       let computerScorejs= 0
       const announceWinner = document.createElement("p")
       const restartButton = document.createElement("button")
       const div = document.getElementById("results")

        rock.addEventListener("click",function(){
            // getting inputs 
            let UserChoice = "rock"
            let ComputerChoice = Math.floor(Math.random()*3)
            if(ComputerChoice === 0){
                ComputerChoice = "rock"
            }else if(ComputerChoice === 1){
                ComputerChoice = "paper"
            }else if(ComputerChoice === 2){
                ComputerChoice = "scissors"
            }
            // comparing inputs
            if(UserChoice == ComputerChoice){
                // gotta display tie message
            }else if(UserChoice == "rock" && ComputerChoice == "paper"){
                userScorejs += 1
                userScore.innerHTML = userScorejs
            }else if(UserChoice == "rock" && ComputerChoice == "scissors"){
                computerScorejs += 1
                computerScore.innerHTML = computerScorejs
                
            }
            if(userScorejs == 5){
                userScorejs = 0
                computerScorejs = 0
                userScore.innerHTML = userScorejs
                computerScore.innerHTML = computerScorejs
                announceWinner.innerHTML = "Congratulations you won!"
                div.appendChild(announceWinner)
                
            }else if(computerScorejs == 5){
                userScorejs = 0
                computerScorejs = 0
                userScore.innerHTML = userScorejs
                computerScore.innerHTML = computerScorejs
                announceWinner.innerHTML = "Oh no you lost!"
                div.appendChild(announceWinner)
    
            }
    

        })

        paper.addEventListener("click",function(){
            // getting inputs 
            let UserChoice = "paper"
            let ComputerChoice = Math.floor(Math.random()*3)
            if(ComputerChoice === 0){
                ComputerChoice = "rock"
            }else if(ComputerChoice === 1){
                ComputerChoice = "paper"
            }else if(ComputerChoice === 2){
                ComputerChoice = "scissors"
            }
            // comparing inputs
            if(UserChoice == ComputerChoice){
                // gotta display tie message
            }else if(UserChoice == "paper" && ComputerChoice == "rock"){
                userScorejs += 1
                userScore.innerHTML = userScorejs
            }else if(UserChoice == "paper" && ComputerChoice == "scissors"){
                computerScorejs += 1
                computerScore.innerHTML = computerScorejs
            }

        if(userScorejs == 5){
            userScorejs = 0
            computerScorejs = 0
            userScore.innerHTML = userScorejs
            computerScore.innerHTML = computerScorejs
            announceWinner.innerHTML = "Congratulations you won!"
            div.appendChild(announceWinner)
            
        }else if(computerScorejs == 5){
            userScorejs = 0
            computerScorejs = 0
            userScore.innerHTML = userScorejs
            computerScore.innerHTML = computerScorejs
            announceWinner.innerHTML = "Oh no you lost!"
            div.appendChild(announceWinner)

        }



        })


        scissors.addEventListener("click",function(){
            // getting inputs 
            let UserChoice = "scissors"
            let ComputerChoice = Math.floor(Math.random()*3)
            if(ComputerChoice === 0){
                ComputerChoice = "rock"
            }else if(ComputerChoice === 1){
                ComputerChoice = "paper"
            }else if(ComputerChoice === 2){
                ComputerChoice = "scissors"
            }
            // comparing inputs
            if(UserChoice == ComputerChoice){
                // gotta display tie message
            }else if(UserChoice == "scissors" && ComputerChoice == "paper"){
                userScorejs += 1
                userScore.innerHTML = userScorejs
            }else if(UserChoice == "scissors" && ComputerChoice == "rock"){
                computerScorejs += 1
                computerScore.innerHTML = computerScorejs
            }
            if(userScorejs == 5){
                userScorejs = 0
                computerScorejs = 0
                userScore.innerHTML = userScorejs
                computerScore.innerHTML = computerScorejs
                announceWinner.innerHTML = "Congratulations you won!"
                div.appendChild(announceWinner)
                
            }else if(computerScorejs == 5){
                userScorejs = 0
                computerScorejs = 0
                userScore.innerHTML = userScorejs
                computerScore.innerHTML = computerScorejs
                announceWinner.innerHTML = "Oh no you lost!"
                div.appendChild(announceWinner)
    
            }
        })



