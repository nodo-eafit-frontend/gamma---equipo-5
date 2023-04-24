import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/molecules/Header/Header";
import { Home } from "./pages/Home/Home";
import { Testimonios } from "./pages/Testimonios/Testimonios";
import { Donaciones } from "./pages/Donaciones/Donaciones";
import { RealizarDonaciones } from "./pages/Donaciones/RealizarDonaciones/RealizarDonaciones";
import { GenerarCertificado } from "./pages/Donaciones/GenerarCertificado/GenerarCertificado";
import { AnimatePresence } from "framer-motion";
import { Footer } from "./components/molecules/Footer/Footer";
import {
  HOME,
  TESTIMONIOS,
  DONACIONES,
  GENERAR_CERTIFICADO,
  REALIZAR_DONACIONES,
  NOT_FOUND,
} from "./routes/paths";
import "./App.scss";
// import { useContext } from "react";
// import { DataContext } from "./utils/context/DataContext";
// import { Toggle } from "./components/atoms/Toggle/Toggle";

function App() {
  const location = useLocation();
  // const { DONATIONS } = useContext(DataContext);
  // const { toggle } = DONATIONS.header;
  return (
    // Se envuelve la aplicacion del contexto
    <div className="App">
      <Header />
      <AnimatePresence>
        {/* <Toggle {...toggle} /> */}
        <Routes location={location} key={location.pathname}>
          <Route path={HOME} element={<Home />}></Route>
          <Route path={TESTIMONIOS} element={<Testimonios />}></Route>
          <Route path={DONACIONES} element={<Donaciones />}>
            <Route
              path={REALIZAR_DONACIONES}
              element={<RealizarDonaciones />}
            />
            <Route
              path={GENERAR_CERTIFICADO}
              element={<GenerarCertificado />}
            />
          </Route>
          <Route path={NOT_FOUND} element={<div>Error 404 not found</div>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
