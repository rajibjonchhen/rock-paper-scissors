import compChoice from './compChoice.js'
import images from './images.js'
export default function playerChoice (element){
    const playerChoice = element
    let selectedImg = document.getElementById("selected-img")
    selectedImg.innerHTML = `<img class="rock-paper-scissors-img"  src="${images[playerChoice]}" alt="" />`
    compChoice(element)
}