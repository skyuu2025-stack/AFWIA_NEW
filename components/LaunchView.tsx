
import React from 'react';
import { Language } from '../App';

/* Added lang prop to fix TypeScript error in App.tsx */
const LaunchView: React.FC<{ lang?: Language; onConsult?: () => void }> = ({ lang = 'zh', onConsult }) => {
  return (
    <div className="bg-white text-black pt-20">
      {/* Launch Hero Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <div className="flex flex-col">
          <p className="text-[10px] tracking-[0.5em] font-bold text-black/30 mb-8 uppercase">Global Market Entry</p>
          <h1 className="text-[10vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter mb-16 uppercase">
            GLOBAL<br />RELEASE
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mt-12 border-t border-black/10 pt-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5 font-black italic leading-tight mb-8">
                {lang === 'zh' ? '从创意孤岛到全球版图。' : 'FROM CREATIVE ISOLATION TO GLOBAL REACH.'}
              </h2>
              <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed">
                {lang === 'zh'
                  ? '全球发布不仅是营销动作，更是品牌结构的跃迁。AFWIA 整合全球顶级零售渠道、公关矩阵与法务合规，为品牌在国际市场的着陆提供全生命周期支持。'
                  : 'Global release is not just a marketing move, but a leap in brand structure. AFWIA integrates top global retail channels, PR matrices, and legal compliance to provide full lifecycle support for a brand’s landing in international markets.'}
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-black pb-4">
                  <span className="text-sm font-black uppercase">Media Reach</span>
                  <span className="text-2xl font-black">500+</span>
                </div>
                <div className="flex justify-between items-end border-b border-black pb-4">
                  <span className="text-sm font-black uppercase">Retail Network</span>
                  <span className="text-2xl font-black">Global</span>
                </div>
                <div className="flex justify-between items-end border-b border-black pb-4">
                  <span className="text-sm font-black uppercase">Growth ROI</span>
                  <span className="text-2xl font-black">High</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="bg-zinc-100 py-24 md:py-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="mb-20">
            <h2 className="text-[10px] tracking-[0.4em] font-bold uppercase text-black mb-4">RELEASE PILLARS / {lang === 'zh' ? '发布支柱' : 'RELEASE PILLARS'}</h2>
            <h3 className="text-4xl md:text-6xl font-black">{lang === 'zh' ? '品牌全球化的三个核心引擎' : 'Three Core Engines of Brand Globalization'}</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-12 md:p-16 border border-black/5 hover:shadow-xl transition-all">
              <h4 className="text-2xl font-black mb-8 uppercase italic">01. Global PR Matrix</h4>
              <p className="text-black/60 leading-relaxed font-medium">
                {lang === 'zh'
                  ? '链接全球顶级时尚媒体（Vogue, WWD, Hypebeast 等），建立品牌在国际语境下的专业背书与声浪。'
                  : 'Linking global top fashion media (Vogue, WWD, Hypebeast, etc.), establishing professional endorsement and buzz for the brand in an international context.'}
              </p>
            </div>
            <div className="bg-black text-white p-12 md:p-16 hover:shadow-xl transition-all">
              <h4 className="text-2xl font-black mb-8 uppercase italic">02. Retail & Showroom</h4>
              <p className="text-white/60 leading-relaxed font-medium">
                {lang === 'zh'
                  ? '入驻纽约、巴黎、米兰核心 Showroom，对接全球买手系统，完成从品牌力到销售额的最后一公里。'
                  : 'Entering core Showrooms in New York, Paris, and Milan, connecting with global buyer systems, completing the last mile from brand power to sales.'}
              </p>
            </div>
            <div className="bg-white p-12 md:p-16 border border-black/5 hover:shadow-xl transition-all">
              <h4 className="text-2xl font-black mb-8 uppercase italic">03. Digital Expansion</h4>
              <p className="text-black/60 leading-relaxed font-medium">
                {lang === 'zh'
                  ? '跨法域的数字营销策略，针对不同市场的社交平台属性进行精细化运营，驱动全球范围内的自然增长。'
                  : 'Cross-jurisdictional digital marketing strategies, refined operations based on social platform attributes in different markets, driving organic growth on a global scale.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Hubs for Launch */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-5xl md:text-7xl font-black mb-12 uppercase leading-none">Global<br />Landing<br />Hubs</h3>
            <p className="text-lg text-black/40 font-medium mb-12">
              {lang === 'zh'
                ? '我们在全球关键枢纽设立发布中心，确保每一个品牌动作都能精准触达当地最具影响力的决策圈。'
                : 'We set up release centers in key global hubs, ensuring every brand move precisely reaches the most influential decision-making circles locally.'}
            </p>
            <div className="flex flex-wrap gap-4">
              {['HONG KONG', 'NEW YORK', 'PARIS', 'LONDON', 'MILAN', 'TOKYO', 'SHANGHAI', 'BANGKOK'].map(city => (
                <span key={city} className="px-4 py-2 border border-black text-[10px] font-black tracking-widest uppercase hover:bg-black hover:text-white transition-colors cursor-default">
                  {city}
                </span>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden bg-zinc-200">
             <img src="https://picsum.photos/id/122/1000/1000" alt="Global City Map" className="w-full h-full object-cover grayscale opacity-80" />
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-4 h-4 bg-black rounded-full animate-ping"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-black text-white py-32 md:py-48 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-12">{lang === 'zh' ? '准备好在全球市场开启新篇章了吗？' : 'READY TO START A NEW CHAPTER IN THE GLOBAL MARKET?'}</h2>
          <p className="text-white/40 text-lg md:text-xl font-medium mb-16 max-w-2xl mx-auto">
            {lang === 'zh'
              ? 'AFWIA 的全球发布系统仅为具备国际视野与实力的品牌定制。'
              : 'AFWIA’s global release system is customized only for brands with international vision and strength.'}
          </p>
          <button 
            onClick={onConsult}
            className="bg-white text-black text-sm md:text-base font-black px-12 py-6 hover:bg-zinc-200 transition-all uppercase tracking-tighter"
          >
            {lang === 'zh' ? '申请全球发布规划 / REQUEST LAUNCH STRATEGY' : 'REQUEST LAUNCH STRATEGY'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default LaunchView;
