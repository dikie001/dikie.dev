import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Badge } from '@/components/ui/badge';
import {
    ArrowLeft,
    Check,
    Send,
    Loader2,
    Sparkles,
} from 'lucide-react';
import { getPricingTierById, formatKES, formatUSD, pricingTiers } from '@/data/pricing';

export default function PlanDetail() {
    const { planId } = useParams<{ planId: string }>();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const plan = getPricingTierById(planId || '');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    // 404 - Plan not found
    if (!plan) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center px-4">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-bold">Plan Not Found</h1>
                    <p className="text-muted-foreground">
                        The pricing plan you're looking for doesn't exist.
                    </p>
                    <Button onClick={() => navigate('/')} variant="outline">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Button>
                </div>
            </div>
        );
    }

    const Icon = plan.icon;

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Clean Navbar */}
            <nav className="fixed top-0 inset-x-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
                <div className="container max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center gap-2 group"
                    >
                        <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Sparkles className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-lg font-bold tracking-tight">
                            DIKIE<span className="text-muted-foreground">.DEV</span>
                        </span>
                    </Link>

                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <Button variant="ghost" size="sm" asChild>
                            <Link to="/#pricing">All Plans</Link>
                        </Button>
                        <Button size="sm" asChild className="hidden sm:flex">
                            <Link to="/#contact">Contact</Link>
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-24 pb-20 px-4">
                <div className="container max-w-3xl mx-auto">
                    {/* Back Link */}
                    <Link
                        to="/#pricing"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to pricing
                    </Link>

                    {submitted ? (
                        /* Success State */
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-20 space-y-6"
                        >
                            <div className="w-20 h-20 mx-auto rounded-full bg-green-500/10 flex items-center justify-center">
                                <Check className="w-10 h-10 text-green-500" />
                            </div>
                            <h1 className="text-3xl font-bold">Request Submitted!</h1>
                            <p className="text-muted-foreground max-w-md mx-auto">
                                Thank you for your interest in the {plan.name} plan.
                                I'll review your project details and get back to you within 24 hours.
                            </p>
                            <Button onClick={() => navigate('/')} className="mt-4">
                                Back to Home
                            </Button>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-10"
                        >
                            {/* Plan Header */}
                            <div className="text-center space-y-4">
                                <div className="inline-flex items-center gap-3 mb-2">
                                    <div className={`p-3 rounded-xl ${plan.highlighted ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    {plan.badge && (
                                        <Badge className="bg-primary text-primary-foreground">
                                            {plan.badge}
                                        </Badge>
                                    )}
                                </div>
                                <h1 className="text-4xl sm:text-5xl font-bold">{plan.name}</h1>
                                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                                    {plan.tagline}
                                </p>
                                <div className="pt-2">
                                    <span className="text-4xl font-bold">{formatKES(plan.priceKES)}</span>
                                    <span className="text-muted-foreground ml-2">≈ {formatUSD(plan.priceUSD)}</span>
                                </div>
                            </div>

                            {/* Key Features - Compact */}
                            <div className="bg-card border border-border rounded-2xl p-6">
                                <h2 className="font-semibold mb-4">What's Included</h2>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {plan.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-2 text-sm">
                                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
                                <h2 className="text-xl font-semibold mb-6">Start Your Project</h2>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Name *</label>
                                            <Input
                                                name="name"
                                                placeholder="Your name"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Email *</label>
                                            <Input
                                                name="email"
                                                type="email"
                                                placeholder="you@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Phone (Optional)</label>
                                        <Input
                                            name="phone"
                                            type="tel"
                                            placeholder="+254 712 345 678"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Tell me about your project *</label>
                                        <Textarea
                                            name="description"
                                            placeholder="What do you want to build? Any specific requirements or timeline?"
                                            className="min-h-[120px] resize-none"
                                            required
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full"
                                        size="lg"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Submit Request
                                                <Send className="w-4 h-4 ml-2" />
                                            </>
                                        )}
                                    </Button>

                                    <p className="text-xs text-center text-muted-foreground">
                                        Free consultation • No commitment required • Response within 24h
                                    </p>
                                </form>
                            </div>

                            {/* Other Plans - Simple Links */}
                            <div className="text-center pt-4">
                                <p className="text-sm text-muted-foreground mb-4">
                                    Looking for a different plan?
                                </p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {pricingTiers
                                        .filter((t) => t.id !== plan.id)
                                        .map((tier) => (
                                            <Link key={tier.id} to={`/pricing/${tier.id}`}>
                                                <Button variant="ghost" size="sm">
                                                    {tier.name}
                                                </Button>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </main>
        </div>
    );
}
