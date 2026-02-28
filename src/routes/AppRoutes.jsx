import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Servicos from "../pages/Servicos"
import Sobre from "../pages/Sobre"
import Avaliacoes from "../pages/Avaliacoes"
import Contato from "../pages/Contato"
import PoliticaPrivacidade from "../pages/PoliticaPrivacidade"
import Header from "../components/layout/Header"

function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/avaliacoes" element={<Avaliacoes />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
      </Routes>
    </>
  )
}

export default AppRoutes