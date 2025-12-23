import type { SkillCategory } from '@/types';

export const skills: SkillCategory = {
    'Frontend': {
        items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML/CSS'],
        level: 90
    },
    'Backend': {
        items: ['Node.js', 'Express', 'REST APIs'],
        level: 85
    },
    'Databases': {
        items: ['PostgreSQL', 'Prisma', 'MongoDB', 'Mongoose'],
        level: 80
    },
    'Tools': {
        items: ['Git', 'VS Code', 'Postman', 'Figma'],
        level: 85
    }
};
