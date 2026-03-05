import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, ExternalLink, Github } from 'lucide-react';

const MY_DATA = {
    name: "SRIKRISHNA S",
    contact: {
        GitHub: "https://github.com/SRIKRISH-S",
        LinkedIn: "https://www.linkedin.com/in/srikrishna-s-b47519307/",
        Email: "krishn9706@gmail.com"
    },
    executiveSummary: [
        "I am a pragmatic, product-minded software engineer specializing in applied Machine",
        "Learning, MLOps, and full-stack systems engineering. I combine rigorous algorithmic",
        "thinking with production-grade software practices to convert research, prototypes,",
        "and ideas into reliable, scalable products."
    ],
    coreStrengths: [
        "- Production ML & inference engineering: model optimization, latency tuning.",
        "- MLOps & CI/CD: reproducible experiments, data versioning, deployment.",
        "- Cloud-native systems: Docker, Kubernetes, Terraform, Helm, observability.",
        "- Backend & APIs: Python (FastAPI/Flask), asynchronous services, gRPC, REST."
    ],
    skills: [
        "Language       : Python, C++, Java, JavaScript, TypeScript, SQL, Bash",
        "ML/DL          : PyTorch, TensorFlow, Hugging Face, scikit-learn",
        "MLOps          : MLflow, DVC, W&B, Docker, NVIDIA toolchain (CUDA)",
        "Cloud & Infra  : AWS, GCP, Azure, Terraform, Helm, Kubernetes",
        "Backend / APIs : FastAPI, Flask, Node.js/Express, REST, gRPC",
        "Frontend       : React, Next.js, recharts, d3 basics",
        "Data           : PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch",
        "DevOps & CI/CD : Git, GitHub Actions, GitLab CI, Docker Hub"
    ],
    projects: [
        {
            title: "ProactiFab – Predictive Maintenance for MSMEs",
            description: "Predicts machine failures and schedules maintenance using sensor data + anomaly detection.",
            tech: ["Python", "PyTorch", "Docker", "FastAPI", "PostgreSQL", "React"],
            live: "#",
            github: "#"
        },
        {
            title: "LocalBizAI – Voice-first Business Assistant",
            description: "Voice-enabled assistant for small business owners (accounts, inventory prompts, quick analytics).",
            tech: ["Speech-to-text", "LangChain", "FastAPI", "React"],
            live: "#",
            github: "#"
        },
        {
            title: "Portfolio Website & CI/CD Pipeline",
            description: "Showcase for projects, automated documentation generation, live deployment pipeline.",
            tech: ["Next.js", "React", "Docker", "GitHub Actions"],
            live: "#",
            github: "#"
        },
        {
            title: "LeetCode & Algorithm Track",
            description: "Curated algorithmic solutions with clear complexity analysis.",
            tech: ["C++", "Python"],
            live: "#",
            github: "#"
        }
    ]
};

const ALL_ACHIEVEMENTS = [
    { name: "LeetCode Champion", icon: "🏆", desc: "350+ LeetCode problems solved" },
    { name: "Space Technology Intern", icon: "🚀", desc: "Internship at ISRO (IPRC)" },
    { name: "Hackathon Hero", icon: "🥇", desc: "Hackathon Project Winner/Finalist" },
    { name: "ML Explorer", icon: "🤖", desc: "AI/ML Practitioner" },
    { name: "Cloud Native", icon: "☁️", desc: "Cloud Deployment Expert" },
    { name: "Certificate Collection", icon: "📜", desc: "Certified Professional" },
    { name: "Early Adopter", icon: "👶", desc: "Completed Level 1 of the Dev Journey" },
    { name: "Builder", icon: "🏗️", desc: "Completed Level 2 of the Dev Journey" },
    { name: "Production Pro", icon: "🏭", desc: "Completed Level 5 of the Dev Journey" },
    { name: "Terminal Master", icon: "⌨️", desc: "Typed 50 commands in the terminal" },
    { name: "Hacker Wannabe", icon: "🕵️", desc: "Tried to use the sudo command" },
    { name: "Debugger", icon: "🐛", desc: "Found the debug stats easter egg" },
    { name: "The One", icon: "💊", desc: "Entered the Matrix" },
];

const LEVELS = [
    {
        title: "LEVEL 1: The Beginning",
        desc: "You arrive at Chennai Institute of Technology, pursuing a B.Tech in IT. You are learning to code.\n\nType the Python command to print 'Hello World' to continue.",
        answers: ['print("hello world")', "print('hello world')"],
        badge: "Early Adopter"
    },
    {
        title: "LEVEL 2: First Projects",
        desc: "You've mastered the basics and built your first portfolio website.\n\nWhat command do you use to check the status of your git repository?",
        answers: ["git status"],
        badge: "Builder"
    },
    {
        title: "LEVEL 3: AI Discovery",
        desc: "The world of Machine Learning calls to you.\n\nType the python code to import PyTorch.",
        answers: ["import torch"],
        badge: "ML Explorer"
    },
    {
        title: "LEVEL 4: Hackathon Victories",
        desc: "You build ProactiFab and LocalBizAI. Time to containerize them for deployment.\n\nWhat command builds a docker image from a Dockerfile in the current directory?",
        answers: ["docker build .", "docker build -t myapp ."],
        badge: "Hackathon Hero"
    },
    {
        title: "LEVEL 5: Production Engineering",
        desc: "You learn MLOps and cloud-native systems, mastering Kubernetes to take models to production.\n\nYou need to apply a K8s configuration defined in 'deploy.yaml'. What is the command?",
        answers: ["kubectl apply -f deploy.yaml"],
        badge: "Production Pro"
    }
];

const TerminalGame = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const [cmdHistory, setCmdHistory] = useState([]);
    const [historyIdx, setHistoryIdx] = useState(-1);

    // Game State
    const [level, setLevel] = useState(0);
    const [badges, setBadges] = useState([]);
    const [easterEggs, setEasterEggs] = useState([]);
    const [commandsTyped, setCommandsTyped] = useState(0);
    const [isMatrixActive, setIsMatrixActive] = useState(false);

    const endOfMessagesRef = useRef(null);
    const inputRef = useRef(null);
    const matrixCanvasRef = useRef(null);

    // Initial boot sequence effect
    useEffect(() => {
        if (!isOpen) return;
        if (history.length > 0) return; // already booted

        const loadSavedState = () => {
            const saved = localStorage.getItem('srikrishna_terminal');
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    setLevel(parsed.level || 0);
                    setBadges(parsed.badges || []);
                    setEasterEggs(parsed.easterEggs || []);
                    setCommandsTyped(parsed.commandsTyped || 0);
                } catch (e) { }
            }
        };

        loadSavedState();

        const sequence = async () => {
            addSysLine('Booting SRIKRISHNA-OS v2.0.26...');
            await sleep(400);
            addSysLine('Loading module: Machine Learning... OK');
            addSysLine('Loading module: MLOps... OK');
            addSysLine('Loading module: Cloud Native Systems... OK');
            await sleep(200);
            addSysLine('Access granted.', 'success');
            await sleep(200);
            addLine(
                <>
                    <br />
                    Welcome to <span className="text-cyan-400 font-bold">SRIKRISHNA'S TERMINAL ADVENTURE</span>.
                    <br />
                    Type <span className="text-yellow-400">game --help</span> to see instructions or <span className="text-yellow-400">play</span> to begin your developer journey.
                    <br />
                    <br />
                    Other available commands: <span className="text-yellow-400">ls, projects, skills, resume, contact</span>
                    <br />
                </>
            );
        };
        sequence();
    }, [isOpen]);

    // Save state on change
    useEffect(() => {
        localStorage.setItem('srikrishna_terminal', JSON.stringify({
            level, badges, easterEggs, commandsTyped
        }));
    }, [level, badges, easterEggs, commandsTyped]);

    // Scroll to bottom
    useEffect(() => {
        if (isOpen) {
            endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
            inputRef.current?.focus();
        }
    }, [history, isOpen]);

    // Listen for custom event from Hero button
    useEffect(() => {
        const handleOpenTerminal = () => setIsOpen(true);
        window.addEventListener('open-terminal-game', handleOpenTerminal);
        return () => window.removeEventListener('open-terminal-game', handleOpenTerminal);
    }, []);

    // Matrix effect loop
    useEffect(() => {
        if (!isMatrixActive || !matrixCanvasRef.current) return;

        const canvas = matrixCanvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
        const fontSize = 14;
        const cols = canvas.width / fontSize;
        const drops = Array(Math.floor(cols)).fill(1);

        const interval = setInterval(() => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#0F0";
            ctx.font = fontSize + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        }, 50);

        return () => clearInterval(interval);
    }, [isMatrixActive, isOpen]);

    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    const addLine = (content, type = 'default') => {
        setHistory(prev => [...prev, { type, content, id: Date.now() + Math.random() }]);
    };

    const addSysLine = (text, type = 'system') => addLine(text, type);
    const addGameLine = (text) => addLine(text, 'game');
    const addErrorLine = (text) => addLine(text, 'error');

    const awardBadge = (badgeName) => {
        const isStringOrObj = (b) => (typeof b === 'string' ? b : b.name) === badgeName;
        if (!badges.some(isStringOrObj)) {
            const dateStr = new Date().toLocaleDateString();
            setBadges(prev => [...prev, { name: badgeName, date: dateStr }]);
            addSysLine(`🏆 ACHIEVEMENT UNLOCKED: ${badgeName} 🏆`, 'success');
        }
    };

    const renderProjectsLayout = () => {
        return (
            <div className="mt-4 mb-6 space-y-6">
                <div className="text-xl font-bold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                    ./projects/selected-works
                </div>
                {MY_DATA.projects.map((proj, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-cyan-500/40 transition-colors">
                        <h3 className="text-lg font-bold text-white mb-2">{proj.title}</h3>
                        <p className="text-zinc-300 text-sm mb-4 leading-relaxed">{proj.description}</p>

                        <div className="flex flex-wrap gap-2 mb-2">
                            {proj.tech.map((t, i) => (
                                <span key={i} className="text-xs bg-cyan-950/50 text-cyan-300 px-2 py-1 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const renderAchievementsLayout = () => {
        const unlockedCount = badges.length;
        const totalCount = ALL_ACHIEVEMENTS.length;
        const percent = Math.round((unlockedCount / totalCount) * 100);

        const shareText = `I just unlocked ${unlockedCount}/${totalCount} achievements on Srikrishna's Terminal Portfolio! Can you find them all?`;
        const shareUrl = `https://linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(shareText)}`;

        return (
            <div className="mt-4 mb-6 space-y-4">
                <div className="text-xl font-bold text-yellow-400 mb-2 border-b border-yellow-500/30 pb-2 flex justify-between items-center">
                    <span>./achievements/gallery</span>
                    <a href={shareUrl} target="_blank" rel="noreferrer" className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded flex items-center transition-colors">
                        Share <ExternalLink size={12} className="ml-1" />
                    </a>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                    <div className="flex justify-between text-xs mb-1">
                        <span className="text-zinc-400">Completion Progress</span>
                        <span className="text-green-400 font-bold">{percent}% ({unlockedCount}/{totalCount})</span>
                    </div>
                    <div className="w-full bg-zinc-900 rounded-full h-2 overflow-hidden">
                        <div className="bg-green-500 h-2 rounded-full transition-all duration-1000" style={{ width: `${percent}%` }}></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    {ALL_ACHIEVEMENTS.map((ach, idx) => {
                        const unlockedBadge = badges.find(b => (typeof b === 'string' ? b : b.name) === ach.name);
                        const isUnlocked = !!unlockedBadge;
                        const dateStr = unlockedBadge && typeof unlockedBadge === 'object' ? unlockedBadge.date : 'Legacy unlock';

                        return (
                            <div key={idx} className={`p-3 rounded border ${isUnlocked ? 'bg-green-950/20 border-green-500/30' : 'bg-black/50 border-white/5 opacity-50'} flex items-start space-x-3 transition-colors`}>
                                <div className="text-2xl mt-1">{isUnlocked ? ach.icon : '❓'}</div>
                                <div>
                                    <div className={`font-bold ${isUnlocked ? 'text-green-400' : 'text-zinc-500'}`}>
                                        {isUnlocked ? ach.name : '???'}
                                    </div>
                                    <div className="text-xs text-zinc-400 mt-1">
                                        {isUnlocked ? ach.desc : 'Keep exploring to unlock'}
                                    </div>
                                    {isUnlocked && (
                                        <div className="text-[10px] text-green-500/60 mt-2 font-mono">
                                            Unlocked: {dateStr}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    const playNextLevel = (lvlIndex) => {
        addGameLine("-------------------------------------------------------------");
        addGameLine(<span className="text-cyan-400 font-bold">{LEVELS[lvlIndex].title}</span>);
        addGameLine(LEVELS[lvlIndex].desc);
        addGameLine("-------------------------------------------------------------");
    };

    const handleCommand = (cmd) => {
        const rawCmd = cmd.trim();
        const normalizedCmd = rawCmd.toLowerCase();

        addLine(`srikrishna@portfolio:~$ ${rawCmd}`, 'user');

        if (!rawCmd) return;

        setCommandsTyped(prev => prev + 1);
        if (commandsTyped === 49 && !easterEggs.includes("TermMaster")) {
            setEasterEggs(prev => [...prev, "TermMaster"]);
            awardBadge("Terminal Master");
        }

        // Handle Game Logic
        if (level > 0 && level <= 5) {
            const currentLvl = LEVELS[level - 1];
            if (!["clear", "ls", "help", "game --help", "restart", "projects"].includes(normalizedCmd)) {
                if (currentLvl.answers.includes(normalizedCmd)) {
                    addSysLine(">>> CORRECT! Level Complete.", "success");
                    awardBadge(currentLvl.badge);
                    const nextLevel = level + 1;
                    setLevel(nextLevel);

                    if (nextLevel > 5) {
                        setTimeout(() => {
                            addSysLine("\n=============================================================", "success");
                            addGameLine(<span className="text-cyan-400 font-bold text-lg">GAME COMPLETE!</span>);
                            addGameLine("Congratulations! You have completed SRIKRISHNA's developer journey.");
                            addSysLine("=============================================================", "success");
                            addLine(<span>To get in touch, type <span className="text-yellow-400">contact</span> or check out my <span className="text-yellow-400">projects</span>.</span>);
                        }, 1000);
                    } else {
                        setTimeout(() => playNextLevel(nextLevel - 1), 1000);
                    }
                    return;
                } else {
                    addErrorLine(">>> Incorrect command or action. Try again.");
                    return;
                }
            }
        }

        // Global Commands
        switch (normalizedCmd) {
            case 'ls':
            case 'help':
                addLine(
                    <div className="space-y-1 my-2">
                        <div><span className="text-yellow-400 w-24 inline-block">play</span> - Start or resume the game</div>
                        <div><span className="text-yellow-400 w-24 inline-block">game --help</span> - How to play</div>
                        <div><span className="text-yellow-400 w-24 inline-block">skills</span> - View my technical skills</div>
                        <div><span className="text-yellow-400 w-24 inline-block">projects</span> - View my projects (Rich UI)</div>
                        <div><span className="text-yellow-400 w-24 inline-block">resume</span> - Read executive summary</div>
                        <div><span className="text-yellow-400 w-24 inline-block">contact</span> - View contact info</div>
                        <div><span className="text-yellow-400 w-24 inline-block">clear</span> - Clear terminal output</div>
                        <div><span className="text-yellow-400 w-24 inline-block">restart</span> - Reset game progress</div>
                        <div><span className="text-yellow-400 w-24 inline-block">achievements</span> - View unlocked badges</div>
                    </div>
                );
                break;
            case 'play':
                if (level === 0) {
                    addSysLine("Starting a new game...", "system");
                    setLevel(1);
                    setTimeout(() => playNextLevel(0), 1000);
                } else if (level <= 5) {
                    addSysLine(`Resuming from Level ${level}...`, "system");
                    setTimeout(() => playNextLevel(level - 1), 500);
                } else {
                    addSysLine("You have already completed the game. Type 'restart' to play again.");
                }
                break;
            case 'game --help':
                addSysLine("HOW TO PLAY:");
                addSysLine("1. Type 'play' to begin.");
                addSysLine("2. Read the level description and type the correct command or answer to progress.");
                addSysLine("3. Find secret commands to unlock special badges.");
                addSysLine("4. Your progress is saved automatically.");
                break;
            case 'skills':
                addLine(<span className="text-cyan-400 font-bold mb-2 block">TECHNICAL SKILLS</span>);
                addLine(<div className="whitespace-pre">{MY_DATA.skills.join('\n  ')}</div>);
                break;
            case 'projects':
            case './projects':
                addLine(renderProjectsLayout());
                break;
            case 'resume':
                addLine(<span className="text-cyan-400 font-bold mb-2 block">EXECUTIVE SUMMARY</span>);
                addSysLine(MY_DATA.executiveSummary.join(" "));
                addLine(<span className="text-cyan-400 font-bold mt-4 mb-2 block">CORE STRENGTHS</span>);
                addLine(<div className="whitespace-pre">{MY_DATA.coreStrengths.join('\n  ')}</div>);
                break;
            case 'contact':
                addLine(<span className="text-cyan-400 font-bold mb-2 block">CONTACT INFORMATION</span>);
                addLine(
                    <div className="space-y-1 ml-2">
                        <div>Email   : <a href={`mailto:${MY_DATA.contact.Email}`} className="text-cyan-300 hover:underline">{MY_DATA.contact.Email}</a></div>
                        <div>GitHub  : <a href={MY_DATA.contact.GitHub} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">{MY_DATA.contact.GitHub}</a></div>
                        <div>LinkedIn: <a href={MY_DATA.contact.LinkedIn} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">{MY_DATA.contact.LinkedIn}</a></div>
                    </div>
                );
                break;
            case 'clear':
                setHistory([]);
                break;
            case 'restart':
                setLevel(0);
                setBadges([]);
                setEasterEggs([]);
                setCommandsTyped(0);
                addSysLine("Game progress reset. Type 'play' to start over.", "success");
                break;
            case 'sudo':
                addErrorLine("srikrishna is not in the sudoers file. This incident will be reported.");
                if (!easterEggs.includes("sudo")) {
                    setEasterEggs(prev => [...prev, "sudo"]);
                    awardBadge("Hacker Wannabe");
                }
                break;
            case 'debug':
                addLine(<span className="text-yellow-400 font-bold block">[DEBUG STATS]</span>);
                addSysLine(`Commands Issued: ${commandsTyped}`);
                addSysLine(`Easter Eggs Found: ${easterEggs.length}`);
                addSysLine("Lines of code written: 500,000+");
                addSysLine("Coffees consumed: 1,337");
                if (!easterEggs.includes("debug")) {
                    setEasterEggs(prev => [...prev, "debug"]);
                    awardBadge("Debugger");
                }
                break;
            case 'matrix':
                setIsMatrixActive(true);
                addSysLine("Entering the Matrix...");
                if (!easterEggs.includes("matrix")) {
                    setEasterEggs(prev => [...prev, "matrix"]);
                    awardBadge("The One");
                }
                setTimeout(() => {
                    setIsMatrixActive(false);
                    addSysLine("Matrix disconnected.");
                }, 5000);
                break;
            case 'achievements':
            case 'badges':
                addLine(renderAchievementsLayout());
                break;
            case 'leetcode':
                awardBadge("LeetCode Champion");
                addLine(<span className="text-yellow-400 font-bold mb-2 block">LEETCODE STATS</span>);
                addSysLine("- 350+ Problems Solved.");
                addSysLine("- Topics: Data Structures, Algorithms, Dynamic Programming, Graphs.");
                addSysLine("- Consistent daily solver.");
                break;
            case 'isro':
            case 'internship':
                awardBadge("Space Technology Intern");
                addLine(<span className="text-yellow-400 font-bold mb-2 block">ISRO (IPRC) INTERNSHIP</span>);
                addSysLine("- Worked at ISRO Propulsion Complex (IPRC), Mahendragiri.");
                addSysLine("- Studied telemetry and aerospace engineering principles.");
                addSysLine("- For more info, check the INTERNSHIPS sections at the top right.");
                break;
            case 'hackathon':
            case 'proactifab':
                awardBadge("Hackathon Hero");
                addLine(<span className="text-yellow-400 font-bold mb-2 block">PROACTIFAB - HACKATHON WINNING PROJECT</span>);
                addSysLine("- Predictive maintenance for MSMEs.");
                addSysLine("- Tech: PyTorch, Docker, FastAPI, React.");
                break;
            case 'ml':
            case 'ai':
                awardBadge("ML Explorer");
                addLine(<span className="text-yellow-400 font-bold mb-2 block">AI/ML PRACTITIONER</span>);
                addSysLine("- Familiar with PyTorch, TensorFlow, Hugging Face.");
                addSysLine("- Built LocalBizAI using LangChain and Speech-to-text APIs.");
                addSysLine("- Integrated Gemini API for portfolio AI Chat.");
                break;
            case 'cloud':
            case 'kubernetes':
                awardBadge("Cloud Native");
                addLine(<span className="text-yellow-400 font-bold mb-2 block">CLOUD DEPLOYMENT EXPERT</span>);
                addSysLine("- Experienced with Docker containerization.");
                addSysLine("- Deployed applications using Kubernetes clusters.");
                addSysLine("- CI/CD automation and MLOps workflows.");
                break;
            case 'certificates':
                awardBadge("Certificate Collection");
                addLine(<span className="text-yellow-400 font-bold mb-2 block">CERTIFICATES</span>);
                addSysLine("- AWS Cloud Practitioner");
                addSysLine("- Google Data Analytics");
                addSysLine("- Deloitte Job Simulation");
                addSysLine("- AICTE Virtual Internship");
                addSysLine("- Codec Technologies AI Intern");
                addSysLine("Type 'certificate [name]' for details or check the UI section.");
                break;
            default:
                if (normalizedCmd.startsWith('certificate ')) {
                    const certName = normalizedCmd.replace('certificate ', '');
                    awardBadge("Certificate Collection");
                    addSysLine(`Searching for certificate matching: ${certName}...`);
                    addSysLine("Found in database. Details:");
                    addSysLine("- This is a verified professional certificate.");
                    addSysLine("- View the full Certificate section on the portfolio for visual proof and AI descriptions.");
                } else {
                    addSysLine(`Command not found: ${rawCmd}. Type 'help' for a list of commands.`);
                }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            const newHistory = [...cmdHistory, input.trim()];
            setCmdHistory(newHistory);
            setHistoryIdx(newHistory.length);
            handleCommand(input);
            setInput('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIdx > 0) {
                const newIdx = historyIdx - 1;
                setHistoryIdx(newIdx);
                setInput(cmdHistory[newIdx]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIdx < cmdHistory.length - 1) {
                const newIdx = historyIdx + 1;
                setHistoryIdx(newIdx);
                setInput(cmdHistory[newIdx]);
            } else {
                setHistoryIdx(cmdHistory.length);
                setInput('');
            }
        }
    };

    return (
        <>
            {/* Floating Action Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0, opacity: 0, y: 50 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 px-6 py-4 bg-zinc-950/90 text-green-400 border-2 border-green-500/50 rounded-full shadow-[0_0_25px_rgba(34,197,94,0.4)] backdrop-blur-md hover:bg-black hover:text-green-300 hover:border-green-400 transition-all flex items-center gap-3 group cursor-pointer"
                        title="Open Terminal Game"
                    >
                        <TerminalIcon size={24} className="group-hover:animate-pulse" />
                        <span className="font-mono font-bold tracking-wide">Play Dev Journey</span>
                        {badges.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-green-500 text-black text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]">
                                {badges.length}
                            </span>
                        )}
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Terminal Window Overlay (Glassmorphic) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed bottom-6 right-6 lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 lg:m-auto z-50 w-[95vw] lg:w-[800px] h-[600px] max-h-[85vh] bg-zinc-950/70 border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl flex flex-col font-mono text-sm"
                        style={isMatrixActive ? { borderColor: '#00ff00', boxShadow: '0 0 30px rgba(0,255,0,0.2)' } : {}}
                    >
                        {/* Matrix Canvas Layer */}
                        <canvas
                            ref={matrixCanvasRef}
                            className={`absolute inset-0 z-0 pointer-events-none ${isMatrixActive ? 'block' : 'hidden'}`}
                        />

                        {/* Scanlines Effect */}
                        <div className="absolute inset-0 z-10 pointer-events-none opacity-20"
                            style={{
                                background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
                                backgroundSize: '100% 4px',
                            }}
                        ></div>

                        {/* Top Bar Navigation */}
                        <div className="bg-white/5 border-b border-white/10 p-3 flex justify-between items-center z-20 shrink-0 backdrop-blur-md">
                            <div className="flex items-center space-x-2">
                                <span className="flex space-x-1.5">
                                    <span className="block w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer" onClick={() => setIsOpen(false)}></span>
                                    <span className="block w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400"></span>
                                    <span className="block w-3 h-3 rounded-full bg-green-500 hover:bg-green-400"></span>
                                </span>
                                <span className="ml-4 font-bold text-zinc-400 tracking-wider text-xs uppercase flex items-center space-x-2">
                                    <TerminalIcon size={14} className="text-green-500 ml-2" />
                                    <span>terminal-adventure.exe</span>
                                    {badges.length > 0 && <span className="text-yellow-400">| Score: {badges.length}</span>}
                                </span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-zinc-400 hover:text-white transition-colors p-1"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Badges Panel */}
                        {badges.length > 0 && (
                            <div className="absolute top-14 right-4 z-30 flex flex-col gap-2 pointer-events-none items-end">
                                {badges.map((b, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        className="bg-green-500/20 border border-green-500 text-green-400 px-3 py-1 rounded text-xs font-bold shadow-[0_0_10px_rgba(34,197,94,0.3)] backdrop-blur-sm"
                                    >
                                        🏆 {typeof b === 'string' ? b : b.name}
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {/* Terminal Output */}
                        <div
                            className="flex-1 overflow-y-auto p-5 space-y-2 z-20 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                            onClick={() => inputRef.current?.focus()}
                        >
                            {history.map((line) => (
                                <div key={line.id} className={`
                                    ${line.type === 'system' ? 'text-zinc-400' : ''}
                                    ${line.type === 'game' ? 'text-green-300' : ''}
                                    ${line.type === 'user' ? 'text-white font-bold' : ''}
                                    ${line.type === 'error' ? 'text-red-400' : ''}
                                    ${line.type === 'success' ? 'text-green-400 font-bold' : ''}
                                    ${isMatrixActive ? 'text-green-500 drop-shadow-[0_0_5px_rgba(0,255,0,0.8)]' : ''}
                                    break-words font-mono
                                `}>
                                    {line.content}
                                </div>
                            ))}
                            <div ref={endOfMessagesRef} />
                        </div>

                        {/* Input Area */}
                        <div className="border-t border-white/10 p-4 bg-zinc-950/50 backdrop-blur-md z-20 shrink-0">
                            <form onSubmit={handleSubmit} className="flex items-center">
                                <span className={`mr-2 shrink-0 ${isMatrixActive ? 'text-green-500 font-bold' : 'text-green-400'}`}>srikrishna@portfolio:~$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className={`w-full bg-transparent border-none outline-none focus:ring-0 p-0 text-white placeholder-zinc-600 caret-white ${isMatrixActive ? 'text-green-500 caret-green-500' : ''}`}
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck="false"
                                    maxLength={100}
                                    autoFocus
                                />
                                <span className="w-2 h-4 bg-white animate-[pulse_1s_step-end_infinite] shrink-0 inline-block -ml-1"></span>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default TerminalGame;
