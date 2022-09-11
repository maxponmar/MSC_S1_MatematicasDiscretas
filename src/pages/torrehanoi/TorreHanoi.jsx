import { useState, useEffect } from "react";
import TOH from "./helpers/TorreHanoiAlgoritmo";

function TorreHanoi() {
  const [A, setA] = useState(1);
  const [B, setB] = useState(2);
  const [C, setC] = useState(3);
  const [N, setN] = useState(3);

  const [Resultado, setResultado] = useState("");

  useEffect(() => {
    setResultado(TOH(N, A, B, C));
  }, [A, B, C, N]);

  return (
    <div>
      <h2>Programa de Torre de Hanoi aqui</h2>
      <div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              A
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              min={1}
              step={1}
              defaultValue={A}
              onChange={(e) => {
                // Validar despues asignar
                setA(+e.target.value);
              }}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              B
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              min={1}
              step={1}
              defaultValue={B}
              onChange={(e) => {
                // Validar despues asignar
                setB(+e.target.value);
              }}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              C
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              min={1}
              step={1}
              defaultValue={C}
              onChange={(e) => {
                // Validar despues asignar
                setC(+e.target.value);
              }}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              N
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              min={1}
              step={1}
              defaultValue={N}
              onChange={(e) => {
                // Validar despues asignar
                setN(+e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <h3>Pasos para Resolver Torre</h3>
        <p>{Resultado}</p>
      </div>
    </div>
  );
}

export default TorreHanoi;
