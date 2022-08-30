import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="animate-fadeIn flex flex-col items-center justify-center py-10 px-5">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center">
        <span className="font-bold block">Bienvenid@</span>
      </h2>
      <p className="text-xl font-bold">
        Abra el menú de la izquiera para ver más opciones
      </p>
      <Link
        to="/fpy"
        className="bg-itn font-bold text-white px-5 py-2 rounded-md my-10 hover:scale-105 active:translate-y-1 text-xl sm:text-2xl"
      >
        Programa 1 - Unidad 1
      </Link>
    </div>
  );
}

export default Home;
