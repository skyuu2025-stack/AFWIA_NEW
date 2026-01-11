
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

interface Message {
  role: 'user' | 'model' | 'system';
  text: string;
}

const StrategicLoader: React.FC<{ lang: Language }> = ({ lang }) => {
  const [msgIndex, setMsgIndex] = useState(0);
  const messages = {
    zh: [
      "分析结构合规性...",
      "工程化全球触达...",
      "优化法域逻辑...",
      "同步国际生产标准..."
    ],
    en: [
      "Analyzing structural compliance...",
      "Engineering global reach...",
      "Optimizing jurisdictional logic...",
      "Synchronizing international standards..."
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages[lang].length);
    }, 2000);
    return () => clearInterval(interval);
  }, [lang]);

  return (
    <div className="flex justify-start animate-in fade-in slide-in-from-left-2 duration-500">
      <div className="bg-white border border-black/10 p-4 flex flex-col gap-3 min-w-[200px] shadow-sm">
        <div className="flex gap-1.5">
          <div className="w-1 h-1 bg-black rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-black rounded-full animate-pulse delay-150"></div>
          <div className="w-1 h-1 bg-black rounded-full animate-pulse delay-300"></div>
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 animate-pulse">
          {messages[lang][msgIndex]}
        </p>
      </div>
    </div>
  );
};

const AIChat: React.FC<{ lang: Language }> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      setMessages(prev => [...prev, { 
        role: 'system', 
        text: lang === 'zh' ? "战略中心初始化中..." : "Initializing Strategic Hub..." 
      }]);
      return;
    }
    
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = lang === 'zh' 
        ? "你是 AFWIA 的顶级战略 AI 助理。AFWIA 总部位于香港，专注于为高净值客户（$1M+）提供国际秀场制作、全球品牌扩张和结构合规咨询。语气：极简、高端、干练。引导潜在客户申请'结构会谈'。不提供具体法律建议。"
        : "You are AFWIA's elite strategic AI assistant. Based in Hong Kong, AFWIA focuses on runway production, global expansion, and structural compliance for HNW clients ($1M+). Tone: Minimalist, high-end, sophisticated. Guide leads to 'Apply for Strategic Consultation'. No specific legal advice.";

      const contents = messages.slice(-6).map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));
      contents.push({ role: 'user', parts: [{ text: userMsg }] });

      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents,
        config: { systemInstruction, temperature: 0.6 },
      });

      let fullText = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]);

      for await (const chunk of responseStream) {
        fullText += chunk.text;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = fullText;
          return newMessages;
        });
      }
    } catch (error: any) {
      console.error("Strategic Interaction Error:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: lang === 'zh' ? "连接超时。正在重新同步战略链路。" : "Connection timeout. Resyncing strategic link." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200] font-sans text-black">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] bg-white shadow-2xl flex flex-col overflow-hidden border border-black/10 animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-black text-white p-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,1)] animate-pulse"></div>
              <div>
                <p className="text-[10px] tracking-[0.4em] font-black uppercase mb-0.5 opacity-50">AFWIA Link</p>
                <h3 className="text-xl font-black italic tracking-tighter uppercase leading-none">STRATEGIC AI</h3>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-2xl hover:opacity-50 transition-opacity">✕</button>
          </div>

          <div ref={scrollRef} className="h-[400px] overflow-y-auto p-6 space-y-6 bg-zinc-50 scroll-smooth">
            {messages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xs font-bold text-black/30 uppercase tracking-widest leading-relaxed whitespace-pre-line">
                  {lang === 'zh' ? "已连接至战略中心。\n请问有什么可以帮您？" : "Connected to Strategic Hub.\nHow may I assist you?"}
                </p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-sm font-medium leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-black text-white' 
                    : 'bg-white text-black border border-black/10 shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && <StrategicLoader lang={lang} />}
          </div>

          <div className="p-4 border-t border-black/5 bg-white">
            <div className="flex gap-2">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={lang === 'zh' ? "输入咨询内容..." : "Type your inquiry..."}
                className="flex-1 bg-zinc-100 border-none px-4 py-3 text-sm font-medium focus:outline-none focus:bg-zinc-200"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-black text-white px-6 py-3 text-sm font-black uppercase hover:bg-zinc-900 disabled:opacity-30"
              >
                {lang === 'zh' ? "发送" : "SEND"}
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 flex items-center justify-center transition-all duration-500 shadow-xl border border-white/10 ${
          isOpen ? 'bg-white text-black -rotate-90' : 'bg-black text-white hover:scale-110 active:scale-95'
        }`}
      >
        {isOpen ? <span className="text-2xl">✕</span> : <div className="flex flex-col items-center"><span className="text-[10px] font-black tracking-tighter leading-none mb-0.5 uppercase">AI</span><svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></div>}
      </button>
    </div>
  );
};

export default AIChat;
