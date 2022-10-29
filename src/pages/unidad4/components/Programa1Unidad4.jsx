import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

function Programa1Unidad4() {
  const [N, setN] = useState(0);
  const [PascalTriangle, setPascalTriangle] = useState([]);

  const pascalTriangle = (n) => {
    const triangle = [[1]];
    for (let i = 1; i < n; i++) {
      const row = [1];
      for (let j = 1; j < i; j++) {
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
      row.push(1);
      triangle.push(row);
    }
    return triangle;
  };

  useEffect(() => {
    setPascalTriangle(pascalTriangle(N));
  }, [N]);

  return (
    <div>
      <div>
        <h2 className="font-bold">Instruccciones</h2>
        <h3 className="font-bold">Programa 1 Unidad 4 - Triangulo de Pascal</h3>
        <p>
          Programa que genere el triangulo de Pascal hasta el nivel n, para n
          arbitraria
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 font-bold">
        <label>N:</label>
        <input
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          defaultValue={0}
          onChange={(e) => {
            const number = Number(e.target.value);
            if (number < 0) {
              toast.error("Por favor, solo números enteros positivos.");
              return;
            }
            if (!Number.isInteger(number)) {
              toast.error("Introduzca un numero valido");
              return;
            }
            if (number > 30) {
              toast.error(
                "A partir de 30 el triangulo es demasiado grande, intente con un numero menor"
              );
              return;
            }
            setN(number);
          }}
        />
      </div>
      {/* Triangulo pascal */}
      {N > 0 && (
        <div className="overflow-auto">
          <h2>Triangulo de Pascal</h2>
          <div>
            {PascalTriangle.map((row, index) => (
              // Print Pascal Triangle in HTML
              <div key={index}>
                <span key={index}>{index + 1} </span>
                {row.map((number, index) => (
                  <span
                    key={index}
                    className="w-[50px] mx-1 border border-black inline-block"
                  >
                    {number}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Programa1Unidad4;
