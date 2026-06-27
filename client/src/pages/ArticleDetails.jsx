import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, Download, FileText, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { articlesData } from '../data/portfolioData';
import { useEffect } from 'react';

const ArticleDetails = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  
  const article = articlesData.find(a => a.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 pb-32">
        <div className="text-center">
          <h2 className="text-3xl font-heading font-black mb-4">Article introuvable</h2>
          <Link to="/" className="text-accent2 hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const renderContentBlock = (block, idx) => {
    switch (block.type) {
      case 'text':
        return <p key={idx} className="text-gray-300 text-lg leading-relaxed mb-6">{block.value}</p>;
      case 'heading':
        return <h3 key={idx} className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><span className="w-6 h-1 bg-accent2 block rounded-full"></span>{block.value}</h3>;
      case 'image':
        return (
          <figure key={idx} className="my-10">
            <img src={block.value} alt={block.caption} className="w-full rounded-2xl border border-gray-800 shadow-xl" />
            {block.caption && <figcaption className="text-center text-gray-500 text-sm mt-3 font-mono">{block.caption}</figcaption>}
          </figure>
        );
      case 'gallery':
        return (
          <div key={idx} className="my-10">
            <div className="flex items-center gap-2 text-accent2 mb-4 font-mono text-sm uppercase tracking-wider">
              <ImageIcon size={16} /> {language === 'fr' ? 'Galerie' : 'Gallery'}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {block.images.map((img, i) => (
                <img key={i} src={img} alt={`Gallery image ${i+1}`} className="w-full h-48 object-cover rounded-xl border border-gray-800 hover:scale-105 transition-transform duration-300 cursor-pointer" />
              ))}
            </div>
          </div>
        );
      case 'file':
        return (
          <div key={idx} className="my-10 bg-card p-6 rounded-2xl border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 group hover:border-accent1/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-accent1/10 text-accent1 rounded-xl group-hover:scale-110 transition-transform">
                <FileText size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">{block.name}</h4>
                <p className="text-gray-500 text-sm font-mono">{block.size}</p>
              </div>
            </div>
            <a href={block.value} download className="flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-accent1 hover:text-black border border-gray-700 hover:border-accent1 text-white rounded-xl transition-all font-bold text-sm shadow-lg">
              <Download size={18} /> {language === 'fr' ? 'Télécharger' : 'Download'}
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background pt-32 pb-32 relative min-h-screen"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl">
        
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-accent2 mb-12 transition-colors font-mono group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          {language === 'fr' ? 'Retour aux articles' : 'Back to articles'}
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6 text-sm font-mono">
            <div className="flex items-center gap-1.5 bg-gray-900 px-3 py-1 rounded-full border border-gray-800">
              <BookOpen size={14} className="text-accent2" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-900 px-3 py-1 rounded-full border border-gray-800">
              <Clock size={14} className="text-accent2" />
              <span>{article.readTime[language]}</span>
            </div>
            <div className="flex gap-2 ml-auto">
              {article.tags.map((tag, idx) => (
                <span key={idx} className="text-accent2 border border-accent2/30 bg-accent2/10 px-3 py-1 rounded-full text-xs">#{tag}</span>
              ))}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-8 leading-tight">
            {article.title[language]}
          </h1>
          
          {/* Main Cover Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-gray-800 mb-12 shadow-2xl">
            <img src={article.image} alt={article.title[language]} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
        </header>

        {/* Content Body */}
        <div className="article-content max-w-none">
          {article.content[language].map((block, idx) => renderContentBlock(block, idx))}
        </div>

      </div>
    </motion.div>
  );
};

export default ArticleDetails;
