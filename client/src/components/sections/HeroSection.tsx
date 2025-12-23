import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks, stats } from '@/data/social-links';

interface HeroProps {
    scrollToSection: (section: string) => void;
}

export function HeroSection({ scrollToSection }: HeroProps) {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
            <div className="container max-w-4xl text-center space-y-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    {/* Greeting */}
                    <p className="text-primary font-medium tracking-wide">
                        Hey there, I'm
                    </p>

                    {/* Name */}
                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
                        Dikie
                    </h1>

                    {/* Role */}
                    <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        A passionate <span className="text-foreground font-medium">Full Stack Developer</span> building
                        modern web applications with React, TypeScript, and Node.js
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <Button size="lg" onClick={() => scrollToSection('Projects')}>
                            View My Work
                        </Button>
                        <Button size="lg" variant="outline" onClick={() => scrollToSection('Contact')}>
                            Get In Touch
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
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-16 border-t border-border/30"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="pt-12"
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
