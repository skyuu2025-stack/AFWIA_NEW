
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Language } from '../App';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIChat: React.FC<{ lang: Language }> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatInstance = useRef<any>(null);

  // Initialize Chat Session
  useEffect(() => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const systemInstruction = lang === 'zh' 
      ? "你是 AFWIA 的顶级战略 AI 助理。AFWIA 是一家总部位于香港的机构，专注于为高净值客户（资产 100 万美元以上）提供国际秀场制作、全球品牌扩张和结构合规咨询。你的语气必须专业、干练、极简且高端。如果用户表现出潜在客户特质，引导他们申请'结构会谈'。不要提供具体的法律建议，建议咨询专业团队。"
      : "You are AFWIA's elite strategic AI assistant. AFWIA is a Hong Kong-based agency focusing on international runway production, global brand expansion, and structural compliance for high-net-worth clients (assets $1M+). Your tone must be professional, sophisticated, minimalist, and elite. If a user qualifies as a lead, guide them to 'Apply for Strategic Consultation'. Do not provide specific legal advice; recommend consulting our professional team.";

    chatInstance.current = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
  }, [lang]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const responseStream = await chatInstance.current.sendMessageStream({ message: userMsg });
      let fullText = "";
      
      setMessages(prev => [...prev, { role: 'model', text: "" }]);

      for await (const chunk of responseStream) {
        const textChunk = chunk.text;
        fullText += textChunk;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = fullText;
          return newMessages;
        });
      }
    } catch (error) {
      console.error("AI Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: lang === 'zh' ? "抱歉，系统繁忙。请稍后再试。" : "Sorry, system is busy. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200] font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] bg-white text-black shadow-2xl flex flex-col overflow-hidden border border-black/10 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-black text-white p-6 flex justify-between items-center">
            <div>
              <p className="text-[10px] tracking-[0.4em] font-black uppercase mb-1 opacity-50">Assistant</p>
              <h3 className="text-xl font-black italic tracking-tighter uppercase">AFWIA STRATEGIC AI</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-2xl hover:opacity-50 transition-opacity">✕</button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="h-[400px] overflow-y-auto p-6 space-y-6 bg-zinc-50">
            {messages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xs font-bold text-black/30 uppercase tracking-widest leading-relaxed">
                  {lang === 'zh' ? "您好。我是 AFWIA 战略助理。\n请问有什么可以帮您？" : "Greetings. I am the AFWIA Strategic Assistant.\nHow may I assist your global expansion today?"}
                </p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-sm font-medium leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-black text-white border border-black' 
                    : 'bg-white text-black border border-black/10 shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-1 items-center p-4 bg-white border border-black/10">
                  <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce delay-75"></span>
                  <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-black/5 bg-white">
            <div className="flex gap-2">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={lang === 'zh' ? "输入咨询内容..." : "Type your inquiry..."}
                className="flex-1 bg-zinc-100 border-none px-4 py-3 text-sm font-medium focus:outline-none focus:bg-zinc-200 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-black text-white px-6 py-3 text-sm font-black uppercase hover:bg-zinc-900 transition-colors disabled:opacity-30"
              >
                {lang === 'zh' ? "发送" : "SEND"}
              </button>
            </div>
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
