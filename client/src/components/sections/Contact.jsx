import { useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import { Mail, Phone, MapPin, Send, User, MessageSquare, CheckCircle2, Copy, Check, Github, Linkedin, Calendar } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { sendContactMessage } from '../../services/api';
import toast, { Toaster } from 'react-hot-toast';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await sendContactMessage(formData);
      setIsSent(true);
      toast.success(language === 'fr' ? 'Message envoyé avec succès !' : 'Message sent successfully!', {
        style: { background: '#111827', color: '#fff', border: '1px solid #00f5ff' }
      });
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSent(false);
      }, 3000);
    } catch (error) {
      toast.error(error.message || (language === 'fr' ? 'Erreur lors de l\'envoi du message.' : 'Error sending message.'), {
        style: { background: '#111827', color: '#fff', border: '1px solid #ef4444' }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <AnimatedSection id="contact" className="bg-card/30 pt-24 pb-32">
      <Toaster position="bottom-right" />
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6 flex items-center justify-center gap-4">
            <span className="w-12 h-[3px] bg-accent1 block"></span>
            {language === 'fr' ? 'Contactez-moi' : 'Contact Me'}
            <span className="w-12 h-[3px] bg-accent2 block"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {language === 'fr' 
              ? "Prêt à discuter de votre prochain projet ou d'une opportunité de collaboration ?" 
              : "Ready to discuss your next project or a collaboration opportunity?"}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Info Cards & Socials */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            
            <div 
              onClick={() => handleCopy(personalInfo.email, 'email')}
              className="group bg-card p-6 rounded-2xl border border-gray-800 hover:border-accent1/50 transition-all cursor-pointer flex items-center justify-between relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent1/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="p-4 bg-accent1/10 text-accent1 rounded-xl group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <p className="text-white font-medium">{personalInfo.email}</p>
                </div>
              </div>
              <div className="text-gray-500 group-hover:text-accent1 transition-colors relative z-10">
                {copiedField === 'email' ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
              </div>
            </div>
            
            <div 
              onClick={() => handleCopy(personalInfo.phone, 'phone')}
              className="group bg-card p-6 rounded-2xl border border-gray-800 hover:border-accent2/50 transition-all cursor-pointer flex items-center justify-between relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent2/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="p-4 bg-accent2/10 text-accent2 rounded-xl group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{language === 'fr' ? 'Téléphone' : 'Phone'}</p>
                  <p className="text-white font-medium">{personalInfo.phone}</p>
                </div>
              </div>
              <div className="text-gray-500 group-hover:text-accent2 transition-colors relative z-10">
                {copiedField === 'phone' ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-gray-800 flex items-center gap-4">
              <div className="p-4 bg-gray-800 text-gray-300 rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">{language === 'fr' ? 'Localisation' : 'Location'}</p>
                <p className="text-white font-medium">{personalInfo.address}</p>
              </div>
            </div>

            {/* Social Links & Calendar */}
            <div className="mt-4 flex gap-4">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-600 hover:bg-gray-800 text-white transition-all">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-900/20 border border-blue-900/50 rounded-xl hover:bg-blue-900/40 hover:border-blue-500 text-blue-400 transition-all">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="flex-[2] flex items-center justify-center gap-2 py-3 bg-accent1/10 border border-accent1/30 rounded-xl hover:bg-accent1 hover:text-black text-accent1 font-medium transition-all shadow-[0_0_15px_rgba(0,245,255,0.1)] hover:shadow-[0_0_20px_rgba(0,245,255,0.4)]">
                <Calendar size={18} /> {language === 'fr' ? 'Réserver' : 'Book'}
              </a>
            </div>

          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3 relative group">
            {/* Animated Gradient Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent1 via-accent2 to-accent1 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-opacity duration-500 animate-gradient-border z-0"></div>

            <div className="bg-[#0f1115]/90 backdrop-blur-xl p-8 rounded-2xl border border-gray-800 relative z-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Field */}
                  <div className="relative group/input">
                    <User className={`absolute left-4 top-4 transition-colors z-10 ${formData.name ? 'text-accent1' : 'text-gray-500'} group-focus-within/input:text-accent1`} size={20} />
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-gray-700 rounded-xl py-4 pl-12 pr-10 text-white focus:outline-none focus:border-accent1 focus:bg-gray-900/50 transition-all peer relative z-0"
                      placeholder=" "
                    />
                    <label htmlFor="name" className="absolute left-12 top-4 text-gray-500 text-sm transition-all peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:text-accent1 peer-focus:bg-[#0f1115] peer-focus:px-2 peer-focus:z-20 peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-accent1 peer-[&:not(:placeholder-shown)]:bg-[#0f1115] peer-[&:not(:placeholder-shown)]:px-2 peer-[&:not(:placeholder-shown)]:z-20 pointer-events-none">
                      {t('name')}
                    </label>
                    {formData.name.length > 2 && <CheckCircle2 className="absolute right-4 top-4 text-green-500 z-10" size={20} />}
                  </div>

                  {/* Email Field */}
                  <div className="relative group/input">
                    <Mail className={`absolute left-4 top-4 transition-colors z-10 ${isValidEmail(formData.email) ? 'text-accent1' : 'text-gray-500'} group-focus-within/input:text-accent1`} size={20} />
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-gray-700 rounded-xl py-4 pl-12 pr-10 text-white focus:outline-none focus:border-accent1 focus:bg-gray-900/50 transition-all peer relative z-0"
                      placeholder=" "
                    />
                    <label htmlFor="email" className="absolute left-12 top-4 text-gray-500 text-sm transition-all peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:text-accent1 peer-focus:bg-[#0f1115] peer-focus:px-2 peer-focus:z-20 peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-accent1 peer-[&:not(:placeholder-shown)]:bg-[#0f1115] peer-[&:not(:placeholder-shown)]:px-2 peer-[&:not(:placeholder-shown)]:z-20 pointer-events-none">
                      {t('email')}
                    </label>
                    {isValidEmail(formData.email) && <CheckCircle2 className="absolute right-4 top-4 text-green-500 z-10" size={20} />}
                  </div>
                </div>
                
                {/* Message Field */}
                <div className="relative group/input">
                  <MessageSquare className={`absolute left-4 top-4 transition-colors z-10 ${formData.message ? 'text-accent1' : 'text-gray-500'} group-focus-within/input:text-accent1`} size={20} />
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-gray-700 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-accent1 focus:bg-gray-900/50 transition-all resize-none peer relative z-0"
                    placeholder=" "
                  ></textarea>
                  <label htmlFor="message" className="absolute left-12 top-4 text-gray-500 text-sm transition-all peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:text-accent1 peer-focus:bg-[#0f1115] peer-focus:px-2 peer-focus:z-20 peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-accent1 peer-[&:not(:placeholder-shown)]:bg-[#0f1115] peer-[&:not(:placeholder-shown)]:px-2 peer-[&:not(:placeholder-shown)]:z-20 pointer-events-none">
                    {t('message')}
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting || isSent}
                  className={`relative overflow-hidden flex items-center justify-center gap-3 py-4 rounded-xl font-bold transition-all ${
                    isSent 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gradient-to-r from-accent1 to-accent2 text-black hover:opacity-90 hover:shadow-[0_0_20px_rgba(0,245,255,0.4)]'
                  } disabled:opacity-70`}
                >
                  <AnimatePresence mode="wait">
                    {isSent ? (
                      <motion.div
                        key="sent"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 size={24} /> {language === 'fr' ? 'Envoyé !' : 'Sent!'}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        className="flex items-center gap-2 w-full justify-center"
                      >
                        {isSubmitting ? (language === 'fr' ? 'Envoi en cours...' : 'Sending...') : t('send')}
                        <motion.div
                          animate={isSubmitting ? { x: [0, 100], y: [0, -100], opacity: [1, 0] } : { x: 0, y: 0, opacity: 1 }}
                          transition={{ duration: 0.8 }}
                        >
                          <Send size={20} />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
