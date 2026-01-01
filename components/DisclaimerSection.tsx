
import React from 'react';
// Corrected import path for Language type
import { Language } from '../types';

interface DisclaimerSectionProps {
  onConsult?: () => void;
  lang?: Language;
}

const DisclaimerSection: React.FC<DisclaimerSectionProps> = ({ onConsult, lang = 'zh' }) => {
  return (
    <section className="bg-black py-32 md:py-48 px-6 md:px-12 text-center">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-[10px] md:text-xs tracking-[0.5em] text-white/40 mb-12 uppercase">
          {lang === 'zh' ? 'Mandatory Disclaimer / 筛选声明' : 'MANDATORY DISCLOSURE / CLIENT SCREENING'}
        </p>
        <h2 className="text-5xl md:text-7xl font-black mb-24 uppercase">
          {lang === 'zh' ? '只筛选百万级以上潜在客户' : 'EXCLUSIVE TO HNW CLIENTS ($1M+)'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="border border-white/20 h-40 flex items-center justify-center p-8 hover:bg-white/5 transition-colors group">
            <p className="text-lg md:text-xl font-bold italic text-white/60 group-hover:text-white uppercase tracking-tighter">
              {lang === 'zh' ? '资产规模低于百万美金者' : 'ASSETS UNDER $1M USD'}
            </p>
          </div>
          <div className="border border-white/20 h-40 flex items-center justify-center p-8 hover:bg-white/5 transition-colors group">
            <p className="text-lg md:text-xl font-bold italic text-white/60 group-hover:text-white uppercase tracking-tighter">
              {lang === 'zh' ? '只关心单一国家政策者' : 'SINGLE JURISDICTION FOCUS'}
            </p>
          </div>
          <div className="border border-white/20 h-40 flex items-center justify-center p-8 hover:bg-white/5 transition-colors group">
            <p className="text-lg md:text-xl font-bold italic text-white/60 group-hover:text-white uppercase tracking-tighter">
              {lang === 'zh' ? '追求短期投机获利者' : 'SHORT-TERM SPECULATORS'}
            </p>
          </div>
        </div>

        <p className="max-w-3xl mx-auto text-sm md:text-base text-white/30 leading-relaxed mb-24 uppercase font-bold tracking-widest">
          {lang === 'zh' ? 
            "AFWIA 的资源与精力仅服务于资产规模百万美金以上、对国际趋势有长远预测、重视架构安全与家族传承的专业人士。" :
            "AFWIA RESOURCES ARE STRICTLY RESERVED FOR CLIENTS WITH ASSETS EXCEEDING $1M USD WHO VALUE LONG-TERM ARCHITECTURAL SECURITY AND FAMILY LEGACY."
          }
        </p>

        <button 
          onClick={onConsult}
          className="bg-white text-black text-sm md:text-base font-black px-12 py-6 hover:bg-zinc-200 transition-all uppercase tracking-tighter"
        >
          {lang === 'zh' ? '我符合条件，申请结构会谈' : 'I QUALIFY. REQUEST CONSULTATION.'}
        </button>
      </div>
    </section>
  );
};

export default DisclaimerSection;
