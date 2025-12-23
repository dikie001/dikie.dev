import type { Experience } from '@/types';

export const experience: Experience[] = [
    {
        role: 'Student Developer',
        company: 'Self-Taught / Online Courses',
        period: '2023 - Present',
        description: 'Building full-stack web applications while learning modern technologies through online courses and personal projects.',
        achievements: [
            'Completed multiple React projects',
            'Built REST APIs with Express',
            'Learned PostgreSQL and MongoDB',
            'Active on GitHub'
        ],
        current: true
    },
    {
        role: 'Freelance Projects',
        company: 'Various Clients',
        period: '2024',
        description: 'Working on small web development projects to gain real-world experience and build portfolio.',
        achievements: [
            'Delivered client websites',
            'Worked with deadlines',
            'Improved communication skills',
            'Learned project management'
        ],
        current: false
    }
];
