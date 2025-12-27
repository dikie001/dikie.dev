import { Button } from '@/components/ui/button';
import { socialLinks } from '@/data/social-links';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Terminal, Code2 } from 'lucide-react';
import { type activeSectionType } from '@/components/layout';
import { useMemo } from 'react';

interface HeroProps {
    scrollToSection: (section: activeSectionType) => void;
}

// Code snippets for floating animation - adjusted for mobile visibility
const codeSnippets = [
    { text: '<div>', x: '5%', y: '12%', delay: 0 },
    { text: 'const', x: '85%', y: '18%', delay: 1 },
    { text: '{ }', x: '8%', y: '78%', delay: 0.5 },
    { text: '=>', x: '90%', y: '72%', delay: 1.5 },
    { text: '</>', x: '3%', y: '45%', delay: 2 },
    { text: 'npm', x: '92%', y: '45%', delay: 0.8 },
    { text: 'git', x: '88%', y: '85%', delay: 1.2 },
    { text: 'async', x: '6%', y: '88%', delay: 2.5 },
    { text: '( )', x: '4%', y: '28%', delay: 1.8 },
    { text: '.tsx', x: '93%', y: '30%', delay: 0.3 },
    { text: 'fn', x: '10%', y: '60%', delay: 2.2 },
    { text: 'let', x: '88%', y: '58%', delay: 1.1 },
];

// Terminal commands
const terminalLines = [
    { text: 'npm install', delay: 0.5 },
    { text: 'npm run dev', delay: 1.5 },
    { text: '✓ Ready on localhost:3000', delay: 2.5 },
];

export function HeroSection({ scrollToSection }: HeroProps) {
    const binaryDots = useMemo(() =>
        Array.from({ length: 30 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            char: Math.random() > 0.5 ? '1' : '0',
            duration: Math.random() * 12 + 8,
            delay: Math.random() * 3,
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
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 -left-32 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-primary rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1.1, 0.9, 1.1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-20 -right-32 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-primary/70 rounded-full blur-[100px]"
                />

                {/* Code Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `
                            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                    }}
                />

                {/* Floating Code Snippets - Visible on all screens */}
                {codeSnippets.map((snippet, index) => (
                    <motion.div
                        key={index}
                        className="absolute font-mono text-xs sm:text-sm text-primary/30 font-semibold"
                        style={{ left: snippet.x, top: snippet.y }}
                        animate={{
                            y: [0, -10, 0],
                            opacity: [0.2, 0.45, 0.2],
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

                {/* Binary Dots - Visible on all screens */}
                {binaryDots.map((dot) => (
                    <motion.div
                        key={dot.id}
                        className="absolute font-mono text-[10px] sm:text-xs text-primary/20 font-medium"
                        style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.15, 0.4, 0.15],
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

                {/* Mini Terminal Badge - Mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute top-24 left-4 md:hidden"
                >
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                        <Terminal className="h-3 w-3 text-primary" />
                        <motion.span
                            className="font-mono text-[10px] text-primary/70"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            npm run dev
                        </motion.span>
                    </div>
                </motion.div>

                {/* Mini Code Badge - Mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="absolute top-24 right-4 md:hidden"
                >
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                        <Code2 className="h-3 w-3 text-primary" />
                        <span className="font-mono text-[10px] text-primary/70">React.tsx</span>
                    </div>
                </motion.div>

                {/* Terminal Window - Desktop/Tablet */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute left-4 lg:left-[5%] top-[18%] hidden md:block"
                >
                    <div className="w-52 lg:w-64 rounded-lg border border-primary/15 bg-background/60 backdrop-blur-sm overflow-hidden shadow-xl shadow-primary/5">
                        {/* Terminal Header */}
                        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-primary/10 bg-primary/5">
                            <div className="w-2 h-2 rounded-full bg-red-500/60" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                            <div className="w-2 h-2 rounded-full bg-green-500/60" />
                            <span className="ml-2 text-[9px] text-muted-foreground font-mono">terminal</span>
                        </div>
                        {/* Terminal Content */}
                        <div className="p-3 space-y-1">
                            {terminalLines.map((line, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: line.delay, duration: 0.4 }}
                                    className="font-mono text-[10px] lg:text-[11px] text-muted-foreground"
                                >
                                    <span className="text-green-500">$</span> {line.text}
                                </motion.div>
                            ))}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-1.5 h-3 bg-primary/50 ml-2"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Code Editor Window - Desktop/Tablet */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="absolute right-4 lg:right-[5%] top-[22%] hidden md:block"
                >
                    <div className="w-56 lg:w-72 rounded-lg border border-primary/15 bg-background/60 backdrop-blur-sm overflow-hidden shadow-xl shadow-primary/5">
                        {/* Editor Header */}
                        <div className="flex items-center justify-between px-3 py-2 border-b border-primary/10 bg-primary/5">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                                <div className="w-2 h-2 rounded-full bg-green-500/60" />
                            </div>
                            <span className="text-[9px] text-muted-foreground font-mono">Hero.tsx</span>
                        </div>
                        {/* Editor Content */}
                        <div className="p-3 font-mono text-[10px] lg:text-[11px] space-y-0.5">
                            <div className="text-muted-foreground/50">1</div>
                            <div><span className="text-purple-400">export</span> <span className="text-blue-400">function</span> <span className="text-yellow-400">Hero</span>() {'{'}</div>
                            <div className="pl-3"><span className="text-purple-400">return</span> (</div>
                            <div className="pl-6 text-primary/70">&lt;section&gt;</div>
                            <div className="pl-9 text-muted-foreground">// Your content</div>
                            <div className="pl-6 text-primary/70">&lt;/section&gt;</div>
                            <div className="pl-3">)</div>
                            <div>{'}'}</div>
                        </div>
                    </div>
                </motion.div>

                {/* Animated Code Lines - Bottom decoration */}
                <motion.div
                    className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    {['<', '/', 'code', '>'].map((char, idx) => (
                        <motion.span
                            key={idx}
                            className="font-mono text-lg sm:text-xl text-primary/15 font-light"
                            animate={{ opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Corner Tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute top-20 left-4 sm:left-8 font-mono text-primary/15 text-xs sm:text-sm"
                >
                    {'<body>'}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute bottom-28 sm:bottom-20 right-4 sm:right-8 font-mono text-primary/15 text-xs sm:text-sm"
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
                    {/* Greeting with terminal style */}
                    <motion.p
                        className="text-primary font-medium tracking-wide font-mono text-sm sm:text-base"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="text-muted-foreground">{'>'}</span> Hello, I'm
                    </motion.p>

                    {/* Name */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
                        <span className='text-primary'>DICKENS</span> OMONDI
                    </h1>

                    {/* Role with code styling */}
                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
                        A results-driven <span className="text-foreground font-medium">Full Stack Developer</span> focused on delivering scalable, high-impact digital solutions.
                    </p>

                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-sm text-green-600 dark:text-green-400 font-medium">Available for work</span>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4">
                        <Button size="lg" onClick={() => scrollToSection('Projects')} className="text-sm sm:text-base">
                            View My Work
                        </Button>
                        <Button variant="outline" size="lg" asChild className="text-sm sm:text-base">
                            <a href="/DICKENS OMONDI RESUME.pdf" download>
                                <Download className="w-4 h-4" />
                                Download CV
                            </a>
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 sm:p-3 rounded-full border border-border/50 hover:border-primary hover:text-primary transition-all hover:scale-110"
                                whileHover={{ y: -2 }}
                            >
                                <link.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="pt-4 sm:pt-6"
                >
                    <button
                        onClick={() => scrollToSection('About')}
                        className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
