import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Unidad1() {
  return (
    <div className="text-center max-h-full py-10 ">
      <h2 className="font-bold text-2xl">Unidad 1 - Lógica proposicional</h2>
      <div className="flex items-center justify-center">
        <Link
          to="/unidad1/programa1"
          className="py-2 px-3 my-1 rounded ease-in-out duration-300 hover:bg-itn hover:text-white cursor-pointer font-bold text-m text-right"
        >
          Programa 1
        </Link>
        <Link
          to="/unidad1/programa2"
          className="py-2 px-3 my-1 rounded ease-in-out duration-300 hover:bg-itn hover:text-white cursor-pointer font-bold text-m text-right"
        >
          Programa 2
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Unidad1;
