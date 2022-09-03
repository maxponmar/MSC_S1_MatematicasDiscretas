function TecladoVirtual({ actualizar }) {
  return (
    <div className="text-xs md:text-lg mb-5 flex gap-1 px-10 max-w-[100vw] overflow-auto">
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
      <button
        className="bg-gray-400 py-1 px-3 rounded hover:-translate-y-0.5 active:translate-y-0.5 animate-fadeIn"
        onClick={() => {
          actualizar((anterior) => anterior.slice(0, -1));
        }}
      >
        Borrar
      </button>
    </div>
  );
}

export default TecladoVirtual;
