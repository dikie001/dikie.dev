import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Sparkles, Zap, Rocket } from 'lucide-react';

interface PricingTier {
    name: string;
    description: string;
    priceKES: number;
    priceUSD: number;
    features: string[];
    highlighted?: boolean;
    icon: React.ElementType;
    badge?: string;
}

const pricingTiers: PricingTier[] = [
    {
        name: 'Starter',
        description: 'Perfect for small businesses and personal projects',
        priceKES: 25000,
        priceUSD: 195,
        icon: Zap,
        features: [
            'Single page responsive website',
            'Mobile-first design',
            'Basic SEO optimization',
            'Contact form integration',
            '1 round of revisions',
            '7 days delivery',
        ],
    },
    {
        name: 'Professional',
        description: 'Ideal for growing businesses and startups',
        priceKES: 65000,
        priceUSD: 499,
        icon: Sparkles,
        highlighted: true,
        badge: 'Most Popular',
        features: [
            'Up to 5 pages website',
            'Custom UI/UX design',
            'Advanced SEO optimization',
            'CMS integration',
            'Performance optimization',
            'Social media integration',
            '3 rounds of revisions',
            '14 days delivery',
            '1 month free support',
        ],
    },
    {
        name: 'Enterprise',
        description: 'Full-scale solutions for established businesses',
        priceKES: 150000,
        priceUSD: 1150,
        icon: Rocket,
        features: [
            'Unlimited pages',
            'Full-stack web application',
            'Database design & integration',
            'User authentication system',
            'Admin dashboard',
            'API development',
            'E-commerce functionality',
            'Unlimited revisions',
            '30 days delivery',
            '3 months free support',
            'Priority communication',
        ],
    },
];

const formatKES = (amount: number) =>
    new Intl.NumberFormat('en-KE', {
        style: 'currency',
        currency: 'KES',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);

const formatUSD = (amount: number) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);

export function Pricing() {
    return (
        <section id="pricing" className="px-4 md:px-6 lg:px-8 py-28 lg:py-32 relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
            </div>

            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                >
                    {/* Section Header */}
                    <div className="text-center space-y-4 max-w-2xl mx-auto">
                        <p className="text-primary font-medium text-sm uppercase tracking-wider">
                            Pricing
                        </p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                            Transparent Pricing <br className="hidden sm:block" />
                            <span className="text-muted-foreground">for Every Budget</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Choose the package that fits your needs. All prices include consultation,
                            development, and deployment.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {pricingTiers.map((tier, index) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 group
                                    ${tier.highlighted
                                        ? 'bg-gradient-to-b from-primary/10 to-primary/5 border-2 border-primary shadow-xl shadow-primary/10 scale-[1.02]'
                                        : 'bg-card border border-border hover:border-primary/50 hover:shadow-lg'
                                    }`}
                            >
                                {/* Badge */}
                                {tier.badge && (
                                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                                        {tier.badge}
                                    </Badge>
                                )}

                                {/* Icon & Name */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`p-2.5 rounded-xl ${tier.highlighted ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                                        <tier.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold">{tier.name}</h3>
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground text-sm mb-6">
                                    {tier.description}
                                </p>

                                {/* Pricing */}
                                <div className="mb-6 space-y-1">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl lg:text-4xl font-bold text-foreground">
                                            {formatKES(tier.priceKES)}
                                        </span>
                                    </div>
                                    <p className="text-muted-foreground text-sm">
                                        ≈ {formatUSD(tier.priceUSD)} USD
                                    </p>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm">
                                            <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlighted ? 'text-primary' : 'text-muted-foreground'}`} />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <Button
                                    className="w-full"
                                    variant={tier.highlighted ? 'default' : 'outline'}
                                    size="lg"
                                    asChild
                                >
                                    <a href="#contact">Get Started</a>
                                </Button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-center space-y-4 pt-8"
                    >
                        <p className="text-muted-foreground">
                            Need something custom?{' '}
                            <a href="#contact" className="text-primary hover:underline font-medium">
                                Let's discuss your project
                            </a>
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-primary" />
                                No hidden fees
                            </span>
                            <span className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-primary" />
                                50% upfront, 50% on delivery
                            </span>
                            <span className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-primary" />
                                Free consultation
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
