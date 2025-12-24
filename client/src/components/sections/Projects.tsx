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
        <section id="projects" className="py-24">
            <div className="container max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    {/* Section Header */}
                    <div className="text-center">
                        <p className="text-primary font-medium mb-2">Portfolio</p>
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            Projects I've Built
                        </h2>
                    </div>

                    {/* Featured Projects */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:border-primary/50 transition-colors group">
                                    <CardContent className="p-6 space-y-4">
                                        {/* Header */}
                                        <div className="flex items-start justify-between">
                                            <div className="p-2 rounded-lg bg-primary/10">
                                                <project.icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <Badge>Featured</Badge>
                                        </div>

                                        {/* Title & Description */}
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Tech Stack */}
                                        {/* <div className="flex flex-wrap gap-1.5">
                                            {project.tech.map((tech) => (
                                                <Badge key={tech} variant="secondary" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div> */}

                                        {/* Links */}
                                        <div className="flex gap-2 pt-2">
                                            <Button size="sm" variant="outline" className="flex-1">
                                                <Github className="h-4 w-4 mr-2" />
                                                Code
                                            </Button>
                                            <Button size="sm" className="flex-1">
                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                Demo
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Other Projects */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-center">Other Projects</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {otherProjects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Card className="h-full hover:bg-secondary/20 transition-colors cursor-pointer">
                                        <CardContent className="p-4 space-y-2">
                                            <project.icon className="h-5 w-5 text-primary" />
                                            <h4 className="font-medium">{project.title}</h4>
                                            <p className="text-xs text-muted-foreground line-clamp-2">
                                                {project.description}
                                            </p>
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
