import React from "react";

export default function TablaVerdad({ stringTable }) {
  return (
    <div className="w-1/2 self-stretch">
      <h4 className="font-bold mt-5">Tabla de verdad</h4>
      <div className="overflow-x-auto relative rounded-xl h-[calc(100%-24px)]">
        <textarea className="w-full h-full" value={stringTable} />
      </div>
    </div>
  );
}
