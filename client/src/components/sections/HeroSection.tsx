import { Button } from '@/components/ui/button';
import { socialLinks } from '@/data/social-links';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { type activeSectionType } from '@/components/layout';
import { useMemo } from 'react';

interface HeroProps {
    scrollToSection: (section: activeSectionType) => void;
}

// Floating particles configuration
const generateParticles = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
    }));
};

// Floating geometric shapes
const floatingShapes = [
    { type: 'circle', size: 60, x: '10%', y: '20%', duration: 25, delay: 0 },
    { type: 'circle', size: 40, x: '85%', y: '15%', duration: 20, delay: 2 },
    { type: 'circle', size: 80, x: '75%', y: '70%', duration: 30, delay: 1 },
    { type: 'ring', size: 100, x: '15%', y: '75%', duration: 22, delay: 3 },
    { type: 'ring', size: 50, x: '90%', y: '45%', duration: 18, delay: 1.5 },
];

export function HeroSection({ scrollToSection }: HeroProps) {
    const particles = useMemo(() => generateParticles(30), []);

    return (
        <section id="home" className="min-h-screen px-4 md:px-6 lg:px-8 flex items-center justify-center pt-20 relative overflow-hidden">
            {/* === BACKGROUND ANIMATIONS === */}
            <div className="absolute inset-0 z-0 pointer-events-none">

                {/* Animated Gradient Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.15, 0.3, 0.15],
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 0.9, 1.2],
                        opacity: [0.1, 0.25, 0.1],
                        x: [0, -40, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-primary/70 rounded-full blur-[140px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.08, 0.18, 0.08],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/50 rounded-full blur-[180px]"
                />

                {/* Subtle Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)
                        `,
                        backgroundSize: '80px 80px',
                    }}
                />

                {/* Scanning Line Effect */}
                <motion.div
                    animate={{
                        y: ['-100%', '200%'],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 3,
                    }}
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                    style={{
                        boxShadow: '0 0 30px 10px hsl(var(--primary) / 0.1)',
                    }}
                />

                {/* Floating Particles */}
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full bg-primary/20"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: particle.size,
                            height: particle.size,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: particle.delay,
                        }}
                    />
                ))}

                {/* Floating Geometric Shapes */}
                {floatingShapes.map((shape, index) => (
                    <motion.div
                        key={index}
                        className={`absolute ${shape.type === 'circle'
                            ? 'bg-primary/5'
                            : 'border border-primary/10 bg-transparent'
                            } rounded-full`}
                        style={{
                            left: shape.x,
                            top: shape.y,
                            width: shape.size,
                            height: shape.size,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            x: [0, 10, 0],
                            rotate: [0, 360],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: shape.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: shape.delay,
                        }}
                    />
                ))}

                {/* Corner Accent Lines */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute top-20 left-10 w-20 h-20 border-l-2 border-t-2 border-primary/20 rounded-tl-lg"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="absolute bottom-20 right-10 w-20 h-20 border-r-2 border-b-2 border-primary/20 rounded-br-lg"
                />

                {/* Radial Gradient Overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 70%)',
                    }}
                />
            </div>

            <div className="container max-w-4xl mx-auto text-center space-y-8 py-20 relative z-10">
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
                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
                        <span className='text-primary'>DICKENS</span> OMONDI
                    </h1>

                    {/* Role */}
                    <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        A results-driven <span className="text-foreground font-medium">Full Stack Developer</span> focused on delivering scalable, high-impact digital solutions.
                    </p>


                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
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
                    <div className="flex justify-center gap-4 pt-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full border border-border/50 hover:border-primary hover:text-primary transition-colors"
                            >
                                <link.icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Stats - Simple Row */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-border/30"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div> */}

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="pt-6"
                >
                    <button
                        onClick={() => scrollToSection('About')}
                        className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowDown className="h-6 w-6" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
