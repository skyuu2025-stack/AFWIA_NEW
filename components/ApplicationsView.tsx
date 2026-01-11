
import React, { useState, useEffect, useCallback } from 'react';
import { Language } from '../types';

interface Submission {
  id: string;
  name: string;
  email: string;
  organization: string;
  budget: string;
  inquiry: string;
  timestamp: string;
}

const ApplicationsView: React.FC<{ lang: Language }> = ({ lang }) => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [lastSynced, setLastSynced] = useState<string>('');

  const loadData = useCallback(() => {
    try {
      const existingData = localStorage.getItem('afwia_submissions');
      if (existingData) {
        const data = JSON.parse(existingData);
        if (Array.isArray(data)) {
          setSubmissions(data);
          setLastSynced(new Date().toLocaleTimeString());
        } else {
          setSubmissions([]);
        }
      } else {
        setSubmissions([]);
      }
    } catch (err) {
      console.error("Critical Load Error:", err);
      setSubmissions([]);
    }
  }, []);

  // 每次组件挂载时都强制读取
  useEffect(() => {
    loadData();
    
    // 监听其他标签页的更改
    window.addEventListener('storage', loadData);
    return () => window.removeEventListener('storage', loadData);
  }, [loadData]);

  const clearData = () => {
    if (window.confirm(lang === 'zh' ? '警告：此操作不可逆。确定销毁所有本地存档吗？' : 'WARNING: IRREVERSIBLE. Destroy all local archives?')) {
      localStorage.removeItem('afwia_submissions');
      setSubmissions([]);
    }
  };

  return (
    <div className="bg-white text-black min-h-screen pt-32 pb-20 animate-in fade-in duration-500">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b-8 border-black pb-12">
          <div>
            <p className="text-[10px] tracking-[0.5em] font-bold text-black/30 mb-4 uppercase">Restricted Data Vault</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">SUBMISSIONS</h1>
            <p className="text-[10px] font-bold opacity-30 mt-4 uppercase">Last Sync: {lastSynced || 'N/A'}</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={loadData}
              className="text-[10px] font-black border-2 border-black px-8 py-4 hover:bg-black hover:text-white transition-all uppercase tracking-widest active:scale-95"
            >
              Force Reload
            </button>
            <button 
              onClick={clearData}
              className="text-[10px] font-black border-2 border-red-600 text-red-600 px-8 py-4 hover:bg-red-600 hover:text-white transition-all uppercase tracking-widest active:scale-95"
            >
              Purge All
            </button>
          </div>
        </div>

        {submissions.length === 0 ? (
          <div className="py-60 text-center">
            <p className="text-2xl font-black italic text-black/10 uppercase tracking-tighter">
              Archive is currently empty.<br />No structural data detected.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-4 border-black text-[10px] font-black uppercase tracking-widest bg-zinc-50">
                  <th className="py-6 px-4">Timestamp</th>
                  <th className="py-6 px-4">Principal</th>
                  <th className="py-6 px-4">Contact</th>
                  <th className="py-6 px-4">Entity</th>
                  <th className="py-6 px-4">Scale</th>
                  <th className="py-6 px-4">Inquiry Scope</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                {submissions.map((item) => (
                  <tr key={item.id} className="border-b border-black/10 hover:bg-zinc-50 transition-colors group">
                    <td className="py-8 px-4 whitespace-nowrap opacity-30 font-mono text-xs">
                      {new Date(item.timestamp).toLocaleString()}
                    </td>
                    <td className="py-8 px-4 font-black text-lg">{item.name}</td>
                    <td className="py-8 px-4 text-black/60">{item.email}</td>
                    <td className="py-8 px-4 italic">{item.organization || 'PRIVATE'}</td>
                    <td className="py-8 px-4 whitespace-nowrap font-black text-zinc-400 group-hover:text-black transition-colors">{item.budget}</td>
                    <td className="py-8 px-4 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap opacity-60">
                      {item.inquiry}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationsView;
