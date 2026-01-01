
import React from 'react';
import { Language } from '../App';

/* Added lang prop to fix TypeScript error in App.tsx */
const AboutView: React.FC<{ lang?: Language; onConsult?: () => void }> = ({ lang = 'zh', onConsult }) => {
  return (
    <div className="bg-white text-black pt-20">
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-40 border-b border-black/10">
        <div className="flex flex-col">
          <p className="text-[10px] tracking-[0.5em] font-bold text-black/30 mb-8 uppercase">ABOUT AFWIA</p>
          <h1 className="text-[12vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter mb-16 italic uppercase">
            {lang === 'zh' ? '关于我们' : 'ABOUT US'}
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mt-12">
            <div className="space-y-12">
              <h2 className="text-3xl md:text-5xl font-black leading-tight uppercase">
                A Strategic Bridge<br />for Global Brands
              </h2>
              <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed">
                {lang === 'zh'
                  ? 'AFWIA 是一家总部位于香港的国际品牌执行与咨询机构。我们不仅提供秀场制作与营销服务，更是品牌全球扩张中的“结构性防火墙”与“增长加速器”。'
                  : 'AFWIA is a Hong Kong-based international brand execution and consulting agency. We not only provide runway production and marketing services, but also act as a "structural firewall" and "growth accelerator" in the global expansion of brands.'}
              </p>
              <div className="flex flex-wrap gap-8 pt-8">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest mb-2">Location</span>
                  <span className="text-lg font-black uppercase">Hong Kong</span>
                </div>
                <div className="flex flex-col border-l border-black/10 pl-8">
                  <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest mb-2">Network</span>
                  <span className="text-lg font-black uppercase">Global Hubs</span>
                </div>
                <div className="flex flex-col border-l border-black/10 pl-8">
                  <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest mb-2">Focus</span>
                  <span className="text-lg font-black uppercase">UHNW Clients</span>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-[4/5] bg-zinc-200 overflow-hidden grayscale">
              <img 
                src="https://picsum.photos/id/102/1000/1250" 
                alt="AFWIA Brand Identity" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-black text-white py-24 md:py-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h3 className="text-[10px] tracking-[0.4em] font-bold text-white/40 uppercase mb-12">THE MISSION / {lang === 'zh' ? '核心使命' : 'THE MISSION'}</h3>
              <p className="text-2xl md:text-4xl font-black italic leading-tight">
                {lang === 'zh' 
                  ? '“我们不只是在搬运产品，我们在搬运信用、结构与未来的可能性。”'
                  : '"We are not just moving products; we are moving credit, structure, and future possibilities."'}
              </p>
            </div>
            <div className="space-y-8 text-white/60 font-medium leading-relaxed">
              <p>
                {lang === 'zh'
                  ? '在快速变化的国际监管与市场环境下，中国品牌与家族办公室面临着前所未有的“结构性滞后”。传统的出海服务往往只关注碎片化的流量，而忽视了底层架构的安全性与合规性。'
                  : 'In the rapidly changing international regulatory and market environment, Chinese brands and family offices are facing an unprecedented "structural lag". Traditional overseas services often focus only on fragmented traffic, while ignoring the security and compliance of the underlying architecture.'}
              </p>
              <p>
                {lang === 'zh'
                  ? 'AFWIA 的成立，正是为了填补这一真空。我们整合了纽约、伦敦、巴黎顶级的制作资源，以及香港领先的法务与税务合规集群，为品牌构建一套闭环的全球化生存方案。'
                  : 'The establishment of AFWIA is exactly to fill this vacuum. We integrate top production resources in New York, London, and Paris, as well as leading legal and tax compliance clusters in Hong Kong, to build a closed-loop global survival plan for brands.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <div className="mb-20">
          <h2 className="text-[10px] tracking-[0.4em] font-bold uppercase text-black mb-4">OUR STRUCTURE / {lang === 'zh' ? '机构架构' : 'OUR STRUCTURE'}</h2>
          <h3 className="text-4xl md:text-6xl font-black">{lang === 'zh' ? '协同作战的三个核心单元' : 'Three Core Units of Synergistic Operations'}</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="group border-t-2 border-black pt-12 hover:bg-zinc-50 transition-colors">
            <h4 className="text-2xl font-black mb-8 uppercase italic">01. Strategy Unit</h4>
            <p className="text-black/60 leading-relaxed font-medium">
              {lang === 'zh'
                ? '负责全球架构设计。从多法域公司设立到身份合规安排，确保品牌在国际市场的着陆点稳固且具备抗风险能力。'
                : 'Responsible for global architectural design. From multi-jurisdictional company setup to identity compliance arrangements, ensuring that the brand’s landing point in international markets is solid and resilient.'}
            </p>
          </div>
          <div className="group border-t-2 border-black pt-12 hover:bg-zinc-50 transition-colors">
            <h4 className="text-2xl font-black mb-8 uppercase italic">02. Creative Hub</h4>
            <p className="text-black/60 leading-relaxed font-medium">
              {lang === 'zh'
                ? '链接四大时装周生产系统。提供世界级的视觉输出与秀场制作，将品牌基因转化为全球性的文化资本。'
                : 'Linking the production systems of the Big Four Fashion Weeks. Providing world-class visual output and runway production, transforming brand genes into global cultural capital.'}
            </p>
          </div>
          <div className="group border-t-2 border-black pt-12 hover:bg-zinc-50 transition-colors">
            <h4 className="text-2xl font-black mb-8 uppercase italic">03. Policy Lab</h4>
            <p className="text-black/60 leading-relaxed font-medium">
              {lang === 'zh'
                ? '实时监测全球政策动态。解决合规窗口期内的紧急需求，为 UHNW 客户提供量身定制的避险与财富传承建议。'
                : 'Real-time monitoring of global policy trends. Solving urgent needs within the compliance window and providing tailored risk aversion and wealth legacy advice for UHNW clients.'}
            </p>
          </div>
        </div>
      </section>

      {/* Global Footprint */}
      <section className="bg-zinc-100 py-24 md:py-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-black pb-12 mb-20">
            <h3 className="text-5xl md:text-7xl font-black uppercase">Global<br />Footprint</h3>
            <p className="text-black/40 text-lg font-bold max-w-sm uppercase text-right">
              Strategic presense in the world's most critical nodes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {['HONG KONG (HQ)', 'NEW YORK', 'LONDON', 'PARIS', 'BANGKOK'].map((city, idx) => (
              <div key={city} className="space-y-4">
                <span className="text-4xl font-black opacity-10">0{idx + 1}</span>
                <p className="text-lg font-black uppercase tracking-tight">{city}</p>
                <div className="w-8 h-1 bg-black"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-black text-white py-32 md:py-48 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase">{lang === 'zh' ? '想了解更多关于我们的执行细节？' : 'WANT TO KNOW MORE ABOUT OUR EXECUTION?'}</h2>
          <p className="text-white/40 text-lg md:text-xl font-medium mb-16 max-w-2xl mx-auto uppercase">
            {lang === 'zh' ? 'REQUEST OUR CORPORATE DOSSIER / 获取机构白皮书' : 'REQUEST OUR CORPORATE DOSSIER'}
          </p>
          <button 
            onClick={onConsult}
            className="bg-white text-black text-sm md:text-base font-black px-12 py-6 hover:bg-zinc-200 transition-all uppercase tracking-tighter"
          >
            {lang === 'zh' ? '联系我们 / CONTACT AGENCY' : 'CONTACT AGENCY'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutView;
