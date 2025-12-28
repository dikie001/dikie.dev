import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: 'https://github.com/dikie001', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/dikie', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:omondidickens255@gmail.com', label: 'Email' },
    ];

    const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'];

    return (
        <footer className="py-16 border-t border-border px-4 md:px-6 lg:px-8 bg-background">
            <div className="container max-w-6xl mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-2xl font-bold">
                            <span className="text-primary">DICKENS</span> OMONDI
                        </h3>
                        <p className="text-muted-foreground max-w-md">
                            Full Stack Developer passionate about building digital experiences that make a difference.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-2">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
                                    aria-label={link.label}
                                >
                                    <link.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Navigation</h4>
                        <nav className="flex flex-col lg:grid lg:grid-cols-2 gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {link}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Contact</h4>
                        <div className="space-y-2 text-muted-foreground">
                            <p>omondidickens255@gmail.com</p>
                            <p>Open to Remote Work</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground text-center sm:text-left">
                        © {currentYear} dikie.dev • All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                        Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using React & TypeScript
                    </p>
                </div>
            </div>
        </footer>
    );
}
