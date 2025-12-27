import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { experience } from '@/data/experience';

export function Experience() {
    return (
        <section id="experience" className="py-24 px-4 md:px-6 lg:px-8 bg-secondary/10">
            <div className="container max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    {/* Section Header */}
                    <div className="text-center">
                        <p className="text-primary font-medium mb-2">Journey</p>
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            My Experience
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-8">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 border-l-2 border-primary/30"
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 bg-background ${exp.current ? 'border-primary bg-primary' : 'border-primary/50'
                                    }`} />

                                {/* Content */}
                                <div className="space-y-3">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                                        {exp.current && (
                                            <Badge variant="default" className="text-xs">Current</Badge>
                                        )}
                                    </div>

                                    <div className="flex flex-wrap items-center gap-2 text-sm">
                                        <span className="text-primary font-medium">{exp.company}</span>
                                        <span className="text-muted-foreground">• {exp.period}</span>
                                    </div>

                                    <p className="text-muted-foreground">{exp.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.achievements.map((ach, i) => (
                                            <Badge key={i} variant="outline" className="text-xs">
                                                {ach}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
