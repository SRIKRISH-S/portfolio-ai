import { motion } from 'framer-motion';
import { Code2, Cpu, Rocket } from 'lucide-react';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section id="about" className="py-24 relative mt-12 border-t border-white/5 bg-zinc-950/50">
            {/* Background glow */}
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
                        <span className="text-gradient">Innovating</span> at the intersection<br className="hidden md:block" /> of Design & Technology.
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

                            {/* Contact Links */}
                            <div className="pt-6 border-t border-white/10 flex flex-col space-y-3">
                                <a href="https://github.com/SRIKRISH-S" target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
                                    <span className="w-24 text-cyan-400/70">GitHub</span> github.com/SRIKRISH-S
                                </a>
                                <a href="https://www.linkedin.com/in/srikrishna-s-b47519307" target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
                                    <span className="w-24 text-cyan-400/70">LinkedIn</span> srikrishna-s
                                </a>
                                <a href="mailto:krishn9706@gmail.com" className="flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
                                    <span className="w-24 text-cyan-400/70">Email</span> krishn9706@gmail.com
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8 mt-24">
                        {[
                            { icon: <Cpu size={40} className="text-cyan-400 mb-6 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />, title: "Machine Learning & AI", desc: "PyTorch, TensorFlow, Hugging Face, Scikit-learn, LLM integration, and predictive modeling." },
                            { icon: <Code2 size={40} className="text-purple-400 mb-6 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]" />, title: "Backend & APIs", desc: "FastAPI, Flask, Python, Node.js, and scalable RESTful architecture." },
                            { icon: <Rocket size={40} className="text-blue-400 mb-6 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]" />, title: "Infra & MLOps", desc: "Docker, Kubernetes, Terraform, MLflow, CI/CD pipelines, and cloud platforms." }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="glass-panel p-8 rounded-2xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <div className="transform group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
