import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Servicos from './pages/Servicos';
import Projetos from './pages/Projetos';
import Blog from './pages/Blog';
import Contato from './pages/Contato';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  return (
    <div className="font-roboto text-neutral-800 flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;