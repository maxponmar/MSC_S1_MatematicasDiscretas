function Programa2Unidad2() {
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
        <input
          type="text"
          placeholder="Introduzca su expresion logica"
          className="mx-10 shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <div className="flex items-center justify-center flex-col">
          <h4 className="font-bold mt-5">Tabla de verdad</h4>
          <div class="overflow-x-auto relative rounded-xl">
            <table class="w-full text-sm text-left text-black">
              <thead class="text-m text-gray-700 uppercase bg-gray-50 dark:bg-gray-70">
                <tr>
                  <th class="py-3 px-6">P</th>
                  <th class="py-3 px-6">Q</th>
                  <th class="py-3 px-6">Expresion Logica</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b ">
                  <th class="py-4 px-6 ">0</th>
                  <td class="py-4 px-6">0</td>
                  <td class="py-4 px-6">0</td>
                </tr>
                <tr class="bg-white border-b ">
                  <th class="py-4 px-6 ">0</th>
                  <td class="py-4 px-6">0</td>
                  <td class="py-4 px-6">0</td>
                </tr>
                <tr class="bg-white ">
                  <th class="py-4 px-6 ">0</th>
                  <td class="py-4 px-6">0</td>
                  <td class="py-4 px-6">0</td>
                </tr>
                <tr class="bg-white ">
                  <th class="py-4 px-6 ">0</th>
                  <td class="py-4 px-6">0</td>
                  <td class="py-4 px-6">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programa2Unidad2;
