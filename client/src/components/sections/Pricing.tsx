import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Sparkles, ArrowRight } from 'lucide-react';

const pricingPlans = [
    {
        name: 'Starter',
        description: 'Perfect for personal projects and small businesses getting started online.',
        price: 499,
        period: 'one-time',
        popular: false,
        features: [
            { name: 'Up to 5 pages', included: true },
            { name: 'Responsive design', included: true },
            { name: 'Basic SEO setup', included: true },
            { name: 'Contact form', included: true },
            { name: '1 month support', included: true },
            { name: 'CMS integration', included: false },
            { name: 'Custom animations', included: false },
            { name: 'E-commerce features', included: false },
        ],
        cta: 'Get Started'
    },
    {
        name: 'Professional',
        description: 'Ideal for growing businesses that need a robust online presence.',
        price: 1499,
        period: 'one-time',
        popular: true,
        features: [
            { name: 'Up to 15 pages', included: true },
            { name: 'Responsive design', included: true },
            { name: 'Advanced SEO setup', included: true },
            { name: 'Contact & booking forms', included: true },
            { name: '3 months support', included: true },
            { name: 'CMS integration', included: true },
            { name: 'Custom animations', included: true },
            { name: 'E-commerce features', included: false },
        ],
        cta: 'Most Popular'
    },
    {
        name: 'Enterprise',
        description: 'Full-scale solutions for businesses requiring complete digital transformation.',
        price: 3999,
        period: 'one-time',
        popular: false,
        features: [
            { name: 'Unlimited pages', included: true },
            { name: 'Responsive design', included: true },
            { name: 'Full SEO optimization', included: true },
            { name: 'Advanced forms & integrations', included: true },
            { name: '6 months support', included: true },
            { name: 'Custom CMS/Admin panel', included: true },
            { name: 'Premium animations', included: true },
            { name: 'Full e-commerce features', included: true },
        ],
        cta: 'Contact Me'
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="py-28 lg:py-32 px-4 md:px-6 lg:px-8 bg-secondary/10 relative overflow-hidden">
            {/* Background Animations */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Gradient orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-40 right-1/4 w-[400px] h-[400px] bg-primary rounded-full blur-[130px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.04, 0.08, 0.04],
                    }}
                    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-primary rounded-full blur-[120px]"
                />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `
                            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
                        `,
                        backgroundSize: '80px 80px',
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
                        <p className="text-primary font-medium text-sm uppercase tracking-wider">Pricing</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                            Transparent Pricing
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Choose a package that fits your needs. All prices include design, development, and initial deployment.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="relative"
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                        <Badge className="bg-primary text-primary-foreground px-4 py-1 shadow-lg">
                                            <Sparkles className="h-3 w-3 mr-1" />
                                            Most Popular
                                        </Badge>
                                    </div>
                                )}
                                <Card className={`h-full transition-all duration-300 hover:shadow-xl ${plan.popular
                                        ? 'border-primary/50 shadow-lg shadow-primary/10 scale-[1.02]'
                                        : 'hover:border-primary/30 hover:shadow-primary/5'
                                    }`}>
                                    <CardHeader className="text-center pb-4 pt-8">
                                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                                        <p className="text-muted-foreground text-sm mt-2 min-h-[40px]">
                                            {plan.description}
                                        </p>
                                        <div className="pt-4">
                                            <span className="text-4xl lg:text-5xl font-bold">${plan.price}</span>
                                            <span className="text-muted-foreground ml-2">/{plan.period}</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        {/* Features List */}
                                        <ul className="space-y-3">
                                            {plan.features.map((feature) => (
                                                <li
                                                    key={feature.name}
                                                    className={`flex items-center gap-3 text-sm ${feature.included ? '' : 'text-muted-foreground/60'
                                                        }`}
                                                >
                                                    {feature.included ? (
                                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                                            <Check className="h-3 w-3 text-primary" />
                                                        </div>
                                                    ) : (
                                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                                                            <X className="h-3 w-3 text-muted-foreground/50" />
                                                        </div>
                                                    )}
                                                    <span className={feature.included ? '' : 'line-through'}>
                                                        {feature.name}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA Button */}
                                        <Button
                                            className={`w-full group ${plan.popular ? '' : 'variant-outline'}`}
                                            variant={plan.popular ? 'default' : 'outline'}
                                        >
                                            {plan.cta}
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
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
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-center space-y-4"
                    >
                        <p className="text-muted-foreground text-sm">
                            Need something custom? <span className="text-primary font-medium">Let's discuss your project</span> and create a tailored solution.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-primary" />
                                Free consultation
                            </span>
                            <span className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-primary" />
                                No hidden fees
                            </span>
                            <span className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-primary" />
                                Flexible payment plans
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
