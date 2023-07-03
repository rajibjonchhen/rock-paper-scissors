import startHtml from './startHtml.js'
import gameHtml from './gameHtml.js'
import playerChoice from './playerChoice.js'


const mainDiv = document.getElementById("main")
routeToHome()

function routeToGamePage (){
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


export function routeToHome(){
    mainDiv.innerHTML = startHtml()
    const numbMatches = document.getElementsByTagName('select')[0]
    numbMatches.addEventListener('change', (e)=> {localStorage.setItem('bestOf',e.target.value); localStorage.setItem('playCount','0') })
    
    const battleComp =  document.getElementById('battle-comp')
    const battlefriend =  document.getElementById('battle-friend')
    battleComp.addEventListener('click',routeToGamePage)
    battlefriend.addEventListener('click',routeToGamePage)
}

