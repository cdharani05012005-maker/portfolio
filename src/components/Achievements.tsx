import { motion } from 'framer-motion';
import { Award, Briefcase } from 'lucide-react';

const achievements = [
    {
        title: 'NPTEL Cloud Computing',
        subtitle: 'Certification',
        date: '2023',
        icon: <Award className="w-5 h-5" />,
        description: 'Successfully completed the NPTEL certification with Elite status.',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Techvolt Software Private Limited',
        subtitle: 'Data Science Internship & Certification',
        date: '2023',
        icon: <Briefcase className="w-5 h-5" />,
        description: 'Gained hands-on experience in data analysis and ML model deployment.',
        image: 'https://images.unsplash.com/photo-1551288049-bbbda546697a?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Sports Captain',
        subtitle: 'Leadership',
        date: '2023 - 2025',
        icon: <Award className="w-5 h-5" />,
        description: 'Led the college team to district level finals, fostering teamwork and discipline.',
        image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'NCC Cadet',
        subtitle: 'National Cadet Corps',
        date: '2023 - 2026',
        icon: <Award className="w-5 h-5" />,
        description: 'Disciplined cadet actively participating in numerous national camps. Recognized for excellence in sports competitions within the corps, winning multiple prizes for teamwork and physical endurance.',
        image: 'https://images.unsplash.com/photo-1544333346-6042b00246ba?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Novi Tech Private Limited',
        subtitle: 'AI, ML & Data Analytics Internship',
        date: '2024',
        icon: <Briefcase className="w-5 h-5" />,
        description: 'Completed a comprehensive internship in AI, ML, and Data Analytics. Successfully attended the "Crack Data Analytics in Just 6 Days" bootcamp, mastering rapid data processing and analytical insights.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
    }
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-24 relative bg-[var(--color-bg)]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Milestones & <span className="text-gradient">Impact</span></h2>
                    <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
                        A retrospective of certifications, leadership, and technical excellence.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 group hover:border-[var(--color-secondary)]/40 transition-all duration-500"
                        >
                            <div className="w-24 h-24 shrink-0 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>

                            <div className="flex-grow text-center md:text-left">
                                <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 block">{item.date}</span>
                                <h3 className="text-2xl font-bold mb-1 group-hover:text-[var(--color-secondary)] transition-colors">{item.title}</h3>
                                <p className="text-sm font-semibold text-[var(--color-secondary)]/80 uppercase tracking-wider mb-3">{item.subtitle}</p>
                                <p className="text-slate-300 leading-relaxed max-w-2xl">{item.description}</p>
                            </div>

                            <div className="shrink-0 w-32 h-20 rounded-xl overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity hidden md:block">
                                <img src={item.image} alt="" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
