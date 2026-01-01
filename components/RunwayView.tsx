
import React from 'react';
import { Language } from '../App';

/* Added lang prop to fix TypeScript error in App.tsx */
const RunwayView: React.FC<{ lang?: Language; onConsult?: () => void }> = ({ lang = 'zh', onConsult }) => {
  return (
    <div className="bg-white text-black pt-20">
      {/* Runway Hero Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <div className="flex flex-col">
          <p className="text-[10px] tracking-[0.5em] font-bold text-black/30 mb-8 uppercase">Global Production Standard</p>
          <h1 className="text-[10vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter mb-16 uppercase">
            INTERNATIONAL<br />RUNWAY
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mt-12 border-t border-black/10 pt-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black italic leading-tight mb-8">
                {lang === 'zh' ? '不仅是展示，更是标准。' : 'NOT JUST A SHOW, BUT A STANDARD.'}
              </h2>
              <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed">
                {lang === 'zh' 
                  ? 'AFWIA 建立了一套严苛的全球秀场执行系统，从纽约到巴黎，确保品牌在全球时装周的每一秒呈现都具备最高等级的工业水准。'
                  : 'AFWIA has established a rigorous global runway execution system, from New York to Paris, ensuring that every second of a brand’s presentation at global fashion weeks meets the highest industrial standards.'}
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-black pb-4">
                  <span className="text-sm font-black uppercase">Service Hubs</span>
                  <span className="text-2xl font-black">04</span>
                </div>
                <div className="flex justify-between items-end border-b border-black pb-4">
                  <span className="text-sm font-black uppercase">Standardized Logic</span>
                  <span className="text-2xl font-black">100%</span>
                </div>
                <div className="flex justify-between items-end border-b border-black pb-4">
                  <span className="text-sm font-black uppercase">Annual Productions</span>
                  <span className="text-2xl font-black">20+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="bg-black text-white py-24 md:py-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/10">
            <div className="bg-black p-12 md:p-20 hover:bg-zinc-900 transition-colors">
              <h3 className="text-6xl font-black mb-8 italic">NYC</h3>
              <p className="text-[10px] tracking-[0.3em] font-bold text-white/40 mb-12 uppercase">New York City</p>
              <p className="text-sm leading-relaxed text-white/60">
                {lang === 'zh' 
                  ? '商业发布的中心。在这里，我们协助品牌完成从创意到北美市场的直接落地。'
                  : 'The center of commercial releases. Here, we assist brands in achieving direct landing from creativity to the North American market.'}
              </p>
            </div>
            <div className="bg-black p-12 md:p-20 hover:bg-zinc-900 transition-colors">
              <h3 className="text-6xl font-black mb-8 italic">LDN</h3>
              <p className="text-[10px] tracking-[0.3em] font-bold text-white/40 mb-12 uppercase">London</p>
              <p className="text-sm leading-relaxed text-white/60">
                {lang === 'zh'
                  ? '先锋与创意的实验场。链接全球最顶级的独立设计师与媒体集群。'
                  : 'An experimental field for avant-garde and creativity. Linking the world’s top independent designers and media clusters.'}
              </p>
            </div>
            <div className="bg-black p-12 md:p-20 hover:bg-zinc-900 transition-colors">
              <h3 className="text-6xl font-black mb-8 italic">PAR</h3>
              <p className="text-[10px] tracking-[0.3em] font-bold text-white/40 mb-12 uppercase">Paris</p>
              <p className="text-sm leading-relaxed text-white/60">
                {lang === 'zh'
                  ? '行业圣殿。AFWIA 掌握巴黎核心制作资源，为顶级品牌提供背书级输出。'
                  : 'The temple of the industry. AFWIA controls core production resources in Paris, providing endorsement-level output for top brands.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Logic */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <div className="mb-20">
          <h2 className="text-[10px] tracking-[0.4em] font-bold uppercase text-black mb-4">PRODUCTION LOGIC / {lang === 'zh' ? '生产逻辑' : 'PRODUCTION LOGIC'}</h2>
          <h3 className="text-4xl md:text-6xl font-black">{lang === 'zh' ? '全球化执行系统的三个维度' : 'Three Dimensions of Global Execution'}</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="border-t-2 border-black pt-12">
            <span className="text-4xl font-black block mb-8">01.</span>
            <h4 className="text-xl font-black mb-6 uppercase">{lang === 'zh' ? '标准化制作模块' : 'Standardized Production'}</h4>
            <p className="text-black/60 leading-relaxed font-medium">
              {lang === 'zh'
                ? '无论是选角、舞美设计还是后台动线，AFWIA 均采用统一的 SOP，确保品牌在全球任何法域都能获得一致的高品质输出。'
                : 'Whether it is casting, stage design, or backstage movement, AFWIA adopts a unified SOP to ensure that brands receive consistent high-quality output in any jurisdiction globally.'}
            </p>
          </div>
          <div className="border-t-2 border-black pt-12">
            <span className="text-4xl font-black block mb-8">02.</span>
            <h4 className="text-xl font-black mb-6 uppercase">{lang === 'zh' ? '本地化合规枢纽' : 'Localized Compliance Hub'}</h4>
            <p className="text-black/60 leading-relaxed font-medium">
              {lang === 'zh'
                ? '解决中国品牌出海时遇到的法律合规、用工风险及公关挑战，充当品牌在国际市场的“结构防火墙”。'
                : 'Solving legal compliance, labor risks, and PR challenges encountered by Chinese brands going global, acting as a "structural firewall" for brands in international markets.'}
            </p>
          </div>
          <div className="border-t-2 border-black pt-12">
            <span className="text-4xl font-black block mb-8">03.</span>
            <h4 className="text-xl font-black mb-6 uppercase">{lang === 'zh' ? '视觉资产再生产' : 'Visual Asset Reproduction'}</h4>
            <p className="text-black/60 leading-relaxed font-medium">
              {lang === 'zh'
                ? '秀场不仅是15分钟的展示。我们利用国际媒体矩阵与视觉团队，将现场能量转化为可持续传播的数字品牌资产。'
                : 'The runway is not just a 15-minute display. We use international media matrices and visual teams to transform on-site energy into sustainable digital brand assets.'}
            </p>
          </div>
        </div>
      </section>

      {/* Visual Assets Preview */}
      <section className="pb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img src="https://picsum.photos/id/111/800/1200" alt="Runway Backstage" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 mt-12">
            <img src="https://picsum.photos/id/129/800/1200" alt="Runway Models" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img src="https://picsum.photos/id/132/800/1200" alt="Runway Lighting" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 mt-12">
            <img src="https://picsum.photos/id/145/800/1200" alt="Runway Crowd" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-black text-white py-32 md:py-48 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase">{lang === 'zh' ? '准备好定义您的国际标准了吗？' : 'READY TO DEFINE YOUR INTERNATIONAL STANDARD?'}</h2>
          <p className="text-white/40 text-lg md:text-xl font-medium mb-16 max-w-2xl mx-auto uppercase">
            {lang === 'zh' ? 'REQUEST PRODUCTION DOSSIER / 获取制作手册' : 'REQUEST PRODUCTION DOSSIER'}
          </p>
          <button 
            onClick={onConsult}
            className="bg-white text-black text-sm md:text-base font-black px-12 py-6 hover:bg-zinc-200 transition-all uppercase tracking-tighter"
          >
            {lang === 'zh' ? '联系制作顾问 / CONTACT PRODUCTION' : 'CONTACT PRODUCTION'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default RunwayView;
