import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { socialLinks } from '@/data/social-links';

export function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <section id="contact" className="container py-24 border-t">
            <div className="max-w-4xl mx-auto">
                <Card className="border-2 border-primary/20">
                    <CardHeader className="text-center">
                        <h2 className="text-3xl font-bold">Get In Touch</h2>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <div className="space-y-4">
                            <div className="p-4 rounded-lg bg-secondary/30 flex items-center gap-3">
                                <Mail className="text-primary" />
                                <span>dikie@example.com</span>
                            </div>
                            <div className="p-4 rounded-lg bg-secondary/30 flex items-center gap-3">
                                <Linkedin className="text-primary" />
                                <span>linkedin.com/in/dikie</span>
                            </div>
                            <div className="p-4 rounded-lg bg-secondary/30 flex items-center gap-3">
                                <Github className="text-primary" />
                                <span>github.com/dikie</span>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <Input placeholder="Name" />
                            <Input type="email" placeholder="Email" />
                            <Textarea placeholder="Message" className="min-h-[120px]" />
                            <Button className="w-full">
                                Send Message <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
