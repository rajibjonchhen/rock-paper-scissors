import gameEnd from "./gameEnd.js"
import { routeToHome } from "./main.js";
let player = 0;
let computer = 0;
let draw = 0

export default function resultGame(playerChoice, comChoice){
    
    let bestOf = localStorage.getItem('bestOf')
    let playCount = Number(localStorage.getItem('playCount'))+1
    const matchCount =  document.getElementById('match-count')
    matchCount.innerText = playCount
    localStorage.setItem('playCount',playCount)

    let winner = ""
    const result = {
        player : "you win",
        computer : "computer win",
        draw : "game draw"
    }
    if(playerChoice === comChoice){
        winner = result.draw
        draw = draw + 1
    }else{
        if(playerChoice === "rock"){
            if(comChoice === "paper"){
                winner = result.computer
                computer = computer + 1
            }else{
                winner = result.player
                player = player + 1
            }
        }
        if(playerChoice === "paper"){
            if(comChoice === "scissor"){
                winner = result.computer
                computer = computer + 1
            }else{
                winner = result.player
                player = player + 1

            }
        }
        if(playerChoice === "scissors"){
            if(comChoice === "rock"){
                winner = result.computer
                computer = computer + 1

            }else{
                winner = result.player
                player = player + 1
            }
        }
    }
    const decision =  document.getElementById("decision")
    decision.innerText = winner

    if(playCount == bestOf){
    localStorage.setItem('playCount','0')
    localStorage.setItem('bestOf','1')
    const finalWinner = player > computer? "You win" : computer > player? "Computer win" : "Game draw"
    console.log(playCount, bestOf, winner)

    
    const mainDiv = document.getElementById("main")
    mainDiv.innerHTML = gameEnd({playCount, player, computer,draw, finalWinner})
        const replay = document.getElementById("replay-btn")
       replay.addEventListener('click',() => { routeToHome()})
        
    }
}
