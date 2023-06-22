console.log("hello")

const mainDiv = document.getElementById("main")
 mainDiv.innerHTML = startHtml()


function gameHtml (e){
    mainDiv.innerHTML = `
    <section class="myBackground centerObj">
    <div>
        <button class="game-action" onclick='playGame("rock")'>✊</button>
        <button class="game-action" onclick='playGame("paper")'>🤚</button>
        <button class="game-action" onclick='playGame("scissors")'>✌️</button>
    </div>
    </section>
    `
}
function playGame (element){
    mainDiv.innerHTML = `<div>${element}</div>`
}
function startHtml(){
    return `<section class=" myBackground home-section">
    <h1>
        <span>Rock✊</span>
        <span>Paper🤚</span>
        <span>Scissor✌️</span>
    </h1>
    <button class="start-btn" onclick='gameHtml()' id="battle-comp">Start the battle 🤖</button>
    <button class="start-btn" onclick='gameHtml()' id="battle-friend">Start the battle 👨</button>
   </section>`
}