
import React from 'react';
// Corrected import path for Language type
import { Language } from '../types';

const TermsView: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="bg-white text-black min-h-screen pt-32 pb-20 font-sans">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <header className="mb-20">
          <p className="text-[10px] tracking-[0.5em] font-bold text-black/30 mb-4 uppercase">Institutional Document</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            {lang === 'zh' ? '服务条款' : 'Terms of Service'}
          </h1>
          <div className="w-20 h-2 bg-black mt-8"></div>
        </header>

        <div className="space-y-16">
          <section>
            <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-4">
              <span className="text-sm opacity-30">01</span>
              {lang === 'zh' ? '条款接受' : 'Acceptance of Terms'}
            </h2>
            <p className="text-black/60 leading-relaxed font-medium">
              {lang === 'zh' 
                ? '访问或使用 AFWIA 的网站及咨询服务，即表示您同意受本条款约束。我们保留随时修改条款的权利。'
                : 'By accessing or using AFWIA’s website and consulting services, you agree to be bound by these terms. We reserve the right to modify these terms at any time.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-4">
              <span className="text-sm opacity-30">02</span>
              {lang === 'zh' ? '服务描述' : 'Service Description'}
            </h2>
            <p className="text-black/60 leading-relaxed font-medium">
              {lang === 'zh'
                ? 'AFWIA 提供国际秀场制作、全球品牌扩张及多法域架构合规咨询。所有咨询均基于当前国际监管环境，不构成最终法律结论。'
                : 'AFWIA provides international runway production, global brand expansion, and multi-jurisdictional structural compliance consultation. All consultations are based on the current international regulatory environment and do not constitute final legal conclusions.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-4">
              <span className="text-sm opacity-30">03</span>
              {lang === 'zh' ? '知识产权' : 'Intellectual Property'}
            </h2>
            <p className="text-black/60 leading-relaxed font-medium">
              {lang === 'zh'
                ? '本网站所有内容（包括但不限于文字、设计、逻辑模型）均为 AFWIA 财产，受国际版权法保护。未经书面授权不得复制。'
                : 'All content on this website (including but not limited to text, design, logical models) is the property of AFWIA and protected by international copyright laws. Reproduction without written authorization is prohibited.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-4">
              <span className="text-sm opacity-30">04</span>
              {lang === 'zh' ? '保密与隐私' : 'Confidentiality & Privacy'}
            </h2>
            <p className="text-black/60 leading-relaxed font-medium">
              {lang === 'zh'
                ? '我们高度重视客户信息的机密性。递交的任何申请资料均严格受内部防火墙保护，仅用于资格评估与初步架构设计。'
                : 'We place the highest importance on the confidentiality of client information. Any application materials submitted are strictly protected by internal firewalls and used only for qualification assessment and preliminary structural design.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-4">
              <span className="text-sm opacity-30">05</span>
              {lang === 'zh' ? '责任限制' : 'Limitation of Liability'}
            </h2>
            <p className="text-black/60 leading-relaxed font-medium">
              {lang === 'zh'
                ? 'AFWIA 不对因第三方监管政策突变、不可抗力或客户提供虚假信息导致的结构失效承担直接法律责任。'
                : 'AFWIA is not directly liable for structural failures caused by sudden changes in third-party regulatory policies, force majeure, or false information provided by clients.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-4">
              <span className="text-sm opacity-30">06</span>
              {lang === 'zh' ? '管辖法律' : 'Governing Law'}
            </h2>
            <p className="text-black/60 leading-relaxed font-medium">
              {lang === 'zh'
                ? '本条款受中华人民共和国香港特别行政区法律管辖。任何争议均应提交至香港国际仲裁中心。'
                : 'These terms are governed by the laws of the Hong Kong Special Administrative Region of the People\'s Republic of China. Any disputes shall be submitted to the Hong Kong International Arbitration Centre.'}
            </p>
          </section>
        </div>

        <footer className="mt-32 pt-12 border-t border-black/10 text-[10px] font-black tracking-widest uppercase opacity-40">
          Last Updated: OCTOBER 2024
        </footer>
      </div>
    </div>
  );
};

export default TermsView;
