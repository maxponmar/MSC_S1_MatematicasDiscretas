import { Link } from "react-router-dom";
import GobiernoMexico from "../../assets/gobierno-mexico.png";
import EducacionSEP from "../../assets/educacion-sep.png";
import TecnmITN from "../../assets/tecnm_itn.jpg";

function Footer() {
  return (
    <div className="bg-white font-bold text-itn py-2 flex flex-col items-center justify-center">
      <div className="flex gap-10">
        <img
          className="h-5 mb-2 sm:h-10"
          src={GobiernoMexico}
          alt="Gobierno de Mexico"
        />
        <img
          className="h-5 mb-2 sm:h-10"
          src={EducacionSEP}
          alt="Educación - Secretaría de Educación Pública"
        />
        <img
          className="h-5 mb-2 sm:h-10"
          src={TecnmITN}
          alt="Tecnológico Nacional de México - Instituto Tecnológico de Nogales"
        />
      </div>
      <div className="flex items-center justify-center space-x-4 text-xs md:text-lg">
        <a
          href="http://www.itnogales.edu.mx/index.html"
          target="_blank"
          className="font-bold"
        >
          Instituto Tecnológico de Nogales
        </a>
        <h2>Maximiliano Ponce Marquez</h2>
      </div>
    </div>
  );
}

export default Footer;
