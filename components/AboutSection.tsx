
import React from 'react';
// Corrected import path for Language type
import { Language } from '../types';

const AboutSection: React.FC<{ lang?: Language }> = ({ lang = 'zh' }) => {
  return (
    <section className="bg-white text-black py-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left Image Section */}
        <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-screen">
          <img 
            src="https://picsum.photos/id/101/1200/1600" 
            alt="Skyscrapers architecture" 
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute bottom-16 left-12 text-white">
            <p className="text-[10px] tracking-[0.2em] font-bold uppercase mb-4">Strategic Core</p>
            <h2 className="text-4xl font-black mb-4">
              {lang === 'zh' ? '国际身份 × 出海结构' : 'Global Identity × Structural Logic'}
            </h2>
            <p className="text-white/60 font-medium">
              {lang === 'zh' ? '服务对象：创始家族 / Million-Level Assets' : 'CLIENTS: FOUNDING FAMILIES / UHNW INDIVIDUALS'}
            </p>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="lg:w-1/2 flex items-center px-6 md:px-24 py-20 md:py-0">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-black italic mb-12">
              {lang === 'zh' ? <>我们是谁 & <br />为什么被选择</> : <>WHO WE ARE & <br />WHY WE ARE CHOSEN</>}
            </h2>
            <p className="text-lg md:text-xl text-black/40 leading-relaxed mb-20">
              {lang === 'zh' ? 
                "AFWIA 不提供通用的“出海服务”，我们是跨国架构的工程师。总部位于香港，整合顶级资源，仅为 1% 的高净值决策者建立心理与实操的过滤器。" :
                "AFWIA does not provide generic 'offshore services'. We are structural engineers. Headquartered in HK, we integrate top-tier resources to filter noise for the top 1% of decision-makers."
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="border-l border-black pl-8">
                <h4 className="font-black text-lg mb-4">
                  {lang === 'zh' ? '深度决策逻辑' : 'Deep Decision Logic'}
                </h4>
                <p className="text-sm text-black/40 leading-relaxed">
                  {lang === 'zh' ? 
                    "不讲细枝末节，只攻克核心权衡。确保每一笔投入都符合未来 10 年的合规逻辑。" :
                    "We ignore trivial details and focus on core trade-offs, ensuring every investment aligns with a 10-year compliance logic."
                  }
                </p>
              </div>
              <div className="border-l border-black pl-8">
                <h4 className="font-black text-lg mb-4">
                  {lang === 'zh' ? '国际背书集群' : 'Global Backing Network'}
                </h4>
                <p className="text-sm text-black/40 leading-relaxed">
                  {lang === 'zh' ? 
                    "从世界四大时装周生产系统到多国身份资源，提供闭环的基础设施支持。" :
                    "From the world's Big Four fashion week systems to multi-national identity resources, we provide end-to-end infrastructure support."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
