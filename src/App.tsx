import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import LanguageSwitch from './components/LanguageSwitch';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import { PageTransitionProvider } from './context/PageTransitionContext';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <PageTransitionProvider>
          <div className="bg-dark text-olive min-h-screen">
            <CustomCursor />
            <LanguageSwitch />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </PageTransitionProvider>
      </Router>
    </LanguageProvider>
  );
}