import { useState, useEffect } from "react";
import TablaVerdad from "./components/TablaVerdad";
import TecladoVirtual from "./components/TecladoVirtual";
import evaluate from "./helpers/LogicExpressionParser";
import checkParanthesis from "./helpers/parentesisBalanceados";
import guiasimbolos from "./simbolos-de-logica.jpg";

function Programa2Unidad2() {
  const [entradaUsuario, setEntradaUsuario] = useState("");
  const [expresionLogica, setExpresionLogica] = useState("");
  const [resultado, setResultado] = useState({
    request: "EXPRESION LOGICA",
    success: false,
    result: "",
  });

  useEffect(() => {
    procesarEntradaUsuario(entradaUsuario);
  }, [entradaUsuario]);

  useEffect(() => {
    console.log(resultado);
  }, [resultado]);

  const procesarEntradaUsuario = (valor) => {
    // Primero se convierte a minuscula para siempre resivir p o q (no P o Q)
    valor = valor.toLocaleLowerCase();
    setEntradaUsuario(valor);
    setResultado(evaluate(valor));
  };

  return (
    <div>
      <hr className="border-black" />
      <h2 className="text-xl font-bold">Programa 2 - Unidad 1</h2>
      <div>
        <h3 className="font-bold">Instrucciones</h3>
        <p className="px-5 md:px-0">
          Crear un programa que acepte una expresion logica cualquiera con las
          variables <span className="font-bold">P</span> y{" "}
          <span className="font-bold">Q</span>, y que genere su tabla de verdad.
        </p>
      </div>
      <div className="my-5">
        <TecladoVirtual
          actualizar={setEntradaUsuario}
          validar={procesarEntradaUsuario}
          valor={expresionLogica}
        />
        <input
          type="text"
          onChange={(e) => {
            procesarEntradaUsuario(e.target.value);
          }}
          value={entradaUsuario}
          placeholder="Introduzca su expresión lógica"
          className="mx-10 shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {entradaUsuario.length > 0 && (
          <p
            className={`font-bold ${
              resultado.success ? "text-green-700" : "text-red-700"
            }`}
          >
            {resultado.success
              ? "Expresión Valida"
              : "Expresión no valida, compruebe por favor"}
          </p>
        )}
      </div>
      <div className="flex items-center justify-center gap-5 w-full flex-wrap px-10">
        <div className="self-stretch w-full md:w-[45%]">
          <img
            className="mt-5 h-full w-full"
            src={guiasimbolos}
            alt="Guía símbolos de lógica de símbolos de lógica"
          />
        </div>
        <TablaVerdad stringTable={resultado.success ? resultado.table : ""} />
      </div>
    </div>
  );
}

export default Programa2Unidad2;
