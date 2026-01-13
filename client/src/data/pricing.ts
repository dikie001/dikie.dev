import { Zap, Sparkles, Rocket, type LucideIcon } from 'lucide-react';

export interface PricingTier {
    id: string;
    name: string;
    tagline: string;
    description: string;
    priceKES: number;
    priceUSD: number;
    features: string[];
    highlighted?: boolean;
    icon: LucideIcon;
    badge?: string;
    deliveryDays: number;
    revisions: string;
    support: string;
    idealFor: string[];
    notIncluded?: string[];
}

export const pricingTiers: PricingTier[] = [
    {
        id: 'starter',
        name: 'Starter',
        tagline: 'Launch your online presence',
        description: 'Perfect for small businesses, personal brands, and entrepreneurs who need a professional single-page website to establish their online presence.',
        priceKES: 25000,
        priceUSD: 195,
        icon: Zap,
        deliveryDays: 7,
        revisions: '1 round',
        support: 'Email support for 2 weeks',
        idealFor: [
            'Personal portfolios',
            'Landing pages',
            'Small business websites',
            'Event pages',
        ],
        features: [
            'Single page responsive website',
            'Mobile-first design',
            'Basic SEO optimization',
            'Contact form integration',
            'Social media links',
            'Fast loading performance',
            'Cross-browser compatibility',
        ],
        notIncluded: [
            'CMS integration',
            'E-commerce functionality',
            'Custom animations',
            'Database integration',
        ],
    },
    {
        id: 'professional',
        name: 'Professional',
        tagline: 'Scale your business online',
        description: 'Ideal for growing businesses and startups that need a comprehensive multi-page website with content management capabilities and advanced features.',
        priceKES: 65000,
        priceUSD: 499,
        icon: Sparkles,
        highlighted: true,
        badge: 'Most Popular',
        deliveryDays: 14,
        revisions: '3 rounds',
        support: '1 month free support',
        idealFor: [
            'Startups',
            'Growing businesses',
            'Professional services',
            'Agencies',
        ],
        features: [
            'Up to 5 pages website',
            'Custom UI/UX design',
            'Advanced SEO optimization',
            'CMS integration (easy content updates)',
            'Performance optimization',
            'Social media integration',
            'Analytics setup (Google Analytics)',
            'Contact form with email notifications',
            'Blog/News section ready',
            'Mobile responsive design',
        ],
        notIncluded: [
            'Custom backend development',
            'User authentication',
            'Payment integration',
        ],
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        tagline: 'Full-scale digital solutions',
        description: 'Complete web application solutions for established businesses that need custom functionality, user management, and complex integrations.',
        priceKES: 150000,
        priceUSD: 1150,
        icon: Rocket,
        deliveryDays: 30,
        revisions: 'Unlimited',
        support: '3 months free support',
        idealFor: [
            'Established businesses',
            'E-commerce stores',
            'SaaS products',
            'Custom web applications',
        ],
        features: [
            'Unlimited pages',
            'Full-stack web application',
            'Database design & integration',
            'User authentication system',
            'Admin dashboard',
            'REST API development',
            'E-commerce functionality',
            'Payment gateway integration',
            'Advanced security measures',
            'Performance optimization',
            'Priority communication',
            'Training & documentation',
        ],
    },
];

export const getPricingTierById = (id: string): PricingTier | undefined => {
    return pricingTiers.find(tier => tier.id === id);
};

export const formatKES = (amount: number) =>
    new Intl.NumberFormat('en-KE', {
        style: 'currency',
        currency: 'KES',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);

export const formatUSD = (amount: number) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
