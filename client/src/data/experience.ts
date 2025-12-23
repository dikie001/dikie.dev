import type { Experience } from '@/types';

export const experience: Experience[] = [
    {
        role: 'Lead Full Stack Engineer',
        company: 'Tech Innovations Corp',
        period: '2022 - Present',
        description: 'Architected and deployed cloud-native applications serving 2M+ users. Led cross-functional team of 8 engineers. Reduced infrastructure costs by 35% through optimization.',
        achievements: [
            'Led migration to microservices',
            'Mentored 5 junior developers',
            'Improved system uptime to 99.99%',
            'Reduced deployment time by 60%'
        ],
        current: true
    },
    {
        role: 'Senior Software Engineer',
        company: 'Digital Solutions Inc',
        period: '2020 - 2022',
        description: 'Developed enterprise-grade web applications using modern tech stack. Established coding standards and best practices.',
        achievements: [
            'Reduced page load time by 40%',
            'Implemented automated testing',
            'Led security audit initiatives',
            'Built reusable component library'
        ],
        current: false
    }
];
