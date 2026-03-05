import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 border-t border-white/5 py-16 relative overflow-hidden">
            {/* Advanced Accent Glow */}
            <div className="absolute bottom-[-150px] left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-800 tracking-[0.4em] mb-8 hover:from-cyan-900 hover:to-zinc-700 transition-all duration-700 cursor-default select-none">
                    PORTFOLIO.
                </h2>

                <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm font-semibold tracking-wide">
                    <a href="https://github.com/Srikrishna" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 hover:shadow-cyan-500/20 transition-all duration-300 flex items-center gap-2 group">
                        <span className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors"></span>
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/Srikrishna" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 hover:-translate-y-1 hover:shadow-blue-500/20 transition-all duration-300 flex items-center gap-2 group">
                        <span className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors"></span>
                        LinkedIn
                    </a>
                    <a href="https://x.com/Srikrishna" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
                        <span className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-white transition-colors"></span>
                        X
                    </a>
                    <a href="https://leetcode.com/u/KRISHNA-66/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange-400 hover:-translate-y-1 hover:shadow-orange-500/20 transition-all duration-300 flex items-center gap-2 group">
                        <span className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-orange-400 transition-colors"></span>
                        LeetCode
                    </a>
                    <a href="https://www.codechef.com/users/krish_970" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-yellow-500 hover:-translate-y-1 hover:shadow-yellow-500/20 transition-all duration-300 flex items-center gap-2 group">
                        <span className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-yellow-500 transition-colors"></span>
                        CodeChef
                    </a>
                    <a href="mailto:your.email@example.com" className="text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
                        <span className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-emerald-400 transition-colors"></span>
                        Email
                    </a>
                </div>

                <div className="flex justify-center items-center gap-3 mb-4 bg-white/5 py-2 px-6 rounded-full border border-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                    </span>
                    <span className="text-xs text-cyan-400/90 uppercase tracking-[0.2em] font-mono font-medium">All Systems Operational</span>
                </div>

                <p className="text-slate-500/80 text-xs font-mono tracking-widest mt-4">
                    &copy; 2026 engineered by Srikrishna , all right reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
