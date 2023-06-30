import TotalMatchHtml from './TotalMatchHtml.js'
export default function startHtml(){
    return `<section class="home-section">
    <h1>
        <span>Rock✊</span>
        <span>Paper🤚</span>
        <span>Scissor✌️</span>
    </h1>
    
    
    <div class="start-btn-container mb-auto">
    ${TotalMatchHtml()}
        <button class="start-btn"  id="battle-comp">Start the battle 🤖</button>
        <button class="start-btn"  id="battle-friend">Start the battle 👨</button>
   </div>
    </section>`
}


