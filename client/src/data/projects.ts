import { Globe, Cpu, Zap, Layers, Terminal, Database } from 'lucide-react';
import type { Project } from '@/types';

export const projects: Project[] = [
    {
        title: 'Enterprise SaaS Platform',
        description: 'Multi-tenant SaaS application with advanced analytics, real-time collaboration, and scalable microservices architecture serving 50K+ active users.',
        tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
        metrics: { users: '50K+', uptime: '99.9%', performance: '+40%' },
        link: '#',
        icon: Globe,
        featured: true
    },
    {
        title: 'AI-Powered Analytics Engine',
        description: 'Machine learning pipeline for predictive analytics with custom model training, automated reporting, and interactive data visualization dashboards.',
        tech: ['Python', 'TensorFlow', 'FastAPI', 'React', 'MongoDB'],
        metrics: { accuracy: '94%', speed: '10x', data: '1M+ points' },
        link: '#',
        icon: Cpu,
        featured: true
    },
    {
        title: 'Real-Time Trading Platform',
        description: 'High-frequency trading system with WebSocket integration, live market data processing, and sub-millisecond order execution capabilities.',
        tech: ['TypeScript', 'WebSocket', 'PostgreSQL', 'Redis', 'Kubernetes'],
        metrics: { latency: '<5ms', trades: '10K/sec', uptime: '99.99%' },
        link: '#',
        icon: Zap,
        featured: false
    },
    {
        title: 'Cloud Infrastructure Manager',
        description: 'DevOps automation platform for multi-cloud deployments with infrastructure as code, automated scaling, and comprehensive monitoring.',
        tech: ['Go', 'Terraform', 'Kubernetes', 'Prometheus', 'Grafana'],
        metrics: { deploy: '60%↓', costs: '35%↓', servers: '500+' },
        link: '#',
        icon: Layers,
        featured: false
    },
    {
        title: 'Mobile Banking Application',
        description: 'Secure cross-platform mobile banking solution with biometric authentication, real-time transactions, and advanced fraud detection.',
        tech: ['React Native', 'Node.js', 'PostgreSQL', 'OAuth2', 'JWT'],
        metrics: { users: '100K+', rating: '4.8★', security: 'A+' },
        link: '#',
        icon: Terminal,
        featured: false
    },
    {
        title: 'E-Learning Platform',
        description: 'Interactive learning management system with video streaming, progress tracking, certification, and AI-powered personalized learning paths.',
        tech: ['Vue.js', 'Laravel', 'MySQL', 'FFmpeg', 'AWS S3'],
        metrics: { students: '25K+', courses: '500+', completion: '85%' },
        link: '#',
        icon: Database,
        featured: false
    }
];
