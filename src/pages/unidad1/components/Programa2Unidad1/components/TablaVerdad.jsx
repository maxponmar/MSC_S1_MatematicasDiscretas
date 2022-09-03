import React from "react";

export default function TablaVerdad({ stringTable }) {
  return (
    <div className="flex items-center justify-center flex-col w-full">
      <h4 className="font-bold mt-5">Tabla de verdad</h4>
      <div className="overflow-x-auto relative rounded-xl w-full">
        <textarea className="w-full h-full" value={stringTable} />
      </div>
    </div>
  );
}
