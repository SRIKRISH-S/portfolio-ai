import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const DetailModal = ({ item, onClose }) => {
    // Close on Escape key
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    if (!item) return null;

    return (
        <AnimatePresence>
            {/* Backdrop */}
            <motion.div
                key="backdrop"
                className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={onClose}
            >
                {/* Blurred backdrop */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

                {/* Panel */}
                <motion.div
                    key="panel"
                    className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950 shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col"
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 40 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div
                        className="sticky top-0 z-20 flex items-center justify-between px-8 py-5 border-b border-white/10 rounded-t-3xl"
                        style={{ background: item.headerGradient || 'linear-gradient(135deg,#18181b,#09090b)' }}
                    >
                        <div className="flex items-center gap-4">
                            {item.icon && (
                                <span className="text-4xl drop-shadow">{item.icon}</span>
                            )}
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: item.accent || '#22d3ee' }}>
                                    {item.category}
                                </p>
                                <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">{item.title}</h2>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="shrink-0 w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="px-8 py-7 space-y-8">

                        {/* Certificate / Document Image */}
                        {item.image && (
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <div
                                    className="absolute inset-0 opacity-30 blur-2xl scale-110 pointer-events-none"
                                    style={{ background: `radial-gradient(ellipse at center, ${item.accent}55, transparent 70%)` }}
                                />
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-auto object-contain rounded-2xl relative z-10 bg-white/5"
                                    style={{ maxHeight: '320px', objectFit: 'contain' }}
                                />
                            </div>
                        )}

                        {/* Meta row */}
                        {item.meta && item.meta.length > 0 && (
                            <div className="flex flex-wrap gap-3">
                                {item.meta.map((m, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300 bg-white/5 border border-white/10 rounded-xl px-4 py-2">
                                        {m.icon && <span className="text-base">{m.icon}</span>}
                                        <span className="font-medium text-slate-400">{m.label}:</span>
                                        <span>{m.value}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Sections */}
                        {item.sections && item.sections.map((section, si) => (
                            <div key={si}>
                                {section.heading && (
                                    <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: item.accent || '#22d3ee' }}>
                                        {section.heading}
                                    </h3>
                                )}

                                {/* Paragraphs */}
                                {section.paragraphs && section.paragraphs.map((p, pi) => (
                                    <p key={pi} className="text-slate-300 leading-relaxed text-sm mb-3 last:mb-0">{p}</p>
                                ))}

                                {/* Bullet list */}
                                {section.bullets && (
                                    <ul className="space-y-2">
                                        {section.bullets.map((b, bi) => (
                                            <li key={bi} className="flex items-start gap-3 text-sm text-slate-300">
                                                <span className="mt-1 shrink-0 w-2 h-2 rounded-full" style={{ background: item.accent || '#22d3ee' }} />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Badge grid */}
                                {section.badges && (
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {section.badges.map((badge, bi) => (
                                            <motion.span
                                                key={bi}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: bi * 0.04 }}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border"
                                                style={{
                                                    background: `${item.accent}18` || '#22d3ee18',
                                                    borderColor: `${item.accent}33` || '#22d3ee33',
                                                    color: item.accent || '#22d3ee',
                                                }}
                                            >
                                                {badge.icon && <span>{badge.icon}</span>}
                                                {badge.label || badge}
                                            </motion.span>
                                        ))}
                                    </div>
                                )}

                                {/* Skill bars */}
                                {section.skills && (
                                    <div className="space-y-3 mt-2">
                                        {section.skills.map((skill, ski) => (
                                            <div key={ski}>
                                                <div className="flex justify-between text-xs mb-1">
                                                    <span className="text-slate-300 font-medium">{skill.name}</span>
                                                    <span className="text-slate-500">{skill.level}%</span>
                                                </div>
                                                <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                                                    <motion.div
                                                        className="h-full rounded-full"
                                                        style={{ background: item.accent || '#22d3ee' }}
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${skill.level}%` }}
                                                        transition={{ delay: ski * 0.08, duration: 0.8, ease: 'easeOut' }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Status badges */}
                        {item.status && (
                            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-3">
                                {item.status.map((s, i) => (
                                    <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-green-500/10 border border-green-500/20 text-green-400">
                                        <span>{s.icon || '✅'}</span> {s.label}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default DetailModal;
