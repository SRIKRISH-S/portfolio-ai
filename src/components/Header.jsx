import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-panel py-4' : 'bg-transparent py-6'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="text-2xl font-black text-white tracking-widest hover:scale-105 transition-transform">
                    PORTFOLIO<span className="text-cyan-400">.</span>
                </a>
                <nav className="hidden md:block">
                    <ul className="flex space-x-8 text-sm font-semibold tracking-wide text-zinc-300">
                        <li><a href="#about" className="hover:text-cyan-400 hover:tracking-[0.2em] transition-all duration-300">ABOUT</a></li>
                        <li><a href="#internships" className="hover:text-cyan-400 hover:tracking-[0.2em] transition-all duration-300">INTERNSHIPS</a></li>
                        <li><a href="#projects" className="hover:text-cyan-400 hover:tracking-[0.2em] transition-all duration-300">PROJECTS</a></li>
                        <li><a href="#certificates" className="hover:text-cyan-400 hover:tracking-[0.2em] transition-all duration-300">CERTIFICATES</a></li>
                        <li><a href="#ai-chat" className="hover:text-cyan-400 hover:tracking-[0.2em] transition-all duration-300">AI CHAT</a></li>
                    </ul>
                </nav>
                {/* Mobile menu button could go here */}
                <div className="md:hidden text-white font-bold">MENU</div>
            </div>
        </motion.header>
    );
};

export default Header;
