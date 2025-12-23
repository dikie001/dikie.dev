import { Github, Linkedin, Mail } from 'lucide-react';
import { Briefcase, Users, Award, TrendingUp } from 'lucide-react';
import type { SocialLink, Stat } from '@/types';

export const socialLinks: SocialLink[] = [
    { icon: Github, href: 'https://github.com/dikie', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/dikie', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dikie@example.com', label: 'Email' }
];

export const stats: Stat[] = [
    { icon: Briefcase, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '30+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Awards Won' },
    { icon: TrendingUp, value: '99%', label: 'Success Rate' }
];
