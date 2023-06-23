let selectedImg = document.getElementById("selected-img")
let comChoice = ""
let playerChoice = ""
let result = {
    player : "you win",
    computer : "computer win",
    draw : "game draw"
}
const images = {
    defaultImg : "./assets/defaultImg.png",
    scissors : "./assets/scissors.png",
    paper : "./assets/paper.png",
    rock : "./assets/rock.png",
}
console.log("hello")

const mainDiv = document.getElementById("main")
 mainDiv.innerHTML = startHtml()


function gameHtml (){
    mainDiv.innerHTML =  `
    <section class="myBackground d-flex m-auto justify-content-around">
    <div>
        <h1 class="my-text">Player 👨</h1>
        <div class="img-container" id="selected-img">
            <img class="rock-paper-scissors-img" src="${images['defaultImg']}" alt="${images['defaultImg']}" />
        </div>
        <div class="mb-auto">
            <button class="game-action" onclick='playGame("rock")'>✊</button>
            <button class="game-action" onclick='playGame("paper")'>🤚</button>
            <button class="game-action" onclick='playGame("scissors")'>✌️</button>
        </div>
    </div>
    <div>
        <h1 id="vs-text">VS</h1>
    </div>
    <div>
        <h1 class="my-text">Computer 🤖</h1>
        <div class="img-container" id="com-selected-img">
            <img class="rock-paper-scissors-img" src="${images['defaultImg']}" alt="${images['defaultImg']}" />
        </div>
        <div>
            <button class="game-action" disabled>✊</button>
            <button class="game-action" disabled>🤚</button>
            <button class="game-action" disabled>✌️</button>
        </div>
    </div>
    </section>
    <div>
    <h1 id="decision" class='my-text decision-text'></h1>
</div>
    `
}

function playGame (element){
    playerChoice = element
    let selectedImg = document.getElementById("selected-img")
    selectedImg.innerHTML = `<img class="rock-paper-scissors-img"  src="${images[element]}" alt="" />`
    startGame()
}
function startGame(){
    const randomNum = Math.ceil(Math.random()*3)
   
    let comSelectedImg = document.getElementById("com-selected-img")
    console.log(randomNum)
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
        console.log( "playerChoice -", playerChoice, "comChoice -", comChoice)

    resultGame()
}

function resultGame(){
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

