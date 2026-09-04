import React, { useState, useEffect } from 'react';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { Navbar } from './components/Navbar';
import { IntroView } from './components/IntroView';
import { ConversationView } from './components/ConversationView';
import { MasterRecallDrill } from './components/MasterRecallDrill';
import { AppendicesView } from './components/AppendicesView';
import { ProfileView } from './components/ProfileView';
import { CONVERSATIONS_DATA } from './data/conversations';
import { BookOpen, ChevronRight, CheckCircle2, Sparkles, ScrollText, User } from 'lucide-react';

type TabType = 'intro' | 'lessons' | 'drill' | 'appendices' | 'profile';

const AppContent: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<TabType>('intro');
  const [selectedLessonId, setSelectedLessonId] = useState<number>(1);
  const [initialAppendixTab, setInitialAppendixTab] = useState<string>('app-a');
  const { state, stats } = useProgress();

  const handleStartLesson = (lessonId?: number) => {
    if (lessonId) {
      setSelectedLessonId(lessonId);
    } else {
      // Find the first unread lesson, or default to 1
      const unread = CONVERSATIONS_DATA.find((c) => !state.conversations[c.id]?.isRead);
      setSelectedLessonId(unread ? unread.id : 1);
    }
    setCurrentTab('lessons');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDrill = () => {
    setCurrentTab('drill');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAppendices = (appendixId?: string) => {
    if (appendixId) {
      setInitialAppendixTab(appendixId);
    }
    setCurrentTab('appendices');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProfile = () => {
    setCurrentTab('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-slate-200 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Top sticky Navbar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        selectedLessonId={selectedLessonId}
        onSelectLesson={(id) => {
          setSelectedLessonId(id);
          setCurrentTab('lessons');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {currentTab === 'intro' && (
          <IntroView
            onStart={handleStartLesson}
            onOpenDrill={handleOpenDrill}
            onOpenAppendices={handleOpenAppendices}
            onOpenProfile={handleOpenProfile}
          />
        )}

        {currentTab === 'lessons' && (
          <ConversationView
            lessonId={selectedLessonId}
            onSelectLesson={(id) => {
              setSelectedLessonId(id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackToOverview={() => {
              setCurrentTab('intro');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenDrill={handleOpenDrill}
          />
        )}

        {currentTab === 'drill' && <MasterRecallDrill />}

        {currentTab === 'appendices' && (
          <AppendicesView
            initialTab={initialAppendixTab}
            onOpenDrill={handleOpenDrill}
          />
        )}

        {currentTab === 'profile' && <ProfileView />}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 bg-zinc-950/60 py-8 px-4 text-center text-xs text-zinc-400 space-y-2">
        <div className="flex items-center justify-center gap-2 text-indigo-400 font-serif">
          <span>✠</span>
          <span className="font-display tracking-widest uppercase text-[11px] font-semibold">
            Ad Maiorem Dei Gloriam
          </span>
          <span>✠</span>
        </div>
        <p className="max-w-xl mx-auto text-zinc-400">
          Coming into the Catholic Church — Preparation Catechism for Baptised Children (Aged 7+) Entering Full Communion.
        </p>
        <p className="text-zinc-500 text-[11px]">
          Scripture citations from ESV-CE. Faithful to the Catechism of the Catholic Church and the Roman Rite.
        </p>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <ProgressProvider>
      <AppContent />
    </ProgressProvider>
  );
}
