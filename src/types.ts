export interface MemoryGapItem {
  id: string;
  sentenceWithBlanks: string; // e.g. "God created me out of love and calls me to know, love and follow [Jesus Christ] in his [Church]."
  gaps: {
    index: number;
    word: string;
    options: string[];
    hint?: string;
  }[];
  explanation?: string;
}

export interface EssentialQA {
  id: number;
  question: string;
  answer: string;
  keyTerms?: string[];
  gapVersion?: {
    textWithBlanks: string;
    missingWords: string[];
    options: string[];
  };
}

export interface Conversation {
  id: number;
  number: number;
  title: string;
  purpose: string;
  remember: string;
  rememberGaps?: MemoryGapItem;
  teachingParagraphs: string[];
  talkAboutIt: string;
  talkGuidance?: string;
  essentials: EssentialQA[];
  prayer: string;
  thisWeek: string;
  scriptureReferences?: string;
}

export interface CandidateProfile {
  name: string;
  baptismDate?: string;
  baptismPlace?: string;
  baptismTradition: string;
  sponsor: string; // Labeled "Sponsor / Mentor" (Father John's wording)
  priestOrCatechist: string; // Labeled "Priest / Deacon / Mentor"
  receptionDate: string;
  parishName: string;
  isSet: boolean;
}

export interface ConversationProgress {
  isRead: boolean;
  completedAt?: string;
  reflectionNotes: string;
  weeklyTaskDone: boolean;
  weeklyTaskNotes: string;
  prayerDone: boolean;
  memoryGapsMastered: string[]; // ids of mastered memory gaps
  qaMastered: number[]; // ids of mastered QAs
}

export interface SummaryCatechismItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
  gapPrompt: {
    textWithBlanks: string;
    correctWords: string[];
    distractors: string[];
  };
}

export interface ReadinessCheckItem {
  id: string;
  area: string;
  whatItLooksLike: string;
}

export interface ParishChecklistItem {
  id: string;
  item: string;
  detail?: string;
}

export interface UserProgressState {
  profile: CandidateProfile;
  conversations: Record<number, ConversationProgress>;
  summaryCatechismMastery: Record<number, { mastered: boolean; lastTested?: string; attempts: number }>;
  readinessChecks: Record<string, boolean>;
  readinessNotes: Record<string, string>;
  parishChecks: Record<string, boolean>;
  examinationChecks: Record<string, boolean>;
  examinationNotes: Record<string, string>;
  prayerPracticed: Record<string, number>;
  savedBookmarkedQAs: number[];
}
