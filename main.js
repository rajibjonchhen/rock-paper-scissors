const images = {
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
        <h1 class="my-text">Player</h1>
        <div class="img-container">
            <img src="" alt="" id="selected-opt" width="auto" height="500px"/>
        </div>
        <div>
            <button class="game-action" onclick='playGame("rock")'>✊</button>
            <button class="game-action" onclick='playGame("paper")'>🤚</button>
            <button class="game-action" onclick='playGame("scissors")'>✌️</button>
        </div>
    </div>
    <div>
        <h1 class="my-text">Computer</h1>
        <div class="img-container">
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
    let imgContainer = document.getElementById("selected-opt")
    console.log("imgContainer", imgContainer)
    imgContainer.src = images[element]
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

