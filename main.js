console.log("hello")

const mainDiv = document.getElementById("main")
 mainDiv.innerHTML = `<section class=" myBackground home-section">
 <h1>
     <span>Rock✊</span>
     <span>Paper🤚</span>
     <span>Scissor✌️</span>
 </h1>
 <button class="start-btn" onclick='startGame()' id="battle-comp">Start the battle 🤖</button>
 <button class="start-btn" onclick='startGame()' id="battle-friend">Start the battle 👨</button>
</section>`

function startGame (e){

    mainDiv.innerHTML = `
    <section class="myBackground centerObj">
    <div>
        <button class="game-action">✊</button>
        <button class="game-action">🤚</button>
        <button class="game-action">✌️</button>
    </div>
    </section>
    `
}