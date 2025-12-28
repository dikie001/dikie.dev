import { Button } from '@/components/ui/button';
import { socialLinks } from '@/data/social-links';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { type activeSectionType } from '@/components/layout';
import { useMemo } from 'react';

interface HeroProps {
    scrollToSection: (section: activeSectionType) => void;
}

// Code snippets for floating animation
const codeSnippets = [
    { text: '<div>', x: '5%', y: '12%', delay: 0 },
    { text: 'const', x: '88%', y: '15%', delay: 1 },
    { text: '{ }', x: '8%', y: '80%', delay: 0.5 },
    { text: '=>', x: '92%', y: '75%', delay: 1.5 },
    { text: '</>', x: '3%', y: '50%', delay: 2 },
    { text: 'npm', x: '94%', y: '50%', delay: 0.8 },
    { text: 'git', x: '90%', y: '88%', delay: 1.2 },
    { text: 'async', x: '6%', y: '90%', delay: 2.5 },
    { text: '( )', x: '4%', y: '30%', delay: 1.8 },
    { text: '.tsx', x: '95%', y: '28%', delay: 0.3 },
    { text: 'fn', x: '7%', y: '65%', delay: 2.2 },
    { text: 'let', x: '91%', y: '62%', delay: 1.1 },
];

// Terminal simulation
const terminalLines = [
    { text: 'git commit -m "feat: add hero section"', delay: 0.4 },
    { text: 'pnpm install', delay: 0.9 },
    { text: 'pnpm build', delay: 1.7 },
    { text: 'pnpm deploy', delay: 2.6 },
    { text: '✓ Build promoted · Production ready', delay: 3.4 },
];

export function HeroSection({ scrollToSection }: HeroProps) {
    const binaryDots = useMemo(() =>
        Array.from({ length: 25 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            char: Math.random() > 0.5 ? '1' : '0',
            duration: Math.random() * 12 + 8,
            delay: Math.random() * 3,
        })), []
    );

    return (
        <section id="home" className="min-h-screen px-4 md:px-6 lg:px-8 flex items-center justify-center pt-14 md:pt-20 relative overflow-hidden">
            {/* === DEVELOPER-THEMED BACKGROUND === */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none">

                {/* Gradient Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 -left-32 w-[400px] h-[400px] bg-primary rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1.1, 0.9, 1.1],
                        opacity: [0.08, 0.15, 0.08],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-20 -right-32 w-[400px] h-[400px] bg-primary/70 rounded-full blur-[100px]"
                />

                {/* Code Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                    }}
                />

                {/* Floating Code Snippets */}
                {codeSnippets.map((snippet, index) => (
                    <motion.div
                        key={index}
                        className="absolute font-mono text-[10px] sm:text-xs text-primary/20 font-medium"
                        style={{ left: snippet.x, top: snippet.y }}
                        animate={{
                            y: [0, -8, 0],
                            opacity: [0.15, 0.3, 0.15],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: snippet.delay,
                        }}
                    >
                        {snippet.text}
                    </motion.div>
                ))}

                {/* Binary Dots */}
                {binaryDots.map((dot) => (
                    <motion.div
                        key={dot.id}
                        className="absolute font-mono text-[8px] sm:text-[10px] text-primary/15"
                        style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
                        animate={{
                            y: [0, -15, 0],
                            opacity: [0.1, 0.25, 0.1],
                        }}
                        transition={{
                            duration: dot.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: dot.delay,
                        }}
                    >
                        {dot.char}
                    </motion.div>
                ))}

                {/* Terminal Window - Positioned at bottom-left on all screens */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute bottom-4 sm:bottom-28 left-4 sm:left-6 lg:left-[5%] lg:top-[20%] lg:bottom-auto"
                >
                    <div className="w-44 sm:w-52 lg:w-64 rounded-lg border border-primary/10 bg-background/40 backdrop-blur-sm overflow-hidden opacity-60 lg:opacity-80">
                        {/* Terminal Header */}
                        <div className="flex items-center gap-1 px-2 sm:px-3 py-1.5 border-b border-primary/10 bg-primary/5">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500/50" />
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500/50" />
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500/50" />
                            <span className="ml-1.5 text-[8px] sm:text-[9px] text-muted-foreground font-mono">terminal</span>
                        </div>
                        {/* Terminal Content */}
                        <div className="p-2 sm:p-3 space-y-0.5 sm:space-y-1">
                            {terminalLines.map((line, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: line.delay, duration: 0.4 }}
                                    className="font-mono text-[9px] sm:text-[10px] lg:text-[11px] text-muted-foreground/80"
                                >
                                    <span className="text-green-500/70">$</span> {line.text}
                                </motion.div>
                            ))}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-1 h-2.5 bg-primary/40 ml-2"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Code Editor Window - Desktop only, right side */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="absolute right-[2%] xl:right-[3%] 2xl:right-[5%] top-[42%] hidden lg:block"
                >
                    <div className="w-72 rounded-lg border border-primary/10 bg-background/40 backdrop-blur-sm overflow-hidden opacity-80">
                        {/* Editor Header */}
                        <div className="flex items-center justify-between px-3 py-1.5 border-b border-primary/10 bg-primary/5">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-[9px] text-muted-foreground font-mono">Hero.tsx</span>
                        </div>
                        {/* Editor Content */}
                        <div className="p-3 font-mono text-[11px] space-y-0.5 text-muted-foreground/70">
                            <div><span className="text-purple-400/70">export</span> <span className="text-blue-400/70">function</span> <span className="text-yellow-400/70">Hero</span>() {'{'}</div>
                            <div className="pl-3"><span className="text-purple-400/70">return</span> (</div>
                            <div className="pl-6 text-primary/50">&lt;section&gt;</div>
                            <div className="pl-9 text-muted-foreground/50">dikie.dev</div>
                            <div className="pl-6 text-primary/50">&lt;/section&gt;</div>
                            <div className="pl-3">)</div>
                            <div>{'}'}</div>
                        </div>
                    </div>
                </motion.div>

                {/* Corner Tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute top-20 left-4 font-mono text-primary/10 text-[10px] sm:text-xs"
                >
                    {'<body>'}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute bottom-20 right-4 font-mono text-primary/10 text-[10px] sm:text-xs"
                >
                    {'</body>'}
                </motion.div>

                {/* Radial Gradient Overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 70%)',
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
                                className="p-2.5 sm:p-3 rounded-full border border-border/50 hover:border-primary hover:text-primary transition-colors"
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
                    transition={{ delay: 0.8 }}
                    className="pt-4 sm:pt-6"
                >
                    <button
                        onClick={() => scrollToSection('About')}
                        className="animate-bounce  text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
