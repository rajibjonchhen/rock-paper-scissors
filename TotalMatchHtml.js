
export default function TotalMatchHtml() {
  const numbOfMatch = localStorage.getItem('bestOf')
  console.log(numbOfMatch=="5")
    return `
        <select class='align-center' >
          <option value=1 selected="${numbOfMatch === '1'}">1</option>
          <option value=3 selected="${numbOfMatch === '3'}">3</option>
          <option value=5 selected="${numbOfMatch === '5'}">5</option>
          <option value=15 selected="${numbOfMatch === '15'}">15</option>
          <option value=25 selected="${numbOfMatch === '25'}">25</option>
        </select>
     `
}
