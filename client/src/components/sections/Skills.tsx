import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/data/skills';

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-secondary/10">
            <div className="container max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    {/* Section Header */}
                    <div className="text-center">
                        <p className="text-primary font-medium mb-2">Skills</p>
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            What I Work With
                        </h2>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid sm:grid-cols-2 gap-8">
                        {Object.entries(skills).map(([category, data], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-lg">{category}</h3>
                                    <span className="text-sm text-primary font-medium">{data.level}%</span>
                                </div>

                                {/* Progress Bar */}
                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${data.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: index * 0.1 }}
                                        className="h-full bg-primary rounded-full"
                                    />
                                </div>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {data.items.map((item) => (
                                        <Badge
                                            key={item}
                                            variant="outline"
                                            className="text-xs"
                                        >
                                            {item}
                                        </Badge>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
