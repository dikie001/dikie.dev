import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Badge } from '@/components/ui/badge';
import {
    ArrowLeft,
    ArrowRight,
    Check,
    Send,
    Loader2,
    Sparkles,
    Building2,
    Target,
    Layers,
    Palette,
    Settings,
    Calendar,
    Shield,
} from 'lucide-react';
import { getPricingTierById, formatKES, formatUSD, pricingTiers } from '@/data/pricing';

// Form step configuration
const STEPS = [
    { id: 1, title: 'Business Info', icon: Building2 },
    { id: 2, title: 'Goals', icon: Target },
    { id: 3, title: 'Scope', icon: Layers },
    { id: 4, title: 'Design', icon: Palette },
    { id: 5, title: 'Technical', icon: Settings },
    { id: 6, title: 'Timeline', icon: Calendar },
    { id: 7, title: 'Final', icon: Shield },
];

// Checkbox group component
function CheckboxGroup({
    options,
    selected,
    onChange,
    columns = 2
}: {
    options: string[];
    selected: string[];
    onChange: (selected: string[]) => void;
    columns?: number;
}) {
    const toggle = (option: string) => {
        if (selected.includes(option)) {
            onChange(selected.filter(s => s !== option));
        } else {
            onChange([...selected, option]);
        }
    };

    return (
        <div className={`grid gap-2 ${columns === 3 ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-2'}`}>
            {options.map((option) => (
                <label
                    key={option}
                    className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all text-sm
                        ${selected.includes(option)
                            ? 'border-primary bg-primary/5 text-foreground'
                            : 'border-border hover:border-primary/50 text-muted-foreground'
                        }`}
                >
                    <input
                        type="checkbox"
                        checked={selected.includes(option)}
                        onChange={() => toggle(option)}
                        className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0
                        ${selected.includes(option) ? 'bg-primary border-primary' : 'border-muted-foreground/30'}`}>
                        {selected.includes(option) && <Check className="w-3 h-3 text-primary-foreground" />}
                    </div>
                    <span>{option}</span>
                </label>
            ))}
        </div>
    );
}

// Radio group component
function RadioGroup({
    options,
    selected,
    onChange
}: {
    options: string[];
    selected: string;
    onChange: (value: string) => void;
}) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {options.map((option) => (
                <label
                    key={option}
                    className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all text-sm
                        ${selected === option
                            ? 'border-primary bg-primary/5 text-foreground'
                            : 'border-border hover:border-primary/50 text-muted-foreground'
                        }`}
                >
                    <input
                        type="radio"
                        checked={selected === option}
                        onChange={() => onChange(option)}
                        className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0
                        ${selected === option ? 'border-primary' : 'border-muted-foreground/30'}`}>
                        {selected === option && <div className="w-2 h-2 rounded-full bg-primary" />}
                    </div>
                    <span>{option}</span>
                </label>
            ))}
        </div>
    );
}

export default function PlanDetail() {
    const { planId } = useParams<{ planId: string }>();
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        // Step 1: Business Info
        businessName: '',
        brandName: '',
        industry: '',
        contactName: '',
        email: '',
        phone: '',
        isDecisionMaker: 'Yes',

        // Step 2: Goals
        primaryGoal: '',
        successMetrics: [] as string[],
        targetAudience: '',

        // Step 3: Scope
        siteType: '',
        requiredPages: [] as string[],
        coreFeatures: [] as string[],
        integrations: [] as string[],

        // Step 4: Design
        designStyle: '',
        referenceWebsites: '',
        brandColors: '',
        themePreference: 'Light',

        // Step 5: Technical
        hasDomain: 'No',
        domainName: '',
        hasHosting: 'No',
        seoLevel: 'Basic',
        needsAnalytics: 'Yes',

        // Step 6: Timeline & Budget
        launchDate: '',
        hardDeadline: '',
        budgetRange: '',
        paymentStructure: 'Milestones',
        needsMaintenance: 'Yes',

        // Step 7: Final
        contentProvider: '',
        needsCopywriting: 'No',
        privacyPolicy: 'Yes',
        communicationChannel: '',
        additionalNotes: '',
    });

    const plan = getPricingTierById(planId || '');

    const updateField = (field: string, value: string | string[]) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('Form submitted:', { plan: plan?.name, ...formData });
        setIsSubmitting(false);
        setSubmitted(true);
    };

    if (!plan) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center px-4">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-bold">Plan Not Found</h1>
                    <p className="text-muted-foreground">The pricing plan you're looking for doesn't exist.</p>
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
            {/* Navbar */}
            <nav className="fixed top-0 inset-x-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
                <div className="container max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
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
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-24 pb-20 px-4">
                <div className="container max-w-3xl mx-auto">
                    <Link
                        to="/#pricing"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to pricing
                    </Link>

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-20 space-y-6"
                        >
                            <div className="w-20 h-20 mx-auto rounded-full bg-green-500/10 flex items-center justify-center">
                                <Check className="w-10 h-10 text-green-500" />
                            </div>
                            <h1 className="text-3xl font-bold">Project Brief Submitted!</h1>
                            <p className="text-muted-foreground max-w-md mx-auto">
                                Thank you for the detailed project brief. I'll review everything and get back to you within 24-48 hours with a proposal.
                            </p>
                            <Button onClick={() => navigate('/')} className="mt-4">
                                Back to Home
                            </Button>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            {/* Plan Header - Compact */}
                            <div className="flex items-center justify-between p-4 bg-card border border-border rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${plan.highlighted ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold">{plan.name}</span>
                                            {plan.badge && <Badge variant="secondary" className="text-xs">{plan.badge}</Badge>}
                                        </div>
                                        <p className="text-sm text-muted-foreground">{plan.tagline}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-lg">{formatKES(plan.priceKES)}</p>
                                    <p className="text-xs text-muted-foreground">≈ {formatUSD(plan.priceUSD)}</p>
                                </div>
                            </div>

                            {/* Progress Steps */}
                            <div className="flex items-center justify-between overflow-x-auto pb-2">
                                {STEPS.map((step, index) => {
                                    const StepIcon = step.icon;
                                    const isActive = currentStep === step.id;
                                    const isCompleted = currentStep > step.id;
                                    return (
                                        <div key={step.id} className="flex items-center">
                                            <button
                                                onClick={() => isCompleted && setCurrentStep(step.id)}
                                                disabled={!isCompleted}
                                                className={`flex flex-col items-center gap-1 px-2 transition-all
                                                    ${isCompleted ? 'cursor-pointer' : 'cursor-default'}`}
                                            >
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all
                                                    ${isActive ? 'bg-primary text-primary-foreground' : ''}
                                                    ${isCompleted ? 'bg-primary/20 text-primary' : ''}
                                                    ${!isActive && !isCompleted ? 'bg-muted text-muted-foreground' : ''}`}>
                                                    {isCompleted ? <Check className="w-4 h-4" /> : <StepIcon className="w-4 h-4" />}
                                                </div>
                                                <span className={`text-xs hidden sm:block ${isActive ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                                                    {step.title}
                                                </span>
                                            </button>
                                            {index < STEPS.length - 1 && (
                                                <div className={`w-8 h-0.5 mx-1 ${currentStep > step.id ? 'bg-primary' : 'bg-border'}`} />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Form Steps */}
                            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 min-h-[400px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentStep}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
                                        className="space-y-6"
                                    >
                                        {/* Step 1: Business Info */}
                                        {currentStep === 1 && (
                                            <>
                                                <div>
                                                    <h2 className="text-xl font-semibold">Business Information</h2>
                                                    <p className="text-sm text-muted-foreground">Tell me about you and your business</p>
                                                </div>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Business Name *</label>
                                                        <Input
                                                            value={formData.businessName}
                                                            onChange={(e) => updateField('businessName', e.target.value)}
                                                            placeholder="Legal business name"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Brand Name</label>
                                                        <Input
                                                            value={formData.brandName}
                                                            onChange={(e) => updateField('brandName', e.target.value)}
                                                            placeholder="If different from business name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Industry / Niche *</label>
                                                    <Input
                                                        value={formData.industry}
                                                        onChange={(e) => updateField('industry', e.target.value)}
                                                        placeholder="e.g., Real Estate, Healthcare, E-commerce"
                                                        required
                                                    />
                                                </div>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Your Name *</label>
                                                        <Input
                                                            value={formData.contactName}
                                                            onChange={(e) => updateField('contactName', e.target.value)}
                                                            placeholder="Primary contact person"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Are you the decision maker?</label>
                                                        <RadioGroup
                                                            options={['Yes', 'No']}
                                                            selected={formData.isDecisionMaker}
                                                            onChange={(v) => updateField('isDecisionMaker', v)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Email *</label>
                                                        <Input
                                                            type="email"
                                                            value={formData.email}
                                                            onChange={(e) => updateField('email', e.target.value)}
                                                            placeholder="you@company.com"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Phone *</label>
                                                        <Input
                                                            type="tel"
                                                            value={formData.phone}
                                                            onChange={(e) => updateField('phone', e.target.value)}
                                                            placeholder="+254 712 345 678"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* Step 2: Goals */}
                                        {currentStep === 2 && (
                                            <>
                                                <div>
                                                    <h2 className="text-xl font-semibold">Business Objectives</h2>
                                                    <p className="text-sm text-muted-foreground">What do you want to achieve with this website?</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Primary Goal *</label>
                                                    <RadioGroup
                                                        options={['Lead Generation', 'Online Sales', 'Brand Credibility', 'Portfolio/Showcase', 'Booking/Appointments', 'Content/Blog']}
                                                        selected={formData.primaryGoal}
                                                        onChange={(v) => updateField('primaryGoal', v)}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">How will you measure success? (Select all that apply)</label>
                                                    <CheckboxGroup
                                                        options={['Leads per month', 'Sales/Conversions', 'Website traffic', 'User signups', 'Booking rate', 'Brand awareness']}
                                                        selected={formData.successMetrics}
                                                        onChange={(v) => updateField('successMetrics', v)}
                                                        columns={3}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Describe your target audience *</label>
                                                    <Textarea
                                                        value={formData.targetAudience}
                                                        onChange={(e) => updateField('targetAudience', e.target.value)}
                                                        placeholder="Who are your ideal customers? Include demographics, location, pain points..."
                                                        className="min-h-[100px] resize-none"
                                                        required
                                                    />
                                                </div>
                                            </>
                                        )}

                                        {/* Step 3: Scope */}
                                        {currentStep === 3 && (
                                            <>
                                                <div>
                                                    <h2 className="text-xl font-semibold">Scope & Features</h2>
                                                    <p className="text-sm text-muted-foreground">What type of website do you need?</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Type of Website *</label>
                                                    <RadioGroup
                                                        options={['Landing Page', 'Corporate Site', 'E-commerce', 'SaaS/Web App', 'Blog/Content', 'Portfolio']}
                                                        selected={formData.siteType}
                                                        onChange={(v) => updateField('siteType', v)}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Required Pages</label>
                                                    <CheckboxGroup
                                                        options={['Home', 'About', 'Services', 'Products', 'Contact', 'Blog', 'Pricing', 'FAQ', 'Team', 'Testimonials']}
                                                        selected={formData.requiredPages}
                                                        onChange={(v) => updateField('requiredPages', v)}
                                                        columns={3}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Core Features Needed</label>
                                                    <CheckboxGroup
                                                        options={['Contact Form', 'User Auth', 'Payments', 'Booking System', 'CMS', 'Live Chat', 'Dashboard', 'Newsletter', 'Search', 'Multi-language']}
                                                        selected={formData.coreFeatures}
                                                        onChange={(v) => updateField('coreFeatures', v)}
                                                        columns={3}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Third-Party Integrations</label>
                                                    <CheckboxGroup
                                                        options={['M-Pesa', 'PayPal/Stripe', 'Google Analytics', 'Mailchimp', 'WhatsApp', 'CRM', 'Social Media', 'Calendar']}
                                                        selected={formData.integrations}
                                                        onChange={(v) => updateField('integrations', v)}
                                                    />
                                                </div>
                                            </>
                                        )}

                                        {/* Step 4: Design */}
                                        {currentStep === 4 && (
                                            <>
                                                <div>
                                                    <h2 className="text-xl font-semibold">Design Direction</h2>
                                                    <p className="text-sm text-muted-foreground">How should your website look and feel?</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Preferred Style *</label>
                                                    <RadioGroup
                                                        options={['Minimal/Clean', 'Corporate/Professional', 'Bold/Creative', 'Playful/Fun', 'Luxury/Elegant', 'Modern/Tech']}
                                                        selected={formData.designStyle}
                                                        onChange={(v) => updateField('designStyle', v)}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Theme Preference</label>
                                                    <RadioGroup
                                                        options={['Light', 'Dark', 'Both (Toggle)']}
                                                        selected={formData.themePreference}
                                                        onChange={(v) => updateField('themePreference', v)}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Reference Websites</label>
                                                    <Textarea
                                                        value={formData.referenceWebsites}
                                                        onChange={(e) => updateField('referenceWebsites', e.target.value)}
                                                        placeholder="Share 2-3 website links you like and what you like about them"
                                                        className="min-h-[80px] resize-none"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Brand Colors & Fonts</label>
                                                    <Input
                                                        value={formData.brandColors}
                                                        onChange={(e) => updateField('brandColors', e.target.value)}
                                                        placeholder="e.g., Blue #1E40AF, or 'I need help choosing'"
                                                    />
                                                </div>
                                            </>
                                        )}

                                        {/* Step 5: Technical */}
                                        {currentStep === 5 && (
                                            <>
                                                <div>
                                                    <h2 className="text-xl font-semibold">Technical Requirements</h2>
                                                    <p className="text-sm text-muted-foreground">Domain, hosting, and other technical needs</p>
                                                </div>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Do you have a domain?</label>
                                                        <RadioGroup
                                                            options={['Yes', 'No, need help']}
                                                            selected={formData.hasDomain}
                                                            onChange={(v) => updateField('hasDomain', v)}
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Domain Name</label>
                                                        <Input
                                                            value={formData.domainName}
                                                            onChange={(e) => updateField('domainName', e.target.value)}
                                                            placeholder="e.g., yourbusiness.com"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Do you have hosting?</label>
                                                        <RadioGroup
                                                            options={['Yes', 'No, need help']}
                                                            selected={formData.hasHosting}
                                                            onChange={(v) => updateField('hasHosting', v)}
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Need Analytics?</label>
                                                        <RadioGroup
                                                            options={['Yes', 'No']}
                                                            selected={formData.needsAnalytics}
                                                            onChange={(v) => updateField('needsAnalytics', v)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">SEO Level</label>
                                                    <RadioGroup
                                                        options={['Basic', 'Advanced', 'None']}
                                                        selected={formData.seoLevel}
                                                        onChange={(v) => updateField('seoLevel', v)}
                                                    />
                                                </div>
                                            </>
                                        )}

                                        {/* Step 6: Timeline & Budget */}
                                        {currentStep === 6 && (
                                            <>
                                                <div>
                                                    <h2 className="text-xl font-semibold">Timeline & Budget</h2>
                                                    <p className="text-sm text-muted-foreground">When do you need it and what's your budget?</p>
                                                </div>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Desired Launch Date</label>
                                                        <Input
                                                            type="date"
                                                            value={formData.launchDate}
                                                            onChange={(e) => updateField('launchDate', e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Hard Deadline (if any)</label>
                                                        <Input
                                                            value={formData.hardDeadline}
                                                            onChange={(e) => updateField('hardDeadline', e.target.value)}
                                                            placeholder="e.g., Product launch on March 1st"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Budget Range (KES) *</label>
                                                    <RadioGroup
                                                        options={['20K - 50K', '50K - 100K', '100K - 200K', '200K+']}
                                                        selected={formData.budgetRange}
                                                        onChange={(v) => updateField('budgetRange', v)}
                                                    />
                                                </div>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Payment Structure</label>
                                                        <RadioGroup
                                                            options={['Milestones', 'Full Upfront']}
                                                            selected={formData.paymentStructure}
                                                            onChange={(v) => updateField('paymentStructure', v)}
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Need Maintenance Post-Launch?</label>
                                                        <RadioGroup
                                                            options={['Yes', 'No', 'Maybe']}
                                                            selected={formData.needsMaintenance}
                                                            onChange={(v) => updateField('needsMaintenance', v)}
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* Step 7: Final */}
                                        {currentStep === 7 && (
                                            <>
                                                <div>
                                                    <h2 className="text-xl font-semibold">Final Details</h2>
                                                    <p className="text-sm text-muted-foreground">Content, legal, and communication preferences</p>
                                                </div>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Who provides content?</label>
                                                        <RadioGroup
                                                            options={['I will', 'Need help', 'Use AI']}
                                                            selected={formData.contentProvider}
                                                            onChange={(v) => updateField('contentProvider', v)}
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Need Copywriting?</label>
                                                        <RadioGroup
                                                            options={['Yes', 'No']}
                                                            selected={formData.needsCopywriting}
                                                            onChange={(v) => updateField('needsCopywriting', v)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Privacy Policy Needed?</label>
                                                        <RadioGroup
                                                            options={['Yes', 'No', 'Not sure']}
                                                            selected={formData.privacyPolicy}
                                                            onChange={(v) => updateField('privacyPolicy', v)}
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Preferred Communication</label>
                                                        <RadioGroup
                                                            options={['Email', 'WhatsApp', 'Call']}
                                                            selected={formData.communicationChannel}
                                                            onChange={(v) => updateField('communicationChannel', v)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Anything else I should know?</label>
                                                    <Textarea
                                                        value={formData.additionalNotes}
                                                        onChange={(e) => updateField('additionalNotes', e.target.value)}
                                                        placeholder="Additional requirements, concerns, or questions..."
                                                        className="min-h-[100px] resize-none"
                                                    />
                                                </div>
                                            </>
                                        )}
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation Buttons */}
                                <div className="flex items-center justify-between pt-8 mt-8 border-t border-border">
                                    <Button
                                        variant="ghost"
                                        onClick={prevStep}
                                        disabled={currentStep === 1}
                                        className={currentStep === 1 ? 'invisible' : ''}
                                    >
                                        <ArrowLeft className="w-4 h-4 mr-2" />
                                        Previous
                                    </Button>

                                    {currentStep < STEPS.length ? (
                                        <Button onClick={nextStep}>
                                            Next
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    ) : (
                                        <Button onClick={handleSubmit} disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    Submit Brief
                                                    <Send className="w-4 h-4 ml-2" />
                                                </>
                                            )}
                                        </Button>
                                    )}
                                </div>
                            </div>

                            {/* Other Plans */}
                            <div className="text-center pt-4">
                                <p className="text-sm text-muted-foreground mb-3">Different plan?</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {pricingTiers.filter((t) => t.id !== plan.id).map((tier) => (
                                        <Link key={tier.id} to={`/pricing/${tier.id}`}>
                                            <Button variant="ghost" size="sm">{tier.name}</Button>
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
