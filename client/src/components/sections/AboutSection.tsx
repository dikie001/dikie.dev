import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function AboutSection() {
    const techStack = [
        'React', 'TypeScript', 'Tailwind CSS', 'Node.js',
        'Express', 'PostgreSQL', 'Prisma', 'MongoDB', 'Mongoose'
    ];

    const DEFAULT_VISIBLE = 4;
    const [showAll, setShowAll] = useState(false);

    const visibleStack = showAll
        ? techStack
        : techStack.slice(0, DEFAULT_VISIBLE);

    return (
        <section id="about" className="px-4 md:px-6 lg:px-8 py-28 lg:py-32">
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-10"
                >
                    {/* Section Header */}
                    <div className="space-y-3">
                        <p className="text-primary font-medium text-sm uppercase tracking-wider">About me</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                            Full Stack Developer <br className="hidden sm:block" />
                            <span className="text-muted-foreground">Focused on Impact</span>
                        </h2>
                    </div>

                    {/* Bio */}
                    <div className="text-muted-foreground text-lg lg:text-xl leading-relaxed space-y-4 max-w-3xl">
                        <p>
                            I design and build reliable, maintainable web applications with a strong emphasis
                            on clarity, performance, and long-term scalability.
                        </p>
                        <p>
                            My work centers on solving real problems by translating complex requirements
                            into clean, production-ready systems.
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Core Tools & Platforms</h3>

                        <div className="flex flex-wrap gap-2">
                            {visibleStack.map((tech) => (
                                <Badge
                                    key={tech}
                                    variant="secondary"
                                    className="px-4 py-2 text-sm font-medium"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        <Button
                            variant="link"
                            size="sm"
                            className="cursor-pointer px-0 text-primary"
                            onClick={() => setShowAll((prev) => !prev)}
                        >
                            {showAll ? 'Show less' : 'View full toolset →'}
                        </Button>
                    </div>

                    {/* Quick Facts */}
                    <div className="grid sm:grid-cols-2 gap-4 pt-4">
                        <div className="p-6 rounded-xl bg-card border border-border">
                            <p className="font-semibold text-primary mb-2">Current Focus</p>
                            <p className="text-muted-foreground">
                                Advanced application architecture, system design
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-card border border-border">
                            <p className="font-semibold text-primary mb-2">Availability</p>
                            <p className="text-muted-foreground">
                                Entry-level roles, internships, selective collaborations
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
