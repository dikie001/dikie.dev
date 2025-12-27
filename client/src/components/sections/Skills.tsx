import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/data/skills';

export function Skills() {
    return (
        <section id="skills" className="py-28 lg:py-32 px-4 md:px-6 lg:px-8 bg-secondary/10 relative overflow-hidden">
            {/* Background Animations */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Subtle floating orb */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.05, 0.12, 0.05],
                        x: [0, 20, 0],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-primary rounded-full blur-[130px]"
                />

                {/* Subtle grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `
                            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <div className="container max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-16"
                >
                    {/* Section Header */}
                    <div className="text-center space-y-3">
                        <p className="text-primary font-medium text-sm uppercase tracking-wider">Skills</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                            What I Work With
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Technologies and tools I use to bring ideas to life.
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid sm:grid-cols-2 gap-10">
                        {Object.entries(skills).map(([category, data], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                className="space-y-5"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-xl">{category}</h3>
                                    <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                                        {data.level}%
                                    </span>
                                </div>

                                {/* Progress Bar */}
                                <div className="h-3 bg-secondary rounded-full overflow-hidden">
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
                                            className="px-3 py-1.5 text-sm bg-background"
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
