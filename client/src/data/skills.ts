import type { SkillCategory } from '@/types';

export const skills: SkillCategory = {
    'Frontend': {
        items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML/CSS'],
        level: 99
    },
    'Backend': {
        items: ['Node.js', 'Express', 'REST APIs'],
        level: 98
    },
    'Databases': {
        items: ['PostgreSQL', 'Prisma', 'MongoDB', 'Mongoose'],
        level: 97
    },
    'Tools': {
        items: ['Git', 'VS Code', "Thunder Client", "Figma"],
        level: 100
    }
};
