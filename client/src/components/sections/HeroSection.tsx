import { Button } from '@/components/ui/button';
import { socialLinks } from '@/data/social-links';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { type activeSectionType } from '@/components/layout';

interface HeroProps {
    scrollToSection: (section: activeSectionType) => void;
}

export function HeroSection({ scrollToSection }: HeroProps) {
    return (
        <section id="home" className="min-h-screen px-4 md:px-6 lg:px-8 flex items-center justify-center pt-14 md:pt-20 relative overflow-hidden">
            {/* === NEW BACKGROUND IMAGE === */}
            <div className="absolute inset-0 z-0 select-none">
                {/* TODO: REPLACE THIS SRC WITH YOUR AI GENERATED IMAGE PATH.
                   Example: src="/images/my-ai-background.jpg" if stored in public/images folder.
                   Using a placeholder that matches the theme for now.
                */}
                <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                    alt="Modern web developer workspace background"
                    className="w-full h-full object-cover object-center"
                />

                {/* Primary Overlay: Essential for text readability. 
                    Adjust the opacity (bg-background/80) if your image is lighter or darker.
                */}
                <div className="absolute inset-0 bg-background/85 mix-blend-hard-light lg:mix-blend-normal"></div>

                 {/* Secondary Gradient Overlay: Keeps focus on the center content */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at center, transparent 10%, hsl(var(--background)) 100%)',
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="container max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 py-16 sm:py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    {/* Greeting */}
                    <p className="text-primary font-medium tracking-wide">
                        Hello there, I'm
                    </p>

                    {/* Name */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
                        <span className='text-primary'>DICKENS</span> OMONDI
                    </h1>

                    {/* Role */}
                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        A Results-oriented  <span className="text-foreground font-medium">Full Stack Developer</span> focused on delivering scalable, high-impact digital solutions.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4">
                        <Button size="lg" onClick={() => scrollToSection('Projects')}>
                            View My Work
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <a href="/DICKENS OMONDI RESUME.pdf" download>
                                <Download className="w-4 h-4" />
                                Download CV
                            </a>
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 sm:p-3 rounded-full border border-border/50 hover:border-primary hover:text-primary transition-colors bg-background/50 backdrop-blur-sm"
                            >
                                <link.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                            </a>
                        ))}
                    </div>
                </motion.div>

                    {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <button
                        onClick={() => scrollToSection('About')}
                        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                        aria-label="Scroll to about section"
                    >
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <div className="w-px h-12 bg-border relative overflow-hidden">
                            <motion.div
                                className="w-full h-8 bg-primary"
                                animate={{ y: [-32, 48] }}
                                transition={{ 
                                    duration: 1.5, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                }}
                            />
                        </div>
                        <ArrowDown className="h-4 w-4" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}