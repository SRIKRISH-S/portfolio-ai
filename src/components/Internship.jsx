import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import DetailModal from './DetailModal';

const internshipDetails = [
    {
        title: "Space Technology Intern",
        category: "ISRO · On-Site Internship",
        icon: "🚀",
        accent: "#fb923c",
        headerGradient: "linear-gradient(135deg,#1c0c00,#09090b)",
        image: "/intern-isro.png",
        meta: [
            { icon: "🏢", label: "Organisation", value: "ISRO — IPRC, Mahendragiri" },
            { icon: "📍", label: "Location", value: "Mahendragiri, Tamil Nadu" },
            { icon: "🗂️", label: "Type", value: "On-Site Technical Internship" },
        ],
        sections: [
            {
                heading: "Overview",
                paragraphs: [
                    "As an intern at the Indian Space Research Organisation's Propulsion Complex (IPRC) — one of India's most prestigious research facilities — I was immersed in the engineering rigour that powers India's space missions.",
                    "IPRC is the national facility for testing and qualifying liquid propulsion systems. Being part of this environment gave me unparalleled exposure to mission-critical design philosophy and operational discipline."
                ]
            },
            {
                heading: "Key Contributions & Learnings",
                bullets: [
                    "Analysed operational workflows of advanced liquid propulsion and cryogenic propulsion test systems",
                    "Studied high-reliability telemetry data processing pipelines used in rocket engine test campaigns",
                    "Gained practical understanding of mission-critical software deployment and version-controlled release protocols",
                    "Understood the system-level integration between hardware control, real-time data acquisition, and safety interlocks",
                    "Observed quality assurance protocols under ISRO's SQAC framework, directly applicable to production-grade software"
                ]
            },
            {
                heading: "Skills & Domain Knowledge",
                badges: [
                    { icon: "🛰️", label: "Aerospace Systems" },
                    { icon: "📡", label: "Telemetry Processing" },
                    { icon: "⚙️", label: "Propulsion Engineering" },
                    { icon: "🧪", label: "Test & Validation" },
                    { icon: "🔐", label: "Mission Critical SW" },
                    { icon: "📋", label: "SQAC Standards" },
                ]
            },
            {
                heading: "Technical Exposure",
                skills: [
                    { name: "Systems Engineering Mindset", level: 90 },
                    { name: "Telemetry & Data Pipelines", level: 80 },
                    { name: "Mission-Critical Protocols", level: 85 },
                    { name: "Technical Documentation", level: 75 },
                ]
            }
        ],
        status: [{ icon: "✅", label: "Completed" }, { icon: "🇮🇳", label: "ISRO Official" }]
    },
    {
        title: "Artificial Intelligence Intern",
        category: "Codec Technologies · AICTE Approved",
        icon: "🤖",
        accent: "#a78bfa",
        headerGradient: "linear-gradient(135deg,#13001c,#09090b)",
        image: "/intern-codec.png",
        meta: [
            { icon: "🏢", label: "Company", value: "Codec Technologies Pvt. Ltd." },
            { icon: "📍", label: "Location", value: "Remote" },
            { icon: "⏱️", label: "Duration", value: "1 Month — AICTE Approved" },
        ],
        sections: [
            {
                heading: "Overview",
                paragraphs: [
                    "An intensive 1-month AICTE-approved AI internship at Codec Technologies focused on applied AI development. The program emphasized hands-on building and deployment of machine learning models aligned with real-world product requirements.",
                    "Working in a startup environment, I had full ownership of tasks from data preprocessing through model deployment, mirroring a real production AI engineering workflow."
                ]
            },
            {
                heading: "Key Projects & Tasks",
                bullets: [
                    "Built and fine-tuned classification models using scikit-learn and TensorFlow",
                    "Implemented data preprocessing and feature engineering pipelines for structured datasets",
                    "Collaborated on lightweight AI solutions aligned with AICTE's applied AI curriculum guidelines",
                    "Explored modern ML deployment patterns including REST API wrapping with Flask/FastAPI",
                    "Documented experiments and model performance metrics in structured reports"
                ]
            },
            {
                heading: "Technologies Used",
                badges: [
                    { icon: "🐍", label: "Python" },
                    { icon: "🧠", label: "TensorFlow" },
                    { icon: "📐", label: "scikit-learn" },
                    { icon: "🔢", label: "NumPy / Pandas" },
                    { icon: "🌐", label: "Flask / FastAPI" },
                    { icon: "📊", label: "Matplotlib" },
                ]
            },
            {
                heading: "Skill Growth",
                skills: [
                    { name: "ML Model Building", level: 85 },
                    { name: "Data Preprocessing", level: 88 },
                    { name: "Model Deployment (API)", level: 75 },
                    { name: "Experiment Tracking", level: 70 },
                ]
            }
        ],
        status: [{ icon: "✅", label: "Completed" }, { icon: "🎓", label: "AICTE Approved" }]
    },
    {
        title: "AI-ML Virtual Internship",
        category: "AICTE · Google for Developers",
        icon: "🧠",
        accent: "#34d399",
        headerGradient: "linear-gradient(135deg,#001c0e,#09090b)",
        image: "/intern-aicte.png",
        meta: [
            { icon: "🏢", label: "Programme", value: "AICTE / Google for Developers" },
            { icon: "📍", label: "Mode", value: "Virtual" },
            { icon: "⏱️", label: "Duration", value: "10 Weeks" },
        ],
        sections: [
            {
                heading: "Overview",
                paragraphs: [
                    "A 10-week structured virtual internship programme jointly offered by AICTE and Google for Developers, supported by the India Edu Program. The programme covered the full spectrum of modern AI and Machine Learning development.",
                    "The curriculum was project-driven, pushing participants to build and iterate on real ML applications using Google's developer ecosystem and open-source libraries."
                ]
            },
            {
                heading: "Core Learning Areas",
                bullets: [
                    "Deep learning fundamentals — neural network architecture, backpropagation, and optimisation",
                    "Convolutional Neural Networks (CNNs) for image feature extraction and classification",
                    "Recurrent Neural Networks (RNNs) and sequence modelling for time-series and NLP tasks",
                    "Transfer learning with pre-trained models (MobileNet, BERT base variants)",
                    "Building and deploying ML pipelines with TensorFlow 2.x and Keras",
                    "Model evaluation, confusion matrices, ROC-AUC, and hyperparameter tuning"
                ]
            },
            {
                heading: "Technology Stack",
                badges: [
                    { icon: "🔶", label: "TensorFlow 2.x" },
                    { icon: "🟡", label: "Keras" },
                    { icon: "🐍", label: "Python" },
                    { icon: "🔢", label: "NumPy / Pandas" },
                    { icon: "🖼️", label: "CNNs" },
                    { icon: "🔁", label: "RNNs / LSTMs" },
                    { icon: "🤗", label: "Transfer Learning" },
                    { icon: "☁️", label: "Google Colab" },
                ]
            },
            {
                heading: "Proficiency After Programme",
                skills: [
                    { name: "Deep Learning (CNNs / RNNs)", level: 82 },
                    { name: "TensorFlow / Keras", level: 86 },
                    { name: "Transfer Learning", level: 78 },
                    { name: "ML Pipeline Design", level: 80 },
                ]
            }
        ],
        status: [{ icon: "✅", label: "Completed" }, { icon: "🎓", label: "AICTE + Google" }]
    }
];

const internships = [
    {
        title: "Space Technology Intern",
        company: "ISRO (IPRC - ISRO Propulsion Complex)",
        location: "Mahendragiri, TN",
        type: "On-Site Internship",
        icon: "🚀",
        description: "Unprecedented exposure to state-of-the-art space technology, propulsion systems, and mission-critical data pipelines.",
        tags: ["Aerospace Technology", "Mission Critical Systems", "Data Telemetry"],
    },
    {
        title: "Artificial Intelligence Intern",
        company: "Codec Technologies Pvt. Ltd.",
        location: "Remote",
        type: "1-Month AICTE Approved",
        icon: "🤖",
        description: "1-month intensive AI internship building real-world models and exploring end-to-end ML deployment workflows.",
        tags: ["Artificial Intelligence", "Machine Learning", "AI Development"],
    },
    {
        title: "AI-ML Virtual Internship",
        company: "AICTE / Google for Developers",
        location: "Virtual",
        type: "10-Week Program",
        icon: "🧠",
        description: "10-week virtual programme covering deep learning, CNNs, RNNs, and transfer learning using TensorFlow and Keras.",
        tags: ["Deep Learning", "TensorFlow", "Google for Developers"],
    }
];

const accents = ["#fb923c", "#a78bfa", "#34d399"];

const Internship = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section id="internships" className="py-24 relative overflow-hidden bg-zinc-900 border-t border-white/5">
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Industry <span className="text-orange-400">Experience</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">Real-world applications of technology and engineering.</p>
                    <p className="text-slate-500 text-sm mt-3">✦ Click any card to explore details</p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {internships.map((intern, index) => (
                        <motion.button
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.015, y: -3 }}
                            whileTap={{ scale: 0.99 }}
                            onClick={() => setSelected(internshipDetails[index])}
                            className="glass-panel w-full text-left relative overflow-hidden rounded-3xl border border-orange-500/20 hover:border-orange-500/40 transition-all p-1 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                            onMouseEnter={e => e.currentTarget.style.boxShadow = `0 12px 40px ${accents[index]}20`}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                        >
                            <div className="bg-zinc-950/90 rounded-[22px] h-full z-10 relative p-8">
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5 pb-5 border-b border-white/10">
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform duration-500 border"
                                            style={{ background: `${accents[index]}15`, borderColor: `${accents[index]}30` }}
                                        >
                                            {intern.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{intern.title}</h3>
                                            <h4 className="font-medium" style={{ color: accents[index] }}>{intern.company}</h4>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-1.5 text-slate-400 text-xs shrink-0">
                                        <div className="flex items-center gap-1.5"><Calendar size={13} className="text-orange-500" /> {intern.location}</div>
                                        <div className="flex items-center gap-1.5"><MapPin size={13} className="text-orange-500" /> {intern.type}</div>
                                    </div>
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed mb-5">{intern.description}</p>

                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <div className="flex flex-wrap gap-2">
                                        {intern.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-zinc-900 border border-orange-500/20 rounded-lg text-[10px] font-semibold text-orange-300 uppercase tracking-wide">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-xs font-semibold flex items-center gap-1" style={{ color: accents[index] }}>
                                        View Details <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                    </span>
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>

            {selected && <DetailModal item={selected} onClose={() => setSelected(null)} />}
        </section>
    );
};

export default Internship;
