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
                        <p className="text-primary font-medium mb-2">About Me</p>
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            Student Developer with a Passion for Building
                        </h2>
                    </div>

                    {/* Bio */}
                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                        <p>
                            I'm a student developer focused on creating clean, functional web applications.
                            I love turning ideas into reality through code and I'm always learning new technologies.
                        </p>
                        <p>
                            My journey in web development started with curiosity about how websites work,
                            and it has grown into a genuine passion for building full-stack applications
                            that solve real problems.
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Technologies I work with:</h3>
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
                            <p className="font-medium text-primary">Currently Learning</p>
                            <p className="text-muted-foreground">Advanced React patterns, System Design</p>
                        </div>
                        <div className="p-4 rounded-lg bg-secondary/30">
                            <p className="font-medium text-primary">Open To</p>
                            <p className="text-muted-foreground">Internships, Junior roles, Collaborations</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
