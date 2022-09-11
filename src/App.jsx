import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Unidad1 from "./pages/unidad1/Unidad1";
import Programa1Unidad1 from "./pages/unidad1/components/Programa1Unidad1/Programa1Unidad1";
import Programa2Unidad2 from "./pages/unidad1/components/Programa2Unidad1/Programa2Unidad1";
import Programa1Unidad2 from "./pages/unidad2/components/Programa1Unidad2";
import Unidad2 from "./pages/unidad2/Unidad2";
import TorreHanoi from "./pages/torrehanoi/TorreHanoi";

function App() {
  return (
    <div className="bg-stone-300 min-h-screen">
      <Header />
      <Sidebar />
      <div className="h-[calc(100vh-104px)] sm:h-[calc(100vh-124px)] flex items-center justify-center overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unidad1" element={<Unidad1 />}>
            <Route path="programa1" element={<Programa1Unidad1 />} />
            <Route path="programa2" element={<Programa2Unidad2 />} />
          </Route>
          <Route path="/unidad2" element={<Unidad2 />}>
            <Route path="programa1" element={<Programa1Unidad2 />} />
          </Route>
          <Route path="/torrehanoi" element={<TorreHanoi />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
