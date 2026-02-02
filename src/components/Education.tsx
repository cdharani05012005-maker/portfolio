import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const educationData = [
    {
        institution: 'Velalar College of Engineering and Technology',
        degree: 'B.Tech in Artificial Intelligence & Data Science',
        period: '2022 - 2026',
        description: 'Currently focusing on Deep Learning, Large Language Models, and Advanced Data Analytics.',
        icon: <GraduationCap className="w-5 h-5" />,
        image: 'https://images.unsplash.com/photo-1523050338392-c09e974ef2ad?q=80&w=2070&auto=format&fit=crop'
    },
    {
        institution: 'Vidhya Vikashni Matric Higher Secondary School',
        degree: 'Grade 12 (State Board of TN)',
        period: '2021 - 2022',
        description: 'Successfully completed the Higher Secondary Examination with 78%.',
        icon: <BookOpen className="w-5 h-5" />,
        image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop'
    },
    {
        institution: 'Vidhya Vikashni Matric Higher Secondary School',
        degree: 'Grade 10 (State Board of TN)',
        period: '2019 - 2020',
        description: 'Successfully completed the Secondary School Leaving Certificate with 78%.',
        icon: <BookOpen className="w-5 h-5" />,
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop'
    }
];

const Education = () => {
    return (
        <section id="education" className="py-24 relative bg-[var(--color-bg)]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Academic <span className="text-gradient">Journey</span></h2>
                    <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
                        Building a rigorous foundation in engineering and specialized intelligence architecture.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 group hover:border-[var(--color-primary)]/40 transition-all duration-500 flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                                    {item.icon}
                                </div>
                                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">{item.period}</span>
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                                {item.institution}
                            </h3>
                            <p className="text-sm font-bold text-[var(--color-primary)]/80 uppercase tracking-wider mb-4">
                                {item.degree}
                            </p>
                            <p className="text-slate-300 text-sm leading-relaxed mt-auto">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
