import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/SkillsOrbit';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden min-h-screen selection:bg-[var(--color-primary)]/30 selection:text-[var(--color-text)]">
            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(14,165,233,0.15)_0%,_transparent_50%)]" />
            </div>

            <Navbar />

            <main className="relative z-10">
                <div id="home"><Hero /></div>
                <div id="about"><About /></div>
                <div id="education"><Education /></div>
                <div id="skills"><Skills /></div>
                <div id="projects"><Projects /></div>
                <div id="achievements"><Achievements /></div>
            </main>

            <footer className="py-8 text-center text-gray-600 text-xs relative z-10 glass-card mx-4 mt-20 mb-4 uppercase tracking-widest">
                <p>© 2026 Dharani C. Crafted with Anti-Gravity.</p>
            </footer>
        </div>
    );
}

export default App;
