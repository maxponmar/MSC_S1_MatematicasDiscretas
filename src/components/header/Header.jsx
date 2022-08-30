import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white font-bold text-continental text-center text-xl py-1">
      <Link to="/">Matemáticas Discretas</Link>
    </header>
  );
}

export default Header;
