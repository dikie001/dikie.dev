import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { stats } from '@/data/social-links';

interface HeroProps {
    scrollToSection: (section: string) => void;
}

export function HeroSection({ scrollToSection }: HeroProps) {
    return (
        <section id="home" className="container py-24 lg:py-32 text-center space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Badge variant="outline" className="mb-4 py-1 px-4 border-primary/50 text-primary">
                    <Sparkles className="mr-2 h-3 w-3 animate-pulse" />
                    Available for opportunities
                </Badge>
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-6">
                    Full Stack Developer & <br />
                    <span className="text-muted-foreground">Solution Architect</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl mb-10">
                    Transforming ideas into scalable, high-performance applications. Specialized in modern web technologies and cloud architecture.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" onClick={() => scrollToSection('Projects')}>
                        View Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => scrollToSection('Contact')}>
                        <Mail className="mr-2 h-4 w-4" /> Get in Touch
                    </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
                    {stats.map((stat, i) => (
                        <Card key={i} className="bg-secondary/20 border-none shadow-none">
                            <CardContent className="p-6">
                                <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                                <div className="text-3xl font-bold">{stat.value}</div>
                                <div className="text-xs text-muted-foreground uppercase">{stat.label}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
