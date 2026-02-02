import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-[var(--color-bg)]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 glass-card p-8 md:p-12 flex flex-col justify-center"
                    >
                        <h2 className="text-4xl font-bold mb-6">About <span className="text-gradient">Me</span></h2>
                        <p className="text-lg text-slate-300 leading-relaxed mb-6">
                            I am a passionate B.Tech Artificial Intelligence and Data Science student at Velalar College of Engineering and Technology.
                            My journey is driven by a deep fascination with how neural architectures can solve complex real-world problems.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Currently, I am diving deep into Large Language Models, Generative AI, and advanced data visualization techniques.
                            I believe in the power of clean data and elegant algorithms to create meaningful impact.
                        </p>
                    </motion.div>

                    {/* Quick Stats / Info Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-8 flex flex-col items-center justify-center text-center space-y-6"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[var(--color-primary)]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-24 h-24 rounded-full p-[2px] bg-gradient-to-b from-[var(--color-primary)]/50 to-transparent relative">
                                <img
                                    src="/assets/profile.jpg"
                                    alt="Dharani C"
                                    className="w-full h-full object-cover rounded-full transition-all duration-500"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">2022-2026</h3>
                            <p className="text-slate-400 text-sm uppercase tracking-widest">B.Tech AI & DS</p>
                        </div>
                        <div className="pt-6 border-t border-[var(--color-border)] w-full">
                            <p className="text-slate-300">Located in Erode, India</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
