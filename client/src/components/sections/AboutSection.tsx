import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export function AboutSection() {
    const techStack = [
        'React', 'TypeScript', 'Tailwind CSS', 'Node.js',
        'Express', 'PostgreSQL', 'Prisma', 'MongoDB', 'Mongoose'
    ];

    return (
        <section id="about" className="py-24">
            <div className="container max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    {/* Section Header */}
                    <div>
                        <p className="text-primary font-medium mb-2">About</p>
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            Full Stack Developer Focused on Impact
                        </h2>
                    </div>

                    {/* Bio */}
                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                        <p>
                            I design and build reliable, maintainable web applications with a strong emphasis
                            on clarity, performance, and long-term scalability.
                        </p>
                        <p>
                            My work is driven by problem-solving—translating complex requirements into clean,
                            functional systems that deliver real value to users and stakeholders.
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Core Tools & Platforms</h3>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech) => (
                                <Badge
                                    key={tech}
                                    variant="secondary"
                                    className="px-3 py-1.5 text-sm"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Quick Facts */}
                    <div className="grid sm:grid-cols-2 gap-4 pt-4">
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
