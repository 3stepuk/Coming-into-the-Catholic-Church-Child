import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  ScrollText,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  User,
  Heart,
  Calendar,
  Church,
  Cross,
  Award,
} from 'lucide-react';
import { CONVERSATIONS_DATA } from '../data/conversations';
import { useProgress } from '../context/ProgressContext';
import { NOTIFY_URL } from '../config';

interface IntroViewProps {
  onStart: (lessonId?: number) => void;
  onOpenDrill: () => void;
  onOpenAppendices: (appendixId?: string) => void;
  onOpenProfile: () => void;
}

export const IntroView: React.FC<IntroViewProps> = ({
  onStart,
  onOpenDrill,
  onOpenAppendices,
  onOpenProfile,
}) => {
  const { state, updateProfile, stats } = useProgress();
  const profile = state.profile;

  // Formspree state
  const [notifyName, setNotifyName] = useState(profile.name || '');
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifyMentor, setNotifyMentor] = useState(profile.sponsor || '');
  const [notifyPriest, setNotifyPriest] = useState(profile.priestOrCatechist || '');
  const [notifyParish, setNotifyParish] = useState(profile.parishName || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyName.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Also update local profile state
    updateProfile({
      name: notifyName,
      sponsor: notifyMentor,
      priestOrCatechist: notifyPriest,
      parishName: notifyParish,
    });

    try {
      const payload = {
        candidateName: notifyName,
        email: notifyEmail,
        sponsorMentor: notifyMentor,
        priestDeaconMentor: notifyPriest,
        parish: notifyParish,
        message: `${notifyName} has begun the preparation course: Coming into the Catholic Church (for baptised children).`,
        timestamp: new Date().toISOString(),
      };

      const res = await fetch(NOTIFY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Notification error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs tracking-wider uppercase font-medium">
          <span className="text-sm">✠</span> Catholic Sacramental Preparation
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Coming into the Catholic Church
        </h1>
        <p className="font-serif italic text-lg sm:text-2xl text-indigo-200/90 max-w-2xl mx-auto">
          A catechism for baptised children preparing for Reception into Full Communion, Confirmation and First Holy Communion
        </p>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          For children (aged 7+) who were validly baptised in another Christian tradition and are now answering Christ’s call to enter into the full communion of the Catholic Church.
        </p>

        {/* Primary Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onStart(1)}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm sm:text-base shadow-lg shadow-indigo-950/50 transition-all flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>{stats.lessonsCompleted > 0 ? 'Continue Lessons' : 'Begin Lesson 1'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenDrill}
            className="px-5 py-3 rounded-xl bg-zinc-850 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 font-medium text-sm sm:text-base transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Summary Catechism Recall</span>
          </button>
          <button
            onClick={() => onOpenAppendices('app-a')}
            className="px-5 py-3 rounded-xl bg-zinc-850 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 font-medium text-sm sm:text-base transition-all flex items-center gap-2"
          >
            <ScrollText className="w-4 h-4 text-indigo-400" />
            <span>Journey Step by Step</span>
          </button>
        </div>
      </div>

      {/* The Core Truth: Not a Second Baptism Banner */}
      <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/40 via-zinc-900 to-zinc-900/90 p-6 sm:p-8 space-y-4">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-indigo-900/40 border border-indigo-500/30 text-indigo-300 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h2 className="font-display text-xl sm:text-2xl font-medium text-indigo-100">
              Honouring Your Christian Baptism
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              In valid Christian Baptism, God freed you from original sin, poured out his sanctifying grace, and permanently joined you to Jesus Christ. Because Baptism leaves an indelible spiritual character, <strong className="text-indigo-200 font-semibold">it can never be repeated</strong>.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Coming into the Catholic Church is not starting over: it is bringing every true gift of grace and faith you have already received into the <em className="text-zinc-200">fullness of Catholic faith, Sacraments, and communion with the Church’s pastors</em>.
            </p>
          </div>
        </div>

        {/* 4 Sacramental Milestones */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-zinc-850/80 border border-zinc-800 space-y-1">
            <div className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">1. Reconciliation</div>
            <div className="font-display font-medium text-zinc-100">First Confession</div>
            <div className="text-xs text-zinc-400">Forgiving sins committed after Baptism before Reception.</div>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-850/80 border border-zinc-800 space-y-1">
            <div className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">2. Profession</div>
            <div className="font-display font-medium text-zinc-100">Full Communion</div>
            <div className="text-xs text-zinc-400">Professing the whole Catholic faith with the Church.</div>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-850/80 border border-zinc-800 space-y-1">
            <div className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">3. Holy Spirit</div>
            <div className="font-display font-medium text-zinc-100">Confirmation</div>
            <div className="text-xs text-zinc-400">Anointing with chrism, sealing with the sevenfold gifts.</div>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-850/80 border border-zinc-800 space-y-1">
            <div className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">4. Real Presence</div>
            <div className="font-display font-medium text-zinc-100">Holy Communion</div>
            <div className="text-xs text-zinc-400">Receiving Jesus Christ: Body, Blood, Soul and Divinity.</div>
          </div>
        </div>
      </div>

      {/* Candidate Profile Summary & Sign-in notification side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Candidate Profile Card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/90 p-6 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <User className="w-5 h-5 text-indigo-400" />
              <h2 className="font-display text-lg font-medium text-white">Candidate Details</h2>
            </div>
            <button
              onClick={onOpenProfile}
              className="text-xs px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-indigo-300 font-medium transition-colors"
            >
              {profile.isSet ? 'Edit Details' : 'Set Up Profile'}
            </button>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
              <span className="text-zinc-400">Child's Name</span>
              <span className="font-medium text-zinc-200">{profile.name || <em className="text-zinc-500">Not set</em>}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
              <span className="text-zinc-400">Baptism Tradition</span>
              <span className="font-medium text-zinc-200">{profile.baptismTradition || <em className="text-zinc-500">Christian</em>}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
              <span className="text-zinc-400">Sponsor / Mentor</span>
              <span className="font-medium text-zinc-200">{profile.sponsor || <em className="text-zinc-500">To be appointed</em>}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
              <span className="text-zinc-400">Priest / Deacon / Mentor</span>
              <span className="font-medium text-zinc-200">{profile.priestOrCatechist || <em className="text-zinc-500">Parish Priest</em>}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
              <span className="text-zinc-400">Parish</span>
              <span className="font-medium text-zinc-200">{profile.parishName || <em className="text-zinc-500">Parish church</em>}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-zinc-400">Target Reception Date</span>
              <span className="font-medium text-zinc-200">{profile.receptionDate || <em className="text-zinc-500">To be confirmed</em>}</span>
            </div>
          </div>

          {/* Overall completion bar */}
          <div className="pt-2 space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-zinc-400">Sacramental Preparation Progress</span>
              <span className="text-indigo-400 font-semibold">{stats.percentComplete}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
              <div
                className="h-full bg-indigo-500 transition-all duration-300"
                style={{ width: `${stats.percentComplete}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] text-zinc-500 pt-1">
              <span>{stats.lessonsCompleted} of 16 lessons read</span>
              <span>{stats.summaryMastered} of 23 catechism mastered</span>
            </div>
          </div>
        </div>

        {/* Optional Sign-in Notification Box (Formspree) */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/90 p-6 space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-indigo-400">
              <Send className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">Parish Notification (Optional)</span>
            </div>
            <h2 className="font-display text-lg font-medium text-white">
              Let Father John know you are beginning
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              If you wish, enter your name and email so Father John receives a brief, one-off notification that you are starting. Opt-in and privacy-respecting.
            </p>
          </div>

          {submitStatus === 'success' ? (
            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 space-y-2">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Notification Sent to Father John</span>
              </div>
              <p className="text-xs text-emerald-300/80 leading-relaxed">
                Thank you! Father John has been notified that {notifyName} has begun preparing. May God bless your family's journey into full communion.
              </p>
            </div>
          ) : (
            <form onSubmit={handleNotifySubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                    Child's Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={notifyName}
                    onChange={(e) => setNotifyName(e.target.value)}
                    placeholder="e.g. Thomas"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-850 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={notifyEmail}
                    onChange={(e) => setNotifyEmail(e.target.value)}
                    placeholder="parent@example.com"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-850 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                    Sponsor / Mentor
                  </label>
                  <input
                    type="text"
                    value={notifyMentor}
                    onChange={(e) => setNotifyMentor(e.target.value)}
                    placeholder="e.g. Sponsor name"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-850 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                    Priest / Deacon / Mentor
                  </label>
                  <input
                    type="text"
                    value={notifyPriest}
                    onChange={(e) => setNotifyPriest(e.target.value)}
                    placeholder="e.g. Fr. John"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-850 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {submitStatus === 'error' && (
                <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-400" />
                  <span>Could not send notification. Your local preparation is still saved!</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !notifyName.trim()}
                className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Sending notification...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Notification to Father John</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* The 16 Lessons Curriculum Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              Course Structure
            </div>
            <h2 className="font-display text-2xl font-semibold text-white">
              The 16 Preparation Lessons
            </h2>
          </div>
          <span className="text-xs text-zinc-400">
            {stats.lessonsCompleted} of {stats.totalLessons} Completed
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONVERSATIONS_DATA.map((lesson) => {
            const progress = state.conversations[lesson.id];
            const isCompleted = progress?.isRead;
            const masteredCount = progress?.qaMastered?.length || 0;

            return (
              <div
                key={lesson.id}
                onClick={() => onStart(lesson.id)}
                className={`group relative rounded-xl border p-4 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                  isCompleted
                    ? 'border-indigo-500/40 bg-zinc-900/90 hover:border-indigo-400'
                    : 'border-zinc-800 bg-zinc-900/50 hover:bg-zinc-850 hover:border-zinc-700'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-indigo-400">
                      Lesson {lesson.number}
                    </span>
                    {isCompleted ? (
                      <span className="flex items-center gap-1 text-emerald-400 font-medium text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Done
                      </span>
                    ) : (
                      <span className="text-zinc-500 text-[11px]">Pending</span>
                    )}
                  </div>

                  <h3 className="font-display text-sm font-semibold text-zinc-100 group-hover:text-indigo-300 transition-colors line-clamp-2">
                    {lesson.title}
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {lesson.purpose}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                  <span>{masteredCount} of 5 Essentials</span>
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fast Access to Appendices & Rites */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 space-y-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
            Appendices & Sacramental Rites
          </div>
          <h2 className="font-display text-xl font-semibold text-white">
            Essential Practical Guides
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <button
            onClick={() => onOpenAppendices('app-b')}
            className="text-left p-3.5 rounded-xl bg-zinc-850/80 hover:bg-zinc-800 border border-zinc-800 hover:border-indigo-500/40 transition-all space-y-1"
          >
            <div className="text-xs text-indigo-400 font-semibold">Appendix B</div>
            <div className="font-display text-sm font-medium text-zinc-100">First Confession & Conscience</div>
            <div className="text-xs text-zinc-400">Examination of conscience for children & 8 steps.</div>
          </button>

          <button
            onClick={() => onOpenAppendices('app-c')}
            className="text-left p-3.5 rounded-xl bg-zinc-850/80 hover:bg-zinc-800 border border-zinc-800 hover:border-indigo-500/40 transition-all space-y-1"
          >
            <div className="text-xs text-indigo-400 font-semibold">Appendix C</div>
            <div className="font-display text-sm font-medium text-zinc-100">The Profession of Faith & Rite</div>
            <div className="text-xs text-zinc-400">Solemn declaration and reception formula.</div>
          </button>

          <button
            onClick={() => onOpenAppendices('app-d')}
            className="text-left p-3.5 rounded-xl bg-zinc-850/80 hover:bg-zinc-800 border border-zinc-800 hover:border-indigo-500/40 transition-all space-y-1"
          >
            <div className="text-xs text-indigo-400 font-semibold">Appendix D</div>
            <div className="font-display text-sm font-medium text-zinc-100">Confirmation & 7 Gifts</div>
            <div className="text-xs text-zinc-400">Sacred chrism, the seal, and sponsor guide.</div>
          </button>

          <button
            onClick={() => onOpenAppendices('app-e')}
            className="text-left p-3.5 rounded-xl bg-zinc-850/80 hover:bg-zinc-800 border border-zinc-800 hover:border-indigo-500/40 transition-all space-y-1"
          >
            <div className="text-xs text-indigo-400 font-semibold">Appendix E</div>
            <div className="font-display text-sm font-medium text-zinc-100">Guide to Mass & Communion</div>
            <div className="text-xs text-zinc-400">The 8 parts of Mass, fast, and receiving reverently.</div>
          </button>

          <button
            onClick={() => onOpenAppendices('app-f')}
            className="text-left p-3.5 rounded-xl bg-zinc-850/80 hover:bg-zinc-800 border border-zinc-800 hover:border-indigo-500/40 transition-all space-y-1"
          >
            <div className="text-xs text-indigo-400 font-semibold">Appendix F</div>
            <div className="font-display text-sm font-medium text-zinc-100">Catholic Prayers to Learn</div>
            <div className="text-xs text-zinc-400">Our Father, Hail Mary, Contrition, Creed, Precepts.</div>
          </button>

          <button
            onClick={() => onOpenAppendices('app-h')}
            className="text-left p-3.5 rounded-xl bg-zinc-850/80 hover:bg-zinc-800 border border-zinc-800 hover:border-indigo-500/40 transition-all space-y-1"
          >
            <div className="text-xs text-indigo-400 font-semibold">Appendix H</div>
            <div className="font-display text-sm font-medium text-zinc-100">Readiness & Parish Checklist</div>
            <div className="text-xs text-zinc-400">11 readiness areas & 12 parish canonical checks.</div>
          </button>
        </div>
      </div>
    </div>
  );
};
