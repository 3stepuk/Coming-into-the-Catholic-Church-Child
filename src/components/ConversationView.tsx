import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Bookmark,
  Sparkles,
  HelpCircle,
  MessageSquare,
  BookOpen,
  Calendar,
  Cross,
  Award,
  RotateCcw,
} from 'lucide-react';
import { CONVERSATIONS_DATA } from '../data/conversations';
import { Conversation, EssentialQA } from '../types';
import { useProgress } from '../context/ProgressContext';

interface ConversationViewProps {
  lessonId: number;
  onSelectLesson: (id: number) => void;
  onBackToOverview: () => void;
  onOpenDrill: () => void;
}

export const ConversationView: React.FC<ConversationViewProps> = ({
  lessonId,
  onSelectLesson,
  onBackToOverview,
  onOpenDrill,
}) => {
  const {
    state,
    markConversationRead,
    updateConversationNotes,
    updateWeeklyTask,
    togglePrayerDone,
    toggleQAMastered,
    toggleSavedQA,
  } = useProgress();

  const lesson = CONVERSATIONS_DATA.find((c) => c.id === lessonId) || CONVERSATIONS_DATA[0];
  const progress = state.conversations[lesson.id] || {
    isRead: false,
    reflectionNotes: '',
    weeklyTaskDone: false,
    weeklyTaskNotes: '',
    prayerDone: false,
    memoryGapsMastered: [],
    qaMastered: [],
  };

  const [showGuidance, setShowGuidance] = useState(false);
  const [qaPracticeMode, setQaPracticeMode] = useState<Record<number, boolean>>({});
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, Record<string, string>>>({});
  const [showAnswers, setShowAnswers] = useState<Record<number, boolean>>({});

  // Memory Gap Drill State for the Remember statement
  const [gapAnswers, setGapAnswers] = useState<Record<number, string>>({});
  const [gapChecked, setGapChecked] = useState(false);

  const prevLesson = CONVERSATIONS_DATA.find((c) => c.id === lesson.id - 1);
  const nextLesson = CONVERSATIONS_DATA.find((c) => c.id === lesson.id + 1);

  const handleGapSelect = (gapIndex: number, word: string) => {
    setGapAnswers((prev) => ({ ...prev, [gapIndex]: word }));
  };

  const handleResetGap = () => {
    setGapAnswers({});
    setGapChecked(false);
  };

  const handleTogglePractice = (qaId: number) => {
    setQaPracticeMode((prev) => ({ ...prev, [qaId]: !prev[qaId] }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between gap-2 border-b border-zinc-800/80 pb-4">
        <button
          onClick={onBackToOverview}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-zinc-400 hover:text-indigo-400 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>All 16 Lessons</span>
        </button>

        <div className="flex items-center gap-2">
          {prevLesson && (
            <button
              onClick={() => onSelectLesson(prevLesson.id)}
              className="px-2.5 py-1 text-xs rounded-md bg-zinc-850 hover:bg-zinc-800 text-zinc-300 transition-colors flex items-center gap-1"
              title={`Lesson ${prevLesson.number}: ${prevLesson.title}`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Lesson {prevLesson.number}</span>
            </button>
          )}

          <span className="text-xs font-semibold text-indigo-400 px-2.5 py-1 rounded-md bg-indigo-950/60 border border-indigo-500/30">
            Lesson {lesson.number} of 16
          </span>

          {nextLesson && (
            <button
              onClick={() => onSelectLesson(nextLesson.id)}
              className="px-2.5 py-1 text-xs rounded-md bg-zinc-850 hover:bg-zinc-800 text-zinc-300 transition-colors flex items-center gap-1"
              title={`Lesson ${nextLesson.number}: ${nextLesson.title}`}
            >
              <span className="hidden sm:inline">Lesson {nextLesson.number}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Lesson Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-indigo-400 text-xs uppercase tracking-widest font-semibold">
          <span>Catholic Preparation Series</span>
          <span>•</span>
          <span>Lesson {lesson.number}</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl font-semibold tracking-tight text-white">
          {lesson.title}
        </h1>

        {/* Purpose Callout */}
        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-300 leading-relaxed">
          <strong className="text-indigo-300 font-medium">Purpose: </strong>
          {lesson.purpose}
        </div>
      </div>

      {/* Remember Section (Core Formula with Interactive Blanks) */}
      <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/30 via-zinc-900 to-zinc-900 p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-indigo-400 font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Remember (Core Formula)</span>
          </div>
          <button
            onClick={() => setGapChecked(!gapChecked)}
            className="text-xs text-indigo-300 hover:text-indigo-200 underline font-medium transition-colors"
          >
            {gapChecked ? 'Reset Drill' : 'Test Memory Gaps'}
          </button>
        </div>

        {!gapChecked ? (
          <div className="p-4 rounded-xl bg-black/40 border border-indigo-500/20 text-indigo-100 font-serif text-lg sm:text-xl italic leading-relaxed">
            “{lesson.remember}”
          </div>
        ) : (
          <div className="space-y-4 p-4 rounded-xl bg-black/40 border border-indigo-500/20">
            <p className="text-xs text-zinc-400">
              Select the correct missing words to test your memory of the core formula:
            </p>
            {lesson.rememberGaps ? (
              <div className="space-y-4">
                <div className="text-base sm:text-lg font-serif leading-relaxed text-zinc-200">
                  {lesson.rememberGaps.sentenceWithBlanks.split(/\[(.*?)\]/).map((part, idx) => {
                    const isGap = idx % 2 === 1;
                    const gapIndex = Math.floor(idx / 2);
                    const gap = lesson.rememberGaps?.gaps.find((g) => g.index === gapIndex);

                    if (!isGap || !gap) {
                      return <span key={idx}>{part}</span>;
                    }

                    const selected = gapAnswers[gapIndex];
                    const isCorrect = selected === gap.word;

                    return (
                      <span
                        key={idx}
                        className={`inline-block mx-1 px-2.5 py-0.5 rounded border text-sm font-sans font-medium transition-all ${
                          selected
                            ? isCorrect
                              ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
                              : 'bg-red-950/60 border-red-500/50 text-red-300'
                            : 'bg-zinc-800 border-dashed border-zinc-600 text-zinc-400'
                        }`}
                      >
                        {selected || '[ ? ]'}
                      </span>
                    );
                  })}
                </div>

                {/* Word options for each gap */}
                <div className="space-y-2 pt-2 border-t border-zinc-800">
                  {lesson.rememberGaps.gaps.map((gap) => (
                    <div key={gap.index} className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-zinc-400 font-medium">Gap {gap.index + 1}:</span>
                      {gap.options.map((opt) => {
                        const isChosen = gapAnswers[gap.index] === opt;
                        return (
                          <button
                            key={opt}
                            onClick={() => handleGapSelect(gap.index, opt)}
                            className={`px-2.5 py-1 rounded-md text-xs transition-colors ${
                              isChosen
                                ? 'bg-indigo-600 text-white font-medium'
                                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-zinc-400 italic">
                    {lesson.rememberGaps.explanation}
                  </span>
                  <button
                    onClick={handleResetGap}
                    className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-sm text-zinc-300 font-serif italic">“{lesson.remember}”</div>
            )}
          </div>
        )}
      </div>

      {/* Teaching Paragraphs */}
      <div className="space-y-4">
        <h2 className="font-display text-lg font-semibold text-white tracking-wide">
          Teaching
        </h2>
        <div className="space-y-4">
          {lesson.teachingParagraphs.map((paragraph, pIdx) => (
            <div
              key={pIdx}
              className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800/80 text-zinc-200 text-base sm:text-lg font-serif leading-relaxed tracking-wide"
            >
              {paragraph}
            </div>
          ))}
        </div>
      </div>

      {/* Talk About It (Discussion with Mentor / Family) */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-indigo-400 font-semibold">
          <MessageSquare className="w-4 h-4" />
          <span>Talk About It</span>
        </div>
        <p className="font-serif text-lg text-white font-medium leading-relaxed">
          “{lesson.talkAboutIt}”
        </p>

        {lesson.talkGuidance && (
          <div className="pt-2">
            <button
              onClick={() => setShowGuidance(!showGuidance)}
              className="text-xs text-indigo-300 hover:text-indigo-200 flex items-center gap-1.5 transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{showGuidance ? 'Hide Mentor / Catechist Guidance' : 'View Mentor / Catechist Guidance'}</span>
            </button>

            {showGuidance && (
              <div className="mt-2.5 p-3.5 rounded-xl bg-zinc-850/80 border border-zinc-700/60 text-xs text-zinc-300 leading-relaxed">
                <strong className="text-indigo-300 font-medium">Pastoral note for mentor: </strong>
                {lesson.talkGuidance}
              </div>
            )}
          </div>
        )}
      </div>

      {/* 5 Essentials Q&A Drill Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              Catechetical Mastery
            </div>
            <h2 className="font-display text-xl font-semibold text-white">
              The 5 Essentials
            </h2>
          </div>
          <span className="text-xs text-zinc-400">
            {progress.qaMastered?.length || 0} of 5 Mastered
          </span>
        </div>

        <div className="space-y-3">
          {lesson.essentials.map((qa, index) => {
            const isMastered = progress.qaMastered?.includes(qa.id);
            const isBookmarked = state.savedBookmarkedQAs.includes(qa.id);
            const isPractice = qaPracticeMode[qa.id];
            const isRevealed = showAnswers[qa.id];

            return (
              <div
                key={qa.id}
                className={`rounded-xl border p-4 sm:p-5 transition-all space-y-3 ${
                  isMastered
                    ? 'border-indigo-500/40 bg-zinc-900/90'
                    : 'border-zinc-800 bg-zinc-900/60'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-indigo-950 border border-indigo-500/30 text-indigo-400 flex items-center justify-center text-xs font-semibold">
                      {index + 1}
                    </span>
                    <h3 className="font-display text-sm sm:text-base font-semibold text-zinc-100">
                      {qa.question}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => toggleSavedQA(qa.id)}
                      className={`p-1.5 rounded-lg text-xs transition-colors ${
                        isBookmarked
                          ? 'text-amber-400 bg-amber-950/40'
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                      title={isBookmarked ? 'Bookmarked' : 'Bookmark question'}
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => toggleQAMastered(lesson.id, qa.id)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 ${
                        isMastered
                          ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40'
                          : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{isMastered ? 'Mastered' : 'Mark Mastered'}</span>
                    </button>
                  </div>
                </div>

                {/* Answer Mode */}
                {!isPractice ? (
                  <div className="text-sm sm:text-base text-zinc-200 font-serif leading-relaxed pl-8 border-l-2 border-indigo-500/30">
                    {qa.answer}
                  </div>
                ) : (
                  /* Practice / Blank Mode */
                  <div className="pl-8 space-y-3">
                    {qa.gapVersion ? (
                      <div className="p-3 rounded-lg bg-black/40 border border-zinc-700 text-sm font-serif leading-relaxed text-zinc-300">
                        {qa.gapVersion.textWithBlanks}
                      </div>
                    ) : (
                      <div className="p-3 rounded-lg bg-black/40 border border-zinc-700 text-sm font-serif leading-relaxed text-zinc-400 italic">
                        Can you say the answer in your own words?
                      </div>
                    )}
                    <button
                      onClick={() => setShowAnswers((p) => ({ ...p, [qa.id]: !p[qa.id] }))}
                      className="text-xs text-indigo-400 hover:underline"
                    >
                      {isRevealed ? 'Hide Answer' : 'Show Answer'}
                    </button>
                    {isRevealed && (
                      <div className="text-sm text-zinc-200 font-serif">{qa.answer}</div>
                    )}
                  </div>
                )}

                {/* Key terms pills & practice toggle */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-zinc-850 text-xs">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-zinc-500 text-[11px]">Key concepts:</span>
                    {qa.keyTerms?.map((term) => (
                      <span
                        key={term}
                        className="px-2 py-0.5 rounded-full bg-zinc-800/80 text-indigo-300 text-[11px]"
                      >
                        {term}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleTogglePractice(qa.id)}
                    className="text-[11px] text-zinc-400 hover:text-zinc-200 underline"
                  >
                    {isPractice ? 'Exit test mode' : 'Practice blanks'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scripture Reference */}
      {lesson.scriptureReferences && (
        <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs sm:text-sm text-zinc-300 leading-relaxed font-serif italic">
          <span className="text-indigo-400 font-sans not-italic font-semibold text-xs uppercase tracking-wider block mb-1">
            Word of God
          </span>
          {lesson.scriptureReferences}
        </div>
      )}

      {/* Lesson Prayer */}
      <div className="rounded-2xl border border-indigo-500/30 bg-zinc-900 p-6 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-indigo-400 font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Prayer</span>
          </div>
          <button
            onClick={() => togglePrayerDone(lesson.id)}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
              progress.prayerDone
                ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40'
                : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{progress.prayerDone ? 'Prayed' : 'Mark as Prayed'}</span>
          </button>
        </div>

        <div className="p-4 rounded-xl bg-black/40 border border-indigo-500/20 text-indigo-100 font-serif text-base sm:text-lg italic leading-relaxed text-center">
          “{lesson.prayer}”
        </div>
      </div>

      {/* This Week Practical Task */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-indigo-400 font-semibold">
            <Calendar className="w-4 h-4" />
            <span>This Week (Practical Exercise)</span>
          </div>
          <label className="flex items-center gap-2 text-xs text-zinc-300 cursor-pointer">
            <input
              type="checkbox"
              checked={progress.weeklyTaskDone}
              onChange={(e) => updateWeeklyTask(lesson.id, e.target.checked)}
              className="rounded border-zinc-700 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Exercise Completed</span>
          </label>
        </div>

        <p className="font-serif text-base sm:text-lg text-zinc-200 leading-relaxed">
          {lesson.thisWeek}
        </p>

        {/* Task reflection notes */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
            Notes on your weekly practice (optional)
          </label>
          <input
            type="text"
            value={progress.weeklyTaskNotes || ''}
            onChange={(e) => updateWeeklyTask(lesson.id, progress.weeklyTaskDone, e.target.value)}
            placeholder="What happened when you did this exercise?"
            className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-850 border border-zinc-700 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Personal Reflection Notes for this Lesson */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 space-y-3">
        <label className="block text-xs uppercase tracking-widest text-indigo-400 font-semibold">
          Personal / Catechist Reflection Notes
        </label>
        <textarea
          rows={3}
          value={progress.reflectionNotes || ''}
          onChange={(e) => updateConversationNotes(lesson.id, e.target.value)}
          placeholder="Write down any questions to ask Father John, thoughts, or things you learned..."
          className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-850 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 leading-relaxed"
        />
      </div>

      {/* Complete Lesson & Navigation Footer */}
      <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => markConversationRead(lesson.id)}
          className={`w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 ${
            progress.isRead
              ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40'
              : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-950/40'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{progress.isRead ? 'Lesson Completed ✓' : 'Mark Lesson as Complete'}</span>
        </button>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          {nextLesson ? (
            <button
              onClick={() => onSelectLesson(nextLesson.id)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-zinc-850 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              <span>Next: Lesson {nextLesson.number}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onOpenDrill}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-zinc-850 hover:bg-zinc-800 border border-zinc-700 text-indigo-400 text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Summary Recall Drill</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
