import { useState, useEffect } from "react";
import diagrama from "./diagrama.png";
import pseudocodigo from "./pseudocodigo.png";

function Programa1Unidad1() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState("");

  useEffect(() => {
    if (numero1 > numero2) setResultado("El número 1 es mayor");
    if (numero2 > numero1) setResultado("El número 2 es mayor");
  }, [numero1, numero2]);

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center text-center mx-20 text-xl">
        <div className="w-1/2">
          <h2>Instrucción:</h2>
          <p className="text-left">
            Desarrollar un programa que compare dos números enteros y diga cuál
            es el mayor. Presente el Algoritmo o Pseudocódigo, diagrama de
            flujo, código y ejecutable (Pueden utilizar la herramienta PSeInt).
          </p>
        </div>
        <div className="w-1/2">
          <div>
            <label className="mr-2">Número 1</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              defaultValue={numero1}
              onChange={(e) => {
                setNumero1(+e.target.value);
              }}
              step={1}
            />
          </div>
          <div>
            <label className="mr-2">Número 1</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              defaultValue={numero2}
              onChange={(e) => {
                setNumero2(+e.target.value);
              }}
              step={1}
            />
          </div>
          <div>
            <h3>Resulltado</h3>
            <p>{resultado}</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-xl">Pseudocódigo</h3>
        <img src={pseudocodigo} alt="Pseudocódigo del Algoritmo" />
      </div>
      <div className="mb-10">
        <h3 className="font-bold text-xl">Diagrama</h3>
        <img src={diagrama} alt="Diagrama del algoritmo" />
      </div>
    </div>
  );
}

export default Programa1Unidad1;
