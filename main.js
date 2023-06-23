let selectedImg = document.getElementById("selected-img")
const images = {
    defaultImg : "./assets/defaultImg.png",
    scissors : "./assets/scissors.png",
    paper : "./assets/paper.png",
    rock : "./assets/rock.png",
}
console.log("hello")

const mainDiv = document.getElementById("main")
 mainDiv.innerHTML = startHtml()


function gameHtml (e){
    mainDiv.innerHTML = `
    <section class="myBackground d-flex m-auto justify-content-around">
    <div>
        <h1 class="my-text">Player 👨</h1>
        <div class="img-container" id="selected-img">
            <img  src="${images['defaultImg']}" alt=""  width="auto" height="500px"/>
        </div>
        <div>
            <button class="game-action" onclick='playGame("rock")'>✊</button>
            <button class="game-action" onclick='playGame("paper")'>🤚</button>
            <button class="game-action" onclick='playGame("scissors")'>✌️</button>
        </div>
    </div>
    <div>
        <h1 class="my-text">Computer 🤖</h1>
        <div class="img-container" id="com-selected-img">
            <img src="${images['defaultImg']}" alt=""  width="auto" height="500px"/>
        </div>
        <div>
            <button class="game-action" >✊</button>
            <button class="game-action" >🤚</button>
            <button class="game-action" >✌️</button>
        </div>
    </div>
    </section>
    `
}

function playGame (element){
    let selectedImg = document.getElementById("selected-img")
    selectedImg.innerHTML = `<img  src="${images[element]}" alt=""  width="auto" height="500px"/>`
    startGame()
}
function startGame(){
    const randomNum = Math.ceil(Math.random()*3)
    let comSelectedImg = document.getElementById("com-selected-img")
    console.log(randomNum)
    switch(randomNum){
        case 1:
        comSelectedImg.innerHTML = `<img  src="${images["rock"]}" alt=""  width="auto" height="500px"/>`
        break;
        case 2:
        comSelectedImg.innerHTML = `<img  src="${images["paper"]}" alt=""  width="auto" height="500px"/>`
        break;
        case 3 :
        comSelectedImg.innerHTML = `<img  src="${images["scissors"]}" alt=""  width="auto" height="500px"/>`
        break;
    }
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

