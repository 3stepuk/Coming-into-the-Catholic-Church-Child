import React, { useState } from 'react';
import {
  ScrollText,
  ShieldCheck,
  Heart,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Lock,
  ChevronRight,
  HelpCircle,
  FileCheck,
  Award,
  Calendar,
} from 'lucide-react';
import {
  APPENDIX_A_JOURNEY,
  APPENDIX_B_CONFESSION_STEPS,
  APPENDIX_B_CONSCIENCE_QUESTIONS,
  APPENDIX_C_RECEPTION_STEPS,
  APPENDIX_D_CONFIRMATION_STEPS,
  APPENDIX_D_GIFTS,
  APPENDIX_E_MASS_PARTS,
  APPENDIX_F_PRAYERS,
  APPENDIX_F_COMMANDMENTS,
  APPENDIX_F_BEATITUDES,
  APPENDIX_F_PRECEPTS,
  APPENDIX_G_SUMMARY_CATECHISM,
  APPENDIX_H_READINESS,
  APPENDIX_H_PARISH_CHECKLIST,
  SOURCES_AND_REFERENCES,
} from '../data/appendices';
import { useProgress } from '../context/ProgressContext';

interface AppendicesViewProps {
  initialTab?: string;
  onOpenDrill: () => void;
}

export const AppendicesView: React.FC<AppendicesViewProps> = ({ initialTab = 'app-a', onOpenDrill }) => {
  const [activeSubTab, setActiveSubTab] = useState<string>(initialTab);
  const {
    state,
    toggleExaminationCheck,
    recordPrayerPracticed,
    toggleReadinessCheck,
    updateReadinessNote,
    toggleParishCheck,
  } = useProgress();

  const subTabs = [
    { id: 'app-a', label: 'App. A: Journey', title: 'The Journey Step by Step' },
    { id: 'app-b', label: 'App. B: Confession', title: 'First Confession & Conscience' },
    { id: 'app-c', label: 'App. C: Reception', title: 'The Profession of Faith & Rite' },
    { id: 'app-d', label: 'App. D: Confirmation', title: 'Confirmation & The 7 Gifts' },
    { id: 'app-e', label: 'App. E: Holy Mass', title: "Guide to Mass & Holy Communion" },
    { id: 'app-f', label: 'App. F: Prayers', title: 'Catholic Prayers to Learn' },
    { id: 'app-g', label: 'App. G: Catechism', title: 'Summary Catechism (23 Q&As)' },
    { id: 'app-h', label: 'App. H: Readiness', title: 'Readiness & Parish Checklist' },
    { id: 'sources', label: 'Sources', title: 'Doctrinal & Canonical Sources' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Top Header */}
      <div>
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-1">
          <ScrollText className="w-4 h-4" />
          <span>Pastoral & Liturgical Appendices</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl font-semibold text-white">
          Practical Guides and Sacred Rites
        </h1>
        <p className="text-sm text-zinc-400 mt-1">
          Step-by-step guides for First Confession, Reception into Full Communion, Confirmation, First Holy Communion, Prayers and Readiness.
        </p>
      </div>

      {/* Sub-navigation tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-zinc-800">
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id)}
            className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              activeSubTab === tab.id
                ? 'bg-zinc-800 text-indigo-400 border border-indigo-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}

      {/* APPENDIX A: The Journey Step by Step */}
      {activeSubTab === 'app-a' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-display text-2xl font-semibold text-white">
              Appendix A: The Journey Step by Step
            </h2>
            <p className="text-sm text-zinc-300">
              The ordinary path for a baptised child entering the full communion of the Catholic Church.
            </p>
          </div>

          {/* Not a Second Baptism Banner */}
          <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 space-y-2">
            <div className="flex items-center gap-2 text-indigo-300 font-semibold text-sm">
              <ShieldCheck className="w-5 h-5" />
              <span>NOT A SECOND BAPTISM</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-serif">
              “In valid Christian Baptism, God freed you from sin and united you to Christ. Because Baptism leaves an indelible spiritual mark, it can never be repeated. The Catholic Church does not baptise you again: she receives you into the fullness of her faith, Sacraments and communion.”
            </p>
          </div>

          {/* 9 Stages Table / Cards */}
          <div className="space-y-3">
            {APPENDIX_A_JOURNEY.map((stage) => (
              <div
                key={stage.stage}
                className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-start gap-4"
              >
                <span className="w-7 h-7 rounded-full bg-indigo-950 border border-indigo-500/30 text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {stage.stage}
                </span>
                <div className="space-y-1">
                  <h3 className="font-display text-base font-semibold text-zinc-100">
                    {stage.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {stage.whatItMeans}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* APPENDIX B: First Confession Step by Step */}
      {activeSubTab === 'app-b' && (
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-display text-2xl font-semibold text-white">
              Appendix B: First Confession Step by Step
            </h2>
            <p className="text-sm text-zinc-300">
              Preparing for the Sacrament of Penance and Reconciliation before Reception into Full Communion.
            </p>
          </div>

          {/* 8 Steps of Confession */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              The 8 Liturgical Steps of Confession
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {APPENDIX_B_CONFESSION_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-500/30 flex items-center justify-center text-xs font-semibold">
                      {step.step}
                    </span>
                    <h4 className="font-display text-sm font-semibold text-zinc-100">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-serif pl-7">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Child's Examination of Conscience (Interactive Checklist) */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 space-y-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-indigo-400 text-xs uppercase tracking-widest font-semibold">
                <Heart className="w-4 h-4" />
                <span>A Child’s Examination of Conscience</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-white">
                Preparing My Heart for Jesus’ Mercy
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Take a quiet moment in prayer. Read each question gently. Check any area where you want to ask Jesus for forgiveness and grace.
              </p>
            </div>

            <div className="space-y-3">
              {APPENDIX_B_CONSCIENCE_QUESTIONS.map((item) => {
                const isChecked = state.examinationChecks[item.id];
                return (
                  <label
                    key={item.id}
                    className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-colors ${
                      isChecked
                        ? 'border-indigo-500/40 bg-indigo-950/20'
                        : 'border-zinc-800 bg-zinc-850/60 hover:bg-zinc-850'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={!!isChecked}
                      onChange={() => toggleExaminationCheck(item.id)}
                      className="mt-1 rounded border-zinc-700 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="space-y-1 text-xs">
                      {item.commandmentArea && (
                        <div className="text-[11px] font-semibold text-indigo-400">
                          {item.commandmentArea}
                        </div>
                      )}
                      <p className="font-serif text-sm text-zinc-200 leading-relaxed">
                        {item.question}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>

            {/* Privacy & Safeguarding Notice */}
            <div className="p-4 rounded-xl bg-black/40 border border-zinc-800 text-xs text-zinc-400 space-y-1">
              <div className="flex items-center gap-2 text-zinc-300 font-medium">
                <Lock className="w-3.5 h-3.5 text-indigo-400" />
                <span>Privacy & The Seal of Confession</span>
              </div>
              <p className="leading-relaxed">
                Confession is entirely private. Parents and catechists help you prepare how to confess, but must never ask you to tell your real personal sins to them. The priest is bound by the sacred seal of confession and can never reveal anything confessed.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* APPENDIX C: The Profession of Faith and Reception Step by Step */}
      {activeSubTab === 'app-c' && (
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-display text-2xl font-semibold text-white">
              Appendix C: The Profession of Faith and Reception
            </h2>
            <p className="text-sm text-zinc-300">
              The liturgical steps of being received into the full communion of the Catholic Church.
            </p>
          </div>

          {/* The Solemn Formula Box */}
          <div className="rounded-2xl border border-indigo-500/40 bg-gradient-to-br from-indigo-950/40 via-zinc-900 to-zinc-900 p-6 sm:p-8 space-y-4">
            <div className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              The Solemn Formula of Reception
            </div>
            <h3 className="font-display text-xl font-semibold text-white">
              THE PROFESSION OF FAITH
            </h3>
            <div className="p-5 rounded-xl bg-black/60 border border-indigo-500/30 text-indigo-100 font-serif text-lg sm:text-xl leading-relaxed italic">
              “I believe and profess all that the holy Catholic Church believes, teaches and proclaims to be revealed by God.”
            </div>
            <div className="text-xs text-zinc-400 space-y-2 leading-relaxed">
              <p>
                <strong>The Act of Reception: </strong>The priest lays his right hand on the candidate’s head and says:
              </p>
              <p className="font-serif italic text-sm text-zinc-300 pl-4 border-l-2 border-indigo-500/40">
                “The Lord receives you into the Catholic Church. His loving kindness has led you here, so that in the unity of the Holy Spirit you may have full communion with us in the faith you have professed in the presence of his family.”
              </p>
            </div>
          </div>

          {/* 6 Steps */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              The 6 Steps of the Liturgical Rite
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {APPENDIX_C_RECEPTION_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-500/30 flex items-center justify-center text-xs font-semibold">
                      {step.step}
                    </span>
                    <h4 className="font-display text-sm font-semibold text-zinc-100">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-serif pl-7">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* APPENDIX D: Confirmation Step by Step & 7 Gifts */}
      {activeSubTab === 'app-d' && (
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-display text-2xl font-semibold text-white">
              Appendix D: Confirmation Step by Step
            </h2>
            <p className="text-sm text-zinc-300">
              The strengthening and sealing of baptismal grace by the Holy Spirit.
            </p>
          </div>

          {/* The Sacramental Words */}
          <div className="p-6 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 space-y-3">
            <div className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              The Sacramental Form of Confirmation
            </div>
            <div className="text-lg sm:text-xl font-serif text-white italic">
              “N., be sealed with the Gift of the Holy Spirit.”
            </div>
            <div className="text-sm font-sans font-semibold text-indigo-300">
              Response: “Amen.”
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              The minister anoints the candidate's forehead with sacred chrism while laying on hands, sealing them with the permanent character of the Holy Spirit.
            </p>
          </div>

          {/* The Seven Gifts of the Holy Spirit */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              The Seven Gifts of the Holy Spirit
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {APPENDIX_D_GIFTS.map((gift) => (
                <div
                  key={gift.name}
                  className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1"
                >
                  <h4 className="font-display text-base font-semibold text-indigo-300">
                    {gift.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                    {gift.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 6 Steps */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              The 6 Steps of Confirmation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {APPENDIX_D_CONFIRMATION_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-500/30 flex items-center justify-center text-xs font-semibold">
                      {step.step}
                    </span>
                    <h4 className="font-display text-sm font-semibold text-zinc-100">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-serif pl-7">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* APPENDIX E: A Child's Guide to Mass and Holy Communion */}
      {activeSubTab === 'app-e' && (
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-display text-2xl font-semibold text-white">
              Appendix E: A Child’s Guide to Mass and Holy Communion
            </h2>
            <p className="text-sm text-zinc-300">
              Understanding the Holy Sacrifice of the Mass and receiving the Sacred Host reverently.
            </p>
          </div>

          {/* Receiving Reverently Rules */}
          <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
            <div className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              Reverence Before the King of Kings
            </div>
            <h3 className="font-display text-lg font-semibold text-white">
              Five Practices for Receiving Holy Communion
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
              <div className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span><strong>Eucharistic Fast: </strong>Observe the fast of one hour from food and drink before receiving, except for water and medicine.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span><strong>State of Grace: </strong>Anyone aware of mortal sin must receive sacramental absolution in Confession before receiving Communion.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span><strong>The Bow: </strong>Make a reverent bow of the head as you approach the minister.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span><strong>The Answer “Amen”: </strong>When the priest says “The Body of Christ”, clearly answer “Amen” (“I believe!”).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span><strong>Consume Immediately: </strong>Consume the Sacred Host at once in the presence of the minister; never walk away with it.</span>
              </div>
            </div>
          </div>

          {/* The 8 Parts of Mass */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              The 8 Principal Parts of Mass
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {APPENDIX_E_MASS_PARTS.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1"
                >
                  <h4 className="font-display text-sm font-semibold text-indigo-300">
                    {idx + 1}. {m.part}
                  </h4>
                  <p className="text-xs text-zinc-400 font-serif leading-relaxed">
                    {m.whatIDo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* APPENDIX F: Catholic Prayers to Learn */}
      {activeSubTab === 'app-f' && (
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-display text-2xl font-semibold text-white">
              Appendix F: Catholic Prayers to Learn and Pray
            </h2>
            <p className="text-sm text-zinc-300">
              Core prayers, the Creed, the Ten Commandments, the Beatitudes and the Precepts of the Church.
            </p>
          </div>

          {/* Prayer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {APPENDIX_F_PRAYERS.map((prayer) => {
              const count = state.prayerPracticed[prayer.id] || 0;
              return (
                <div
                  key={prayer.id}
                  className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-base font-semibold text-indigo-300">
                        {prayer.title}
                      </h3>
                      <button
                        onClick={() => recordPrayerPracticed(prayer.id)}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-indigo-300 font-medium transition-colors"
                      >
                        Prayed {count > 0 ? `(${count})` : ''}
                      </button>
                    </div>
                    <p className="font-serif text-sm sm:text-base text-zinc-200 leading-relaxed italic">
                      “{prayer.text}”
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Ten Commandments & Beatitudes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
              <h3 className="font-display text-lg font-semibold text-white">
                The Ten Commandments
              </h3>
              <div className="space-y-1.5 text-xs sm:text-sm text-zinc-300 font-serif">
                {APPENDIX_F_COMMANDMENTS.map((c, i) => (
                  <div key={i} className="py-1 border-b border-zinc-850 last:border-none">
                    {c}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
              <h3 className="font-display text-lg font-semibold text-white">
                The Beatitudes & Precepts
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">
                    The Beatitudes (Matthew 5:3-10)
                  </div>
                  <div className="space-y-1 text-xs text-zinc-300 font-serif">
                    {APPENDIX_F_BEATITUDES.map((b, i) => (
                      <div key={i}>{b}</div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800">
                  <div className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">
                    Precepts of the Church
                  </div>
                  <div className="space-y-1 text-xs text-zinc-300 font-serif">
                    {APPENDIX_F_PRECEPTS.map((p, i) => (
                      <div key={i}>{p}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* APPENDIX G: Summary Catechism (23 Q&As) */}
      {activeSubTab === 'app-g' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-semibold text-white">
                Appendix G: Summary Catechism
              </h2>
              <p className="text-sm text-zinc-300">
                23 essential questions and answers covering the full scope of Catholic preparation.
              </p>
            </div>
            <button
              onClick={onOpenDrill}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-medium transition-colors flex items-center gap-2 self-start"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Recall Drill</span>
            </button>
          </div>

          <div className="space-y-3">
            {APPENDIX_G_SUMMARY_CATECHISM.map((item) => {
              const status = state.summaryCatechismMastery[item.id];
              return (
                <div
                  key={item.id}
                  className="p-4 sm:p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-500/30 flex items-center justify-center text-xs font-bold">
                        {item.id}
                      </span>
                      <h3 className="font-display text-sm sm:text-base font-semibold text-zinc-100">
                        {item.question}
                      </h3>
                    </div>
                    {status?.mastered && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 font-medium">
                        Mastered
                      </span>
                    )}
                  </div>
                  <p className="pl-8 text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* APPENDIX H: Readiness & Parish Guide */}
      {activeSubTab === 'app-h' && (
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-display text-2xl font-semibold text-white">
              Appendix H: Readiness and Parish Guide
            </h2>
            <p className="text-sm text-zinc-300">
              11 pastoral readiness areas and 12 canonical checklist points for priests and catechists.
            </p>
          </div>

          {/* 11 Readiness Areas */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 space-y-5">
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
                Individual Discernment
              </div>
              <h3 className="font-display text-lg font-semibold text-white">
                11 Areas of Readiness
              </h3>
              <p className="text-xs text-zinc-400">
                To be assessed pastorally by the parish priest in dialogue with the child, family and sponsor.
              </p>
            </div>

            <div className="space-y-3">
              {APPENDIX_H_READINESS.map((item) => {
                const isChecked = state.readinessChecks[item.id];
                const note = state.readinessNotes[item.id] || '';

                return (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-zinc-850/60 border border-zinc-800 space-y-2"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={!!isChecked}
                          onChange={() => toggleReadinessCheck(item.id)}
                          className="mt-1 rounded border-zinc-700 text-indigo-600 focus:ring-indigo-500"
                        />
                        <div>
                          <div className="font-display text-sm font-semibold text-zinc-100">
                            {item.area}
                          </div>
                          <p className="text-xs text-zinc-400 font-serif leading-relaxed mt-0.5">
                            {item.whatItLooksLike}
                          </p>
                        </div>
                      </label>
                    </div>

                    {/* Note input */}
                    <input
                      type="text"
                      value={note}
                      onChange={(e) => updateReadinessNote(item.id, e.target.value)}
                      placeholder="Mentor / Priest observations (optional)..."
                      className="w-full px-3 py-1.5 text-xs rounded-lg bg-zinc-900 border border-zinc-750 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* 12 Parish Working Checklist Items */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 space-y-4">
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
                Parish Canonical & Sacramental Process
              </div>
              <h3 className="font-display text-lg font-semibold text-white">
                Parish Working Checklist
              </h3>
            </div>

            <div className="space-y-2.5">
              {APPENDIX_H_PARISH_CHECKLIST.map((pc) => {
                const checked = state.parishChecks[pc.id];
                return (
                  <label
                    key={pc.id}
                    className="p-3 rounded-xl bg-zinc-850/60 border border-zinc-800/80 flex items-start gap-3 cursor-pointer hover:bg-zinc-850 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={!!checked}
                      onChange={() => toggleParishCheck(pc.id)}
                      className="mt-1 rounded border-zinc-700 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-xs text-zinc-300 font-serif leading-relaxed">
                      {pc.item}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* SOURCES & DOCTRINAL REFERENCES */}
      {activeSubTab === 'sources' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-display text-2xl font-semibold text-white">
              Doctrinal & Canonical Sources
            </h2>
            <p className="text-sm text-zinc-300">
              The teaching, rubrics and canonical norms upon which this preparation series is built.
            </p>
          </div>

          <div className="space-y-3">
            {SOURCES_AND_REFERENCES.map((src, i) => (
              <div key={i} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <h3 className="font-display text-sm font-semibold text-indigo-300">
                  {src.heading}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-serif">
                  {src.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
