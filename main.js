import startHtml from './startHtml.js'
import gameHtml from './gameHtml.js'
import playerChoice from './playerChoice.js'


console.log("hello")

const mainDiv = document.getElementById("main")
 mainDiv.innerHTML = startHtml()

function routeToGamePage (){
    mainDiv.innerHTML = gameHtml()

    const scissorsBtn =  document.getElementById('scissors-btn')
    scissorsBtn.addEventListener('click',()=>playerChoice("scissors"))
        
    const stoneBtn =  document.getElementById('stone-btn')
    stoneBtn.addEventListener('click',()=>playerChoice("rock"))

    const paperBtn =  document.getElementById('paper-btn')
    paperBtn.addEventListener('click',()=>playerChoice("paper"))

}

 const battleComp =  document.getElementById('battle-comp')
 const battlefriend =  document.getElementById('battle-friend')
 battleComp.addEventListener('click',routeToGamePage)
 battlefriend.addEventListener('click',routeToGamePage)

