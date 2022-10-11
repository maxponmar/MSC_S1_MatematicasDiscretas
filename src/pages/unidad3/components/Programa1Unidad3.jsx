import { useState } from "react";
import toast from "react-hot-toast";

function Programa1Unidad3() {
  const [entradaParaIterativo, setEntradaParaIterativo] = useState(0);
  const [resultadoParaIterativo, setResultadoParaIterativo] = useState(0);
  const [entradaParaRecursivo, setEntradaParaRecursivo] = useState(0);
  const [resultadoParaRecursivo, setResultadoParaRecursivo] = useState(0);

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
        <div className="flex items-center justify-center p-3 gap-3">
          <h3 className="font-bold text-xl">Iterativa</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();

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
              defaultValue={0}
              onChange={(e) => {
                const number = Number(e.target.value);
                if (!Number.isInteger(number)) {
                  toast.error("Por favor, solo números enteros.");
                  return;
                }
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
        <div className="flex items-center justify-center p-3 gap-3">
          <h3 className="font-bold text-xl">Rescursiva</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              // Calculo Rescursivo
              const factorialRecursivo = (n) => {
                if (n == 1) return 1;
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
              defaultValue={0}
              onChange={(e) => {
                const number = Number(e.target.value);
                if (!Number.isInteger(number)) {
                  toast.error("Por favor, solo números enteros.");
                  return;
                }
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
    </div>
  );
}

export default Programa1Unidad3;
