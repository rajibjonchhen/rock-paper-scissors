
export default function gameEnd({playCount, player, computer, finalWinner, draw}) {
  return (
    `<div class="endGame">
    <table>
        <tr>
            <td>Total game played</td>
            <td>${playCount}</td>
        </tr>
        
        <tr>
        <td>Number of game you win</td>
        <td> ${player}</td>
        </tr>
        <tr>
        <td>Number of game draw </td>
        <td>${draw}</td>
        </tr>
        <tr>
        <td>Number of game computer win</td>
        <td>${computer}</td>
        </tr>
    </table>
        <p class="winner"> the result is <span>${finalWinner}</span></p>
        <button id="replay-btn" class="replay-btn">Replay</button>
    </div>`
  )
}
