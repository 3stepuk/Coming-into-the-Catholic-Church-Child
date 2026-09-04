import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserProgressState, CandidateProfile } from '../types';
import { CONVERSATIONS_DATA } from '../data/conversations';
import { APPENDIX_G_SUMMARY_CATECHISM, APPENDIX_H_READINESS } from '../data/appendices';

const STORAGE_KEY = 'coming_into_communion_child_progress_v1';

const defaultProfile: CandidateProfile = {
  name: '',
  baptismDate: '',
  baptismPlace: '',
  baptismTradition: '',
  sponsor: '',
  priestOrCatechist: '',
  receptionDate: '',
  parishName: '',
  isSet: false,
};

const getDefaultState = (): UserProgressState => {
  const conversations: UserProgressState['conversations'] = {};
  CONVERSATIONS_DATA.forEach((c) => {
    conversations[c.id] = {
      isRead: false,
      reflectionNotes: '',
      weeklyTaskDone: false,
      weeklyTaskNotes: '',
      prayerDone: false,
      memoryGapsMastered: [],
      qaMastered: [],
    };
  });

  const summaryCatechismMastery: UserProgressState['summaryCatechismMastery'] = {};
  APPENDIX_G_SUMMARY_CATECHISM.forEach((q) => {
    summaryCatechismMastery[q.id] = { mastered: false, attempts: 0 };
  });

  const readinessChecks: Record<string, boolean> = {};
  APPENDIX_H_READINESS.forEach((r) => {
    readinessChecks[r.id] = false;
  });

  return {
    profile: defaultProfile,
    conversations,
    summaryCatechismMastery,
    readinessChecks,
    readinessNotes: {},
    parishChecks: {},
    examinationChecks: {},
    examinationNotes: {},
    prayerPracticed: {},
    savedBookmarkedQAs: [],
  };
};

interface ProgressContextType {
  state: UserProgressState;
  updateProfile: (profile: Partial<CandidateProfile>) => void;
  markConversationRead: (id: number, isRead?: boolean) => void;
  updateConversationNotes: (id: number, notes: string) => void;
  updateWeeklyTask: (id: number, done: boolean, notes?: string) => void;
  togglePrayerDone: (id: number) => void;
  toggleMemoryGapMastered: (convoId: number, gapId: string) => void;
  toggleQAMastered: (convoId: number, qaId: number) => void;
  toggleSummaryMastered: (qaId: number, force?: boolean) => void;
  incrementSummaryAttempt: (qaId: number, success: boolean) => void;
  toggleReadinessCheck: (id: string) => void;
  updateReadinessNote: (id: string, note: string) => void;
  toggleParishCheck: (id: string) => void;
  toggleExaminationCheck: (id: string) => void;
  recordPrayerPracticed: (prayerId: string) => void;
  toggleSavedQA: (qaId: number) => void;
  resetAllProgress: () => void;
  exportProgressJson: () => string;
  importProgressJson: (json: string) => boolean;
  stats: {
    lessonsCompleted: number;
    totalLessons: number;
    weeklyTasksDone: number;
    essentialsMastered: number;
    totalEssentials: number;
    summaryMastered: number;
    totalSummary: number;
    readinessCompleted: number;
    totalReadiness: number;
    percentComplete: number;
  };
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<UserProgressState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Merge with default state to ensure all keys exist
        const defaultS = getDefaultState();
        return {
          ...defaultS,
          ...parsed,
          profile: { ...defaultS.profile, ...(parsed.profile || {}) },
          conversations: { ...defaultS.conversations, ...(parsed.conversations || {}) },
          summaryCatechismMastery: { ...defaultS.summaryCatechismMastery, ...(parsed.summaryCatechismMastery || {}) },
          readinessChecks: { ...defaultS.readinessChecks, ...(parsed.readinessChecks || {}) },
          readinessNotes: { ...defaultS.readinessNotes, ...(parsed.readinessNotes || {}) },
          parishChecks: { ...defaultS.parishChecks, ...(parsed.parishChecks || {}) },
          examinationChecks: { ...defaultS.examinationChecks, ...(parsed.examinationChecks || {}) },
          examinationNotes: { ...defaultS.examinationNotes, ...(parsed.examinationNotes || {}) },
          prayerPracticed: { ...defaultS.prayerPracticed, ...(parsed.prayerPracticed || {}) },
          savedBookmarkedQAs: parsed.savedBookmarkedQAs || [],
        };
      }
    } catch (e) {
      console.warn('Failed to read from localStorage:', e);
    }
    return getDefaultState();
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Failed to save to localStorage:', e);
    }
  }, [state]);

  const updateProfile = (profileUpdate: Partial<CandidateProfile>) => {
    setState((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        ...profileUpdate,
        isSet: true,
      },
    }));
  };

  const markConversationRead = (id: number, isRead?: boolean) => {
    setState((prev) => {
      const current = prev.conversations[id] || {
        isRead: false,
        reflectionNotes: '',
        weeklyTaskDone: false,
        weeklyTaskNotes: '',
        prayerDone: false,
        memoryGapsMastered: [],
        qaMastered: [],
      };
      const newIsRead = isRead !== undefined ? isRead : !current.isRead;
      return {
        ...prev,
        conversations: {
          ...prev.conversations,
          [id]: {
            ...current,
            isRead: newIsRead,
            completedAt: newIsRead ? new Date().toISOString() : undefined,
          },
        },
      };
    });
  };

  const updateConversationNotes = (id: number, notes: string) => {
    setState((prev) => {
      const current = prev.conversations[id] || {
        isRead: false,
        reflectionNotes: '',
        weeklyTaskDone: false,
        weeklyTaskNotes: '',
        prayerDone: false,
        memoryGapsMastered: [],
        qaMastered: [],
      };
      return {
        ...prev,
        conversations: {
          ...prev.conversations,
          [id]: {
            ...current,
            reflectionNotes: notes,
          },
        },
      };
    });
  };

  const updateWeeklyTask = (id: number, done: boolean, notes?: string) => {
    setState((prev) => {
      const current = prev.conversations[id] || {
        isRead: false,
        reflectionNotes: '',
        weeklyTaskDone: false,
        weeklyTaskNotes: '',
        prayerDone: false,
        memoryGapsMastered: [],
        qaMastered: [],
      };
      return {
        ...prev,
        conversations: {
          ...prev.conversations,
          [id]: {
            ...current,
            weeklyTaskDone: done,
            weeklyTaskNotes: notes !== undefined ? notes : current.weeklyTaskNotes,
          },
        },
      };
    });
  };

  const togglePrayerDone = (id: number) => {
    setState((prev) => {
      const current = prev.conversations[id] || {
        isRead: false,
        reflectionNotes: '',
        weeklyTaskDone: false,
        weeklyTaskNotes: '',
        prayerDone: false,
        memoryGapsMastered: [],
        qaMastered: [],
      };
      return {
        ...prev,
        conversations: {
          ...prev.conversations,
          [id]: {
            ...current,
            prayerDone: !current.prayerDone,
          },
        },
      };
    });
  };

  const toggleMemoryGapMastered = (convoId: number, gapId: string) => {
    setState((prev) => {
      const current = prev.conversations[convoId] || {
        isRead: false,
        reflectionNotes: '',
        weeklyTaskDone: false,
        weeklyTaskNotes: '',
        prayerDone: false,
        memoryGapsMastered: [],
        qaMastered: [],
      };
      const mastered = current.memoryGapsMastered || [];
      const updated = mastered.includes(gapId)
        ? mastered.filter((x) => x !== gapId)
        : [...mastered, gapId];
      return {
        ...prev,
        conversations: {
          ...prev.conversations,
          [convoId]: {
            ...current,
            memoryGapsMastered: updated,
          },
        },
      };
    });
  };

  const toggleQAMastered = (convoId: number, qaId: number) => {
    setState((prev) => {
      const current = prev.conversations[convoId] || {
        isRead: false,
        reflectionNotes: '',
        weeklyTaskDone: false,
        weeklyTaskNotes: '',
        prayerDone: false,
        memoryGapsMastered: [],
        qaMastered: [],
      };
      const mastered = current.qaMastered || [];
      const updated = mastered.includes(qaId)
        ? mastered.filter((x) => x !== qaId)
        : [...mastered, qaId];
      return {
        ...prev,
        conversations: {
          ...prev.conversations,
          [convoId]: {
            ...current,
            qaMastered: updated,
          },
        },
      };
    });
  };

  const toggleSummaryMastered = (qaId: number, force?: boolean) => {
    setState((prev) => {
      const curr = prev.summaryCatechismMastery[qaId] || { mastered: false, attempts: 0 };
      const newStatus = force !== undefined ? force : !curr.mastered;
      return {
        ...prev,
        summaryCatechismMastery: {
          ...prev.summaryCatechismMastery,
          [qaId]: {
            ...curr,
            mastered: newStatus,
            lastTested: new Date().toISOString(),
          },
        },
      };
    });
  };

  const incrementSummaryAttempt = (qaId: number, success: boolean) => {
    setState((prev) => {
      const curr = prev.summaryCatechismMastery[qaId] || { mastered: false, attempts: 0 };
      return {
        ...prev,
        summaryCatechismMastery: {
          ...prev.summaryCatechismMastery,
          [qaId]: {
            mastered: success ? true : curr.mastered,
            attempts: curr.attempts + 1,
            lastTested: new Date().toISOString(),
          },
        },
      };
    });
  };

  const toggleReadinessCheck = (id: string) => {
    setState((prev) => ({
      ...prev,
      readinessChecks: {
        ...prev.readinessChecks,
        [id]: !prev.readinessChecks[id],
      },
    }));
  };

  const updateReadinessNote = (id: string, note: string) => {
    setState((prev) => ({
      ...prev,
      readinessNotes: {
        ...prev.readinessNotes,
        [id]: note,
      },
    }));
  };

  const toggleParishCheck = (id: string) => {
    setState((prev) => ({
      ...prev,
      parishChecks: {
        ...prev.parishChecks,
        [id]: !prev.parishChecks[id],
      },
    }));
  };

  const toggleExaminationCheck = (id: string) => {
    setState((prev) => ({
      ...prev,
      examinationChecks: {
        ...prev.examinationChecks,
        [id]: !prev.examinationChecks[id],
      },
    }));
  };

  const recordPrayerPracticed = (prayerId: string) => {
    setState((prev) => ({
      ...prev,
      prayerPracticed: {
        ...prev.prayerPracticed,
        [prayerId]: (prev.prayerPracticed[prayerId] || 0) + 1,
      },
    }));
  };

  const toggleSavedQA = (qaId: number) => {
    setState((prev) => {
      const exists = prev.savedBookmarkedQAs.includes(qaId);
      return {
        ...prev,
        savedBookmarkedQAs: exists
          ? prev.savedBookmarkedQAs.filter((x) => x !== qaId)
          : [...prev.savedBookmarkedQAs, qaId],
      };
    });
  };

  const resetAllProgress = () => {
    const fresh = getDefaultState();
    setState(fresh);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn(e);
    }
  };

  const exportProgressJson = (): string => {
    return JSON.stringify(state, null, 2);
  };

  const importProgressJson = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed && typeof parsed === 'object') {
        const defaultS = getDefaultState();
        const merged: UserProgressState = {
          ...defaultS,
          ...parsed,
          profile: { ...defaultS.profile, ...(parsed.profile || {}) },
          conversations: { ...defaultS.conversations, ...(parsed.conversations || {}) },
          summaryCatechismMastery: { ...defaultS.summaryCatechismMastery, ...(parsed.summaryCatechismMastery || {}) },
          readinessChecks: { ...defaultS.readinessChecks, ...(parsed.readinessChecks || {}) },
          readinessNotes: { ...defaultS.readinessNotes, ...(parsed.readinessNotes || {}) },
          parishChecks: { ...defaultS.parishChecks, ...(parsed.parishChecks || {}) },
          examinationChecks: { ...defaultS.examinationChecks, ...(parsed.examinationChecks || {}) },
          examinationNotes: { ...defaultS.examinationNotes, ...(parsed.examinationNotes || {}) },
          prayerPracticed: { ...defaultS.prayerPracticed, ...(parsed.prayerPracticed || {}) },
          savedBookmarkedQAs: parsed.savedBookmarkedQAs || [],
        };
        setState(merged);
        return true;
      }
    } catch (e) {
      console.warn('Failed to parse import JSON:', e);
    }
    return false;
  };

  // Calculate comprehensive stats
  const totalLessons = CONVERSATIONS_DATA.length;
  const lessonsCompleted = Object.values(state.conversations).filter((c) => c.isRead).length;
  const weeklyTasksDone = Object.values(state.conversations).filter((c) => c.weeklyTaskDone).length;

  let essentialsMastered = 0;
  let totalEssentials = 0;
  CONVERSATIONS_DATA.forEach((c) => {
    totalEssentials += c.essentials.length;
    const masteredList = state.conversations[c.id]?.qaMastered || [];
    essentialsMastered += masteredList.length;
  });

  const totalSummary = APPENDIX_G_SUMMARY_CATECHISM.length;
  const summaryMastered = Object.values(state.summaryCatechismMastery).filter((s) => s.mastered).length;

  const totalReadiness = APPENDIX_H_READINESS.length;
  const readinessCompleted = Object.values(state.readinessChecks).filter(Boolean).length;

  // Aggregate completion percentage
  // Weight: Lessons 40%, Essentials 25%, Summary Catechism 20%, Readiness 15%
  const percentComplete = Math.min(
    100,
    Math.round(
      (lessonsCompleted / totalLessons) * 40 +
        (essentialsMastered / Math.max(1, totalEssentials)) * 25 +
        (summaryMastered / totalSummary) * 20 +
        (readinessCompleted / totalReadiness) * 15
    )
  );

  return (
    <ProgressContext.Provider
      value={{
        state,
        updateProfile,
        markConversationRead,
        updateConversationNotes,
        updateWeeklyTask,
        togglePrayerDone,
        toggleMemoryGapMastered,
        toggleQAMastered,
        toggleSummaryMastered,
        incrementSummaryAttempt,
        toggleReadinessCheck,
        updateReadinessNote,
        toggleParishCheck,
        toggleExaminationCheck,
        recordPrayerPracticed,
        toggleSavedQA,
        resetAllProgress,
        exportProgressJson,
        importProgressJson,
        stats: {
          lessonsCompleted,
          totalLessons,
          weeklyTasksDone,
          essentialsMastered,
          totalEssentials,
          summaryMastered,
          totalSummary,
          readinessCompleted,
          totalReadiness,
          percentComplete,
        },
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
