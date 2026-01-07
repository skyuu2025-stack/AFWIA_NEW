
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

interface Message {
  role: 'user' | 'model' | 'system';
  text: string;
}

// Minimalist strategic loader with cycling status messages
const StrategicLoader: React.FC<{ lang: Language }> = ({ lang }) => {
  const [msgIndex, setMsgIndex] = useState(0);
  const messages = {
    zh: [
      "分析结构合规性...",
      "工程化全球触达...",
      "优化法域逻辑...",
      "过滤战略噪音...",
      "构建结构防火墙...",
      "同步国际生产标准..."
    ],
    en: [
      "Analyzing structural compliance...",
      "Engineering global reach...",
      "Optimizing jurisdictional logic...",
      "Filtering strategic noise...",
      "Building structural firewalls...",
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
  const [needsKey, setNeedsKey] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we have an API Key available
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      setNeedsKey(true);
    } else {
      setNeedsKey(false);
    }
  }, [isOpen]);

  // Auto-scroll logic
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSelectKey = async () => {
    try {
      if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
        await window.aistudio.openSelectKey();
        // After opening dialog, we assume key might be ready
        setNeedsKey(false);
      }
    } catch (e) {
      console.error("Failed to open key selection dialog:", e);
    }
  };

  const handleSend = async () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      setNeedsKey(true);
      return;
    }
    
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    const currentInput = userMsg;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: currentInput }]);
    setIsLoading(true);

    try {
      // Re-initialize AI client to ensure latest API Key
      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = lang === 'zh' 
        ? "你是 AFWIA 的顶级战略 AI 助理。AFWIA 是一家总部位于香港的机构，专注于为高净值客户（资产 100 万美元以上）提供国际秀场制作、全球品牌扩张和结构合规咨询。你的语气必须专业、干练、极简且高端。如果用户表现出潜在客户特质，引导他们申请'结构会谈'。不要提供具体的法律建议，建议咨询专业团队。"
        : "You are AFWIA's elite strategic AI assistant. AFWIA is a Hong Kong-based agency focusing on international runway production, global brand expansion, and structural compliance for high-net-worth clients (assets $1M+). Your tone must be professional, sophisticated, minimalist, and elite. If a user qualifies as a lead, guide them to 'Apply for Strategic Consultation'. Do not provide specific legal advice; recommend consulting our professional team.";

      // Prepare conversation history
      const contents = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));
      contents.push({ role: 'user', parts: [{ text: currentInput }] });

      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
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
      console.error("AI Chat Error:", error);
      
      // Handle missing entity (likely key issue)
      if (error.message?.includes("Requested entity was not found")) {
        setNeedsKey(true);
      }

      setMessages(prev => [...prev, { 
        role: 'system', 
        text: lang === 'zh' ? "连接中心异常。请检查您的 API Key 授权或点击下方按钮重连。" : "Strategic connection failed. Please check your API Key or click the connect button." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200] font-sans text-black">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] bg-white shadow-2xl flex flex-col overflow-hidden border border-black/10 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-black text-white p-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${!needsKey ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 'bg-red-500 animate-pulse'}`}></div>
              <div>
                <p className="text-[10px] tracking-[0.4em] font-black uppercase mb-0.5 opacity-50">Assistant</p>
                <h3 className="text-xl font-black italic tracking-tighter uppercase leading-none">AFWIA STRATEGIC AI</h3>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-2xl hover:opacity-50 transition-opacity">✕</button>
          </div>

          {/* Messages / Status Area */}
          <div ref={scrollRef} className="h-[400px] overflow-y-auto p-6 space-y-6 bg-zinc-50">
            {needsKey ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-4">
                <div className="w-16 h-16 border-2 border-black/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-sm font-black uppercase mb-4 tracking-wider">
                  {lang === 'zh' ? '需要接入战略中心' : 'Strategic Connection Required'}
                </h4>
                <p className="text-xs text-black/40 font-medium leading-relaxed mb-8">
                  {lang === 'zh' 
                    ? '为了确保数据的安全性与计算的独享，请连接您的 API Key。' 
                    : 'To ensure data security and dedicated intelligence, please connect your API Key.'}
                </p>
                <button 
                  onClick={handleSelectKey}
                  className="bg-black text-white w-full py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-zinc-900 transition-all mb-4"
                >
                  {lang === 'zh' ? '连接至 AFWIA 战略中心' : 'CONNECT TO STRATEGIC HUB'}
                </button>
                <a 
                  href="https://ai.google.dev/gemini-api/docs/billing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-black/30 underline uppercase tracking-widest"
                >
                  {lang === 'zh' ? '查看计费说明文档' : 'Billing Documentation'}
                </a>
              </div>
            ) : (
              <>
                {messages.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-xs font-bold text-black/30 uppercase tracking-widest leading-relaxed whitespace-pre-line">
                      {lang === 'zh' ? "您好。我是 AFWIA 战略助理。\n请问有什么可以帮您？" : "Greetings. I am the AFWIA Strategic Assistant.\nHow may I assist your global expansion today?"}
                    </p>
                  </div>
                )}
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-4 text-sm font-medium leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-black text-white border border-black' 
                        : msg.role === 'system'
                        ? 'bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold tracking-tight'
                        : 'bg-white text-black border border-black/10 shadow-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && <StrategicLoader lang={lang} />}
              </>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-black/5 bg-white">
            <div className="flex gap-2">
              <input 
                type="text"
                disabled={needsKey || isLoading}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={lang === 'zh' ? "输入咨询内容..." : "Type your inquiry..."}
                className="flex-1 bg-zinc-100 border-none px-4 py-3 text-sm font-medium focus:outline-none focus:bg-zinc-200 transition-colors disabled:opacity-30"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || needsKey || !input.trim()}
                className="bg-black text-white px-6 py-3 text-sm font-black uppercase hover:bg-zinc-900 transition-colors disabled:opacity-30"
              >
                {lang === 'zh' ? "发送" : "SEND"}
              </button>
            </div>
            <p className="text-[8px] mt-2 text-black/20 font-bold tracking-widest uppercase text-center">
              Powered by AFWIA Intelligence Hub / Gemini 3 Flash
            </p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 flex items-center justify-center transition-all duration-500 shadow-xl border border-white/10 ${
          isOpen ? 'bg-white text-black -rotate-90' : 'bg-black text-white hover:scale-110 active:scale-95'
        }`}
      >
        {isOpen ? (
          <span className="text-2xl">✕</span>
        ) : (
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black tracking-tighter leading-none mb-0.5">AFWIA</span>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
        )}
      </button>
    </div>
  );
};

export default AIChat;
