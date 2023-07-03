import { routeToGamePage } from "./routeToGamePage.js";
import startHtml from "./startHtml.js";

export function routeToHome(){

    const mainDiv = document.getElementById("main")
    mainDiv.innerHTML = startHtml()
    const numbMatches = document.getElementsByTagName('select')[0]
    numbMatches.addEventListener('change', (e)=> {localStorage.setItem('bestOf',e.target.value); localStorage.setItem('playCount','0') })
    
    const battleComp =  document.getElementById('battle-comp')
    const battlefriend =  document.getElementById('battle-friend')
    battleComp.addEventListener('click',routeToGamePage)
    battlefriend.addEventListener('click',routeToGamePage)
}
