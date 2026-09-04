import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen,
  Filter,
  Eye,
  ChevronLeft,
  ChevronRight,
  Award,
} from 'lucide-react';
import { APPENDIX_G_SUMMARY_CATECHISM } from '../data/appendices';
import { SummaryCatechismItem } from '../types';
import { useProgress } from '../context/ProgressContext';

export const MasterRecallDrill: React.FC = () => {
  const { state, toggleSummaryMastered, incrementSummaryAttempt } = useProgress();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterMode, setFilterMode] = useState<'all' | 'unmastered'>('all');
  const [drillType, setDrillType] = useState<'gap' | 'flashcard'>('gap');
  const [cardFlipped, setCardFlipped] = useState(false);

  // Gap fill interactive state
  const [selectedWordMap, setSelectedWordMap] = useState<Record<number, string>>({});
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  // Filter questions
  const filteredList = APPENDIX_G_SUMMARY_CATECHISM.filter((item) => {
    if (filterMode === 'unmastered') {
      return !state.summaryCatechismMastery[item.id]?.mastered;
    }
    return true;
  });

  const activeQuestion: SummaryCatechismItem | undefined =
    filteredList[currentIndex] || filteredList[0] || APPENDIX_G_SUMMARY_CATECHISM[0];

  const masteryStatus = activeQuestion
    ? state.summaryCatechismMastery[activeQuestion.id]
    : { mastered: false, attempts: 0 };

  // Prepare blanks and options for active question
  const prompt = activeQuestion?.gapPrompt;
  const allWordOptions = prompt
    ? [...prompt.correctWords, ...prompt.distractors].sort(() => 0.5 - Math.random())
    : [];

  const handleSelectWord = (gapIdx: number, word: string) => {
    if (isAnswerChecked) return;
    setSelectedWordMap((prev) => ({ ...prev, [gapIdx]: word }));
  };

  const handleCheckAnswer = () => {
    if (!prompt || !activeQuestion) return;
    setIsAnswerChecked(true);

    // Check correctness
    const isAllCorrect = prompt.correctWords.every(
      (correctWord, idx) => selectedWordMap[idx] === correctWord
    );

    incrementSummaryAttempt(activeQuestion.id, isAllCorrect);
  };

  const handleResetCurrent = () => {
    setSelectedWordMap({});
    setIsAnswerChecked(false);
    setCardFlipped(false);
  };

  const handleNext = () => {
    handleResetCurrent();
    if (currentIndex < filteredList.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    handleResetCurrent();
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(filteredList.length - 1);
    }
  };

  const masteredCount = Object.values(state.summaryCatechismMastery).filter((s) => s.mastered).length;
  const totalCount = APPENDIX_G_SUMMARY_CATECHISM.length;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Master Recall Drill</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-white">
            Appendix G Summary Catechism
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            23 essential questions and answers summarizing the entire faith for full communion.
          </p>
        </div>

        {/* Progress pill */}
        <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 shrink-0 text-center sm:text-right">
          <div className="text-xs text-zinc-400">Mastery Score</div>
          <div className="font-display text-xl font-bold text-indigo-400">
            {masteredCount} / {totalCount}
          </div>
        </div>
      </div>

      {/* Control bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs">
        {/* Filter controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => {
              setFilterMode('all');
              setCurrentIndex(0);
              handleResetCurrent();
            }}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              filterMode === 'all'
                ? 'bg-indigo-600 text-white font-medium'
                : 'bg-zinc-850 hover:bg-zinc-800 text-zinc-300'
            }`}
          >
            All Questions ({totalCount})
          </button>
          <button
            onClick={() => {
              setFilterMode('unmastered');
              setCurrentIndex(0);
              handleResetCurrent();
            }}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              filterMode === 'unmastered'
                ? 'bg-indigo-600 text-white font-medium'
                : 'bg-zinc-850 hover:bg-zinc-800 text-zinc-300'
            }`}
          >
            Unmastered Only ({totalCount - masteredCount})
          </button>
        </div>

        {/* Mode controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => {
              setDrillType('gap');
              handleResetCurrent();
            }}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              drillType === 'gap'
                ? 'bg-zinc-800 text-indigo-400 border border-indigo-500/40 font-medium'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Interactive Gap Fill
          </button>
          <button
            onClick={() => {
              setDrillType('flashcard');
              handleResetCurrent();
            }}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              drillType === 'flashcard'
                ? 'bg-zinc-800 text-indigo-400 border border-indigo-500/40 font-medium'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Flashcard Flip
          </button>
        </div>
      </div>

      {filteredList.length === 0 ? (
        <div className="text-center p-12 rounded-2xl bg-zinc-900 border border-emerald-500/40 space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400">
            <Award className="w-6 h-6" />
          </div>
          <h2 className="font-display text-xl font-semibold text-white">
            All 23 Summary Questions Mastered!
          </h2>
          <p className="text-sm text-zinc-300 max-w-md mx-auto">
            You have successfully mastered every question in the Summary Catechism. You are well prepared in the Catholic faith!
          </p>
          <button
            onClick={() => setFilterMode('all')}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium"
          >
            Review All Questions Again
          </button>
        </div>
      ) : (
        /* Drill Question Card */
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8 space-y-6">
          {/* Card top bar */}
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-500/30 font-semibold">
                Question {activeQuestion.id} of 23
              </span>
              {activeQuestion.category && (
                <span className="text-zinc-400 hidden sm:inline">
                  • {activeQuestion.category}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleSummaryMastered(activeQuestion.id)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors flex items-center gap-1 ${
                  masteryStatus.mastered
                    ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40'
                    : 'bg-zinc-850 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{masteryStatus.mastered ? 'Mastered' : 'Mark Mastered'}</span>
              </button>
            </div>
          </div>

          {/* Question Text */}
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-white leading-snug">
            {activeQuestion.question}
          </h2>

          {/* Drill Mode: Interactive Gap Fill */}
          {drillType === 'gap' ? (
            <div className="space-y-6">
              {/* Sentence with blanks */}
              <div className="p-5 rounded-xl bg-black/40 border border-indigo-500/20 text-base sm:text-lg font-serif leading-relaxed text-zinc-200">
                {prompt.textWithBlanks.split(/\[(.*?)\]/).map((part, idx) => {
                  const isGap = idx % 2 === 1;
                  const gapIdx = Math.floor(idx / 2);
                  const selectedWord = selectedWordMap[gapIdx];
                  const correctWord = prompt.correctWords[gapIdx];

                  if (!isGap) {
                    return <span key={idx}>{part}</span>;
                  }

                  let statusColor = 'bg-zinc-800 border-dashed border-zinc-600 text-zinc-400';
                  if (selectedWord) {
                    if (isAnswerChecked) {
                      statusColor =
                        selectedWord === correctWord
                          ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-300'
                          : 'bg-red-950/60 border-red-500/60 text-red-300';
                    } else {
                      statusColor = 'bg-indigo-950/60 border-indigo-500/60 text-indigo-300 font-medium';
                    }
                  }

                  return (
                    <span
                      key={idx}
                      className={`inline-block mx-1.5 px-3 py-1 rounded border text-sm sm:text-base font-sans font-medium transition-all ${statusColor}`}
                    >
                      {selectedWord || `[ Blank ${gapIdx + 1} ]`}
                    </span>
                  );
                })}
              </div>

              {/* Word banks for each blank */}
              {!isAnswerChecked && (
                <div className="space-y-3">
                  <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                    Select the word for each blank:
                  </div>

                  {prompt.correctWords.map((correctWord, gapIdx) => {
                    const optionsForThisGap = [
                      correctWord,
                      ...prompt.distractors.slice(0, 2),
                    ].sort(() => 0.5 - Math.random());

                    return (
                      <div key={gapIdx} className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="text-indigo-400 font-medium w-16">Blank {gapIdx + 1}:</span>
                        {optionsForThisGap.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleSelectWord(gapIdx, opt)}
                            className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
                              selectedWordMap[gapIdx] === opt
                                ? 'bg-indigo-600 text-white font-medium shadow-sm'
                                : 'bg-zinc-850 hover:bg-zinc-800 text-zinc-300'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                {!isAnswerChecked ? (
                  <button
                    onClick={handleCheckAnswer}
                    disabled={Object.keys(selectedWordMap).length < prompt.correctWords.length}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium text-xs sm:text-sm transition-colors flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Check Answer</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleResetCurrent}
                      className="px-4 py-2 rounded-xl bg-zinc-850 hover:bg-zinc-800 text-zinc-300 text-xs font-medium transition-colors flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Try Again</span>
                    </button>
                    <span className="text-xs text-zinc-400 font-serif">
                      Full answer: “{activeQuestion.answer}”
                    </span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Flashcard Flip Mode */
            <div className="space-y-4">
              <div
                onClick={() => setCardFlipped(!cardFlipped)}
                className="min-h-[160px] p-6 rounded-xl bg-black/40 border border-zinc-700/60 cursor-pointer flex flex-col items-center justify-center text-center transition-all hover:border-indigo-500/40"
              >
                {!cardFlipped ? (
                  <div className="space-y-2">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest">
                      Tap to reveal answer
                    </div>
                    <Eye className="w-6 h-6 text-zinc-600 mx-auto" />
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="text-xs text-indigo-400 uppercase tracking-widest font-semibold">
                      Catechism Answer
                    </div>
                    <p className="font-serif text-lg text-zinc-100 leading-relaxed max-w-lg">
                      “{activeQuestion.answer}”
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navigation between questions */}
          <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
            <button
              onClick={handlePrev}
              className="px-3.5 py-2 rounded-lg bg-zinc-850 hover:bg-zinc-800 text-zinc-300 text-xs font-medium transition-colors flex items-center gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <span className="text-xs text-zinc-500">
              {currentIndex + 1} of {filteredList.length}
            </span>

            <button
              onClick={handleNext}
              className="px-3.5 py-2 rounded-lg bg-zinc-850 hover:bg-zinc-800 text-zinc-300 text-xs font-medium transition-colors flex items-center gap-1.5"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
