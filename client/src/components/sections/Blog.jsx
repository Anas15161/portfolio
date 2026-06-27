import AnimatedSection from '../ui/AnimatedSection';
import { useLanguage } from '../../contexts/LanguageContext';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { articlesData } from '../../data/portfolioData';

const Blog = () => {
  const { language, t } = useLanguage();

  return (
    <AnimatedSection id="blog" className="bg-background pt-24 pb-32">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6 flex items-center gap-4">
              <span className="w-16 h-[3px] bg-gradient-to-r from-accent2 to-transparent block"></span>
              {t('blog')}
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg">
              {language === 'fr' 
                ? "Mes dernières réflexions, tutoriels et découvertes techniques." 
                : "My latest thoughts, tutorials, and technical discoveries."}
            </p>
          </div>
          <Link to="/articles" className="px-6 py-3 rounded-xl border border-gray-800 hover:border-accent2 text-white transition-all hover:bg-accent2/10 flex items-center gap-2 font-medium shrink-0 group">
            {language === 'fr' ? 'Voir tous les articles' : 'View all articles'}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.slice(0, 3).map((article, index) => (
            <motion.article 
              key={index} 
              whileHover={{ y: -10 }}
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
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Blog;
