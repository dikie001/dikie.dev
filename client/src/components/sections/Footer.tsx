import { Github, Linkedin, Mail, Heart, Sparkles, ArrowUpRight, MapPin, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const SOCIAL_LINKS = [
    { icon: Github, href: 'https://github.com/dikie001', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/dikie', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:omondidickens255@gmail.com', label: 'Email' },
];

const NAV_LINKS = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'];

export function Footer() {
    const currentYear = new Date().getFullYear();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <footer className="relative border-t border-border bg-background pt-20 pb-8 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <motion.div
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">

                    {/* Brand Identity */}
                    <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                                <Sparkles className="h-5 w-5 text-primary" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">
                                DIKIE<span className="text-primary">.DEV</span>
                            </span>
                        </div>
                        <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                            Crafting pixel-perfect, accessible, and performant digital experiences with modern web technologies.
                        </p>

                        <div className="flex gap-3 pt-2">
                            {SOCIAL_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                                    aria-label={link.label}
                                >
                                    <link.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-xs text-muted-foreground border-l-2 border-primary/20 pl-3">
                            <Code2 className="h-3.5 w-3.5" />
                            <span>React • Tailwind • Framer Motion</span>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="lg:col-span-3 lg:col-start-7">
                        <h4 className="font-semibold text-foreground mb-6 text-sm">QUICK LINKS</h4>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="h-px w-2 bg-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
                        <h4 className="font-semibold text-foreground mb-6 text-sm">GET IN TOUCH</h4>
                        <div className="space-y-4">
                            <a
                                href="mailto:omondidickens255@gmail.com"
                                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                            >
                                <Mail className="h-4 w-4" />
                                <span className="underline decoration-border group-hover:decoration-primary underline-offset-4 transition-all">
                                    omondidickens255@gmail.com
                                </span>
                            </a>

                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>Nairobi, Kenya</span>
                            </div>

                            <div className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Open for Opportunities
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="h-px w-full bg-border" />

                {/* Footer Bottom */}
                <motion.div
                    variants={itemVariants}
                    className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground"
                >
                    <p>© {currentYear} Dickens Omondi. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1">
                            Made with <Heart className="h-3 w-3 text-red-500 fill-red-500 mx-1" /> in Kenya
                        </span>
                        <a
                            href="https://github.com/dikie001/portfolio"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1 hover:text-foreground transition-colors"
                        >
                            View Source <ArrowUpRight className="h-3 w-3" />
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
}