
import React from 'react';
// Corrected import path for Language type
import { Language } from '../types';

/* Added lang prop to fix TypeScript error in App.tsx */
const PlatformsView: React.FC<{ lang?: Language; onConsult?: () => void }> = ({ lang = 'zh', onConsult }) => {
  return (
    <div className="bg-white text-black pt-20">
      {/* IP Incubation Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <div className="flex flex-col">
          <p className="text-[10px] tracking-[0.5em] font-bold text-black/30 mb-8 uppercase">Global Strategic Synergy</p>
          <h1 className="text-[10vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter mb-16 uppercase">
            IP<br />INCUBATION
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mt-12 border-t border-black/10 pt-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black italic leading-tight mb-8">
                {lang === 'zh' ? '将创意资产转化为全球符号。' : 'TRANSFORMING CREATIVE ASSETS INTO GLOBAL SYMBOLS.'}
              </h2>
              <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed">
                {lang === 'zh'
                  ? 'IP 孵化是 AFWIA 核心能力的高级形态。我们不仅是发布者，更是价值链的重构者。通过链接全球顶级时尚平台与社交媒体矩阵，我们协助品牌完成从“产品”到“文化IP”的结构性转变。'
                  : 'IP incubation is an advanced form of AFWIA’s core capabilities. We are not just publishers, but reconstructors of the value chain. By linking top global fashion platforms and social media matrices, we assist brands in achieving a structural transformation from "product" to "cultural IP".'}
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-black pb-4">
                  <span className="text-sm font-black uppercase">IP Valuations</span>
                  <span className="text-2xl font-black">Growth</span>
                </div>
                <div className="flex justify-between items-end border-b border-black pb-4">
                  <span className="text-sm font-black uppercase">Strategic Partners</span>
                  <span className="text-2xl font-black">Top 1%</span>
                </div>
                <div className="flex justify-between items-end border-b border-black pb-4">
                  <span className="text-sm font-black uppercase">Synergy Impact</span>
                  <span className="text-2xl font-black">High</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Matrix */}
      <section className="bg-black text-white py-24 md:py-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="mb-20">
            <h2 className="text-[10px] tracking-[0.4em] font-bold uppercase text-white/40 mb-4">SYNERGY MATRIX / {lang === 'zh' ? '协同矩阵' : 'SYNERGY MATRIX'}</h2>
            <h3 className="text-4xl md:text-6xl font-black">{lang === 'zh' ? '全球平台与核心协同' : 'Global Platforms & Core Synergy'}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1px bg-white/10">
            <div className="bg-black p-12 hover:bg-zinc-900 transition-colors">
              <h4 className="text-2xl font-black mb-8 italic uppercase">Fashion Media</h4>
              <p className="text-sm text-white/40 leading-relaxed">
                {lang === 'zh'
                  ? '链接 Vogue, Harper\'s Bazaar, Elle 等全球时尚刊物，锁定行业顶端话语权。'
                  : 'Linking global fashion publications such as Vogue, Harper\'s Bazaar, and Elle to secure industry-leading discourse power.'}
              </p>
            </div>
            <div className="bg-black p-12 hover:bg-zinc-900 transition-colors">
              <h4 className="text-2xl font-black mb-8 italic uppercase">Digital Pulse</h4>
              <p className="text-sm text-white/40 leading-relaxed">
                {lang === 'zh'
                  ? 'Hypebeast, Highsnobiety 等先锋数字媒体，触达全球最活跃的消费阶层。'
                  : 'Pioneer digital media like Hypebeast and Highsnobiety, reaching the most active global consumer segments.'}
              </p>
            </div>
            <div className="bg-black p-12 hover:bg-zinc-900 transition-colors">
              <h4 className="text-2xl font-black mb-8 italic uppercase">Social Ecology</h4>
              <p className="text-sm text-white/40 leading-relaxed">
                {lang === 'zh'
                  ? '针对 Instagram, TikTok, Red 等平台进行深度的文化切入与流量分发。'
                  : 'In-depth cultural entry and traffic distribution for platforms like Instagram, TikTok, and Red.'}
              </p>
            </div>
            <div className="bg-black p-12 hover:bg-zinc-900 transition-colors">
              <h4 className="text-2xl font-black mb-8 italic uppercase">Offline Assets</h4>
              <p className="text-sm text-white/40 leading-relaxed">
                {lang === 'zh'
                  ? '快闪空间、艺术跨界、顶级买手店，构建 IP 在物理世界的真实触感。'
                  : 'Pop-up spaces, artistic crossovers, and top concept stores, building the real physical touch of an IP.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Incubation Logic */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <h3 className="text-5xl md:text-7xl font-black mb-12 uppercase leading-[0.9]">Transforming<br />Potential Into<br />Power</h3>
            <p className="text-lg text-black/60 font-medium leading-relaxed mb-12">
              {lang === 'zh'
                ? '我们的孵化逻辑基于“战略协同”：通过跨法域、跨媒体、跨产业的深度资源整合，消除品牌在全球扩张中的结构性摩擦。'
                : 'Our incubation logic is based on "Strategic Synergy": eliminating structural friction in global brand expansion through deep resource integration across jurisdictions, media, and industries.'}
            </p>
            <div className="space-y-8">
              <div className="flex gap-8 items-start">
                <span className="text-2xl font-black">01</span>
                <div>
                  <h5 className="font-black text-lg mb-2 uppercase">{lang === 'zh' ? '基因重组 / Gene Recomposition' : 'Gene Recomposition'}</h5>
                  <p className="text-sm text-black/40">
                    {lang === 'zh'
                      ? '挖掘品牌深层叙事，在国际审美体系下进行文化资产的二次开发。'
                      : 'Unearthing deep brand narratives and conducting secondary development of cultural assets under the international aesthetic system.'}
                  </p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <span className="text-2xl font-black">02</span>
                <div>
                  <h5 className="font-black text-lg mb-2 uppercase">{lang === 'zh' ? '全速渗透 / Rapid Penetration' : 'Rapid Penetration'}</h5>
                  <p className="text-sm text-black/40">
                    {lang === 'zh'
                      ? '利用 AFWIA 的全球执行系统，在最短时间内完成多市场的视觉与声量覆盖。'
                      : 'Utilizing AFWIA’s global execution system to complete visual and buzz coverage in multiple markets in the shortest time.'}
                  </p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <span className="text-2xl font-black">03</span>
                <div>
                  <h5 className="font-black text-lg mb-2 uppercase">{lang === 'zh' ? '价值固化 / Value Consolidation' : 'Value Consolidation'}</h5>
                  <p className="text-sm text-black/40">
                    {lang === 'zh'
                      ? '通过知识产权保护、商业落地与资本对接，将瞬时的流量转化为持久的品牌股权。'
                      : 'Converting transient traffic into lasting brand equity through intellectual property protection, commercial landing, and capital matching.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="aspect-[3/4] bg-zinc-100 overflow-hidden grayscale">
               <img src="https://picsum.photos/id/155/600/800" alt="IP Asset" className="w-full h-full object-cover" />
             </div>
             <div className="aspect-[3/4] bg-zinc-200 overflow-hidden grayscale mt-12">
               <img src="https://picsum.photos/id/167/600/800" alt="Global Synergy" className="w-full h-full object-cover" />
             </div>
             <div className="aspect-[3/4] bg-zinc-100 overflow-hidden grayscale -mt-12">
               <img src="https://picsum.photos/id/180/600/800" alt="Cultural Influence" className="w-full h-full object-cover" />
             </div>
             <div className="aspect-[3/4] bg-zinc-200 overflow-hidden grayscale">
               <img src="https://picsum.photos/id/192/600/800" alt="Strategic Scale" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-black text-white py-32 md:py-48 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase italic">Start the Synergy</h2>
          <p className="text-white/40 text-lg md:text-xl font-medium mb-16 max-w-2xl mx-auto">
            {lang === 'zh'
              ? '我们只孵化具备独特灵魂与全球化野心的品牌。如果你已经准备好跨越界限，让我们开始。'
              : 'We only incubate brands with unique souls and global ambitions. If you are ready to cross boundaries, let\'s begin.'}
          </p>
          <button 
            onClick={onConsult}
            className="bg-white text-black text-sm md:text-base font-black px-12 py-6 hover:bg-zinc-200 transition-all uppercase tracking-tighter"
          >
            {lang === 'zh' ? '申请 IP 孵化评估 / APPLY FOR IP INCUBATION' : 'APPLY FOR IP INCUBATION'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default PlatformsView;
