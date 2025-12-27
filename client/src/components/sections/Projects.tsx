import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';

export function Projects() {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="px-4 md:px-6 lg:px-8 py-28 lg:py-32 relative overflow-hidden">
            {/* Background Animations */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Subtle floating orb */}
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.08, 0.15, 0.08],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-primary rounded-full blur-[150px]"
                />

                {/* Decorative corner elements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute top-10 left-10 w-16 h-16 border-l border-t border-primary/10 rounded-tl-lg"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute bottom-10 right-10 w-16 h-16 border-r border-b border-primary/10 rounded-br-lg"
                />
            </div>

            <div className="container max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-16"
                >
                    {/* Section Header */}
                    <div className="text-center space-y-3">
                        <p className="text-primary font-medium text-sm uppercase tracking-wider">Portfolio</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                            Projects I've Built
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            A selection of projects that showcase my skills and passion for building great software.
                        </p>
                    </div>

                    {/* Featured Projects */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="h-full hover:border-primary/50 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/5">
                                    <CardContent className="p-8 space-y-6">
                                        {/* Header */}
                                        <div className="flex items-start justify-between">
                                            <div className="p-3 rounded-xl bg-primary/10">
                                                <project.icon className="h-7 w-7 text-primary" />
                                            </div>
                                            <Badge className="text-xs">Featured</Badge>
                                        </div>

                                        {/* Title & Description */}
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-3 pt-2">
                                            <Button size="sm" variant="outline" className="flex-1">
                                                <Github className="h-4 w-4 mr-2" />
                                                Code
                                            </Button>
                                            <Button size="sm" className="flex-1" asChild>
                                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="h-4 w-4 mr-2" />
                                                    Live Demo
                                                </a>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Other Projects */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold text-center">Other Projects</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {otherProjects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05, duration: 0.4 }}
                                >
                                    <Card className="h-full hover:bg-secondary/30 hover:border-primary/30 transition-all duration-300 cursor-pointer group">
                                        <CardContent className="p-6 space-y-4">
                                            <div className="p-2 rounded-lg bg-primary/10 w-fit">
                                                <project.icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="font-semibold group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h4>
                                                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
