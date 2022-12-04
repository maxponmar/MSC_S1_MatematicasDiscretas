import { useEffect, useState } from "react";
import Modal from "../../components/modal/Modal";
import Board from "./components/board";
import Player from "./components/player";

function Unidad5() {
  // useEffect(() => {
  //   const board = new Board(["x", "o", "", "", "", "", "o", "", "x"]);
  //   board.printFormattedBoard();
  //   const p = new Player();
  //   console.log(p.getBestMove(board));
  //   console.log(p.nodesMap);
  //   board.printFormattedBoard();
  //   board.insert("x", p.getBestMove(board));
  //   board.printFormattedBoard();
  // }, []);

  const [humanoPrimero, setHumanoPrimero] = useState(false);
  const [iniciarJuego, setIniciarJuego] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const [contadorMovimientos, setContadorMovimientos] = useState(0);
  const [humanoJugo, sethumanoJugo] = useState(0);
  const [jugadorPC, setJugadorPC] = useState(new Player());

  const [tablero, setTablero] = useState(
    new Board(() => {
      console.log("XD");
      setContadorMovimientos((x) => x + 1);
    })
  );

  useEffect(() => {
    tablero.printFormattedBoard();
  }, [contadorMovimientos]);

  useEffect(() => {
    // if (iniciarJuego)
    // tablero.insert("o", jugadorPC.getBestMove(tablero), false);
  }, [humanoJugo]);

  return (
    <div className="text-center max-h-full py-10 ">
      <h2 className="font-bold text-2xl">Unidad 5</h2>
      <div className="flex items-center justify-center flex-col">
        <button
          onClick={() => {
            console.log(jugadorPC.getBestMove(tablero));
          }}
        >
          XD
        </button>
        <h3 className="font-bold text-2xl">Juego del Gato</h3>
        {!iniciarJuego ? (
          <button
            className="bg-gray-400 py-1 px-3 rounded hover:-translate-y-0.5 active:translate-y-0.5 animate-fadeIn"
            onClick={() => {
              setMostrarMenu(true);
            }}
          >
            Iniciar Juego
          </button>
        ) : (
          <>
            <h4>Movimientos: {contadorMovimientos}</h4>
            <div className="text-3xl grid grid-cols-3 gap-2 mt-10">
              {[...Array(9).keys()].map((index) => (
                <button
                  className="bg-neutral-500 p-1 rounded w-10 h-10 flex items-center justify-center"
                  key={index}
                  onClick={() => {
                    tablero.insert("x", index, true);
                    sethumanoJugo((x) => x + 1);
                  }}
                >
                  {tablero.state[index]}
                </button>
              ))}
            </div>
            <button
              className="row-span-3"
              onClick={() => {
                setIniciarJuego(false);
                // setTablero(
                //   new Board(() => {
                //     setContadorMovimientos((x) => x + 1);
                //   })
                // );
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
              setHumanoPrimero(true);
              setMostrarMenu(false);
              setIniciarJuego(true);
            }}
          >
            Jugador Primero
          </button>
          <button
            className="bg-gray-400 py-1 px-3 rounded hover:-translate-y-0.5 active:translate-y-0.5 animate-fadeIn"
            onClick={() => {
              setHumanoPrimero(false);
              setMostrarMenu(false);
              setIniciarJuego(true);
            }}
          >
            PC Primero
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Unidad5;
