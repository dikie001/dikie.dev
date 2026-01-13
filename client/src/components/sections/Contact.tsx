import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Github, Linkedin, Send, MapPin, ArrowUpRight } from 'lucide-react';

export function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    const contactLinks = [
        { icon: Mail, label: 'Email', value: 'omondidickens255@gmail.com', href: 'mailto:omondidickens255@gmail.com' },
        { icon: Github, label: 'GitHub', value: 'github.com/dikie001', href: 'https://github.com/dikie001' },
        { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/dikie', href: 'https://linkedin.com/in/dikie' },
        { icon: MapPin, label: 'Location', value: 'Open to Remote', href: null },
    ];

    return (
        <section id="contact" className="py-12 lg:py-32 px-4 md:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Animations (Unchanged) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-primary rounded-full blur-[140px]"
                />
                <motion.div
                    animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.06, 0.14, 0.06] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-10 -right-20 w-[350px] h-[350px] bg-primary/60 rounded-full blur-[120px]"
                />
            </div>

            <div className="container max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-10 lg:space-y-16"
                >
                    {/* Section Header */}
                    <div className="text-center space-y-3">
                        <p className="text-primary font-medium text-sm uppercase tracking-wider">Contact</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Let's Connect</h2>
                        <p className="text-muted-foreground max-w-lg mx-auto text-base lg:text-lg">
                            I'm currently open to internship opportunities. Feel free to reach out!
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                        {/* Contact Info - Grid Layout for Mobile Compactness */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-center lg:text-left hidden lg:block">Get in Touch</h3>
                            
                            {/* Grid: 2 columns on mobile, 1 column on desktop */}
                            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-4">
                                {contactLinks.map((link) => (
                                    <motion.div
                                        key={link.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {/* Simplified Card Content for responsiveness */}
                                        <Wrapper href={link.href}>
                                            <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-3 lg:gap-4 w-full overflow-hidden">
                                                <div className="p-2 lg:p-3 rounded-lg bg-primary/10 shrink-0">
                                                    <link.icon className="h-5 w-5 text-primary" />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{link.label}</p>
                                                    <p className="font-medium text-sm lg:text-base truncate group-hover:text-primary transition-colors">
                                                        {link.value}
                                                    </p>
                                                </div>
                                                {link.href && (
                                                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors hidden lg:block ml-auto" />
                                                )}
                                            </div>
                                        </Wrapper>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <Card className="border-primary/15 hover:border-primary/50 shadow-sm">
                            <CardContent className="p-6 lg:p-8">
                                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Name</label>
                                            <Input placeholder="Your name" required className="bg-background/50" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Email</label>
                                            <Input type="email" placeholder="your@email.com" required className="bg-background/50" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Subject</label>
                                        <Input placeholder="What's this about?" className="bg-background/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Message</label>
                                        <Textarea
                                            placeholder="Your message..."
                                            className="min-h-[120px] lg:min-h-[160px] resize-none bg-background/50"
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="w-full" size="lg">
                                        Send Message
                                        <Send className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Helper component to conditionally render <a> or <div> to keep code clean
function Wrapper({ children, href }: { children: React.ReactNode; href: string | null }) {
    const className = "group flex flex-col lg:flex-row items-center justify-between p-4 lg:p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all h-full";
    
    if (href) {
        return (
            <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className={className}>
                {children}
            </a>
        );
    }
    return <div className={className}>{children}</div>;
}