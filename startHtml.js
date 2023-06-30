import TotalMatchHtml from './TotalMatchHtml.js'
export default function startHtml(){
    return `<section class=" myBackground home-section">
    <h1>
    <span>Rock✊</span>
    <span>Paper🤚</span>
    <span>Scissor✌️</span>
    </h1>
    
        ${TotalMatchHtml()}

    <div class="mb-auto">
        <button class="start-btn"  id="battle-comp">Start the battle 🤖</button>
        <button class="start-btn"  id="battle-friend">Start the battle 👨</button>
   </div>
    </section>`
}


