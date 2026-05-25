import { useEffect } from 'react';
import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Funcionalidades from './pages/Funcionalidades';
import Clientes from './pages/Clientes';
import EstudantesProfessores from './pages/EstudantesProfessores';
import PoliticaDePrivacidade from './pages/PoliticaDePrivacidade';
import TermosDeUso from './pages/TermosDeUso';
import TesteGratis from './pages/TesteGratis';
import TesteGratisSucesso from './pages/TesteGratisSucesso';
import TesteGratisPagamentoSuccess from './pages/TesteGratisPagamentoSuccess';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { SeoHead } from './components/SeoHead';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <SeoHead />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funcionalidades" element={<Funcionalidades />} />
        <Route
          path="/funcionalidades/*"
          element={<Navigate to="/funcionalidades" replace />}
        />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/estudantes-professores" element={<EstudantesProfessores />} />
        <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
        <Route path="/teste-gratis" element={<TesteGratis />} />
        <Route path="/teste-gratis/sucesso" element={<TesteGratisSucesso />} />
        <Route path="/teste-gratis/pagamentosuccess" element={<TesteGratisPagamentoSuccess />} />
      </Routes>
      <WhatsAppWidget />
    </BrowserRouter>
  );
}

export default App;
