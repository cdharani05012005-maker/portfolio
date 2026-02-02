import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Traffic Detection Using CNN',
        description: 'Built a Convolutional Neural Network model to detect and classify traffic signs/images with high accuracy, enhancing road safety and automation.',
        tags: ['Python', 'CNN', 'Deep Learning', 'Computer Vision'],
        color: '#0EA5E9',
        image: 'https://images.unsplash.com/photo-1557425955-df376b5903c8?q=80&w=2070&auto=format&fit=crop',
        github: 'https://github.com/cdharani05012005-maker/traffic-detection-cnn'
    },
    {
        title: 'Smart Mirror AI for Skincare',
        description: 'Developed an AI-powered smart mirror system to analyze skin conditions and provide personalized skincare recommendations using facial scanning.',
        tags: ['AI', 'Skin Analysis', 'IoT', 'Machine Learning'],
        color: '#38BDF8',
        image: 'https://images.unsplash.com/photo-1554734867-bf3c00a49371?q=80&w=2070&auto=format&fit=crop',
        github: 'https://github.com/cdharani05012005-maker/smart-mirror-ai'
    }
];

const Projects = () => {
    return (
        <section className="py-24 section-container">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="mb-16"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">Featured Projects</h2>
                <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
                    A showcase of specialized AI solutions, ranging from deep learning computer vision to personal care intelligence.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ y: -10 }}
                        className="glass-card group overflow-hidden border-2 border-[var(--color-border)] hover:border-[var(--color-primary)]/20 transition-all duration-500 h-[500px] flex flex-col relative"
                    >
                        {/* Make the entire card a link */}
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 z-20"
                            aria-label={`View ${project.title} on GitHub`}
                        />

                        {/* Project Image Backdrop */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/40 to-transparent" />
                        </div>

                        {/* Content Area */}
                        <div className="relative z-10 p-10 mt-auto h-full flex flex-col justify-end">
                            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/40 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-black/10 text-gray-800 border border-black/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-3xl font-bold mb-3 text-gray-900 leading-tight">{project.title}</h3>
                                <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex gap-6 border-t border-black/10 pt-6 relative z-30">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-black hover:text-[var(--color-primary)] transition-all text-xs font-bold uppercase tracking-widest group/btn"
                                    >
                                        <Github size={18} className="group-hover/btn:rotate-12 transition-transform" /> Code
                                    </a>
                                    <button className="flex items-center gap-2 text-black hover:text-[var(--color-primary)] transition-all text-xs font-bold uppercase tracking-widest group/btn">
                                        <ExternalLink size={18} className="group-hover/btn:-translate-y-1 transition-transform" /> Live Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
