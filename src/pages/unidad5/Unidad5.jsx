import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Modal from "../../components/modal/Modal";
import {
  comprobarGanador,
  mejorMovimiento,
} from "./components/algoritmominimax";

function Unidad5() {
  const [iniciarJuego, setIniciarJuego] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [jugadorActual, setJugadorActual] = useState();
  const [tablero, setTablero] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [mostrarTableroFinal, setMostrarTableroFinal] = useState(false);

  useEffect(() => {
    if (jugadorActual == "X") {
      mejorMovimiento(tablero, setTablero, setJugadorActual);
    }
    let ganador = comprobarGanador([...tablero]);
    if (ganador != null) {
      if (ganador == "empate") toast.success("Hubo un empate");
      else toast.success("Gano el Jugador " + ganador);
      setMostrarTableroFinal(true);
    }
  }, [jugadorActual]);

  return (
    <div className="text-center max-h-full py-10 ">
      <h2 className="font-bold text-2xl">Unidad 5</h2>
      <div className="flex items-center justify-center flex-col">
        <h3 className="font-bold text-2xl">Juego del Gato</h3>
        {!iniciarJuego ? (
          <button
            className="mt-10 bg-gray-400 py-1 px-3 rounded hover:-translate-y-0.5 active:translate-y-0.5 animate-fadeIn"
            onClick={() => {
              setMostrarMenu(true);
            }}
          >
            Iniciar Juego
          </button>
        ) : (
          <>
            <div className="text-3xl grid grid-cols-3 gap-2 mt-10">
              {[...Array(3).keys()].map((i) =>
                [...Array(3).keys()].map((j) => (
                  <button
                    className="bg-neutral-500 p-1 rounded w-10 h-10 flex items-center justify-center"
                    key={Number(String(i) + String(j))}
                    onClick={() => {
                      if (jugadorActual == "O") {
                        if (tablero[i][j] == "") {
                          setTablero((oldState) => {
                            oldState[i][j] = "O";
                            return oldState;
                          });
                          setJugadorActual("X");
                        }
                      }
                    }}
                  >
                    {tablero[i][j]}
                  </button>
                ))
              )}
            </div>
            <button
              className="row-span-3"
              onClick={() => {
                setTablero([
                  ["", "", ""],
                  ["", "", ""],
                  ["", "", ""],
                ]);
                setIniciarJuego(false);
                setContadorMovimientos(0);
              }}
            >
              Reiniciar Juego
            </button>
          </>
        )}
      </div>
      <Modal
        show={mostrarMenu}
        onClose={() => {
          setMostrarMenu(false);
          setIniciarJuego(false);
        }}
        title="¿Quién Jugará Primero?"
      >
        <div className="flex items-center justify-center flex-col gap-5">
          <button
            className="bg-gray-400 py-1 px-3 rounded hover:-translate-y-0.5 active:translate-y-0.5 animate-fadeIn"
            onClick={() => {
              setJugadorActual("O");
              setIniciarJuego(true);
              setMostrarMenu(false);
            }}
          >
            Jugador Primero
          </button>
          <button
            className="bg-gray-400 py-1 px-3 rounded hover:-translate-y-0.5 active:translate-y-0.5 animate-fadeIn"
            onClick={() => {
              setJugadorActual("X");
              setIniciarJuego(true);
              setMostrarMenu(false);
            }}
          >
            PC Primero
          </button>
        </div>
      </Modal>
      <Modal
        show={mostrarTableroFinal}
        onClose={() => {
          setMostrarTableroFinal(false);
          setTablero([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ]);
          setIniciarJuego(false);
        }}
        title="Resultado"
      >
        <>
          <div className="text-3xl grid grid-cols-3 gap-2 mt-10">
            {[...Array(3).keys()].map((i) =>
              [...Array(3).keys()].map((j) => (
                <button
                  className="bg-neutral-500 p-1 rounded w-10 h-10 flex items-center justify-center"
                  key={Number(String(i) + String(j))}
                >
                  {tablero[i][j]}
                </button>
              ))
            )}
          </div>
        </>
      </Modal>
    </div>
  );
}

export default Unidad5;
