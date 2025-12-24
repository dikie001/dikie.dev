// TypeScript interfaces for the portfolio

export interface Project {
    title: string;
    description: string;
    // tech: string[];
    // metrics: Record<string, string>;
    link: string;
    icon: React.ComponentType<{ className?: string }>;
    featured: boolean;
}

export interface Skill {
    items: string[];
    level: number;
}

export interface SkillCategory {
    [category: string]: Skill;
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
    current: boolean;
}

export interface Testimonial {
    name: string;
    role: string;
    content: string;
    rating: number;
}

export interface SocialLink {
    icon: React.ComponentType<{ className?: string }>;
    href: string;
    label: string;
}

export interface Stat {
    icon: React.ComponentType<{ className?: string }>;
    value: string;
    label: string;
}
