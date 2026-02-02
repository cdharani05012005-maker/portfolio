import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Achievements', href: '#achievements' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-card mx-4 mt-2' : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-full border-2 border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] transition-all flex items-center justify-center">
                        <span className="text-[var(--color-primary)] group-hover:text-[var(--color-bg)] font-bold text-xs">DC</span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm uppercase tracking-widest text-[var(--color-text)]/70 hover:text-[var(--color-primary)] transition-colors relative group overflow-hidden"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-primary)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                        </a>
                    ))}

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full hover:bg-[var(--color-glass-border)] transition-colors"
                    >
                        {darkMode ? '☀️' : '🌙'}
                    </button>

                    <button className="px-5 py-2 text-xs font-bold uppercase tracking-widest border border-[var(--color-text)]/20 rounded-full hover:bg-[var(--color-primary)] hover:text-black hover:border-[var(--color-primary)] transition-all text-[var(--color-text)]">
                        Resume
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[var(--color-text)] hover:text-[var(--color-primary)]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[var(--color-bg)]/95 backdrop-blur-xl border-t border-[var(--color-border)] absolute top-full left-0 right-0 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-[var(--color-text)]/80 hover:text-[var(--color-primary)]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
