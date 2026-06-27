import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const CvViewer = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  // Chemin vers votre CV dans le dossier public
  const cvPath = "/CV_Anas_Haddou_ATS-1.pdf"; 
  


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
        >
          {/* Overlay click to close */}
          <div className="absolute inset-0" onClick={onClose}></div>

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-[85vh] bg-card border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900/50">
              <div className="flex items-center gap-3 text-white font-heading font-bold">
                <div className="p-2 bg-accent1/20 text-accent1 rounded-lg">
                  <FileText size={20} />
                </div>
                {language === 'fr' ? 'Curriculum Vitae' : 'Curriculum Vitae'}
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href={`${cvPath}?v=1.1`}
                  download="Anas_Haddou_CV_ATS.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-accent1/10 hover:bg-accent1 text-accent1 hover:text-black transition-colors rounded-lg font-bold text-sm border border-accent1/30"
                >
                  <Download size={16} />
                  <span className="hidden sm:inline">{language === 'fr' ? 'Télécharger' : 'Download'}</span>
                </a>
                <button 
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white hover:bg-red-500/20 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
 
            {/* PDF Viewer Body */}
            <div className="flex-1 bg-gray-900 w-full h-full relative">
              {/* Fallback to embedded Google Docs viewer if local PDF fails, or use native iframe */}
              <iframe 
                src={`${cvPath}?v=1.1#toolbar=0&navpanes=0`} 
                title="CV Viewer"
                className="w-full h-full border-none bg-white"
              >
                <p className="text-white text-center p-10">
                  {language === 'fr' 
                    ? 'Votre navigateur ne supporte pas la lecture de PDF.' 
                    : 'Your browser does not support PDF viewing.'}
                  <a href={`${cvPath}?v=1.1`} className="text-accent1 underline ml-2">Télécharger le PDF</a>
                </p>
              </iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CvViewer;
