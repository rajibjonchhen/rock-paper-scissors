import resultGame from './resultGame.js'
import images from './images.js'
export default function compChoice(playerChoice){
    const randomNum = Math.ceil(Math.random()*3)
   let comChoice = ""
    let comSelectedImg = document.getElementById("com-selected-img")
    
    switch(randomNum){
        case 1 :
            comChoice = "rock"
            comSelectedImg.innerHTML = `<img class="rock-paper-scissors-img"  src="${images[comChoice]}" alt="" />`
            break;

        case 2 :
            comChoice = "paper"
            comSelectedImg.innerHTML = `<img class="rock-paper-scissors-img"  src="${images[comChoice]}" alt="" />`
            break;

        case 3 :
            comChoice = "scissors"
            comSelectedImg.innerHTML = `<img class="rock-paper-scissors-img"  src="${images[comChoice]}" alt=""  />`
            break;
        }
    resultGame(playerChoice, comChoice)
}