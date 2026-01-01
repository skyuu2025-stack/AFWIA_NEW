
import React from 'react';
// Corrected import path for Language type
import { Language } from '../types';

/* Added lang prop to fix TypeScript error in App.tsx */
const PhilosophyView: React.FC<{ lang?: Language; onConsult?: () => void }> = ({ lang = 'zh', onConsult }) => {
  return (
    <div className="bg-white text-black pt-20">
      {/* Identity Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <div className="flex flex-col">
          <h1 className="text-[12vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter mb-16 md:mb-24 uppercase">
            AGENCY<br />IDENTITY
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div className="max-w-xl">
              <p className="text-2xl md:text-3xl font-medium leading-tight">
                AFWIA is a Hong Kong–based strategic bridge, navigating the intersection of creative excellence and commercial scale.
              </p>
            </div>
            <div className="max-w-xl space-y-8">
              <p className="text-sm md:text-base text-black/60 leading-relaxed font-medium">
                We operate as a high-end navigator for brands entering international markets. Our identity is rooted in the "New International Style"—restrained, rational, and exceptionally executed.
              </p>
              <p className="text-sm md:text-base text-black/60 leading-relaxed font-medium">
                Based in the strategic hub of Hong Kong, we leverage regional policy-driven infrastructure and global creative networks to deliver results for a curated list of clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-b border-black/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-0">
            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.2em] font-bold text-black/30 mb-3 uppercase">FOUNDED</span>
              <span className="text-2xl md:text-3xl font-black uppercase">2024</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.2em] font-bold text-black/30 mb-3 uppercase">HQ</span>
              <span className="text-2xl md:text-3xl font-black uppercase">HONG KONG</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.2em] font-bold text-black/30 mb-3 uppercase">KEY HUB</span>
              <span className="text-2xl md:text-3xl font-black uppercase">BANGKOK</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.2em] font-bold text-black/30 mb-3 uppercase">FOCUS</span>
              <span className="text-2xl md:text-3xl font-black uppercase">GLOBAL GROWTH</span>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <div className="mb-16">
          <h2 className="text-[10px] tracking-[0.4em] font-bold uppercase text-black">THE METHODOLOGY</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="border border-black p-10 md:p-16 h-full flex flex-col justify-between group hover:bg-zinc-50 transition-colors">
            <h3 className="text-3xl md:text-4xl font-black mb-12 uppercase tracking-tighter">STANDARDIZATION</h3>
            <p className="text-base md:text-lg text-black/60 font-medium leading-relaxed max-w-md">
              Our Global Runway Production follows a rigorous standardized system, ensuring consistent quality in NYC, London, or Paris.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-black text-white p-10 md:p-16 h-full flex flex-col justify-between group hover:bg-zinc-900 transition-colors">
            <h3 className="text-3xl md:text-4xl font-black mb-12 uppercase tracking-tighter">STRATEGIC ENTRY</h3>
            <p className="text-base md:text-lg text-white/60 font-medium leading-relaxed max-w-md">
              Brand expansion is treated as a logic system: Research, Channel, Strategy, and Launch are integrated for maximum ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-black text-white py-32 md:py-48 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase">{lang === 'zh' ? '认同我们的底层逻辑吗？' : 'DO YOU ALIGN WITH OUR LOGIC?'}</h2>
          <p className="text-white/40 text-lg md:text-xl font-medium mb-16 max-w-2xl mx-auto uppercase">
            {lang === 'zh' ? 'START THE STRATEGIC DIALOGUE / 开启战略对话' : 'START THE STRATEGIC DIALOGUE'}
          </p>
          <button 
            onClick={onConsult}
            className="bg-white text-black text-sm md:text-base font-black px-12 py-6 hover:bg-zinc-200 transition-all uppercase tracking-tighter"
          >
            {lang === 'zh' ? '联系我们 / CONTACT US' : 'CONTACT US'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default PhilosophyView;
