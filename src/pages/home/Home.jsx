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
        to="/unidad1"
        className="bg-itn font-bold text-white px-5 py-2 rounded-md my-10 hover:scale-105 active:translate-y-1 text-xl sm:text-2xl"
      >
        Unidad 1
      </Link>
      <Link
        to="/unidad2"
        className="bg-itn font-bold text-white px-5 py-2 rounded-md my-10 hover:scale-105 active:translate-y-1 text-xl sm:text-2xl"
      >
        Unidad 2
      </Link>
      <Link
        to="/unidad3"
        className="bg-itn font-bold text-white px-5 py-2 rounded-md my-10 hover:scale-105 active:translate-y-1 text-xl sm:text-2xl"
      >
        Unidad 3
      </Link>
      <Link
        to="/unidad4"
        className="bg-itn font-bold text-white px-5 py-2 rounded-md my-10 hover:scale-105 active:translate-y-1 text-xl sm:text-2xl"
      >
        Unidad 4
      </Link>
      <Link
        to="/unidad5"
        className="bg-itn font-bold text-white px-5 py-2 rounded-md my-10 hover:scale-105 active:translate-y-1 text-xl sm:text-2xl"
      >
        Unidad 5
      </Link>
    </div>
  );
}

export default Home;
