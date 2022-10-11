import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Unidad3() {
  return (
    <div className="text-center max-h-full py-10 ">
      <h2 className="font-bold text-2xl">Unidad 3 - Recurrencia</h2>
      <div className="flex items-center justify-center">
        <Link
          to="/unidad3/programa1"
          className="py-2 px-3 my-1 rounded ease-in-out duration-300 hover:bg-itn hover:text-white cursor-pointer font-bold text-m text-right"
        >
          Programa 1
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Unidad3;
