import { useState, useEffect } from "react";
import toast from "react-hot-toast";

function Programa1Unidad2() {
  const [UserInput, setUserInput] = useState(" ");
  const [Relacion, setRelacion] = useState([]);
  const [TablaRelacion, setTablaRelacion] = useState(null);

  const [esReflexiva, setEsReflexiva] = useState(false);
  const [esAntisimetrica, setEsAntisimetrica] = useState(false);
  const [esTransitiva, setEsTransitiva] = useState(false);

  const validar = (entrada) => {
    const splitted = entrada.slice(1, -1).split(",");
    let relacion = [];

    const ejeXRegex = /^\([0-9|a-z|A-Z]+$/;
    const ejeYRegex = /^[0-9|a-z|A-Z]+\)$/;

    let esValido = false;
    for (let i = 0; i < splitted.length; i++) {
      if (i % 2 == 0) esValido = ejeXRegex.test(splitted[i]);
      else {
        esValido = ejeYRegex.test(splitted[i]);
        relacion.push([splitted[i - 1].substring(1), splitted[i].slice(0, -1)]);
      }
      if (!esValido) {
        relacion = [];
        break;
      }
    }

    return { esValido, relacion };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // Validacion de la entrada
      if (UserInput[0] != "{" && UserInput[UserInput.length - 1] != "}") {
        toast.error("La relacion debe estar encerrada en corchetes {}");
        setRelacion(null);
        setTablaRelacion(null);
        return;
      }
      const { esValido, relacion } = validar(UserInput);
      if (!esValido) {
        toast.error(
          "Introdujo mal la relacion, solo se permiten letras y numeros"
        );
        setRelacion(null);
        setTablaRelacion(null);
        return;
      }
      toast.success("Correcto, validando relacion");
      setRelacion(relacion);
    }, 1000);
    return () => clearTimeout(timer);
  }, [UserInput]);

  useEffect(() => {
    if (Relacion === null || Relacion?.length === 0) {
      setTablaRelacion(null);
      return;
    }
    // Construir Tabla de Relacion (producto cartesiano)

    // Se obtienen elementos unicos para formar filas y columnas de la relacion (en orden)
    const elementosUnicos = [...new Set(Relacion.flat())].sort();

    // Se inicializa tabla de relacion, inicialmente todos valen 0
    let tablaRelacion = new Array(elementosUnicos.length + 1);
    for (let i = 0; i < tablaRelacion.length; i++) {
      tablaRelacion[i] = new Array(elementosUnicos.length + 1).fill(0);
    }

    // Se llena los ejes X y Y de la relacion
    for (let i = 0; i < tablaRelacion.length; i++) {
      for (let j = 0; j < tablaRelacion[i].length; j++) {
        if (tablaRelacion[j + 1])
          if (i == 0) tablaRelacion[i][j + 1] = elementosUnicos[j];
        if (tablaRelacion[i + 1])
          if (j == 0) tablaRelacion[i + 1][j] = elementosUnicos[i];
      }
    }
    // El elemento de la esquina 0,0 es nulo, no se utiliza
    tablaRelacion[0][0] = null;

    // Arreglo que nos permite saber en que parte de la tabla estaremos ubicados (eje x o eje y)
    let position = tablaRelacion[0];
    // Se llena con 1 la relacion que el usuario puso.
    Relacion.forEach((x) => {
      tablaRelacion[position.indexOf(x[0])][position.indexOf(x[1])] = 1;
    });

    setTablaRelacion(tablaRelacion);
  }, [Relacion]);

  useEffect(() => {
    if (TablaRelacion === null || TablaRelacion?.length === 0) return;

    // Se inicializan variables
    let constanteReflexividad = 0;
    let simetria = true;
    let transitividad = true;

    // Se recorre toda la tabla de relacion para determinar cada propiedad
    for (let i = 1; i < TablaRelacion.length; i++) {
      for (let j = 1; j < TablaRelacion.length; j++) {
        // Reflexividad, su toda la diagonal es 1 la suma sera igual a la cantidad de columnas o filas
        if (i === j && TablaRelacion[i][j] === 1) constanteReflexividad++;
        // Simetria, si i,j == j,i hay simetria, al final se niega para obtener antisimetria
        if (simetria) simetria = TablaRelacion[i][j] === TablaRelacion[j][i];
        // Transitividad
        if (TablaRelacion[i][j]) {
          for (let k = 0; k < TablaRelacion.length; k++) {
            if (TablaRelacion[j][k] && !TablaRelacion[i][k]) {
              transitividad = false;
            }
          }
        }
      }
    }
    setEsReflexiva(constanteReflexividad === TablaRelacion.length - 1);
    setEsAntisimetrica(!simetria);
    setEsTransitiva(transitividad);
  }, [TablaRelacion]);

  // Configuracion de grafica
  const graph = {
    nodes: [
      { id: 1, label: "Node 1", title: "node 1 tootip text" },
      { id: 2, label: "Node 2", title: "node 2 tootip text" },
      { id: 3, label: "Node 3", title: "node 3 tootip text" },
      { id: 4, label: "Node 4", title: "node 4 tootip text" },
      { id: 5, label: "Node 5", title: "node 5 tootip text" },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
    ],
  };

  const options = {
    layout: {
      hierarchical: true,
    },
    edges: {
      color: "#000000",
    },
    height: "500px",
  };

  const events = {
    select: function (event) {
      var { nodes, edges } = event;
    },
  };

  return (
    <div>
      <div>
        <h2 className="text-lg font-bold">Instrucciones</h2>
        <p>
          Escriba un programa que determine si una relación es reflexiva,
          antisimetrica o transitiva.
        </p>
      </div>
      <div>
        <p>Utilize el siguiente formato: {"{(1,1),(2,2)...(n,m)}"}</p>
        <p>
          Ejemplo:{" "}
          {
            "{(a,a),(b,b),(c,c),(a,c),(c,d),(c,e),(a,d),(d,d),(a,e),(b,c),(b,d),(b,e),(e,e)}"
          }
        </p>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          // value={numero1}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
      </div>
      {TablaRelacion !== null && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold">Tabla de Relacion</h2>
          <table>
            <tr className="bg-gray-400">
              {TablaRelacion[0].map((x, index) => {
                if (x === null)
                  return (
                    <td className="border-2 border-black min-w-10" key={index}>
                      {" "}
                    </td>
                  );
                return (
                  <td className="border-2 border-black" key={index}>
                    {x}
                  </td>
                );
              })}
            </tr>
            {TablaRelacion.map((filaTabla) => {
              if (filaTabla[0] !== null)
                return (
                  <tr>
                    {filaTabla.map((x, index) => (
                      <td
                        key={index}
                        className={`border-2 border-black min-w-[40px] ${
                          index == 0 ? "bg-blue-600" : "bg-white"
                        }`}
                      >
                        {x}
                      </td>
                    ))}{" "}
                  </tr>
                );
            })}
          </table>
        </div>
      )}
      {TablaRelacion !== null && (
        <div>
          <h2 className="font-bold mt-5">Propiedades</h2>
          {esReflexiva ? (
            <p>Esta relacion es reflexiva.</p>
          ) : (
            <p>
              Esta relacion <span className="font-bold">NO</span> es reflexiva.
            </p>
          )}
          {esAntisimetrica ? (
            <p>Esta relacion es antisimetrica.</p>
          ) : (
            <p>
              Esta relacion <span className="font-bold">NO</span> es
              antisimetrica.
            </p>
          )}
          {esTransitiva ? (
            <p>Esta relacion es transitiva.</p>
          ) : (
            <p>
              Esta relacion <span className="font-bold">NO</span> es transitiva.
            </p>
          )}
          {esReflexiva && esAntisimetrica && esTransitiva && (
            <div>
              Esta relacion es un <span className="font-bold">COPO</span>.
            </div>
          )}
        </div>
      )}
      {/* {TablaRelacion !== null && (
        <div>
          <h2 className="font-bold">Grafo</h2>
        </div>
      )} */}
    </div>
  );
}

export default Programa1Unidad2;
