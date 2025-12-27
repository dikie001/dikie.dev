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
    { text: '<div>', x: '8%', y: '15%', size: 'text-xs', delay: 0 },
    { text: 'const', x: '85%', y: '20%', size: 'text-sm', delay: 1 },
    { text: '{ }', x: '12%', y: '75%', size: 'text-lg', delay: 0.5 },
    { text: '=>', x: '88%', y: '65%', size: 'text-base', delay: 1.5 },
    { text: '</>', x: '5%', y: '45%', size: 'text-sm', delay: 2 },
    { text: 'npm', x: '92%', y: '40%', size: 'text-xs', delay: 0.8 },
    { text: '[ ]', x: '15%', y: '85%', size: 'text-sm', delay: 1.2 },
    { text: 'async', x: '80%', y: '80%', size: 'text-xs', delay: 2.5 },
    { text: '( )', x: '3%', y: '60%', size: 'text-base', delay: 1.8 },
    { text: '.tsx', x: '90%', y: '12%', size: 'text-xs', delay: 0.3 },
];

// Terminal-like typing lines
const terminalLines = [
    'npm run dev',
    'git commit -m "feat: add hero"',
    'Building...',
    '✓ Ready',
];

// Floating bracket pairs
const brackets = [
    { open: '{', close: '}', x: '20%', y: '25%', size: 80, delay: 0 },
    { open: '<', close: '>', x: '75%', y: '70%', size: 60, delay: 1.5 },
    { open: '[', close: ']', x: '70%', y: '25%', size: 50, delay: 3 },
];

export function HeroSection({ scrollToSection }: HeroProps) {
    const binaryDots = useMemo(() =>
        Array.from({ length: 40 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            char: Math.random() > 0.5 ? '1' : '0',
            duration: Math.random() * 15 + 10,
            delay: Math.random() * 5,
        })), []
    );

    return (
        <section id="home" className="min-h-screen px-4 md:px-6 lg:px-8 flex items-center justify-center pt-20 relative overflow-hidden">
            {/* === DEVELOPER-THEMED BACKGROUND === */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none">

                {/* Gradient Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.1, 0.9, 1.1],
                        opacity: [0.08, 0.18, 0.08],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary/60 rounded-full blur-[130px]"
                />

                {/* Code Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                    }}
                />

                {/* Floating Code Snippets */}
                {codeSnippets.map((snippet, index) => (
                    <motion.div
                        key={index}
                        className={`absolute font-mono ${snippet.size} text-primary/20 font-medium`}
                        style={{ left: snippet.x, top: snippet.y }}
                        animate={{
                            y: [0, -15, 0],
                            opacity: [0.15, 0.35, 0.15],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: snippet.delay,
                        }}
                    >
                        {snippet.text}
                    </motion.div>
                ))}

                {/* Animated Brackets */}
                {brackets.map((bracket, index) => (
                    <div
                        key={index}
                        className="absolute hidden md:block"
                        style={{ left: bracket.x, top: bracket.y }}
                    >
                        <motion.div
                            className="relative font-mono text-primary/10 font-light"
                            style={{ fontSize: bracket.size }}
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.08, 0.15, 0.08],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: bracket.delay,
                            }}
                        >
                            <span>{bracket.open}</span>
                            <motion.span
                                className="inline-block mx-2"
                                animate={{ opacity: [0.3, 0.8, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: bracket.delay }}
                            >
                                _
                            </motion.span>
                            <span>{bracket.close}</span>
                        </motion.div>
                    </div>
                ))}

                {/* Binary/Code Rain - subtle floating characters */}
                {binaryDots.map((dot) => (
                    <motion.div
                        key={dot.id}
                        className="absolute font-mono text-[10px] text-primary/15"
                        style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.1, 0.3, 0.1],
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

                {/* Terminal Window - Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute left-[5%] top-[20%] hidden lg:block"
                >
                    <div className="w-64 rounded-lg border border-primary/10 bg-background/50 backdrop-blur-sm overflow-hidden opacity-40">
                        {/* Terminal Header */}
                        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-primary/10 bg-primary/5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                            <span className="ml-2 text-[10px] text-muted-foreground font-mono">terminal</span>
                        </div>
                        {/* Terminal Content */}
                        <div className="p-3 space-y-1.5">
                            {terminalLines.map((line, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 + idx * 0.8 }}
                                    className="font-mono text-[11px] text-primary/60"
                                >
                                    <span className="text-green-500/60">$</span> {line}
                                </motion.div>
                            ))}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="inline-block w-2 h-3 bg-primary/40"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Code Editor Window - Right Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="absolute right-[5%] top-[25%] hidden lg:block"
                >
                    <div className="w-72 rounded-lg border border-primary/10 bg-background/50 backdrop-blur-sm overflow-hidden opacity-40">
                        {/* Editor Header */}
                        <div className="flex items-center justify-between px-3 py-2 border-b border-primary/10 bg-primary/5">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-[10px] text-muted-foreground font-mono">App.tsx</span>
                        </div>
                        {/* Editor Content */}
                        <div className="p-3 font-mono text-[11px] space-y-1">
                            <div><span className="text-purple-400/60">const</span> <span className="text-blue-400/60">App</span> = () =&gt; {'{'}</div>
                            <div className="pl-4"><span className="text-purple-400/60">return</span> (</div>
                            <div className="pl-8"><span className="text-primary/50">&lt;Hero /&gt;</span></div>
                            <div className="pl-4">)</div>
                            <div>{'}'}</div>
                            <motion.div
                                animate={{ opacity: [0.3, 0.8, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="text-primary/60"
                            >
                                |
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Corner Decorations */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="absolute top-20 left-8 font-mono text-primary/10 text-sm hidden md:block"
                >
                    {'<html>'}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-20 right-8 font-mono text-primary/10 text-sm hidden md:block"
                >
                    {'</html>'}
                </motion.div>

                {/* Radial Gradient Overlay - keeps center clear */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 65%)',
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="container max-w-4xl mx-auto text-center space-y-8 py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    {/* Greeting */}
                    <p className="text-primary font-medium tracking-wide font-mono">
                        {'>'} Hello there, I'm
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
