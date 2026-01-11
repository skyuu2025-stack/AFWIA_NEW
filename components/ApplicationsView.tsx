
import React, { useState, useEffect } from 'react';
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

  const loadData = () => {
    try {
      const existingData = localStorage.getItem('afwia_submissions');
      if (existingData) {
        const data = JSON.parse(existingData);
        if (Array.isArray(data)) {
          setSubmissions(data);
        } else {
          setSubmissions([]);
        }
      } else {
        setSubmissions([]);
      }
    } catch (err) {
      console.error("Failed to load submission data:", err);
      setSubmissions([]);
    }
  };

  useEffect(() => {
    loadData();
    
    // Also listen for storage events in case of multi-tab usage
    window.addEventListener('storage', loadData);
    return () => window.removeEventListener('storage', loadData);
  }, []);

  const clearData = () => {
    if (window.confirm(lang === 'zh' ? '确定清空所有数据吗？' : 'Are you sure you want to clear all data?')) {
      localStorage.removeItem('afwia_submissions');
      setSubmissions([]);
    }
  };

  return (
    <div className="bg-white text-black min-h-screen pt-32 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <p className="text-[10px] tracking-[0.5em] font-bold text-black/30 mb-4 uppercase">Internal Data Access</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Applications</h1>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={loadData}
              className="text-[10px] font-black border border-black/20 px-6 py-3 hover:bg-black hover:text-white transition-all uppercase tracking-widest"
            >
              Refresh
            </button>
            <button 
              onClick={clearData}
              className="text-[10px] font-black border border-red-500/20 text-red-600 px-6 py-3 hover:bg-red-600 hover:text-white transition-all uppercase tracking-widest"
            >
              Clear Data
            </button>
          </div>
        </div>

        {submissions.length === 0 ? (
          <div className="py-40 text-center border-t border-black/10">
            <p className="text-xl font-bold italic text-black/20 uppercase">No records found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-black text-[10px] font-black uppercase tracking-widest">
                  <th className="py-6 px-4">Date</th>
                  <th className="py-6 px-4">Name</th>
                  <th className="py-6 px-4">Email</th>
                  <th className="py-6 px-4">Org</th>
                  <th className="py-6 px-4">Budget</th>
                  <th className="py-6 px-4">Inquiry</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                {submissions.map((item) => (
                  <tr key={item.id} className="border-b border-black/5 hover:bg-zinc-50 transition-colors">
                    <td className="py-6 px-4 whitespace-nowrap opacity-40">
                      {new Date(item.timestamp).toLocaleDateString()}
                    </td>
                    <td className="py-6 px-4 font-black">{item.name}</td>
                    <td className="py-6 px-4">{item.email}</td>
                    <td className="py-6 px-4">{item.organization || '—'}</td>
                    <td className="py-6 px-4 whitespace-nowrap font-black">{item.budget}</td>
                    <td className="py-6 px-4 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap opacity-60">
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
