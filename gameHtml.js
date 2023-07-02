
import images from "./images.js"



export default function gameHtml (){
    
    return  `<section>
        <div class='decision-text'>
            <p id="decision">Click a button of choice to start game and see the result will be displayed here</p>
            <p class='match-count'>
                <span id='match-count'></span> /
                <span id='total-match'></span>
            </p>
        </div>
        <div class="d-flex m-auto justify-content-around">
            <div>
                <h1>Player 👨</h1>
                <div class="img-container" id="selected-img">
                    <img class="rock-paper-scissors-img" src="${images['defaultImg']}" alt="${images['defaultImg']}" />
                </div>
                <div class="mb-4">
                    <button class="game-action" id = 'stone-btn' >✊</button>
                    <button class="game-action" id = 'paper-btn' >🤚</button>
                    <button class="game-action" id = 'scissors-btn' >✌️</button>
                </div>
            </div>
            <div class="centerObj">
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
        </div>
    </section>`
    
}
