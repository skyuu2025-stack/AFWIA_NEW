
import React, { useState } from 'react';
import { Language } from '../App';

/* Added lang prop to fix TypeScript error in App.tsx */
const ConsultationView: React.FC<{ lang?: Language }> = ({ lang = 'zh' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    budget: '$1M - $5M USD',
    inquiry: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Local Data Storage Logic
    const submission = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Math.random().toString(36).substr(2, 9)
    };

    const existing = JSON.parse(localStorage.getItem('afwia_submissions') || '[]');
    localStorage.setItem('afwia_submissions', JSON.stringify([submission, ...existing]));

    alert(lang === 'zh' ? '申请已递交。我们的结构工程师将审核您的信息。' : 'Application submitted. Our structure engineers will review your inquiry.');
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      organization: '',
      budget: '$1M - $5M USD',
      inquiry: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white text-black pt-20">
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="max-w-3xl">
            <p className="text-[10px] tracking-[0.5em] font-bold text-black/30 mb-8 uppercase">Direct Engagement Channel</p>
            <h1 className="text-[10vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter mb-16 uppercase">
              STRATEGIC<br />CONSULTATION
            </h1>
            <div className="max-w-xl">
              <p className="text-2xl font-black italic mb-8">
                {lang === 'zh' ? '结构会谈是建立全球防火墙的第一步。' : 'Consultation is the first step to building a global firewall.'}
              </p>
              <p className="text-lg text-black/60 font-medium leading-relaxed">
                {lang === 'zh'
                  ? '我们不处理碎片化的咨询，只接受针对“跨国架构、身份安全及全球发布”的深度委托。请如实填写以下信息，我们的合伙人级别团队将进行预评估。'
                  : 'We do not handle fragmented inquiries, but only accept deep commissions for "multinational architecture, identity security, and global release". Please fill in the information truthfully, and our partner-level team will conduct a pre-assessment.'}
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/3 bg-black text-white p-12">
            <h4 className="text-xl font-black mb-6 uppercase">FILTERING LOGIC / {lang === 'zh' ? '筛选逻辑' : 'FILTERING LOGIC'}</h4>
            <ul className="space-y-6 text-sm text-white/50">
              <li className="flex gap-4">
                <span className="font-black text-white">01.</span>
                <span>{lang === 'zh' ? '潜在合规资产必须达到百万美金级。' : 'Potential compliant assets must reach the million-dollar level.'}</span>
              </li>
              <li className="flex gap-4">
                <span className="font-black text-white">02.</span>
                <span>{lang === 'zh' ? '需具备真实且明确的国际化业务或身份诉求。' : 'Must have real and clear international business or identity needs.'}</span>
              </li>
              <li className="flex gap-4">
                <span className="font-black text-white">03.</span>
                <span>{lang === 'zh' ? '尊重专业价值，愿意为架构安全性支付溢价。' : 'Value professionalism and be willing to pay a premium for architectural security.'}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 pb-32">
        <form onSubmit={handleSubmit} className="border-t-4 border-black pt-20 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          {/* Identity */}
          <div className="space-y-4">
            <label className="text-[10px] font-black tracking-widest uppercase text-black/40">{lang === 'zh' ? 'Full Name / 姓名' : 'Full Name'}</label>
            <input 
              required
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              type="text" 
              placeholder="Your professional identity" 
              className="w-full border-b border-black py-4 focus:outline-none focus:border-black/30 text-xl font-bold placeholder:text-black/10 bg-transparent"
            />
          </div>
          
          <div className="space-y-4">
            <label className="text-[10px] font-black tracking-widest uppercase text-black/40">{lang === 'zh' ? 'Email Address / 邮箱' : 'Email Address'}</label>
            <input 
              required
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email" 
              placeholder="Business email preferred" 
              className="w-full border-b border-black py-4 focus:outline-none focus:border-black/30 text-xl font-bold placeholder:text-black/10 bg-transparent"
            />
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-black tracking-widest uppercase text-black/40">{lang === 'zh' ? 'Organization / 企业/机构' : 'Organization'}</label>
            <input 
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              type="text" 
              placeholder="Structure identifier" 
              className="w-full border-b border-black py-4 focus:outline-none focus:border-black/30 text-xl font-bold placeholder:text-black/10 bg-transparent"
            />
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-black tracking-widest uppercase text-black/40">{lang === 'zh' ? 'Estimated Budget / 预算规模' : 'Estimated Budget'}</label>
            <select 
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full border-b border-black py-4 focus:outline-none focus:border-black/30 text-xl font-bold bg-transparent"
            >
              <option>$1M - $5M USD</option>
              <option>$5M - $20M USD</option>
              <option>$20M+ USD</option>
              <option>{lang === 'zh' ? 'Confidential / 核心机密' : 'Confidential'}</option>
            </select>
          </div>

          <div className="md:col-span-2 space-y-4 mt-8">
            <label className="text-[10px] font-black tracking-widest uppercase text-black/40">{lang === 'zh' ? 'Primary Inquiry / 核心诉求描述' : 'Primary Inquiry'}</label>
            <textarea 
              name="inquiry"
              value={formData.inquiry}
              onChange={handleInputChange}
              rows={4}
              placeholder="Describe your current structural fragmentation or expansion goals..." 
              className="w-full border border-black p-8 focus:outline-none focus:bg-zinc-50 text-xl font-medium placeholder:text-black/10 bg-transparent"
            ></textarea>
          </div>

          <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-center gap-12 mt-12 border-t border-black/10 pt-12">
            <div className="flex gap-4">
              <input type="checkbox" required className="w-6 h-6 border-2 border-black accent-black" id="confirm" />
              <label htmlFor="confirm" className="text-xs font-bold text-black/60 uppercase">
                {lang === 'zh' ? '我确认涉及的资产符合百万美金资质。' : 'I confirm that the assets involved meet the million-dollar qualification.'}
              </label>
            </div>
            <button className="bg-black text-white px-16 py-8 text-xl font-black uppercase hover:bg-zinc-900 transition-all tracking-tighter w-full md:w-auto">
              {lang === 'zh' ? 'SUBMIT APPLICATION / 递交申请' : 'SUBMIT APPLICATION'}
            </button>
          </div>
        </form>
      </section>

      {/* Trust Badges */}
      <section className="bg-zinc-100 py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-12 text-[10px] font-black tracking-[0.4em] text-black/30 uppercase">
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span>END-TO-END CONFIDENTIALITY</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span>MULTI-JURISDICTIONAL COMPLIANCE</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span>EXECUTIVE ADVISORY ONLY</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationView;
