import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Terminal from './components/ui/Terminal';
import ScrollToTop from './components/ui/ScrollToTop';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import ArticleDetails from './pages/ArticleDetails';
import ArticlesPage from './pages/ArticlesPage';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-white font-sans selection:bg-accent1/30 selection:text-white relative">
          <CustomCursor />
          <Navbar />
          
          {/* Global Background Grid */}
          <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>

          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/article/:id" element={<ArticleDetails />} />
              <Route path="/articles" element={<ArticlesPage />} />
            </Routes>
          </main>

          <div className="relative z-10">
            <Footer />
          </div>

          <Terminal />
          <ScrollToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
