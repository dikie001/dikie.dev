import { Github, Linkedin, Mail, Heart, Sparkles, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: 'https://github.com/dikie001', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/dikie', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:omondidickens255@gmail.com', label: 'Email' },
    ];

    const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'];

    return (
        <footer className="relative border-t border-border/40 bg-background pt-16 pb-8 overflow-hidden">
            {/* Ambient Background Effect */}
            <div className="absolute inset-0 bg-primary/5 [mask-image:linear-gradient(to_bottom,transparent,black)] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                                <Sparkles className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">
                                DIKIE<span className="text-muted-foreground">.DEV</span>
                            </span>
                        </div>
                        <p className="text-muted-foreground max-w-sm leading-relaxed">
                            Crafting pixel-perfect, accessible, and performant digital experiences. 
                            Focused on building modern web applications with cutting-edge technologies.
                        </p>
                        
                        <div className="flex gap-3">
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-colors"
                                    aria-label={link.label}
                                >
                                    <link.icon className="h-5 w-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="lg:col-span-3 lg:col-start-7">
                        <h4 className="font-semibold text-foreground mb-6">Navigation</h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link}>
                                    <a 
                                        href={`#${link.toLowerCase()}`}
                                        className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit"
                                    >
                                        <span className="h-px w-0 bg-primary transition-all group-hover:w-4" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact / Status */}
                    <div className="lg:col-span-3">
                        <h4 className="font-semibold text-foreground mb-6">Get in Touch</h4>
                        <div className="space-y-4">
                            <a 
                                href="mailto:omondidickens255@gmail.com" 
                                className="block text-muted-foreground hover:text-primary transition-colors"
                            >
                                omondidickens255@gmail.com
                            </a>
                            
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Open for Opportunities
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Dickens Omondi. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                            Made with <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" /> in Kenya
                        </span>
                        <a 
                            href="https://github.com/dikie001/portfolio" 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center gap-1 hover:text-foreground transition-colors"
                        >
                            Source Code <ArrowUpRight className="h-3 w-3" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}