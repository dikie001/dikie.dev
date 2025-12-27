import { Globe, ShoppingCart, MessageCircle, Gamepad2, BookOpen, Code2 } from 'lucide-react';
import type { Project } from '@/types';

export const projects: Project[] = [
    {
        title: 'BITSA',
        description: 'Enterprise grade IT club management management system with blogs, events, user profiles etc.',
        // tech: ['React', 'Node.js', 'MongoDB', 'Mongoose', 'Socket.io'],
        // metrics: { realtime: 'Yes', users: 'Multi', api: 'REST' },
        link: 'https://bitsa-ueab.vercel.app',
        icon: MessageCircle,
        featured: true
    },
    {
        title: 'Brillia',
        description:'A fun app with quizes, facts, stories, quick challanges',
        // tech: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma'],
        // metrics: { pages: '15+', features: 'Auth', type: 'Full Stack' },
        link: 'https://brillia-six.vercel.app',
        icon: ShoppingCart,
        featured: true
    },

    {
        title: 'Portfolio Website',
        description: 'Modern responsive portfolio showcasing projects and skills with dark/light theme toggle.',
        // tech: ['React', 'TypeScript', 'Tailwind CSS'],
        // metrics: {},
        link: '#',
        icon: Globe,
        featured: false
    },
    {
        title: 'Task Manager',
        description: 'Productivity app with drag-and-drop tasks, categories, and due date reminders.',
        // tech: ['React', 'Express', 'PostgreSQL'],
        // metrics: {},
        link: '#',
        icon: BookOpen,
        featured: false
    },
    {
        title: 'Quiz Game',
        description: 'Interactive quiz application with score tracking and multiple categories.',
        // tech: ['React', 'TypeScript', 'Tailwind CSS'],
        // metrics: {},
        link: '#',
        icon: Gamepad2,
        featured: false
    },
    {
        title: 'API Backend',
        description: 'RESTful API with authentication, CRUD operations, and database integration.',
        // tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
        // metrics: {},
        link: '#',
        icon: Code2,
        featured: false
    }
];
