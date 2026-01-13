import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
    Globe,
    Smartphone,
    Server,
    Palette,
    Zap,
    Shield,
    Code2,
    Database
} from 'lucide-react';

const services = [
    {
        icon: Globe,
        title: 'Web Development',
        description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
        features: ['Responsive Design', 'SEO Optimized', 'Fast Loading']
    },
    {
        icon: Smartphone,
        title: 'Mobile-First Design',
        description: 'Applications designed with mobile users in mind, ensuring seamless experiences across all devices.',
        features: ['Touch Friendly', 'Cross-Platform', 'Native Feel']
    },
    {
        icon: Server,
        title: 'Backend Development',
        description: 'Robust server-side solutions with secure APIs, database management, and scalable architecture.',
        features: ['RESTful APIs', 'Database Design', 'Cloud Deploy']
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces that prioritize user experience and brand consistency.',
        features: ['Modern Aesthetics', 'User Research', 'Prototyping']
    },
    {
        icon: Zap,
        title: 'Performance Optimization',
        description: 'Speed up your existing applications with code optimization, caching strategies, and best practices.',
        features: ['Core Web Vitals', 'Code Splitting', 'Image Optimization']
    },
    {
        icon: Shield,
        title: 'Security & Maintenance',
        description: 'Ongoing support, security updates, and maintenance to keep your applications running smoothly.',
        features: ['SSL/HTTPS', 'Regular Updates', '24/7 Monitoring']
    }
];

export function Services() {
    return (
        <section id="services" className="py-28 lg:py-32 px-4 md:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Animations */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Subtle floating orb */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.06, 0.12, 0.06],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-primary rounded-full blur-[150px]"
                />

                {/* Decorative lines */}
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="container max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-16"
                >
                    {/* Section Header */}
                    <div className="text-center space-y-3">
                        <p className="text-primary font-medium text-sm uppercase tracking-wider">What I Do</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                            Services I Offer
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Comprehensive web development solutions tailored to your needs. From concept to deployment, I ensure quality at every step.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="h-full hover:border-primary/50 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/5 bg-background/50 backdrop-blur-sm">
                                    <CardContent className="p-6 space-y-4">
                                        {/* Icon */}
                                        <div className="p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                                            <service.icon className="h-6 w-6 text-primary" />
                                        </div>

                                        {/* Title & Description */}
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {service.features.map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex flex-wrap justify-center gap-8 pt-8"
                    >
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Code2 className="h-5 w-5 text-primary" />
                            <span className="text-sm">Clean, Maintainable Code</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Database className="h-5 w-5 text-primary" />
                            <span className="text-sm">Scalable Architecture</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Zap className="h-5 w-5 text-primary" />
                            <span className="text-sm">Fast Delivery</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
