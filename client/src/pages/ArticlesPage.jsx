import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { articlesData } from '../data/portfolioData';
import { useEffect, useState } from 'react';

const ArticlesPage = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("Tous");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Extract all unique tags
  const allTags = ["Tous", ...new Set(articlesData.flatMap(article => article.tags))];

  const filteredArticles = articlesData.filter(article => 
    activeFilter === "Tous" ? true : article.tags.includes(activeFilter)
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background pt-32 pb-32 relative min-h-screen"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-accent2 mb-12 transition-colors font-mono group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          {language === 'fr' ? 'Retour à l\'accueil' : 'Back to home'}
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 flex items-center gap-4">
            <span className="w-16 h-[3px] bg-gradient-to-r from-accent2 to-transparent block"></span>
            {language === 'fr' ? 'Tous les articles' : 'All articles'}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            {language === 'fr' 
              ? "Parcourez toute ma bibliothèque d'articles, de tutoriels et de retours d'expérience."
              : "Browse through my entire library of articles, tutorials, and feedback."}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {allTags.map((tag, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(tag)}
              className={`px-5 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                activeFilter === tag 
                  ? 'bg-accent2 text-white font-bold shadow-[0_0_15px_rgba(124,58,237,0.4)] scale-105' 
                  : 'bg-gray-900/50 text-gray-400 border border-gray-800 hover:border-accent2/50 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredArticles.map((article, index) => (
              <motion.article 
                key={article.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl border border-gray-800/50 hover:border-accent2/50 transition-all group overflow-hidden flex flex-col h-full shadow-lg"
              >
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gray-900/60 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={article.image} 
                    alt={article.title[language]} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    {article.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-black/60 backdrop-blur-md border border-gray-700 rounded-full text-xs font-mono text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-gray-400 mb-4 text-sm font-mono">
                    <div className="flex items-center gap-1.5">
                      <BookOpen size={14} className="text-accent2" />
                      <span>{article.date}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-accent2" />
                      <span>{article.readTime[language]}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent2 transition-colors line-clamp-2 leading-tight">
                    {article.title[language]}
                  </h3>
                  
                  <p className="text-gray-400 mb-8 flex-1 line-clamp-3">
                    {article.excerpt[language]}
                  </p>
                  
                  <Link to={`/article/${article.id}`} className="inline-flex items-center gap-2 text-white group-hover:text-accent2 transition-colors font-bold text-sm uppercase tracking-wider mt-auto w-fit">
                    {language === 'fr' ? "Lire l'article" : "Read article"} 
                    <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-24">
            <h3 className="text-2xl font-bold text-gray-400">
              {language === 'fr' ? 'Aucun article trouvé pour cette catégorie.' : 'No articles found for this category.'}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ArticlesPage;
