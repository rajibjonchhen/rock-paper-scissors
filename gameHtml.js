import images from "./images"
export default function gameHtml (){
    mainDiv.innerHTML =  `
    <section class="myBackground d-flex m-auto justify-content-around">
    <div>
        <h1 class="my-text">Player 👨</h1>
        <div class="img-container" id="selected-img">
            <img class="rock-paper-scissors-img" src="${images['defaultImg']}" alt="${images['defaultImg']}" />
        </div>
        <div class="mb-4">
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

