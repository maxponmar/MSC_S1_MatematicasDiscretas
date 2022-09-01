import { useState, useEffect } from "react";
import TablaVerdad from "./components/TablaVerdad";
import TecladoVirtual from "./components/TecladoVirtual";
import checkParanthesis from "./helpers/parentesisBalanceados";
import guiasimbolos from "./simbolos-de-logica.jpg";

function Programa2Unidad2() {
  const [entradaUsuario, setEntradaUsuario] = useState("");
  const [expresionLogica, setExpresionLogica] = useState("");
  const [expresionValida, setExpresionValida] = useState(true);

  useEffect(() => {
    if (expresionValida) {
      setExpresionLogica(entradaUsuario);
    }
  }, [expresionValida]);

  useEffect(() => {
    procesarEntradaUsuario(entradaUsuario);
  }, [entradaUsuario]);

  const procesarEntradaUsuario = (valor) => {
    // Primero se convierte a minuscula para siempre resivir p o q (no P o Q)
    valor = valor.toLocaleLowerCase();
    setEntradaUsuario(valor);

    // Algoritmo para procesar expresion logica

    // Expresion regular que verifica si la expresion logica contiene
    // Parentesis (,)
    // la variable P o Q (minusculas solamente)
    // ¬ Para negacion
    // ∨ Disyuncion (or)
    // ∧ Conjuncion (and)
    // → Condicional (si... entonces )
    // ↔ Bicondicional (si y solo si)
    const caracteresValidos = /^[\(\)pq¬∨∧→↔]+$/;

    // Tambien se debe comprobar si hay la combinacion correcta de parentesis
    // Si se pone por ejemplo ((p∨q) esta mal o )p∨q( por que estan al reves.
    setExpresionValida(
      caracteresValidos.test(valor) && checkParanthesis(valor) == 0
    );
  };

  return (
    <div>
      <hr className="border-black" />
      <h2 className="text-xl font-bold">Programa 2 - Unidad 1</h2>
      <div>
        <h3 className="font-bold">Instrucciones</h3>
        <p>
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
              expresionValida ? "text-green-700" : "text-red-700"
            }`}
          >
            {expresionValida
              ? "Expresión Valida"
              : "Expresión no valida, compruebe por favor"}
          </p>
        )}
        <div className="flex gap-10">
          <img
            className="mt-5"
            src={guiasimbolos}
            alt="Guía símbolos de lógica de símbolos de lógica"
          />
          <TablaVerdad />
        </div>
      </div>
    </div>
  );
}

export default Programa2Unidad2;
