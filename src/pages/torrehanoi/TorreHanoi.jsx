import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import TOH from "./helpers/TorreHanoiAlgoritmo";

const coloresDiscos = [
  "#000",
  "#4a1c94",
  "#d53b96",
  "#198f72",
  "#693a21",
  "#3fdbe8",
  "#d59a7a",
  "#3005e3",
  "#2f79d7",
  "#810820",
  "#f4e559",
  "#06db19",
  "#838dc8",
];

function TorreHanoi() {
  const [N, setN] = useState(3);
  const [pasosParaResolver, setPasosParaResolver] = useState([]);
  const [error, setError] = useState(false);

  const [pasoActual, setPasoActual] = useState(-1);
  const [estadoDiscosHanoi, setEstadoDiscosHanoi] = useState({
    barra1: [1, 2, 3],
    barra2: [],
    barra3: [],
  });

  useEffect(() => {
    setPasosParaResolver([]);
    setError(false);
    if (N <= 12) {
      TOH(N, 1, 2, 3, setPasosParaResolver);
    } else {
      setError(true);
      toast.error(
        "El maximo es 12, ya que tardaria mucho en resolver el algoritmo"
      );
    }
  }, [N]);

  useEffect(() => {
    if (pasosParaResolver.length > 0) {
      if (pasoActual >= 0 && pasoActual <= pasosParaResolver.length - 1) {
        setEstadoDiscosHanoi((oldState) => {
          const barraFrom = pasosParaResolver[pasoActual].from;
          const barraTo = pasosParaResolver[pasoActual].to;
          // console.log(barraFrom, barraTo);
          const elementoEliminado = oldState[`barra${barraFrom}`].pop();

          oldState[`barra${barraTo}`].push(elementoEliminado);

          console.log(oldState);

          return oldState;
        });
      }
    }
  }, [pasoActual]);

  useEffect(() => {
    console.log(estadoDiscosHanoi);
  }, [estadoDiscosHanoi]);

  return (
    <div className="text-center text-xl">
      <h2>Torre de Hanoi</h2>
      <div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Numero de Discos
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
      {!error && (
        <div className="flex gap-5 items-center justify-center">
          <div>
            <h3>Pasos para Resolver Torre</h3>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg max-h-96">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-black uppercase bg-gray-500 sticky top-0">
                  <tr>
                    <th className="py-3 px-2 sticky top-0">Paso</th>
                    <th className="py-3 px-2 sticky top-0">Del Poste</th>
                    <th className="py-3 px-2 sticky top-0">Al Poste</th>
                  </tr>
                </thead>
                <tbody>
                  {pasosParaResolver.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className={` border-b border-gray-700 ${
                          index == pasoActual ? "bg-blue-600" : "bg-gray-900"
                        }`}
                      >
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {index + 1}
                        </th>
                        <td className="py-4 px-6">{item.from}</td>
                        <td className="py-4 px-6">{item.to}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-white flex p-10">
              {Object.keys(estadoDiscosHanoi).map((key, index) => (
                <div
                  className="flex flex-col justify-center items-center"
                  key={index}
                >
                  <div
                    className="w-2 bg-black"
                    style={{
                      height: N * 45 - estadoDiscosHanoi[key].length * 10,
                    }}
                  ></div>
                  {/* Seccion para discos */}
                  {estadoDiscosHanoi[key].map((item, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          height: 10,
                          width: 40 + 10 * item,
                          backgroundColor: coloresDiscos[item],
                        }}
                      ></div>
                    );
                  })}
                  {/* parte de abajo, suelo */}
                  <div
                    className="bg-black"
                    style={{ height: 10, width: 10 + 60 * N }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 justify-center mt-3">
              <button className="text-center inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Estado Inicial
              </button>
              <button
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => {
                  setPasoActual((oldState) => --oldState);
                }}
              >
                Paso Anterior
              </button>
              <button
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => {
                  setPasoActual((oldState) => ++oldState);
                }}
              >
                Paso Siguiente
              </button>
              <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Estado Final
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TorreHanoi;
