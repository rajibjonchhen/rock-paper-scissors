import gameHtml from "./gameHtml.js"
import playerChoice from "./playerChoice.js"
import { routeToHome } from "./routeToHome.js"

export function routeToGamePage (){
    
    const mainDiv = document.getElementById("main")
    mainDiv.innerHTML = gameHtml()

    const backBtn = document.getElementById('back-btn')
    backBtn.addEventListener('click',()=>{mainDiv.innerHtml = routeToHome()})

    const scissorsBtn =  document.getElementById('scissors-btn')
    scissorsBtn.addEventListener('click',()=>playerChoice("scissors"))
        
    const stoneBtn =  document.getElementById('stone-btn')
    stoneBtn.addEventListener('click',()=>playerChoice("rock"))

    const paperBtn =  document.getElementById('paper-btn')
    paperBtn.addEventListener('click',()=>playerChoice("paper"))   
    
    const matchCount =  document.getElementById('match-count')
    matchCount.innerText = localStorage.getItem('playCount')
    
    const totalMatch =  document.getElementById('total-match')
    totalMatch.innerText = localStorage.getItem('bestOf')
}
