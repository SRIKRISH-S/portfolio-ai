import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Quantum AI Dashboard",
        description: "A real-time analytics dashboard powered by WebGL and advanced machine learning predictions.",
        tech: ["React Base", "Three.js", "Tailwind", "Python"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Neural Vision API",
        description: "An open-source computer vision API allowing developers to easily integrate object detection.",
        tech: ["Node.js", "Express", "TensorFlow", "Redis"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Immersive Commerce",
        description: "E-commerce platform featuring 3D product viewing and an AR try-on feature for mobile native browsers.",
        tech: ["Next.js", "React Three Fiber", "Stripe"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-zinc-950/80 border-t border-white/5">
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Selected <span className="text-gradient">Works</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">A showcase of production-ready applications, open-source tools, and experimental interfaces.</p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="glass-panel rounded-2xl overflow-hidden group hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(6,182,212,0.15)] flex flex-col h-full"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-8 flex flex-col flex-grow relative z-20">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                <p className="text-slate-400 flex-grow mb-6 leading-relaxed text-sm">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs font-semibold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-cyan-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
