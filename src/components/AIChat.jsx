import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Send, Bot, User, Sparkles, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';

const AIChat = () => {
    const [query, setQuery] = useState('');
    const [messages, setMessages] = useState([
        { role: 'ai', text: "Welcome! I'm the digital brain of this portfolio. Ask me anything about skills, projects, or background." }
    ]);
    const [loading, setLoading] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [voiceEnabled, setVoiceEnabled] = useState(true);

    const [userApiKey, setUserApiKey] = useState('');
    const [isApiKeySet, setIsApiKeySet] = useState(false);

    const speak = (text) => {
        if (!voiceEnabled || !window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        // Remove markdown characters for better vocalization
        const cleanText = text.replace(/[*_#`~]/g, '');
        const utterance = new SpeechSynthesisUtterance(cleanText);
        window.speechSynthesis.speak(utterance);
    };

    const toggleListen = () => {
        if (!isApiKeySet) return;

        if (isListening) {
            setIsListening(false);
            window.speechRecognitionInstance?.stop();
            return;
        }
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Speech Recognition is not supported in this browser.");
            return;
        }
        const recognition = new SpeechRecognition();
        window.speechRecognitionInstance = recognition;
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        recognition.onerror = () => setIsListening(false);

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setQuery(transcript);
            handleAsk(transcript);
        };
        recognition.start();
    };

    const resumeContext = `
    You are an AI assistant representing the owner of this portfolio. Be friendly, brilliant, and concise.
    Skills: React, Next.js, WebGL, Node.js, AI Integration, UI/UX Design.
    Experience: 5 years building scalable web architectures and leading frontend teams.
    Interests: Generative art, AI models, and optimizing web performance.
  `;

    const handleSaveApiKey = () => {
        if (userApiKey.trim().length > 10) {
            setIsApiKeySet(true);
            setMessages(prev => [...prev, { role: 'ai', text: "API Key verified. How can I assist you today?" }]);
            speak("API Key verified. How can I assist you today?");
        } else {
            alert("Please enter a valid Google Gemini API key.");
        }
    };

    const handleAsk = async (overrideQuery = null) => {
        if (!isApiKeySet) return;

        const textQuery = typeof overrideQuery === 'string' ? overrideQuery : query;
        if (!textQuery.trim()) return;

        const newMsg = { role: 'user', text: textQuery };
        setMessages(prev => [...prev, newMsg]);
        if (typeof overrideQuery !== 'string') setQuery('');
        setLoading(true);

        try {
            const res = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${userApiKey.trim()}`,
                {
                    contents: [{ parts: [{ text: `${resumeContext}\n\nUser Question: ${textQuery}` }] }]
                }
            );

            const answer = res.data.candidates[0]?.content?.parts[0]?.text || 'I encountered an anomaly in the mainframe. Try again.';
            setMessages(prev => [...prev, { role: 'ai', text: answer }]);
            speak(answer);
        } catch (error) {
            console.error('AI Error:', error.response?.data || error);
            const errorMsg = error.response?.data?.error?.message || error.message || "Unknown anomaly";
            const errText = `Network Anomaly: ${errorMsg}. Your API key might be invalid or expired.`;
            setMessages(prev => [...prev, { role: 'ai', text: errText }]);
            speak(errText);

            // If it's an auth error, prompt them to re-enter
            if (error.response?.status === 400 || error.response?.status === 403) {
                setIsApiKeySet(false);
                setUserApiKey('');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleAsk();
    };

    return (
        <section id="ai-chat" className="py-24 relative border-t border-white/5 bg-zinc-950">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                        <Sparkles size={16} /> <span>Powered by Google Gemini</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Neural <span className="text-gradient">Interface</span></h2>
                    <p className="text-slate-400 text-lg">Engage with my digital twin. It knows my resume and code style.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-panel overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col h-[600px] relative"
                >
                    {/* Holographic Header */}
                    <div className="bg-white/5 border-b border-white/10 p-4 flex items-center space-x-3 backdrop-blur-md z-20">
                        <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400/80 text-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
                        <span className="text-sm font-mono text-slate-400 ml-4 tracking-wider">Terminal v2.0 :: Agent Online</span>
                        <div className="flex-1"></div>
                        <button
                            onClick={() => setVoiceEnabled(!voiceEnabled)}
                            className={`p-1.5 rounded-md transition-colors ${voiceEnabled ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-slate-500 hover:bg-white/10'}`}
                            title={voiceEnabled ? "Mute AI Voice" : "Enable AI Voice"}
                        >
                            {voiceEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                        </button>
                    </div>

                    {/* Chat History */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide z-10 relative">
                        {messages.map((msg, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10, x: msg.role === 'user' ? 20 : -20 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`flex max-w-[80%] items-start space-x-3 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border ${msg.role === 'user' ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300' : 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]'}`}>
                                        {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                                    </div>
                                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-indigo-600/20 border border-indigo-500/30 text-indigo-100 rounded-tr-sm' : 'bg-white/5 border border-white/10 text-slate-200 rounded-tl-sm backdrop-blur-sm'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        {loading && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center space-x-2 text-cyan-400/70 p-4">
                                <span className="animate-bounce">●</span><span className="animate-bounce delay-100">●</span><span className="animate-bounce delay-200">●</span>
                                <span className="text-xs font-mono ml-2 uppercase tracking-widest">Processing Data...</span>
                            </motion.div>
                        )}
                    </div>

                    {/* Input Form */}
                    <div className="p-4 bg-zinc-900/80 border-t border-white/10 z-20">

                        {!isApiKeySet ? (
                            <div className="flex flex-col space-y-3">
                                <div className="text-xs text-yellow-400/80 flex items-center mb-1">
                                    <Sparkles size={14} className="mr-1" /> To prevent abuse, please provide your own free Gemini API Key to chat.
                                </div>
                                <div className="relative flex items-center">
                                    <input
                                        type="password"
                                        value={userApiKey}
                                        onChange={(e) => setUserApiKey(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSaveApiKey()}
                                        placeholder="Paste your Gemini API Key here..."
                                        className="w-full bg-zinc-950/50 border border-yellow-500/30 text-white placeholder-slate-500 rounded-xl px-4 py-4 pr-32 focus:outline-none focus:border-yellow-500/70 focus:ring-1 focus:ring-yellow-500/50 transition-all font-mono text-sm"
                                    />
                                    <div className="absolute right-2 flex items-center space-x-1">
                                        <button
                                            onClick={handleSaveApiKey}
                                            disabled={!userApiKey.trim()}
                                            className="px-4 py-2 bg-yellow-500/20 text-yellow-500 font-semibold hover:bg-yellow-500/30 rounded-lg transition-colors disabled:opacity-50 text-sm flex items-center"
                                        >
                                            Connect <Sparkles size={14} className="ml-1" />
                                        </button>
                                    </div>
                                </div>
                                <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors self-start ml-2 underline underline-offset-2">
                                    Get a free Gemini API Key here
                                </a>
                            </div>
                        ) : (
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Initialize interface query..."
                                    className="w-full bg-zinc-950/50 border border-white/10 text-white placeholder-slate-500 rounded-xl px-4 py-4 pr-24 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-mono text-sm"
                                    disabled={loading || isListening}
                                />
                                <div className="absolute right-2 flex items-center space-x-1">
                                    <button
                                        onClick={toggleListen}
                                        title="Voice Input"
                                        className={`p-2 rounded-lg transition-colors ${isListening ? 'bg-red-500/20 text-red-500 animate-pulse' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
                                    >
                                        {isListening ? <MicOff size={20} /> : <Mic size={20} />}
                                    </button>
                                    <button
                                        onClick={() => handleAsk(query)}
                                        disabled={loading || (!query.trim() && !isListening)}
                                        className="p-2 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/40 hover:text-cyan-200 rounded-lg transition-colors disabled:opacity-50"
                                    >
                                        <Send size={20} className="transform -translate-y-px translate-x-px" />
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AIChat;
