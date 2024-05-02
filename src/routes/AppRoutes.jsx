import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicial from "../pages/Inicial";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Body from "../layout/Body";
import Racionais from "../pages/Racionais";
import Veigh from "../pages/Veigh";
import BrunoEMarrone from "../pages/Bruno&Marrone&Leonardo";
import GunsNRoses from '../pages/GunsNRoses'
import SeuJorge from '../pages/SeuJorge'

export default function AppRoutes() {
  return (
    <BrowserRouter> {/* responsável por englobar o app em navegação */}
      <Routes> {/* responsável pelas rotas */}
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Inicial />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/Racionais" element={<Racionais />} />
          <Route path="/veigh" element={<Veigh />} />
          <Route path="/Bruno&Marrone&Leonardo" element={<BrunoEMarrone />} />
          <Route path="/GunsNRoses" element={<GunsNRoses />} />
          <Route path="/SeuJorge" element={< SeuJorge />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
