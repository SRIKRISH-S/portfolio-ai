import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Rocket } from 'lucide-react';
import DetailModal from './DetailModal';

const skillDetails = [
    {
        title: "Machine Learning & AI",
        category: "Core Skill Area",
        icon: "🧠",
        accent: "#22d3ee",
        headerGradient: "linear-gradient(135deg,#001c24,#09090b)",
        meta: [
            { icon: "📌", label: "Focus", value: "Model Design, Training & Deployment" },
            { icon: "🔬", label: "Domain", value: "Supervised, Unsupervised, Deep Learning" },
        ],
        sections: [
            {
                heading: "What I Do",
                paragraphs: [
                    "I design, train, and deploy ML models that solve real-world problems — from predictive analytics and image classification to large language model integration and RAG pipelines.",
                    "My approach is full-stack ML: from raw data wrangling through feature engineering, model training, evaluation, and finally production deployment with monitoring."
                ]
            },
            {
                heading: "Frameworks & Libraries",
                badges: [
                    { icon: "🔶", label: "PyTorch" },
                    { icon: "🔷", label: "TensorFlow" },
                    { icon: "🤗", label: "Hugging Face" },
                    { icon: "📐", label: "scikit-learn" },
                    { icon: "🦙", label: "LLM Integration" },
                    { icon: "📊", label: "MLflow" },
                    { icon: "🔢", label: "NumPy / Pandas" },
                    { icon: "📈", label: "Matplotlib / Seaborn" },
                ]
            },
            {
                heading: "Capability Levels",
                skills: [
                    { name: "Deep Learning (CNNs, RNNs, Transformers)", level: 85 },
                    { name: "LLM / RAG Integration", level: 80 },
                    { name: "Model Training & Evaluation", level: 90 },
                    { name: "Feature Engineering", level: 88 },
                    { name: "Experiment Tracking (MLflow)", level: 75 },
                ]
            },
            {
                heading: "Applied Areas",
                bullets: [
                    "Computer Vision — classification, detection, and segmentation tasks",
                    "NLP — text classification, summarisation, and chatbot pipelines",
                    "Time-series forecasting and anomaly detection",
                    "Recommendation engines and user behaviour modelling",
                    "Retrieval-Augmented Generation (RAG) with LLMs"
                ]
            }
        ],
        status: [{ icon: "⚡", label: "Active Skill" }, { icon: "🔁", label: "Continuously Learning" }]
    },
    {
        title: "Backend & APIs",
        category: "Core Skill Area",
        icon: "⚙️",
        accent: "#c084fc",
        headerGradient: "linear-gradient(135deg,#160024,#09090b)",
        meta: [
            { icon: "📌", label: "Focus", value: "Scalable RESTful & async API design" },
            { icon: "🔧", label: "Languages", value: "Python, JavaScript / Node.js" },
        ],
        sections: [
            {
                heading: "What I Do",
                paragraphs: [
                    "I build robust, production-grade backends that power web applications and AI services. My work includes designing clean RESTful API contracts, implementing business logic, and ensuring APIs are secure, well-tested, and observable.",
                    "I prefer FastAPI for Python-based microservices due to its async-first design and automatic OpenAPI docs, and Node.js/Express for high-throughput JavaScript backends."
                ]
            },
            {
                heading: "Frameworks & Tools",
                badges: [
                    { icon: "⚡", label: "FastAPI" },
                    { icon: "🌶️", label: "Flask" },
                    { icon: "🟢", label: "Node.js" },
                    { icon: "🚂", label: "Express.js" },
                    { icon: "🐘", label: "PostgreSQL" },
                    { icon: "🍃", label: "MongoDB" },
                    { icon: "🔴", label: "Redis" },
                    { icon: "🔐", label: "JWT / OAuth2" },
                ]
            },
            {
                heading: "Capability Levels",
                skills: [
                    { name: "FastAPI / Async Python", level: 88 },
                    { name: "RESTful API Design", level: 90 },
                    { name: "Database Design (SQL + NoSQL)", level: 82 },
                    { name: "Authentication & Security", level: 78 },
                    { name: "Node.js / Express", level: 75 },
                ]
            },
            {
                heading: "Best Practices I Follow",
                bullets: [
                    "OpenAPI-first API design with auto-generated documentation",
                    "Dependency injection and clean separation of concerns",
                    "Async-first architecture using Python asyncio and FastAPI",
                    "Rate limiting, input validation, and structured error handling",
                    "Database indexing, query optimisation, and connection pooling"
                ]
            }
        ],
        status: [{ icon: "⚡", label: "Active Skill" }, { icon: "🏗️", label: "Production Use" }]
    },
    {
        title: "Infra & MLOps",
        category: "Core Skill Area",
        icon: "🛠️",
        accent: "#60a5fa",
        headerGradient: "linear-gradient(135deg,#000e1c,#09090b)",
        meta: [
            { icon: "📌", label: "Focus", value: "Cloud-native deployment & ML lifecycle" },
            { icon: "☁️", label: "Clouds", value: "AWS, GCP" },
        ],
        sections: [
            {
                heading: "What I Do",
                paragraphs: [
                    "I build the infrastructure that takes ML models and software services from a developer's laptop to production. This means containerisation, orchestration, CI/CD pipelines, and automated model retraining workflows.",
                    "MLOps is a particular passion — I believe that a model that can't be reliably deployed and monitored is just a notebook experiment. I bridge the gap between ML research and production systems."
                ]
            },
            {
                heading: "Tools & Platforms",
                badges: [
                    { icon: "🐳", label: "Docker" },
                    { icon: "☸️", label: "Kubernetes" },
                    { icon: "🏗️", label: "Terraform" },
                    { icon: "📊", label: "MLflow" },
                    { icon: "🔄", label: "GitHub Actions" },
                    { icon: "☁️", label: "AWS (EC2, S3, EKS)" },
                    { icon: "🌐", label: "GCP" },
                    { icon: "🔭", label: "Prometheus / Grafana" },
                ]
            },
            {
                heading: "Capability Levels",
                skills: [
                    { name: "Docker & Containerisation", level: 90 },
                    { name: "Kubernetes (K8s)", level: 80 },
                    { name: "CI/CD (GitHub Actions)", level: 85 },
                    { name: "Terraform (IaC)", level: 75 },
                    { name: "ML Experiment Tracking", level: 82 },
                ]
            },
            {
                heading: "MLOps Practices",
                bullets: [
                    "Containerised training and inference services with Docker",
                    "Kubernetes deployments with horizontal pod autoscaling",
                    "Infrastructure-as-Code using Terraform for reproducible cloud environments",
                    "MLflow for experiment tracking, model registry, and versioning",
                    "GitHub Actions CI/CD for automated testing, building, and deployment",
                    "Monitoring model drift and system health with Prometheus and Grafana"
                ]
            }
        ],
        status: [{ icon: "⚡", label: "Active Skill" }, { icon: "🚀", label: "Production Deployed" }]
    }
];

const skills = [
    {
        icon: <Cpu size={40} className="text-cyan-400 mb-6 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />,
        title: "Machine Learning & AI",
        desc: "PyTorch, TensorFlow, Hugging Face, Scikit-learn, LLM integration, and predictive modeling.",
        accent: "#22d3ee"
    },
    {
        icon: <Code2 size={40} className="text-purple-400 mb-6 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]" />,
        title: "Backend & APIs",
        desc: "FastAPI, Flask, Python, Node.js, and scalable RESTful architecture.",
        accent: "#c084fc"
    },
    {
        icon: <Rocket size={40} className="text-blue-400 mb-6 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]" />,
        title: "Infra & MLOps",
        desc: "Docker, Kubernetes, Terraform, MLflow, CI/CD pipelines, and cloud platforms.",
        accent: "#60a5fa"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const About = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section id="about" className="py-24 relative mt-12 border-t border-white/5 bg-zinc-950/50">
            <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black mb-16 text-center tracking-tight text-white drop-shadow-md">
                        <span className="text-gradient">Innovating</span> at the intersection<br className="hidden md:block" /> of Design &amp; Technology.
                    </motion.h2>

                    <div className="flex flex-col md:flex-row gap-12 items-center mt-20">
                        <motion.div variants={itemVariants} className="md:w-1/2">
                            <div className="relative isolate">
                                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
                                    alt="Coding Setup"
                                    className="rounded-2xl shadow-2xl border border-white/10 w-full"
                                />
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="md:w-1/2 space-y-6 text-lg text-slate-300">
                            <p>
                                I am a technology-driven software developer focused on building intelligent, scalable, and production-ready systems at the intersection of Artificial Intelligence, Machine Learning, and Cloud-Native Engineering.
                            </p>
                            <p>
                                My work emphasizes end-to-end solution development — from algorithm design and model building to API development, deployment, and optimization for real-world use cases. I actively leverage tools such as <strong className="text-cyan-400 font-semibold">PyTorch, TensorFlow, FastAPI, Docker, and Kubernetes</strong> to deliver robust solutions.
                            </p>
                            <div className="pt-6 border-t border-white/10 flex flex-col space-y-3">
                                <a href="https://github.com/SRIKRISH-S" target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
                                    <span className="w-24 text-cyan-400/70">GitHub</span> github.com/SRIKRISH-S
                                </a>
                                <a href="https://www.linkedin.com/in/srikrishna-s-b47519307" target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
                                    <span className="w-24 text-cyan-400/70">LinkedIn</span> srikrishna-s
                                </a>
                                <a href="https://leetcode.com/u/KRISHNA-66/" target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
                                    <span className="w-24 text-cyan-400/70">LeetCode</span> KRISHNA-66
                                </a>
                                <a href="https://www.codechef.com/users/krish_970" target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
                                    <span className="w-24 text-cyan-400/70">CodeChef</span> krish_970
                                </a>
                                <a href="mailto:krishn9706@gmail.com" className="flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
                                    <span className="w-24 text-cyan-400/70">Email</span> krishn9706@gmail.com
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Skill Cards */}
                    <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8 mt-24">
                        <motion.p variants={itemVariants} className="md:col-span-3 text-center text-slate-500 text-sm -mb-4">
                            ✦ Click a skill area to explore in depth
                        </motion.p>
                        {skills.map((feature, i) => (
                            <motion.button
                                key={i}
                                variants={itemVariants}
                                whileHover={{ y: -6, scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => setSelected(skillDetails[i])}
                                className="glass-panel p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group text-left w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 10px 40px ${feature.accent}22`}
                                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                            >
                                <div className="transform group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm mb-4">{feature.desc}</p>
                                <span className="text-xs font-semibold flex items-center gap-1" style={{ color: feature.accent }}>
                                    Explore Skills <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                </span>
                            </motion.button>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {selected && <DetailModal item={selected} onClose={() => setSelected(null)} />}
        </section>
    );
};

export default About;
