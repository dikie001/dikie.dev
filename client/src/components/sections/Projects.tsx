import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

export function Projects() {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="container py-24 border-t">
            <div className="text-center mb-16 space-y-4">
                <Badge>Portfolio</Badge>
                <h2 className="text-4xl font-bold">Featured Projects</h2>
            </div>

            {/* Featured Projects */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {featuredProjects.map((project, i) => (
                    <Card key={i} className="overflow-hidden border-2 group transition-all hover:border-primary/50">
                        <CardHeader>
                            <div className="flex justify-between mb-4">
                                <project.icon className="h-10 w-10 text-primary" />
                                <Badge variant="secondary">Featured</Badge>
                            </div>
                            <CardTitle className="text-2xl">{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map(t => (
                                    <Badge key={t} variant="outline">{t}</Badge>
                                ))}
                            </div>
                            <div className="grid grid-cols-3 gap-2 bg-secondary/30 p-4 rounded-lg text-center">
                                {Object.entries(project.metrics).map(([k, v]) => (
                                    <div key={k}>
                                        <div className="font-bold">{v}</div>
                                        <div className="text-[10px] uppercase opacity-60">{k}</div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                                View Case Study
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Other Projects */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {otherProjects.map((project, i) => (
                    <Card key={i} className="hover:bg-secondary/10 transition-colors">
                        <CardHeader>
                            <project.icon className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                                {project.description}
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="ghost" size="sm" className="w-full">
                                Details <ArrowRight className="ml-2 h-3 w-3" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}
