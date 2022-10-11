import { useState } from "react";
import Modal from "../../../components/modal/Modal";
import toast from "react-hot-toast";
import DiagramaFlujo from "../assets/DiagramasFlujoFactorial.drawio.png";

function Programa1Unidad3() {
  const [showModal, setShowModal] = useState(false);

  const [entradaParaIterativo, setEntradaParaIterativo] = useState(1);
  const [resultadoParaIterativo, setResultadoParaIterativo] = useState(0);
  const [entradaParaRecursivo, setEntradaParaRecursivo] = useState(1);
  const [resultadoParaRecursivo, setResultadoParaRecursivo] = useState(0);

  const [esValidoIterativo, setesValidoIterativo] = useState(true);
  const [esValidoRecursivo, setesValidoRecursivo] = useState(true);

  return (
    <div>
      <h2 className="text-lg font-bold">Instrucciones</h2>
      <div>
        <p>
          Hacer un programa para calcular el factorial de un número. Debe ser
          con 2 metodologías:
        </p>
        <ul className="list-disc">
          <li>Iterativa</li>
          <li>Recursiva</li>
        </ul>
        <p>Realizar diagrama de fluja para cada método.</p>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center p-3 gap-3 sm:flex-row">
          <h3 className="font-bold text-xl">Iterativa</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!esValidoIterativo) {
                toast.error("Entrada no valida por favor verifique.");
                return;
              }
              // Calculo Iterativo
              let resultado = 1;
              for (let i = entradaParaIterativo; i > 0; i--) {
                resultado *= i;
              }

              setResultadoParaIterativo(resultado);
            }}
          >
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              placeholder="Entrada para Iterativa"
              defaultValue={1}
              onChange={(e) => {
                const number = Number(e.target.value);
                if (!Number.isInteger(number) || number < 0) {
                  toast.error("Por favor, solo números enteros.");
                  setesValidoIterativo(false);
                  return;
                }
                setesValidoIterativo(true);
                setEntradaParaIterativo(number);
              }}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Calcular
            </button>
          </form>
          <div className="border border-black p-3">
            <h3 className="font-bold">Resultado</h3>
            <p>{resultadoParaIterativo}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-3 gap-3 sm:flex-row">
          <h3 className="font-bold text-xl">Rescursiva</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!esValidoRecursivo) {
                toast.error("Entrada no valida por favor verifique.");
                return;
              }
              // Calculo Rescursivo
              const factorialRecursivo = (n) => {
                if (n == 1 || n == 0) return 1;
                else return n * factorialRecursivo(n - 1);
              };

              setResultadoParaRecursivo(
                factorialRecursivo(entradaParaRecursivo)
              );
            }}
          >
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              placeholder="Entrada para Iterativa"
              defaultValue={1}
              onChange={(e) => {
                const number = Number(e.target.value);
                if (!Number.isInteger(number) || number < 0) {
                  toast.error("Por favor, solo números enteros positivos.");
                  setesValidoRecursivo(false);
                  return;
                }
                setesValidoRecursivo(true);
                setEntradaParaRecursivo(number);
              }}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Calcular
            </button>
          </form>
          <div className="border border-black p-3">
            <h3 className="font-bold">Resultado</h3>
            <p>{resultadoParaRecursivo}</p>
          </div>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
        onClick={() => setShowModal(true)}
      >
        Mostrar Diagrama
      </button>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Diagramas de Flujo"
      >
        <img src={DiagramaFlujo} alt="Diagramas de Flujo" />
      </Modal>
    </div>
  );
}

export default Programa1Unidad3;
