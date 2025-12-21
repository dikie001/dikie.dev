import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { 
  Github, Linkedin, Mail, ExternalLink, Code2, Menu, X, 
  ArrowRight, Terminal, Layers, Zap, Globe, Database, 
  Cpu, Award, Users, TrendingUp, CheckCircle2, Star, 
  Briefcase, GraduationCap, Calendar, Send, Sparkles
} from 'lucide-react';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const navigation = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Testimonials', 'Contact'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    // return () => window.removeMouseMove('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: Briefcase, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '30+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Awards Won' },
    { icon: TrendingUp, value: '99%', label: 'Success Rate' }
  ];

  const projects = [
    {
      title: 'Enterprise SaaS Platform',
      description: 'Multi-tenant SaaS application with advanced analytics, real-time collaboration, and scalable microservices architecture serving 50K+ active users.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
      metrics: { users: '50K+', uptime: '99.9%', performance: '+40%' },
      link: '#', icon: Globe, featured: true
    },
    {
      title: 'AI-Powered Analytics Engine',
      description: 'Machine learning pipeline for predictive analytics with custom model training, automated reporting, and interactive data visualization dashboards.',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'React', 'MongoDB'],
      metrics: { accuracy: '94%', speed: '10x', data: '1M+ points' },
      link: '#', icon: Cpu, featured: true
    },
    {
      title: 'Real-Time Trading Platform',
      description: 'High-frequency trading system with WebSocket integration, live market data processing, and sub-millisecond order execution capabilities.',
      tech: ['TypeScript', 'WebSocket', 'PostgreSQL', 'Redis', 'Kubernetes'],
      metrics: { latency: '<5ms', trades: '10K/sec', uptime: '99.99%' },
      link: '#', icon: Zap, featured: false
    },
    {
      title: 'Cloud Infrastructure Manager',
      description: 'DevOps automation platform for multi-cloud deployments with infrastructure as code, automated scaling, and comprehensive monitoring.',
      tech: ['Go', 'Terraform', 'Kubernetes', 'Prometheus', 'Grafana'],
      metrics: { deploy: '60%↓', costs: '35%↓', servers: '500+' },
      link: '#', icon: Layers, featured: false
    },
    {
      title: 'Mobile Banking Application',
      description: 'Secure cross-platform mobile banking solution with biometric authentication, real-time transactions, and advanced fraud detection.',
      tech: ['React Native', 'Node.js', 'PostgreSQL', 'OAuth2', 'JWT'],
      metrics: { users: '100K+', rating: '4.8★', security: 'A+' },
      link: '#', icon: Terminal, featured: false
    },
    {
      title: 'E-Learning Platform',
      description: 'Interactive learning management system with video streaming, progress tracking, certification, and AI-powered personalized learning paths.',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'FFmpeg', 'AWS S3'],
      metrics: { students: '25K+', courses: '500+', completion: '85%' },
      link: '#', icon: Database, featured: false
    }
  ];

  const skills = {
    'Frontend Development': { items: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Redux', 'GraphQL'], level: 95 },
    'Backend Development': { items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'REST APIs'], level: 90 },
    'Cloud & DevOps': { items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Jenkins', 'GitHub Actions'], level: 85 },
    'Tools & Platforms': { items: ['Git', 'VS Code', 'Figma', 'Postman', 'Jest', 'Cypress', 'Jira'], level: 92 }
  };

  const experience = [
    {
      role: 'Lead Full Stack Engineer',
      company: 'Tech Innovations Corp',
      period: '2022 - Present',
      description: 'Architected and deployed cloud-native applications serving 2M+ users. Led cross-functional team of 8 engineers. Reduced infrastructure costs by 35% through optimization.',
      achievements: ['Led migration to microservices', 'Mentored 5 junior developers', 'Improved system uptime to 99.99%', 'Reduced deployment time by 60%'],
      current: true
    },
    {
      role: 'Senior Software Engineer',
      company: 'Digital Solutions Inc',
      period: '2020 - 2022',
      description: 'Developed enterprise-grade web applications using modern tech stack. Established coding standards and best practices.',
      achievements: ['Reduced page load time by 40%', 'Implemented automated testing', 'Led security audit initiatives', 'Built reusable component library'],
      current: false
    }
  ];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'CTO, Tech Innovations Corp', content: 'Outstanding technical leadership and delivery. Transformed our infrastructure.', rating: 5 },
    { name: 'Michael Chen', role: 'Product Manager, Digital Solutions', content: 'Exceptional problem-solver who consistently delivers high-quality solutions.', rating: 5 }
  ];

  const scrollToSection = (section: string) => {
    const id = section.toLowerCase();
    setActiveSection(id);
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 relative">
      {/* Interactive Background Gradient */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 opacity-20"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.15), transparent 80%)`
        }}
      />

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left" style={{ scaleX }} />

      <nav className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl cursor-pointer" onClick={() => scrollToSection('Home')}>
            <Terminal className="h-6 w-6 text-primary" />
            <span>DIKIE.DEV</span>
          </div>
          <div className="hidden md:flex gap-1">
            {navigation.map((item) => (
              <Button key={item} variant="ghost" size="sm" onClick={() => scrollToSection(item)}
                className={activeSection === item.toLowerCase() ? "bg-secondary text-primary" : "text-muted-foreground"}>
                {item}
              </Button>
            ))}
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="md:hidden border-t bg-background overflow-hidden">
              <div className="container py-4 flex flex-col gap-2">
                {navigation.map((item) => (
                  <Button key={item} variant="ghost" className="justify-start" onClick={() => scrollToSection(item)}>{item}</Button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section id="home" className="container py-24 lg:py-32 text-center space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Badge variant="outline" className="mb-4 py-1 px-4 border-primary/50 text-primary">
            <Sparkles className="mr-2 h-3 w-3 animate-pulse" /> Available for opportunities
          </Badge>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-6">
            Full Stack Developer & <br/><span className="text-muted-foreground">Solution Architect</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl mb-10">
            Transforming ideas into scalable, high-performance applications. Specialized in modern web technologies and cloud architecture.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={() => scrollToSection('Projects')}>View Projects <ArrowRight className="ml-2 h-4 w-4" /></Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('Contact')}><Mail className="mr-2 h-4 w-4" /> Get in Touch</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
            {stats.map((stat, i) => (
              <Card key={i} className="bg-secondary/20 border-none shadow-none">
                <CardContent className="p-6">
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="container py-24 border-t">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge>About Me</Badge>
            <h2 className="text-4xl font-bold">Building the Future of Web</h2>
            <p className="text-muted-foreground text-lg">With over 6 years of experience, I specialize in transforming complex business requirements into elegant, scalable solutions.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Cloud Architecture', 'Performance Optimization', 'CI/CD & DevOps', 'Team Leadership'].map((item) => (
                <div key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /><span>{item}</span></div>
              ))}
            </div>
          </div>
          <Card className="bg-primary text-primary-foreground p-8">
            <GraduationCap className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Professional Journey</h3>
            <p className="opacity-90">Led teams building applications serving millions. Expertise spans frontend excellence to backend architecture.</p>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container py-24 border-t">
        <div className="text-center mb-16 space-y-4">
          <Badge>Portfolio</Badge>
          <h2 className="text-4xl font-bold">Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, i) => (
            <Card key={i} className="overflow-hidden border-2 group transition-all hover:border-primary/50">
              <CardHeader>
                <div className="flex justify-between mb-4"><project.icon className="h-10 w-10 text-primary" /><Badge variant="secondary">Featured</Badge></div>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">{project.tech.map(t => <Badge key={t} variant="outline">{t}</Badge>)}</div>
                <div className="grid grid-cols-3 gap-2 bg-secondary/30 p-4 rounded-lg text-center">
                  {Object.entries(project.metrics).map(([k, v]) => (
                    <div key={k}><div className="font-bold">{v}</div><div className="text-[10px] uppercase opacity-60">{k}</div></div>
                  ))}
                </div>
              </CardContent>
              <CardFooter><Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground">View Case Study</Button></CardFooter>
            </Card>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.filter(p => !p.featured).map((project, i) => (
            <Card key={i} className="hover:bg-secondary/10 transition-colors">
              <CardHeader><project.icon className="h-6 w-6 text-primary mb-2" /><CardTitle className="text-lg">{project.title}</CardTitle></CardHeader>
              <CardContent><p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p></CardContent>
              <CardFooter><Button variant="ghost" size="sm" className="w-full">Details <ArrowRight className="ml-2 h-3 w-3" /></Button></CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container py-24 border-t">
        <div className="text-center mb-16"><Badge className="mb-4">Expertise</Badge><h2 className="text-4xl font-bold">Technical Skills</h2></div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {Object.entries(skills).map(([category, data]) => (
            <Card key={category}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg flex items-center gap-2"><Code2 className="h-5 w-5 text-primary" />{category}</CardTitle>
                <Badge variant="secondary">{data.level}%</Badge>
              </CardHeader>
              <CardContent>
                <div className="h-1.5 w-full bg-secondary rounded-full mb-4">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${data.level}%` }} className="h-full bg-primary rounded-full" />
                </div>
                <div className="flex flex-wrap gap-1.5">{data.items.map(item => <Badge key={item} variant="outline" className="text-[10px]">{item}</Badge>)}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="container py-24 border-t">
        <div className="text-center mb-16"><h2 className="text-4xl font-bold">Professional Experience</h2></div>
        <div className="max-w-3xl mx-auto space-y-8">
          {experience.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-secondary pb-8 last:pb-0">
              <div className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 bg-background ${exp.current ? 'border-primary' : 'border-secondary'}`} />
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <Badge variant="outline" className="mt-2 sm:mt-0"><Calendar className="h-3 w-3 mr-1" />{exp.period}</Badge>
              </div>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {exp.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm"><Award className="h-3 w-3 text-primary" />{ach}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container py-24 border-t bg-secondary/10">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-background">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, idx) => <Star key={idx} className="h-4 w-4 fill-primary text-primary" />)}</div>
                <p className="italic text-lg mb-6">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold">{t.name[0]}</div>
                  <div><div className="font-bold">{t.name}</div><div className="text-xs text-muted-foreground">{t.role}</div></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-24 border-t">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center"><h2 className="text-3xl font-bold">Get In Touch</h2></CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary/30 flex items-center gap-3"><Mail className="text-primary" /><span>dikie@example.com</span></div>
                <div className="p-4 rounded-lg bg-secondary/30 flex items-center gap-3"><Linkedin className="text-primary" /><span>linkedin.com/in/dikie</span></div>
                <div className="p-4 rounded-lg bg-secondary/30 flex items-center gap-3"><Github className="text-primary" /><span>github.com/dikie</span></div>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Textarea placeholder="Message" className="min-h-[120px]" />
                <Button className="w-full">Send Message <Send className="ml-2 h-4 w-4" /></Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t py-12 text-center text-sm text-muted-foreground">
        <div className="container flex flex-col items-center gap-4">
          <Terminal className="h-6 w-6" />
          <p>© {new Date().getFullYear()} DIKIE. Made with React, TS, and Shadcn.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;