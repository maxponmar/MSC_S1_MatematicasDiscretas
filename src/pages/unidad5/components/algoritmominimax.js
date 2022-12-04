export function mejorMovimiento(tablero, setTablero, setJugador) {
  let copiaDeTablero = [...tablero];
  let mejorScore = -Infinity;
  let movimiento;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (copiaDeTablero[i][j] == "") {
        copiaDeTablero[i][j] = "X";
        let score = algoritmoMinimax(copiaDeTablero, 0, false);
        copiaDeTablero[i][j] = "";
        if (score > mejorScore) {
          mejorScore = score;
          movimiento = { i, j };
        }
      }
    }
  }
  if (movimiento) {
    setTablero((oldState) => {
      oldState[movimiento.i][movimiento.j] = "X";
      return oldState;
    });
    setJugador("O");
  }
}

let scores = {
  X: 10,
  O: -10,
  empate: 0,
};

function algoritmoMinimax(tablero, profundidad, isMaximizing) {
  let result = comprobarGanador(tablero);
  if (result !== null) {
    return scores[result];
  }

  if (isMaximizing) {
    let mejorScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (tablero[i][j] == "") {
          tablero[i][j] = "X";
          let score = algoritmoMinimax(tablero, profundidad + 1, false);
          tablero[i][j] = "";
          mejorScore = Math.max(score, mejorScore);
        }
      }
    }
    return mejorScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (tablero[i][j] == "") {
          tablero[i][j] = "O";
          let score = algoritmoMinimax(tablero, profundidad + 1, true);
          tablero[i][j] = "";
          bestScore = Math.min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
}

function sonIguales(a, b, c) {
  return a == b && b == c && a != "";
}

export function comprobarGanador(tablero) {
  let ganador = null;

  // horizontal
  for (let i = 0; i < 3; i++) {
    if (sonIguales(tablero[i][0], tablero[i][1], tablero[i][2])) {
      ganador = tablero[i][0];
    }
  }

  // Vertical
  for (let i = 0; i < 3; i++) {
    if (sonIguales(tablero[0][i], tablero[1][i], tablero[2][i])) {
      ganador = tablero[0][i];
    }
  }

  // Diagonal
  if (sonIguales(tablero[0][0], tablero[1][1], tablero[2][2])) {
    ganador = tablero[0][0];
  }
  if (sonIguales(tablero[2][0], tablero[1][1], tablero[0][2])) {
    ganador = tablero[2][0];
  }

  let lugaresDisponibles = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tablero[i][j] == "") {
        lugaresDisponibles++;
      }
    }
  }

  if (ganador == null && lugaresDisponibles == 0) {
    return "empate";
  } else {
    return ganador;
  }
}
