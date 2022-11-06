function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>

  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
    <div class="card" style= "animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
`
}

document.querySelector("#cards").innerHTML =
  // createCard(
  //   "20/11",
  //   "domingo",
  //   createGame("", "07h00", "") +
  //     createGame("", "10h00", "") +
  //     createGame("", "13h00", "") +
  //     createGame("", "16h00", "")
  // ) +
  // createCard(
  //   "21/11",
  //   "segunda",
  //   createGame("", "07h00", "") +
  //     createGame("", "10h00", "") +
  //     createGame("", "13h00", "") +
  //     createGame("", "16h00", "")
  // ) +
  // createCard(
  //   "22/11",
  //   "terça",
  //   createGame("", "07h00", "") +
  //     createGame("", "10h00", "") +
  //     createGame("", "13h00", "") +
  //     createGame("", "16h00", "")
  // ) +
  // createCard(
  //   "23/11",
  //   "quarta",
  //   createGame("", "07h00", "") +
  //     createGame("", "10h00", "") +
  //     createGame("", "13h00", "") +
  //     createGame("", "16h00", "")
  // ) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07h00", "cameroon") +
      createGame("uruguay", "10h00", "south_korea") +
      createGame("portugal", "13h00", "ghana") +
      createGame("brazil", "16h00", "serbia")
  ) +
  // createCard(
  //   "25/11",
  //   "sexta",
  //   createGame("", "07h00", "") +
  //     createGame("", "10h00", "") +
  //     createGame("", "13h00", "") +
  //     createGame("", "16h00", "")
  // ) +
  // createCard(
  //   "26/11",
  //   "sabádo",
  //   createGame("", "07h00", "") +
  //     createGame("", "10h00", "") +
  //     createGame("", "13h00", "") +
  //     createGame("", "16h00", "")
  // ) +
  // createCard(
  //   "27/11",
  //   "domingo",
  //   createGame("", "07h00", "") +
  //     createGame("", "10h00", "") +
  //     createGame("", "13h00", "") +
  //     createGame("", "16h00", "")
  // ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "07h00", "serbia") +
      createGame("south_korea", "10h00", "ghana") +
      createGame("brazil", "13h00", "switzerland") +
      createGame("portugal", "16h00", "uruguay")
  ) +
  // createCard(
  //   "29/11",
  //   "terça",
  //   createGame("", "07h00", "") +
  //     createGame("", "10h00", "") +
  //     createGame("", "13h00", "") +
  //     createGame("", "16h00", "")
  // ) +
  // createCard(
  //   "30/11",
  //   "quarta",
  //   createGame("", "07h00", "") +
  //     createGame("", "10h00", "") +
  //     createGame("", "13h00", "") +
  //     createGame("", "16h00", "")
  // ) +
  // createCard(
  //   "01/11",
  //   "quinta",
  //   createGame("", "07h00", "") +
  //     createGame("", "10h00", "") +
  //     createGame("", "13h00", "") +
  //     createGame("", "16h00", "")
  // ) +
  createCard(
    "02/12",
    "sexta",
    createGame("south_korea", "07h00", "portugal") +
      createGame("ghana", "10h00", "uruguay") +
      createGame("serbia", "13h00", "switzerland") +
      createGame("cameroon", "16h00", "brazil")
  )
