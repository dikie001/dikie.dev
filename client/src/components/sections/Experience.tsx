import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { experience } from '@/data/experience';
import { Briefcase } from 'lucide-react';

export function Experience() {
    return (
        <section id="experience" className="py-28 lg:py-32 px-4 md:px-6 lg:px-8 bg-secondary/10">
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-16"
                >
                    {/* Section Header */}
                    <div className="text-center space-y-3">
                        <p className="text-primary font-medium text-sm uppercase tracking-wider">Journey</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                            My Experience
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            My professional journey and key milestones along the way.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-10">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className="relative pl-10 md:pl-12"
                            >
                                {/* Timeline Line */}
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

                                {/* Timeline Dot */}
                                <div className={`absolute left-[-7px] top-0 h-4 w-4 rounded-full border-2 bg-background transition-all ${exp.current
                                        ? 'border-primary bg-primary shadow-lg shadow-primary/30'
                                        : 'border-primary/50'
                                    }`} />

                                {/* Content Card */}
                                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors space-y-4">
                                    {/* Header */}
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-xl font-semibold">{exp.role}</h3>
                                                {exp.current && (
                                                    <Badge className="text-xs">Current</Badge>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <span className="text-primary font-medium">{exp.company}</span>
                                                <span className="text-muted-foreground">•</span>
                                                <span className="text-muted-foreground">{exp.period}</span>
                                            </div>
                                        </div>
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <Briefcase className="h-5 w-5 text-primary" />
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                                    {/* Achievements */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {exp.achievements.map((ach, i) => (
                                            <Badge key={i} variant="outline" className="text-xs px-3 py-1.5 bg-background">
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
