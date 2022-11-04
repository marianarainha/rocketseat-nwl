function createGame(player1, hour, player2) {
  return `
<li>
              <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}" />
            </li>        
`
}

let delay = 0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
   <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "ghana") +
      createGame("southkorea", "12:00", "brazil") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("portugal", "07:00", "serbia") +
      createGame("cameroon", "12:00", "uruguay") +
      createGame("Brazil", "16:00", "ghana")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("uruguay", "07:00", "brazil") +
      createGame("switzerland", "12:00", "southkorea") +
      createGame("serbia", "16:00", "cameroon")
  )
