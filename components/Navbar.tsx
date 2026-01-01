
import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: any) => void;
  lang: Language;
  onLangChange: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, lang, onLangChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const clickCount = useRef(0);
  const lastClickTime = useRef(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: '首页', en: 'HOME', view: 'home' as const },
    { name: '核心哲学', en: 'CORE PHILOSOPHY', view: 'philosophy' as const },
    { name: '国际秀场', en: 'INTERNATIONAL RUNWAY', view: 'runway' as const },
    { name: '全球发布', en: 'GLOBAL RELEASE', view: 'launch' as const },
    { name: 'IP 孵化', en: 'IP INCUBATION', view: 'platforms' as const },
    { name: '关于我们', en: 'ABOUT AFWIA', view: 'about' as const },
  ];

  const handleLinkClick = (view: any) => {
    onNavigate(view);
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    const now = Date.now();
    if (now - lastClickTime.current > 2000) {
      clickCount.current = 1;
    } else {
      clickCount.current += 1;
    }
    lastClickTime.current = now;

    if (clickCount.current === 5) {
      clickCount.current = 0;
      onNavigate('applications');
    } else if (clickCount.current === 1) {
      handleLinkClick('home');
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between h-20">
          <div 
            className="flex flex-col cursor-pointer group select-none" 
            onClick={handleLogoClick}
          >
            <span className="text-2xl font-black tracking-tighter leading-none">AFWIA</span>
            <span className="text-[7px] tracking-[0.3em] text-white/40 uppercase mt-1">Structure & Infrastructure</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-10 text-[12px] font-bold tracking-widest">
            <div className="flex items-center space-x-3 text-[10px] tracking-widest uppercase font-black">
              <button 
                onClick={() => onLangChange('zh')}
                className={`transition-colors ${lang === 'zh' ? 'text-white' : 'text-white/30 hover:text-white'}`}
              >
                中文
              </button>
              <span className="text-white/20">/</span>
              <button 
                onClick={() => onLangChange('en')}
                className={`transition-colors ${lang === 'en' ? 'text-white' : 'text-white/30 hover:text-white'}`}
              >
                ENGLISH
              </button>
            </div>
            {navLinks.slice(1).map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleLinkClick(link.view)}
                className={`transition-colors uppercase ${currentView === link.view ? 'text-white' : 'text-white/50 hover:text-white'}`}
              >
                {lang === 'zh' ? link.name : link.en}
              </button>
            ))}
            <button 
              onClick={() => handleLinkClick('consultation')}
              className="bg-white text-black px-6 py-2.5 font-black hover:bg-zinc-200 transition-all uppercase tracking-tighter"
            >
              {lang === 'zh' ? '申请结构会谈' : 'APPLY FOR CONSULTATION'}
            </button>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-center items-end w-8 h-8 focus:outline-none z-[110]"
            aria-label="Toggle Menu"
          >
            <span className={`h-0.5 bg-white transition-all duration-300 ease-out ${isOpen ? 'w-8 rotate-45 translate-y-1.5' : 'w-8 mb-1.5'}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'w-8 mb-1.5'}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ease-out ${isOpen ? 'w-8 -rotate-45 -translate-y-1.5' : 'w-4'}`}></span>
          </button>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 bg-black z-[90] transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex flex-col h-full pt-32 px-12">
          <div className="flex flex-col space-y-8">
            {navLinks.map((link, index) => (
              <button 
                key={link.name}
                onClick={() => handleLinkClick(link.view)}
                className={`group flex flex-col text-left transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-[10px] tracking-[0.4em] text-white/20 font-bold mb-1 uppercase">{link.en}</span>
                <span className={`text-4xl font-black transition-all ${currentView === link.view ? 'italic' : 'hover:italic'}`}>
                  {lang === 'zh' ? link.name : link.en}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-auto pb-12 flex flex-col space-y-8">
            <button 
              onClick={() => handleLinkClick('consultation')}
              className="w-full bg-white text-black py-5 text-lg font-black tracking-tighter uppercase"
            >
              {lang === 'zh' ? '申请结构会谈' : 'APPLY FOR CONSULTATION'}
            </button>
            <div className="flex justify-between items-center text-[10px] tracking-[0.3em] font-bold text-white/40 uppercase border-t border-white/10 pt-8">
              <div className="flex items-center gap-5">
                <button 
                  onClick={() => onLangChange('zh')}
                  className={`transition-colors ${lang === 'zh' ? 'text-white' : 'text-white/40 hover:text-white'}`}
                >
                  中文
                </button>
                <span className="text-white/20">/</span>
                <button 
                  onClick={() => onLangChange('en')}
                  className={`transition-colors font-black ${lang === 'en' ? 'text-white' : 'text-white/40 hover:text-white'}`}
                >
                  ENGLISH
                </button>
              </div>
              <div className="flex gap-6">
                <span className="cursor-pointer hover:text-white">WECHAT</span>
                <span className="cursor-pointer hover:text-white">INSTAGRAM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
