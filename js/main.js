let log = console.log
let cases = document.getElementsByTagName('td')

let numberOfCrosses = document.getElementsByClassName('cross')
let numberOfRounds = document.getElementsByClassName('round')
let subtitle = document.getElementsByTagName('h2')[0]
let paragraph = document.getElementById('warning-zone')

let playerOne = prompt("JOUEUR 1 : Quel est ton nom ?")
while (playerOne === "" || playerOne === null) {
  playerOne = prompt("JOUEUR 1 : Donne moi un nom !")
}

let playerTwo = prompt("JOUEUR 2 : Quel est ton nom ?")
while (playerTwo === "" || playerTwo === null) {
  playerTwo = prompt("JOUEUR 2 : Donne moi un nom !")
}
while (playerTwo === playerOne) {
  playerTwo = prompt("JOUEUR 2 : Donne moi un nom différent du JOUEUR 1!")
}

subtitle.textContent = playerOne + " à toi de jouer !"

Array.from(cases).some(function (e) {
  e.addEventListener("click", function onClick() {
    if ((Array.from(numberOfCrosses).length == 5 && Array.from(numberOfRounds).length == 4) || subtitle.textContent === "Bravo " + playerOne + " !" || subtitle.textContent === "Bravo " + playerTwo + " !") {
      return false;
    }
    else if (e.textContent) {
      paragraph.textContent = 'Coquinou, tu peux pas jouer là !'
    }
    else {
      paragraph.textContent = ' --- '
      if (Array.from(numberOfCrosses).length == Array.from(numberOfRounds).length) {
        e.textContent += 'x';
        e.classList.add('cross')
        subtitle.textContent = playerTwo + " à toi de jouer !"
      }
      else {
        e.textContent += 'o';
        e.classList.add('round')
        subtitle.textContent = playerOne + " à toi de jouer !"
      }
    }
    ["x", "o"].forEach(f => {
      if (
        (cases[0].textContent == f) && (cases[1].textContent == f) && (cases[2].textContent == f) ||
        (cases[3].textContent == f) && (cases[4].textContent == f) && (cases[5].textContent == f) ||
        (cases[6].textContent == f) && (cases[7].textContent == f) && (cases[8].textContent == f) ||
        (cases[0].textContent == f) && (cases[3].textContent == f) && (cases[6].textContent == f) ||
        (cases[1].textContent == f) && (cases[4].textContent == f) && (cases[7].textContent == f) ||
        (cases[2].textContent == f) && (cases[5].textContent == f) && (cases[8].textContent == f) ||
        (cases[0].textContent == f) && (cases[4].textContent == f) && (cases[8].textContent == f) ||
        (cases[6].textContent == f) && (cases[4].textContent == f) && (cases[2].textContent == f)
      ) {
        paragraph.innerHTML = "<button onClick='window.location.reload();'>Rejouer</button>"
        if (f === 'x') {
          subtitle.textContent = "Bravo " + playerOne + " !";
        }
        else {
          subtitle.textContent = "Bravo " + playerTwo + " !";
        }
      }

    })
    if (Array.from(numberOfCrosses).length == 5 && Array.from(numberOfRounds).length == 4) {
      subtitle.textContent = "Match nul !"
      paragraph.innerHTML = "<button onClick='window.location.reload();'>Rejouer</button>"
    }
  })
});