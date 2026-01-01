
import React from 'react';
// Corrected import path for Language type
import { Language } from '../types';

const Card = ({ title, enTitle, desc, icon }: { title: string, enTitle: string, desc: string, icon: React.ReactNode }) => (
  <div className="bg-white text-black p-10 md:p-14 flex flex-col h-full hover:shadow-2xl transition-all duration-500 cursor-default">
    <div className="mb-12">
      {icon}
    </div>
    <h3 className="text-2xl font-black mb-2">{title}</h3>
    <p className="text-[10px] uppercase tracking-[0.1em] text-black/40 mb-8">{enTitle}</p>
    <p className="text-sm md:text-base leading-relaxed text-black/70 font-medium">
      {desc}
    </p>
  </div>
);

const RiskSection: React.FC<{ lang?: Language }> = ({ lang = 'zh' }) => {
  return (
    <section className="bg-zinc-100 py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-20">
          <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-black/40 mb-4">Risk Manifestation / {lang === 'zh' ? '风险透视' : 'RISK PROJECTION'}</p>
          <h2 className="text-4xl md:text-6xl font-black text-black">
            {lang === 'zh' ? '不可逆的国际窗口期' : 'The Irreversible Global Window'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card 
            title={lang === 'zh' ? "身份单点风险" : "Identity Vulnerability"}
            enTitle="Identity Single Point Failure"
            desc={lang === 'zh' ? "依赖单一法域的资产与身份结构，在未来不确定性中极度脆弱。" : "Relying on a single jurisdictional identity makes your assets extremely fragile in the face of global uncertainty."}
            icon={(
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
              </svg>
            )}
          />
          <Card 
            title={lang === 'zh' ? "家庭路径割裂" : "Family Path Fragmentation"}
            enTitle="Fragmented Family Path"
            desc={lang === 'zh' ? "企业、子女教育与长远身份安排互不衔接，导致巨大的合规与税务成本。" : "Business, education, and long-term identity plans are disconnected, leading to massive compliance and tax costs."}
            icon={(
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            )}
          />
          <Card 
            title={lang === 'zh' ? "合规不可逆窗口" : "Compliance Deadline"}
            enTitle="Irreversible Compliance Window"
            desc={lang === 'zh' ? "国际反洗钱与穿透式监管趋严，结构优化的黄金窗口正在关闭。" : "Global AML and transparency regulations are tightening. The golden window for structural optimization is closing fast."}
            icon={(
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default RiskSection;
