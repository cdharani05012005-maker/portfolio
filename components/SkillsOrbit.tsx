import { motion } from 'framer-motion';
import { Database, LineChart, FileSpreadsheet, PieChart, Search, Users, Zap, Infinity } from 'lucide-react';

const dataSkills = [
    {
        name: 'Python',
        desc: 'Data analysis, automation, modeling',
        icon: <Zap className="w-5 h-5" />,
        color: '#0EA5E9',
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop'
    },
    {
        name: 'SQL',
        desc: 'Querying, joins, extraction',
        icon: <Database className="w-5 h-5" />,
        color: '#38BDF8',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2070&auto=format&fit=crop'
    },
    {
        name: 'Excel',
        desc: 'Data cleaning, formulas, reporting',
        icon: <FileSpreadsheet className="w-5 h-5" />,
        color: '#7DD3FC',
        image: 'https://images.unsplash.com/photo-1543286386-713bdd54867e?q=80&w=2070&auto=format&fit=crop'
    },
    {
        name: 'Power BI',
        desc: 'Dashboards, visualization, insights',
        icon: <PieChart className="w-5 h-5" />,
        color: '#BAE6FD',
        image: 'https://images.unsplash.com/photo-1551288049-bbbda546697a?q=80&w=2070&auto=format&fit=crop'
    },
    {
        name: 'Tableau',
        desc: 'Reports, storytelling with data',
        icon: <LineChart className="w-5 h-5" />,
        color: '#E0F2FE',
        image: 'https://images.unsplash.com/photo-1551288049-bbbda546697a?q=80&w=2070&auto=format&fit=crop'
    },
    {
        name: 'Antigravity',
        desc: 'Fluid data processing & high-speed optimization',
        icon: <Infinity className="w-5 h-5" />,
        color: '#FFFFFF',
        image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop'
    }
];

const coreSkills = [
    {
        name: 'Problem Solving',
        desc: 'Breaking down complex data problems',
        icon: <Search className="w-6 h-6" />,
        color: '#F0DB4F',
        image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop'
    },
    {
        name: 'Leadership',
        desc: 'Guiding tasks, taking ownership',
        icon: <Zap className="w-6 h-6" />,
        color: '#FF69B4',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
    },
    {
        name: 'Teamwork',
        desc: 'Collaborating across teams and projects',
        icon: <Users className="w-6 h-6" />,
        color: '#00D8FF',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-[var(--color-bg)]">
            <div className="container mx-auto px-6 space-y-32">
                {/* Data Skills Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Data Infrastructure</h2>
                        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
                            A specialized stack for high-performance data engineering and intelligent analysis.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {dataSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="glass-card group p-6 hover:border-[var(--color-primary)]/40 transition-all duration-500 overflow-hidden relative min-h-[200px] flex flex-col justify-end"
                            >
                                {/* Contextual Background Image */}
                                <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                                    <img
                                        src={skill.image}
                                        alt=""
                                        className="w-full h-full object-cover opacity-[0.15] group-hover:opacity-[0.25] transition-opacity"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent" />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] mb-6 group-hover:scale-110 transition-transform">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{skill.name}</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">{skill.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Core Skills Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-right"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Core Architect</h2>
                        <p className="text-slate-300 text-lg max-w-2xl ml-auto leading-relaxed">
                            The human-centric abilities that drive project success and collaborative excellence.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {coreSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card group p-8 flex flex-col items-center text-center hover:border-[var(--color-secondary)]/40 transition-all duration-500 relative overflow-hidden"
                            >
                                {/* Contextual Background Image */}
                                <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                                    <img
                                        src={skill.image}
                                        alt=""
                                        className="w-full h-full object-cover opacity-[0.1] group-hover:opacity-[0.2] transition-opacity"
                                    />
                                    <div className="absolute inset-0 bg-[var(--color-bg)]/40" />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-20 h-20 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center text-[var(--color-secondary)] mb-8 mx-auto group-hover:rotate-12 transition-transform">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-white">{skill.name}</h3>
                                    <p className="text-slate-300 leading-relaxed font-medium">{skill.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;


