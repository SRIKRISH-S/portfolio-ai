import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import DetailModal from './DetailModal';

const certificateDetails = [
    {
        title: "AWS Cloud Practitioner Essentials",
        category: "Cloud Certification",
        icon: "☁️",
        accent: "#f59e0b",
        headerGradient: "linear-gradient(135deg,#1c1917,#0c0a09)",
        image: "/cert-aws.png",
        meta: [
            { icon: "🏢", label: "Issuer", value: "Amazon Web Services (AWS)" },
            { icon: "📅", label: "Completed", value: "June 11, 2025" },
            { icon: "🌍", label: "Level", value: "Foundational" },
        ],
        sections: [
            {
                heading: "About This Certification",
                paragraphs: [
                    "The AWS Cloud Practitioner Essentials course provides a comprehensive overview of AWS Cloud fundamentals, covering everything from core service concepts to pricing models and cloud security best practices.",
                    "It establishes a solid foundation for understanding enterprise cloud adoption strategies and the AWS Well-Architected Framework."
                ]
            },
            {
                heading: "Key Concepts Covered",
                bullets: [
                    "AWS Global Infrastructure — Regions, Availability Zones, and Edge Locations",
                    "Core AWS Services — EC2, S3, RDS, Lambda, VPC, IAM, and CloudFront",
                    "Cloud Security & Shared Responsibility Model",
                    "AWS Pricing models — On-Demand, Reserved, and Spot Instances",
                    "Monitoring and compliance with CloudWatch and AWS Trusted Advisor",
                    "Cloud migration strategies and the AWS CAF framework"
                ]
            },
            {
                heading: "Technologies & Tools",
                badges: [
                    { icon: "⚡", label: "EC2" },
                    { icon: "🪣", label: "S3" },
                    { icon: "🔐", label: "IAM" },
                    { icon: "🌐", label: "VPC" },
                    { icon: "⚙️", label: "Lambda" },
                    { icon: "🗄️", label: "RDS" },
                    { icon: "👁️", label: "CloudWatch" },
                    { icon: "🚀", label: "CloudFront" },
                ]
            }
        ],
        status: [{ icon: "✅", label: "Completed" }, { icon: "🎓", label: "AWS Official" }]
    },
    {
        title: "Google Data Analytics Professional Certificate",
        category: "Data Analytics",
        icon: "📊",
        accent: "#34d399",
        headerGradient: "linear-gradient(135deg,#052e16,#09090b)",
        image: "/cert-google.png",
        meta: [
            { icon: "🏢", label: "Issuer", value: "Google / Coursera" },
            { icon: "📅", label: "Completed", value: "June 25, 2025" },
            { icon: "📚", label: "Format", value: "8-Course Professional Series" },
        ],
        sections: [
            {
                heading: "About This Certification",
                paragraphs: [
                    "An 8-course professional certificate designed by Google, covering the complete data analytics workflow from data collection and cleaning to visualization and storytelling.",
                    "The program emphasizes hands-on practical skills using real datasets and industry-standard tools used by professional data analysts."
                ]
            },
            {
                heading: "Skills Gained",
                bullets: [
                    "Data cleaning, transformation, and validation using spreadsheets and SQL",
                    "Exploratory Data Analysis (EDA) and statistical reasoning",
                    "Data visualization and storytelling with Tableau and R (ggplot2)",
                    "Querying relational databases with advanced SQL techniques",
                    "Building case study presentations with data-driven insights",
                    "Understanding of the full data analysis life cycle"
                ]
            },
            {
                heading: "Tools & Technologies",
                badges: [
                    { icon: "🗃️", label: "SQL" },
                    { icon: "📈", label: "Tableau" },
                    { icon: "📉", label: "R / ggplot2" },
                    { icon: "📋", label: "Spreadsheets" },
                    { icon: "🐍", label: "Python Basics" },
                    { icon: "🔍", label: "BigQuery" },
                ]
            },
            {
                heading: "Proficiency Breakdown",
                skills: [
                    { name: "SQL & Data Querying", level: 88 },
                    { name: "Data Visualization (Tableau)", level: 82 },
                    { name: "Statistical Analysis", level: 78 },
                    { name: "R Programming", level: 72 },
                ]
            }
        ],
        status: [{ icon: "✅", label: "Completed" }, { icon: "🎓", label: "Google Official" }]
    },
    {
        title: "Data Analytics Job Simulation",
        category: "Industry Simulation",
        icon: "💼",
        accent: "#818cf8",
        headerGradient: "linear-gradient(135deg,#1e1b4b,#09090b)",
        image: "/cert-deloitte.png",
        meta: [
            { icon: "🏢", label: "Issuer", value: "Deloitte" },
            { icon: "📅", label: "Completed", value: "June 19, 2025" },
            { icon: "⏱️", label: "Format", value: "Virtual Job Simulation" },
        ],
        sections: [
            {
                heading: "About This Simulation",
                paragraphs: [
                    "Deloitte's Data Analytics Job Simulation offered a real-world consulting experience through scenario-based tasks mimicking the day-to-day work of a junior data analyst at a Big 4 firm.",
                    "The simulation covered forensic technology and data analysis tasks in the style of actual client engagements, building practical consulting-ready analytical skills."
                ]
            },
            {
                heading: "Tasks Completed",
                bullets: [
                    "Analyzed client datasets to identify anomalies and potential fraud indicators",
                    "Created forensic-level data analysis reports for a simulated client",
                    "Applied data classification techniques to structure unstructured business data",
                    "Presented findings using clear visualizations and written summaries",
                    "Developed understanding of data governance and compliance in consulting"
                ]
            },
            {
                heading: "Skills Demonstrated",
                badges: [
                    { icon: "🔍", label: "Data Analysis" },
                    { icon: "🧾", label: "Forensic Tech" },
                    { icon: "📊", label: "Reporting" },
                    { icon: "🤝", label: "Client Communication" },
                    { icon: "📋", label: "Data Classification" },
                ]
            }
        ],
        status: [{ icon: "✅", label: "Completed" }, { icon: "🏛️", label: "Deloitte Official" }]
    }
];

const certificates = [
    {
        title: "AWS Cloud Practitioner Essentials",
        issuer: "Amazon Web Services (AWS)",
        date: "June 11, 2025",
        description: "Foundational understanding of AWS Cloud concepts, security, architecture, and pricing.",
        icon: "☁️",
    },
    {
        title: "Google Data Analytics Professional Certificate",
        issuer: "Google / Coursera",
        date: "June 25, 2025",
        description: "Rigorous training in data preparation, analysis, and visualization using SQL, Tableau, and R.",
        icon: "📊",
    },
    {
        title: "Data Analytics Job Simulation",
        issuer: "Deloitte",
        date: "June 19, 2025",
        description: "Completed practical tasks in data analysis and forensic technology, simulating real consulting scenarios.",
        icon: "💼",
    }
];

const Certificates = () => {
    const [selected, setSelected] = useState(null);
    const accents = ["#f59e0b", "#34d399", "#818cf8"];

    return (
        <section id="certificates" className="py-24 relative overflow-hidden bg-zinc-950 border-t border-white/5">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Professional <span className="text-emerald-400">Certifications</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">Continuous learning and skill validation through industry-recognized programs.</p>
                    <p className="text-slate-500 text-sm mt-3">✦ Click any card to explore details</p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {certificates.map((cert, index) => (
                        <motion.button
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelected(certificateDetails[index])}
                            className="text-left glass-panel rounded-2xl border border-white/10 transition-all duration-300 group flex flex-col bg-zinc-950/80 cursor-pointer w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                            style={{
                                '--tw-shadow-color': `${accents[index]}22`,
                                boxShadow: 'none',
                            }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = `0 10px 40px ${accents[index]}25`}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                        >
                            <div className="p-8 flex-grow flex flex-col">
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner border"
                                    style={{ background: `${accents[index]}18`, borderColor: `${accents[index]}33` }}
                                >
                                    {cert.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors leading-tight">{cert.title}</h3>
                                <div className="font-medium text-xs mb-4 flex items-center w-fit px-3 py-1 rounded-full border" style={{ color: accents[index], background: `${accents[index]}10`, borderColor: `${accents[index]}25` }}>
                                    <Award size={14} className="mr-1.5" />
                                    {cert.issuer} • {cert.date}
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                                    {cert.description}
                                </p>
                                <div className="mt-6 flex items-center text-xs font-semibold" style={{ color: accents[index] }}>
                                    <span>View Details</span>
                                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
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

export default Certificates;
