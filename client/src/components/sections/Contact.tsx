import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';

export function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Animations */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Subtle floating orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.08, 0.16, 0.08],
                    }}
                    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-primary rounded-full blur-[140px]"
                />
                <motion.div
                    animate={{
                        scale: [1.1, 0.9, 1.1],
                        opacity: [0.06, 0.14, 0.06],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-10 -right-20 w-[350px] h-[350px] bg-primary/60 rounded-full blur-[120px]"
                />

                {/* Decorative corner elements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-primary/15 rounded-tr-lg"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-primary/15 rounded-bl-lg"
                />
            </div>

            <div className="container max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    {/* Section Header */}
                    <div className="text-center space-y-4">
                        <p className="text-primary font-medium">Contact</p>
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            Let's Connect
                        </h2>
                        <p className="text-muted-foreground max-w-lg mx-auto">
                            I'm currently open to internship opportunities and collaborations.
                            Feel free to reach out!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <a
                                    href="mailto:dikie@example.com"
                                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                                >
                                    <Mail className="h-5 w-5 text-primary" />
                                    <span>dikie@example.com</span>
                                </a>

                                <a
                                    href="https://github.com/dikie001"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                                >
                                    <Github className="h-5 w-5 text-primary" />
                                    <span>github.com/dikie001</span>
                                </a>

                                <a
                                    href="https://linkedin.com/in/dikie"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                                >
                                    <Linkedin className="h-5 w-5 text-primary" />
                                    <span>linkedin.com/in/dikie</span>
                                </a>

                                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    <span>Open to Remote Work</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <Input placeholder="Your Name" required />
                            <Input type="email" placeholder="Your Email" required />
                            <Input placeholder="Subject" />
                            <Textarea
                                placeholder="Your Message"
                                className="min-h-[140px] resize-none"
                                required
                            />
                            <Button type="submit" className="w-full">
                                Send Message
                                <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
