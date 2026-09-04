import React, { useState } from 'react';
import {
  User,
  CheckCircle2,
  Download,
  Upload,
  RotateCcw,
  Printer,
  ShieldCheck,
  Calendar,
  Church,
  Award,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { CandidateProfile } from '../types';

export const ProfileView: React.FC = () => {
  const {
    state,
    updateProfile,
    resetAllProgress,
    exportProgressJson,
    importProgressJson,
    stats,
  } = useProgress();

  const [formData, setFormData] = useState<CandidateProfile>({
    ...state.profile,
  });

  const [saveMessage, setSaveMessage] = useState(false);
  const [importText, setImportText] = useState('');
  const [showImport, setShowImport] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    setSaveMessage(true);
    setTimeout(() => setSaveMessage(false), 3000);
  };

  const handleExport = () => {
    const jsonStr = exportProgressJson();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `catholic-prep-${formData.name || 'candidate'}-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    if (!importText.trim()) return;
    const ok = importProgressJson(importText);
    if (ok) {
      setImportStatus('Progress imported successfully!');
      setShowImport(false);
      setImportText('');
      setTimeout(() => setImportStatus(null), 4000);
    } else {
      setImportStatus('Invalid backup JSON format. Please check and try again.');
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all your preparation progress? This cannot be undone.')) {
      resetAllProgress();
      setFormData({
        name: '',
        baptismDate: '',
        baptismPlace: '',
        baptismTradition: '',
        sponsor: '',
        priestOrCatechist: '',
        receptionDate: '',
        parishName: '',
        isSet: false,
      });
    }
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-1">
          <User className="w-4 h-4" />
          <span>Candidate Record & Settings</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl font-semibold text-white">
          Candidate Profile & Progress
        </h1>
        <p className="text-sm text-zinc-400 mt-1">
          Maintain details of your Baptism, Sponsor, and accompanying clergy or catechist.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
          <div className="text-[11px] uppercase tracking-wider text-zinc-400">Lessons Read</div>
          <div className="font-display text-xl font-bold text-indigo-400">
            {stats.lessonsCompleted} / {stats.totalLessons}
          </div>
        </div>
        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
          <div className="text-[11px] uppercase tracking-wider text-zinc-400">Essentials Mastered</div>
          <div className="font-display text-xl font-bold text-indigo-400">
            {stats.essentialsMastered} / {stats.totalEssentials}
          </div>
        </div>
        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
          <div className="text-[11px] uppercase tracking-wider text-zinc-400">Summary Catechism</div>
          <div className="font-display text-xl font-bold text-indigo-400">
            {stats.summaryMastered} / {stats.totalSummary}
          </div>
        </div>
        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
          <div className="text-[11px] uppercase tracking-wider text-zinc-400">Readiness Areas</div>
          <div className="font-display text-xl font-bold text-indigo-400">
            {stats.readinessCompleted} / {stats.totalReadiness}
          </div>
        </div>
      </div>

      {/* Candidate Details Form */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8 space-y-6">
        <div className="space-y-1">
          <h2 className="font-display text-xl font-semibold text-white">
            Sacramental Candidate Record
          </h2>
          <p className="text-xs text-zinc-400">
            These details are stored locally on your device and can be printed for your parish priest.
          </p>
        </div>

        <form onSubmit={handleSaveProfile} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                Child's Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Thomas Joseph"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-zinc-850 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                Christian Tradition of Baptism
              </label>
              <input
                type="text"
                value={formData.baptismTradition}
                onChange={(e) => setFormData({ ...formData, baptismTradition: e.target.value })}
                placeholder="e.g. Church of England / Methodist / Baptist"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-zinc-850 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                Date of Baptism
              </label>
              <input
                type="date"
                value={formData.baptismDate || ''}
                onChange={(e) => setFormData({ ...formData, baptismDate: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-zinc-850 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                Place / Church of Baptism
              </label>
              <input
                type="text"
                value={formData.baptismPlace || ''}
                onChange={(e) => setFormData({ ...formData, baptismPlace: e.target.value })}
                placeholder="e.g. St Mary's Church, Parish"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-zinc-850 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                Sponsor / Mentor
              </label>
              <input
                type="text"
                value={formData.sponsor}
                onChange={(e) => setFormData({ ...formData, sponsor: e.target.value })}
                placeholder="Full name of sponsor"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-zinc-850 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
              />
              <span className="text-[11px] text-zinc-500 mt-1 block">
                Must be a fully initiated, practising Catholic aged 16+.
              </span>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                Priest / Deacon / Mentor
              </label>
              <input
                type="text"
                value={formData.priestOrCatechist}
                onChange={(e) => setFormData({ ...formData, priestOrCatechist: e.target.value })}
                placeholder="e.g. Rev. Fr. John"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-zinc-850 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
              />
              <span className="text-[11px] text-zinc-500 mt-1 block">
                The clergy member or catechist accompanying your preparation.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                Catholic Parish Name
              </label>
              <input
                type="text"
                value={formData.parishName}
                onChange={(e) => setFormData({ ...formData, parishName: e.target.value })}
                placeholder="e.g. Our Lady of Good Counsel"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-zinc-850 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                Target Date of Reception / Confirmation
              </label>
              <input
                type="date"
                value={formData.receptionDate}
                onChange={(e) => setFormData({ ...formData, receptionDate: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-zinc-850 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Save Details</span>
            </button>

            {saveMessage && (
              <span className="text-xs text-emerald-400 font-medium">
                Candidate details saved successfully!
              </span>
            )}
          </div>
        </form>
      </div>

      {/* Printable Candidate Readiness Summary Card */}
      <div className="rounded-2xl border border-indigo-500/30 bg-zinc-900/90 p-6 sm:p-8 space-y-6 print:bg-white print:text-black print:border-black">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-indigo-400 font-semibold print:text-gray-700">
              Parish Verification Card
            </div>
            <h2 className="font-display text-xl font-semibold text-white print:text-black">
              Record of Preparation for Reception into Full Communion
            </h2>
          </div>
          <button
            onClick={handlePrintCertificate}
            className="px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-indigo-300 text-xs font-medium transition-colors flex items-center gap-1.5 print:hidden"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Summary</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-serif leading-relaxed border-y border-zinc-800 py-4 print:border-gray-300">
          <div>
            <strong className="font-sans text-zinc-400 print:text-gray-600 block mb-0.5">Candidate:</strong>
            <span className="text-base text-zinc-100 font-sans font-medium print:text-black">
              {formData.name || 'Candidate Name'}
            </span>
          </div>

          <div>
            <strong className="font-sans text-zinc-400 print:text-gray-600 block mb-0.5">Baptism Origin:</strong>
            <span className="text-zinc-200 print:text-black">
              {formData.baptismTradition || 'Christian Baptism'}
              {formData.baptismPlace ? ` at ${formData.baptismPlace}` : ''}
              {formData.baptismDate ? ` on ${formData.baptismDate}` : ''}
            </span>
          </div>

          <div>
            <strong className="font-sans text-zinc-400 print:text-gray-600 block mb-0.5">Sponsor / Mentor:</strong>
            <span className="text-zinc-200 print:text-black">{formData.sponsor || 'To be designated'}</span>
          </div>

          <div>
            <strong className="font-sans text-zinc-400 print:text-gray-600 block mb-0.5">Priest / Deacon / Mentor:</strong>
            <span className="text-zinc-200 print:text-black">{formData.priestOrCatechist || 'Parish Priest'}</span>
          </div>

          <div>
            <strong className="font-sans text-zinc-400 print:text-gray-600 block mb-0.5">Receiving Catholic Parish:</strong>
            <span className="text-zinc-200 print:text-black">{formData.parishName || 'Parish Church'}</span>
          </div>

          <div>
            <strong className="font-sans text-zinc-400 print:text-gray-600 block mb-0.5">Overall Readiness:</strong>
            <span className="text-emerald-400 font-sans font-semibold print:text-emerald-700">
              {stats.percentComplete}% Complete ({stats.lessonsCompleted}/16 lessons)
            </span>
          </div>
        </div>

        <div className="text-[11px] text-zinc-400 print:text-gray-600 leading-relaxed font-serif">
          “I believe and profess all that the holy Catholic Church believes, teaches and proclaims to be revealed by God.”
        </div>
      </div>

      {/* Progress Data Management (Export, Import, Reset) */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 space-y-4">
        <h3 className="font-display text-lg font-semibold text-white">
          Data Backup & Transfer
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Your preparation progress is saved locally in this browser. You can export your progress file to transfer to another device or create a backup.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleExport}
            className="px-4 py-2 rounded-xl bg-zinc-850 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs font-medium transition-colors flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5 text-indigo-400" />
            <span>Export Progress JSON</span>
          </button>

          <button
            onClick={() => setShowImport(!showImport)}
            className="px-4 py-2 rounded-xl bg-zinc-850 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs font-medium transition-colors flex items-center gap-2"
          >
            <Upload className="w-3.5 h-3.5 text-indigo-400" />
            <span>Import Backup</span>
          </button>

          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-xl bg-zinc-850 hover:bg-red-950/40 text-red-400 hover:text-red-300 border border-zinc-800 hover:border-red-500/30 text-xs font-medium transition-colors flex items-center gap-2 ml-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Progress</span>
          </button>
        </div>

        {importStatus && (
          <div className="p-3 rounded-lg bg-zinc-850 border border-zinc-700 text-xs text-indigo-300">
            {importStatus}
          </div>
        )}

        {showImport && (
          <div className="space-y-3 pt-3 border-t border-zinc-800">
            <label className="block text-xs uppercase tracking-wider text-zinc-400">
              Paste Backup JSON:
            </label>
            <textarea
              rows={4}
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder="Paste JSON text here..."
              className="w-full px-3 py-2 text-xs font-mono rounded-lg bg-zinc-950 border border-zinc-700 text-zinc-200 focus:outline-none focus:border-indigo-500"
            />
            <button
              onClick={handleImport}
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors"
            >
              Confirm Import
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
