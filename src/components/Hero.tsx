import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="h-screen flex items-center justify-center relative overflow-hidden bg-[var(--color-bg)]">
            {/* Neural Grid Background */}
            <div className="absolute inset-0 neural-grid opacity-30 pointer-events-none" />

            {/* Radial Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)]/15 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-secondary)]/5 rounded-full blur-[120px] animate-pulse delay-700" />

            <div className="z-10 container mx-auto px-6 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center mb-8"
                >
                    <div className="relative mb-6">
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-[var(--color-primary)]/20 rounded-full blur-2xl animate-pulse" />
                            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-[2px] bg-gradient-to-tr from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] overflow-hidden">
                                <div className="absolute inset-0 bg-black/10 rounded-full" />
                                <img
                                    src="/assets/profile.jpg"
                                    alt="Dharani C"
                                    className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>
                    <span className="glass-card px-4 py-1.5 text-xs font-semibold tracking-widest text-[var(--color-primary)] uppercase">
                        AI student & Researcher
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-7xl md:text-9xl font-bold mb-6 tracking-tight text-center text-[var(--color-text)]"
                >
                    Dharani <span className="text-gradient">C</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-300 font-light max-w-2xl text-center leading-relaxed mb-12"
                >
                    Architecting the future through <span className="text-[var(--color-secondary)] font-medium">Neural Networks</span> and
                    Advanced <span className="text-[var(--color-secondary)] font-medium">Data Analytics</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex flex-col items-center gap-4"
                >
                    <div className="w-[1px] h-20 bg-gradient-to-b from-[var(--color-primary)] to-transparent" />
                    <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Neural Drift</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
