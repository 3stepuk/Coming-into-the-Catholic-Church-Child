import React from 'react';
import { BookOpen, Sparkles, ScrollText, UserCheck, Award, ShieldCheck } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

interface NavbarProps {
  currentTab: 'intro' | 'lessons' | 'drill' | 'appendices' | 'profile';
  setCurrentTab: (tab: 'intro' | 'lessons' | 'drill' | 'appendices' | 'profile') => void;
  selectedLessonId?: number;
  onSelectLesson?: (id: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  selectedLessonId,
}) => {
  const { state, stats } = useProgress();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-[#0F0F0F]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Brand / Title */}
        <button
          onClick={() => setCurrentTab('intro')}
          className="flex items-center gap-3 text-left group transition-all"
        >
          <div className="w-9 h-9 rounded-lg bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:border-indigo-400 group-hover:text-indigo-300 transition-colors">
            {/* Traditional cross icon */}
            <span className="text-xl font-serif select-none">✠</span>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              Child Preparation
            </div>
            <div className="font-display text-sm sm:text-base font-medium tracking-wide text-slate-100 line-clamp-1">
              Coming into the Catholic Church
            </div>
          </div>
        </button>

        {/* Navigation buttons */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setCurrentTab('lessons')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 ${
              currentTab === 'lessons'
                ? 'bg-zinc-800 text-indigo-400 border border-indigo-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Lessons</span>
            <span className="hidden md:inline-block text-[10px] px-1.5 py-0.2 rounded-full bg-zinc-700 text-zinc-300">
              {stats.lessonsCompleted}/{stats.totalLessons}
            </span>
          </button>

          <button
            onClick={() => setCurrentTab('drill')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 ${
              currentTab === 'drill'
                ? 'bg-zinc-800 text-indigo-400 border border-indigo-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Recall</span>
            <span>Drill</span>
          </button>

          <button
            onClick={() => setCurrentTab('appendices')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 ${
              currentTab === 'appendices'
                ? 'bg-zinc-800 text-indigo-400 border border-indigo-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
            }`}
          >
            <ScrollText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Appendices</span>
            <span className="sm:hidden">Rites</span>
          </button>

          <button
            onClick={() => setCurrentTab('profile')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 ${
              currentTab === 'profile'
                ? 'bg-zinc-800 text-indigo-400 border border-indigo-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Profile</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500" title={`${stats.percentComplete}% Complete`} />
          </button>
        </nav>
      </div>

      {/* Progress line indicator */}
      <div className="w-full bg-zinc-850 h-0.5 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 transition-all duration-500"
          style={{ width: `${Math.max(3, stats.percentComplete)}%` }}
        />
      </div>
    </header>
  );
};
