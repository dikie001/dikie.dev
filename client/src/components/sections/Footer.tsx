import { Github, Linkedin, Mail, Heart, Sparkles, ArrowUpRight, MapPin, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: 'https://github.com/dikie001', label: 'GitHub', color: 'hover:text-purple-400' },
        { icon: Linkedin, href: 'https://linkedin.com/in/dikie', label: 'LinkedIn', color: 'hover:text-blue-400' },
        { icon: Mail, href: 'mailto:omondidickens255@gmail.com', label: 'Email', color: 'hover:text-green-400' },
    ];

    const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
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
        <footer className="relative border-t border-border/40 bg-gradient-to-b from-background to-background/80 pt-20 pb-8 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <motion.div 
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
                    
                    {/* Brand Section */}
                    <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
                        <div className="group">
                            <div className="flex items-center gap-3 mb-4">
                                <motion.div 
                                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/20"
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Sparkles className="h-5 w-5 text-primary" />
                                </motion.div>
                                <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                                    DIKIE<span className="text-primary">.DEV</span>
                                </span>
                            </div>
                            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm sm:text-base">
                                Crafting pixel-perfect, accessible, and performant digital experiences with modern web technologies and creative innovation.
                            </p>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                    whileHover={{ y: -4, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`group relative p-3 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border/50 text-muted-foreground ${link.color} transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10`}
                                    aria-label={link.label}
                                >
                                    <link.icon className="h-5 w-5 relative z-10" />
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-purple-500/10 transition-all duration-300" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Tech Stack Badge */}
                        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-4">
                            <Code2 className="h-3.5 w-3.5" />
                            <span>Built with React, Tailwind & Framer Motion</span>
                        </div>
                    </motion.div>

                    {/* Navigation Links */}
                    <motion.div variants={itemVariants} className="lg:col-span-3 lg:col-start-7">
                        <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            {navLinks.map((link, index) => (
                                <motion.li 
                                    key={link}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <a 
                                        href={`#${link.toLowerCase()}`}
                                        className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 w-fit"
                                    >
                                        <span className="h-px w-0 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-6" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact / Status */}
                    <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
                        <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Get in Touch</h4>
                        
                        <div className="space-y-4">
                            <a 
                                href="mailto:omondidickens255@gmail.com" 
                                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit"
                            >
                                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                                <span className="text-sm break-all">omondidickens255@gmail.com</span>
                            </a>
                            
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                <MapPin className="h-4 w-4" />
                                <span>Nairobi, Kenya</span>
                            </div>

                            <motion.div 
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400 text-sm font-medium backdrop-blur-sm"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                </span>
                                Open for Opportunities
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div 
                    variants={itemVariants}
                    className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                    <p className="text-sm text-muted-foreground text-center sm:text-left">
                        © {currentYear} Dickens Omondi. All rights reserved.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5 group">
                            Made with 
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                            >
                                <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
                            </motion.div>
                            in Kenya
                        </span>
                        <a 
                            href="https://github.com/dikie001/portfolio" 
                            target="_blank" 
                            rel="noreferrer"
                            className="group flex items-center gap-1.5 hover:text-foreground transition-colors"
                        >
                            <span>View Source</span>
                            <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </motion.div>

                {/* Decorative Line */}
                <motion.div 
                    className="mt-8 h-1 w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                />
            </motion.div>
        </footer>
    );
}