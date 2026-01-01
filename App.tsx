
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RiskSection from './components/RiskSection';
import AboutSection from './components/AboutSection';
import DisclaimerSection from './components/DisclaimerSection';
import Footer from './components/Footer';
import PhilosophyView from './components/PhilosophyView';
import RunwayView from './components/RunwayView';
import LaunchView from './components/LaunchView';
import PlatformsView from './components/PlatformsView';
import ConsultationView from './components/ConsultationView';
import AboutView from './components/AboutView';
import AIChat from './components/AIChat';
import ApplicationsView from './components/ApplicationsView';
import TermsView from './components/TermsView';

export type Language = 'zh' | 'en';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'philosophy' | 'runway' | 'launch' | 'platforms' | 'consultation' | 'about' | 'applications' | 'terms'>('home');
  const [lang, setLang] = useState<Language>('zh');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const navigateToConsultation = () => setView('consultation');

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar currentView={view} onNavigate={setView} lang={lang} onLangChange={setLang} />
      <main>
        {view === 'home' && (
          <>
            <Hero onConsult={navigateToConsultation} lang={lang} />
            <RiskSection lang={lang} />
            <AboutSection lang={lang} />
            <DisclaimerSection onConsult={navigateToConsultation} lang={lang} />
          </>
        )}
        {view === 'philosophy' && <PhilosophyView lang={lang} onConsult={navigateToConsultation} />}
        {view === 'runway' && <RunwayView lang={lang} onConsult={navigateToConsultation} />}
        {view === 'launch' && <LaunchView lang={lang} onConsult={navigateToConsultation} />}
        {view === 'platforms' && <PlatformsView lang={lang} onConsult={navigateToConsultation} />}
        {view === 'consultation' && <ConsultationView lang={lang} />}
        {view === 'about' && <AboutView lang={lang} onConsult={navigateToConsultation} />}
        {view === 'applications' && <ApplicationsView lang={lang} />}
        {view === 'terms' && <TermsView lang={lang} />}
      </main>
      <Footer lang={lang} onNavigate={setView} />
      
      {/* Global AI Assistant */}
      <AIChat lang={lang} />
    </div>
  );
};

export default App;
