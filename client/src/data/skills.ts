import type { SkillCategory } from '@/types';

export const skills: SkillCategory = {
    'Frontend Development': {
        items: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Redux', 'GraphQL'],
        level: 95
    },
    'Backend Development': {
        items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'REST APIs'],
        level: 90
    },
    'Cloud & DevOps': {
        items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Jenkins', 'GitHub Actions'],
        level: 85
    },
    'Tools & Platforms': {
        items: ['Git', 'VS Code', 'Figma', 'Postman', 'Jest', 'Cypress', 'Jira'],
        level: 92
    }
};
