import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";
import Unidad1 from "./pages/unidad1/Unidad1";
import Programa1Unidad1 from "./pages/unidad1/components/Programa1Unidad1/Programa1Unidad1";

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
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
