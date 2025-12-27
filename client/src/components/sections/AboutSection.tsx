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
        <section id="about" className="px-4 md:px-6 lg:px-8 py-24">
            <div className="container max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    {/* Section Header */}
                    <div>
                        <p className="text-primary font-medium mb-2">About me</p>
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            Full Stack Developer Focused on Impact
                        </h2>
                    </div>

                    {/* Bio */}
                    <div className=" text-muted-foreground text-lg leading-6 space-y-2 lg:leading-relaxed">
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
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Core Tools & Platforms</h3>

                        <div className="flex flex-wrap gap-2">
                            {visibleStack.map((tech) => (
                                <Badge
                                    key={tech}
                                    variant="secondary"
                                    className="px-3 py-1.5 text-sm"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        <Button
                            variant="link"
                            size="sm"
                            className="cursor-pointer px-4"
                            onClick={() => setShowAll((prev) => !prev)}
                        >
                            {showAll ? 'Show less' : 'View full toolset'}
                        </Button>
                    </div>

                    {/* Quick Facts */}
                    <div className="grid sm:grid-cols-2 gap-4 -mt-2 ">
                        <div className="p-4 rounded-lg bg-secondary/30">
                            <p className="font-medium text-primary">Current Focus</p>
                            <p className="text-muted-foreground">
                                Advanced application architecture, system design
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-secondary/30">
                            <p className="font-medium text-primary">Availability</p>
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
