
import React from 'react';
import { Language } from '../App';

interface FooterProps {
  lang?: Language;
  onNavigate?: (view: any) => void;
}

const Footer: React.FC<FooterProps> = ({ lang = 'zh', onNavigate }) => {
  const handleNav = (view: string) => {
    if (onNavigate) {
      onNavigate(view);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-black pt-32 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-0 justify-between mb-32">
          {/* Brand Info */}
          <div className="max-w-md">
            <div className="text-4xl font-black mb-8 cursor-pointer" onClick={() => handleNav('home')}>AFWIA</div>
            <p className="text-white/40 text-sm md:text-base leading-relaxed mb-8 font-light">
              International Agency for global runway production and brand expansion. Engineering the bridge between creativity and commercial scale.
            </p>
            <div className="flex gap-6 text-[11px] font-black tracking-widest uppercase text-white/60">
              <span>HK</span>
              <span>NYC</span>
              <span>LDN</span>
              <span>PAR</span>
              <span>BKK</span>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-16 md:gap-32">
            <div>
              <p className="text-[10px] tracking-[0.2em] font-bold uppercase text-white/20 mb-8">{lang === 'zh' ? '业务领域' : 'Expertise'}</p>
              <ul className="space-y-4 text-xs md:text-sm font-black tracking-wider uppercase">
                <li><button onClick={() => handleNav('runway')} className="hover:text-white/60 text-left">{lang === 'zh' ? '秀场制作' : 'Runway Production'}</button></li>
                <li><button onClick={() => handleNav('launch')} className="hover:text-white/60 text-left">{lang === 'zh' ? '全球发布' : 'Overseas Launch'}</button></li>
                <li><button onClick={() => handleNav('platforms')} className="hover:text-white/60 text-left">{lang === 'zh' ? 'IP 孵化' : 'IP Incubation'}</button></li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] font-bold uppercase text-white/20 mb-8">{lang === 'zh' ? '机构信息' : 'Institutional'}</p>
              <ul className="space-y-4 text-xs md:text-sm font-black tracking-wider uppercase text-left">
                <li><button onClick={() => handleNav('philosophy')} className="hover:text-white/60">{lang === 'zh' ? '核心哲学' : 'Philosophy'}</button></li>
                <li><button onClick={() => handleNav('consultation')} className="hover:text-white/60">{lang === 'zh' ? '联系我们' : 'Contact'}</button></li>
                <li><button onClick={() => handleNav('terms')} className="hover:text-white/60">{lang === 'zh' ? '条款' : 'Terms'}</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/30">
          <p>© 2024 AFWIA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Tiktok</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Wechat</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
