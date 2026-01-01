
import React from 'react';
import { Language } from '../App';

interface HeroProps {
  onConsult?: () => void;
  lang?: Language;
}

const Hero: React.FC<HeroProps> = ({ onConsult, lang = 'zh' }) => {
  return (
    <section className="relative pt-40 pb-20 md:pt-60 md:pb-32 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="inline-flex items-center px-4 py-1.5 border border-yellow-500/50 rounded-full mb-12">
        <span className="text-yellow-500 mr-2 text-xs">⚠</span>
        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white">
          {lang === 'zh' ? 'Warning: Global Structural Lag' : 'Warning: Global Structural Lag'}
        </span>
      </div>

      <h1 className="text-5xl md:text-8xl font-black leading-[1.1] mb-12 max-w-5xl">
        {lang === 'zh' ? (
          <>
            大多数企业主的问题，<br />
            <span className="text-outline">不是出不出海，</span><br />
            而是结构落后未来5年。
          </>
        ) : (
          <>
            The issue for most founders,<br />
            <span className="text-outline">is not globalization,</span><br />
            but a structure 5 years behind.
          </>
        )}
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-end gap-12 mt-20">
        <div className="max-w-xl">
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
            {lang === 'zh' ? (
              "The challenge isn't global expansion—it's the fragility of your underlying international structure. AFWIA exists to filter noise and engineer resilience."
            ) : (
              "The challenge isn't global expansion—it's the fragility of your underlying international structure. AFWIA exists to filter noise and engineer resilience."
            )}
          </p>
        </div>

        <div className="w-full md:w-auto text-right">
          <button 
            onClick={onConsult}
            className="group relative bg-white text-black w-full md:w-[480px] h-[100px] flex items-center justify-between px-10 hover:bg-zinc-200 transition-colors"
          >
            <span className="text-lg md:text-xl font-bold uppercase tracking-tight text-left">
              {lang === 'zh' ? '申请国际结构会谈 / APPLY FOR CONSULTATION' : 'APPLY FOR STRATEGIC CONSULTATION'}
            </span>
            <span className="text-3xl transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">↗</span>
          </button>
          <p className="text-[10px] mt-4 text-white/40 tracking-widest uppercase">
            {lang === 'zh' ? '只筛选百万级以上潜在客户 / RESERVED FOR HNW INQUIRIES' : 'RESERVED FOR UHNW INQUIRIES ONLY'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
