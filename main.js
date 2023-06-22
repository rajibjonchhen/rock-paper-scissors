console.log("hello")

const mainDiv = document.getElementById("main")
 mainDiv.innerHTML = `<section class="home-section">
 <h1>
     <span>Rock✊</span>
     <span>Paper🤚</span>
     <span>Scissor✌️</span>
 </h1>
 <button class="start-btn" onclick='startGame()'>Start the battle</button>
</section>`

function startGame (e){

    mainDiv.innerHTML = `
    <section>
        <button class="game-action">✊</button>
        <button class="game-action">🤚</button>
        <button class="game-action">✌️</button>
    </section>
    `
}