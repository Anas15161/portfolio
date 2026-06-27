// /home/anas/Desktop/portefolio/portfolio/client/src/components/ui/Terminal.jsx
import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Anas Haddou OS v1.0.0' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    let response = '';

    switch (trimmed) {
      case 'help':
        response = 'Available commands: help, about, skills, contact, clear, sudo hire anas';
        break;
      case 'about':
        response = personalInfo.bio;
        break;
      case 'skills':
        response = 'Skills: React, Node.js, Express, MySQL, TailwindCSS, Vite';
        break;
      case 'contact':
        response = `Email: ${personalInfo.email} | LinkedIn: Anas Haddou`;
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'sudo hire anas':
        response = 'Access Granted. Excellent decision! Please send an email to proceed.';
        break;
      case '':
        break;
      default:
        response = `Command not found: ${trimmed}. Type "help" for available commands.`;
    }

    setHistory(prev => [
      ...prev,
      { type: 'user', text: `guest@portfolio:~$ ${cmd}` },
      ...(response ? [{ type: 'system', text: response }] : [])
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 p-3 rounded-full bg-accent2/20 border border-accent2/50 text-accent2 hover:bg-accent2 hover:text-black transition-all shadow-[0_0_15px_rgba(124,58,237,0.3)] z-40 backdrop-blur-sm"
        aria-label="Open Terminal"
      >
        <TerminalIcon size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 left-8 w-[350px] md:w-[500px] h-[400px] bg-[#1e1e1e] border border-gray-700 rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden font-mono text-sm"
          >
            {/* Terminal Header */}
            <div className="bg-[#323233] px-4 py-2 flex items-center justify-between border-b border-gray-900 cursor-move">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={() => setIsOpen(false)}></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-xs">guest@portfolio:~</span>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X size={16} />
              </button>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-4 overflow-y-auto text-gray-300" onClick={() => inputRef.current?.focus()}>
              {history.map((line, i) => (
                <div key={i} className={line.type === 'user' ? 'text-accent1 mb-1' : 'mb-3 whitespace-pre-wrap'}>
                  {line.text}
                </div>
              ))}
              <div className="flex items-center text-accent1">
                <span className="mr-2">guest@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 m-0"
                  spellCheck="false"
                  autoComplete="off"
                />
              </div>
              <div ref={bottomRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Terminal;
