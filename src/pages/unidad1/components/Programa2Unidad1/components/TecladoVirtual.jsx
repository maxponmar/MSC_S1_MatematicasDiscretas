function TecladoVirtual({ actualizar }) {
  return (
    <div className="flex gap-1 flex-col">
      <div className="mb-5 flex gap-3 justify-center">
        <button
          className="bg-gray-400 py-1 px-3 rounded hover:-translate-y-0.5 active:translate-y-0.5 animate-fadeIn"
          onClick={() => {
            actualizar((anterior) => anterior + "p");
          }}
        >
          p
        </button>
        <button
          className="bg-gray-400 py-1 px-3 rounded hover:-translate-y-0.5 active:translate-y-0.5 animate-fadeIn"
          onClick={() => {
            actualizar((anterior) => anterior + "q");
          }}
        >
          q
        </button>
        <button
          className="bg-gray-400 py-1 px-3 rounded hover:-translate-y-0.5 active:translate-y-0.5 animate-fadeIn"
          onClick={() => {
            actualizar((anterior) => anterior + "(");
          }}
        >
          (
        </button>
        <button
          className="bg-gray-400 py-1 px-3 rounded hover:-translate-y-0.5 active:translate-y-0.5 animate-fadeIn"
          onClick={() => {
            actualizar((anterior) => anterior + ")");
          }}
        >
          )
        </button>
        <button
          className="bg-gray-400 py-1 px-3 rounded hover:-translate-y-0.5 active:translate-y-0.5 animate-fadeIn"
          onClick={() => {
            actualizar((anterior) => anterior + "~");
          }}
        >
          ¬ Negación (no)
        </button>
        <button
          className="bg-gray-400 py-1 px-3 rounded hover:-translate-y-0.5 active:translate-y-0.5 animate-fadeIn"
          onClick={() => {
            actualizar((anterior) => anterior + "v");
          }}
        >
          ∨ Disyunción (o)
        </button>
        <button
          className="bg-gray-400 py-1 px-3 rounded hover:-translate-y-0.5 active:translate-y-0.5 animate-fadeIn"
          onClick={() => {
            actualizar((anterior) => anterior + "^");
          }}
        >
          ∧ Conjunción (y)
        </button>
        <button
          className="bg-gray-400 py-1 px-3 rounded hover:-translate-y-0.5 active:translate-y-0.5 animate-fadeIn"
          onClick={() => {
            actualizar((anterior) => anterior + "->");
          }}
        >
          → Condicional (si... entonces)
        </button>
        <button
          className="bg-gray-400 py-1 px-3 rounded hover:-translate-y-0.5 active:translate-y-0.5 animate-fadeIn"
          onClick={() => {
            actualizar((anterior) => anterior + "<->");
          }}
        >
          ↔ Bicondicional (si y sólo si)
        </button>
      </div>
      <p>
        Si no coloca una expresion entre variables se hara la operacion{" "}
        <span className="font-bold">∧ Conjunción (y)</span>
      </p>
    </div>
  );
}

export default TecladoVirtual;
