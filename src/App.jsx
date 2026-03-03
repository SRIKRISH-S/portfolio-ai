import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import TerminalGame from './components/TerminalGame';
import CursorTrail from './components/CursorTrail';

function App() {
    return (
        <div className="min-h-screen flex flex-col bg-zinc-950 text-slate-200 font-sans selection:bg-cyan-500/30">
            <CursorTrail />
            <Header />
            <main className="flex-grow">
                <Hero />
                <About />
                <Projects />
                <AIChat />
            </main>
            <Footer />
            <TerminalGame />
        </div>
    );
}

export default App;
