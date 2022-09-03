import React from "react";

export default function TablaVerdad({ stringTable }) {
  return (
    <div className="flex items-center justify-center flex-col">
      <h4 className="font-bold mt-5">Tabla de verdad</h4>
      <div className="overflow-x-auto relative rounded-xl">
        {/* <table className="w-full text-sm text-left text-black">
          <thead className="text-m text-gray-700 uppercase bg-gray-50 dark:bg-gray-70">
            <tr>
              <th className="py-3 px-6">P</th>
              <th className="py-3 px-6">Q</th>
              <th className="py-3 px-6">Expresion Logica</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">
              <th className="py-4 px-6 ">0</th>
              <td className="py-4 px-6">0</td>
              <td className="py-4 px-6">0</td>
            </tr>
            <tr className="bg-white border-b ">
              <th className="py-4 px-6 ">0</th>
              <td className="py-4 px-6">0</td>
              <td className="py-4 px-6">0</td>
            </tr>
            <tr className="bg-white ">
              <th className="py-4 px-6 ">0</th>
              <td className="py-4 px-6">0</td>
              <td className="py-4 px-6">0</td>
            </tr>
            <tr className="bg-white ">
              <th className="py-4 px-6 ">0</th>
              <td className="py-4 px-6">0</td>
              <td className="py-4 px-6">0</td>
            </tr>
          </tbody>
        </table> */}
        <textarea className="w-full h-full" value={stringTable} />
      </div>
    </div>
  );
}
