
export default function gameEnd(playCount, bestOf, winner) {
  return (
    `<div class="endGame">${playCount}${bestOf}${winner}</div>`
  )
}
