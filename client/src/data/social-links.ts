import { Github, Linkedin, Mail } from 'lucide-react';
import { Code2, Folder, Coffee, Rocket } from 'lucide-react';
import type { SocialLink, Stat } from '@/types';

export const socialLinks: SocialLink[] = [
    { icon: Github, href: 'https://github.com/dikie001', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/dikie', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dikie@example.com', label: 'Email' }
];

export const stats: Stat[] = [
    { icon: Folder, value: '10+', label: 'Projects Built' },
    { icon: Code2, value: '4+', label: 'Technologies' },
    { icon: Coffee, value: '∞', label: 'Cups of Coffee' },
    { icon: Rocket, value: '1', label: 'Goal: Get Hired' }
];
