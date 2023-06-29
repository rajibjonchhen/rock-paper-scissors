
export default function resultGame(playerChoice, comChoice){
    let winner = ""
    const result = {
        player : "you win",
        computer : "computer win",
        draw : "game draw"
    }
    if(playerChoice === comChoice){
        winner = result.draw
    }else{
        if(playerChoice === "rock"){
            if(comChoice === "paper"){
                winner = result.computer
            }else{
                winner = result.player
            }
        }
        if(playerChoice === "paper"){
            if(comChoice === "scissor"){
                winner = result.computer
            }else{
                winner = result.player
            }
        }
        if(playerChoice === "scissors"){
            if(comChoice === "rock"){
                winner = result.computer
            }else{
                winner = result.player
            }
        }
    }
    const decision =  document.getElementById("decision")
    decision.innerText = winner
}
