import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicosPage from './pages/ServicosPage';
import SobrePage from './pages/SobrePage';
import ContatoPage from './pages/ContatoPage';
import EquipePage from './pages/EquipePage';
import BlogPage from './pages/BlogPage';
import AgendamentoPage from './pages/AgendamentoPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/equipe" element={<EquipePage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/agendamento" element={<AgendamentoPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;