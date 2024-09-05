// Declarar variables de puntuación del jugador
let humanScore = 0;
let computerScore = 0;

// Obtener números aleatorios
function getRandom() {
  return Math.random();
}

// Lógica para elegir la computadora
const getComputerChoice = () => {
  const randomChoice = getRandom();
  // console.log("Random: ", randomChoice);
  if (randomChoice <= 0.33) {
    console.log("piedra");
    return "piedra";
  } else if (randomChoice <= 0.66) {
    console.log("papel");
    return "papel";
  } else if (randomChoice <= 0.99) {
    console.log("tijeras");
    return "tijeras";
  }
};

// Lógica para conseguir la elección humana
const getHumanChoice = () => {
  let humanChoice = prompt("Piedra, Papel, Tijeras");

  let humanChoiceValue = humanChoice.toLowerCase();

  if (humanChoiceValue === "piedra") {
    console.log("Piedra");
    return "piedra";
  } else if (humanChoiceValue === "papel") {
    console.log("Papel");
    return "papel";
  } else if (humanChoiceValue === "tijeras") {
    console.log("Tijeras");
    return "tijeras";
  } else {
    console.log(
      "Elección no válida. Introduzca 'piedra', 'papel' o 'tijeras'."
    );
  }
};

// Juega una ronda del juego.
const playRound = (humanPlayer, computerPlayer) => {
  if (computerPlayer === humanPlayer) {
    console.log("¡¡¡Es un empate!!!");
  } else if (
    (computerPlayer === "piedra" && humanPlayer === "tijeras") ||
    (computerPlayer === "papel" && humanPlayer === "piedra") ||
    (computerPlayer === "tijeras" && humanPlayer === "papel")
  ) {
    computerScore++;
    console.log(`¡Tu pierdes!`);
  } else {
    humanScore++;
    console.log("¡Tu ganas!");
  }
};

//
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const result = playRound(humanSelection, computerSelection);

