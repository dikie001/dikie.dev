import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail, ExternalLink, Code2, Menu, X, ArrowRight, Terminal, Layers, Zap, Globe, Database, Cpu } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navigation = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'];

  const projects = [
    {
      title: 'Enterprise SaaS Platform',
      description: 'Multi-tenant SaaS application with advanced analytics, real-time collaboration, and scalable microservices architecture serving 50K+ active users.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
      link: '#',
      icon: Globe
    },
    {
      title: 'AI-Powered Analytics Engine',
      description: 'Machine learning pipeline for predictive analytics with custom model training, automated reporting, and interactive data visualization dashboards.',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'React', 'MongoDB'],
      link: '#',
      icon: Cpu
    },
    {
      title: 'Real-Time Trading Platform',
      description: 'High-frequency trading system with WebSocket integration, live market data processing, and sub-millisecond order execution capabilities.',
      tech: ['TypeScript', 'WebSocket', 'PostgreSQL', 'Redis', 'Kubernetes'],
      link: '#',
      icon: Zap
    },
    {
      title: 'Cloud Infrastructure Manager',
      description: 'DevOps automation platform for multi-cloud deployments with infrastructure as code, automated scaling, and comprehensive monitoring.',
      tech: ['Go', 'Terraform', 'Kubernetes', 'Prometheus', 'Grafana'],
      link: '#',
      icon: Layers
    },
    {
      title: 'Mobile Banking Application',
      description: 'Secure cross-platform mobile banking solution with biometric authentication, real-time transactions, and advanced fraud detection.',
      tech: ['React Native', 'Node.js', 'PostgreSQL', 'OAuth2', 'JWT'],
      link: '#',
      icon: Terminal
    },
    {
      title: 'E-Learning Platform',
      description: 'Interactive learning management system with video streaming, progress tracking, certification, and AI-powered personalized learning paths.',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'FFmpeg', 'AWS S3'],
      link: '#',
      icon: Database
    }
  ];

  const skills = {
    'Frontend Development': ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Redux', 'GraphQL', 'Webpack'],
    'Backend Development': ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'REST APIs', 'Microservices'],
    'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Jenkins', 'GitHub Actions', 'Nginx'],
    'Tools & Platforms': ['Git', 'VS Code', 'Figma', 'Postman', 'Jest', 'Cypress', 'Jira', 'Slack']
  };

  const experience = [
    {
      role: 'Lead Full Stack Engineer',
      company: 'Tech Innovations Corp',
      period: '2022 - Present',
      description: 'Architected and deployed cloud-native applications serving 2M+ users. Led cross-functional team of 8 engineers. Reduced infrastructure costs by 35% through optimization. Implemented CI/CD pipeline reducing deployment time by 60%.',
      achievements: ['Led migration to microservices', 'Mentored 5 junior developers', 'Improved system uptime to 99.99%']
    },
    {
      role: 'Senior Software Engineer',
      company: 'Digital Solutions Inc',
      period: '2020 - 2022',
      description: 'Developed enterprise-grade web applications using modern tech stack. Established coding standards and best practices. Optimized database queries improving response time by 50%. Built reusable component library used across 10+ projects.',
      achievements: ['Reduced page load time by 40%', 'Implemented automated testing', 'Led security audit initiatives']
    },
    {
      role: 'Software Engineer',
      company: 'Startup Ventures',
      period: '2018 - 2020',
      description: 'Built responsive web applications from concept to deployment. Collaborated with UX team to create intuitive interfaces. Integrated third-party APIs and payment gateways. Participated in agile development cycles and code reviews.',
      achievements: ['Launched 8 successful products', 'Achieved 95% test coverage', 'Reduced bug rate by 30%']
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section.toLowerCase());
    setIsMenuOpen(false);
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => nav.toLowerCase());
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-16 items-center justify-between px-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Terminal className="h-6 w-6" />
            <span className="text-xl font-bold">Portfolio</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Button
                key={item}
                variant={activeSection === item.toLowerCase() ? 'default' : 'ghost'}
                onClick={() => scrollToSection(item)}
                className="text-sm"
              >
                {item}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
          >
            <div className="container py-4 space-y-2 px-4">
              {navigation.map((item) => (
                <Button
                  key={item}
                  variant={activeSection === item.toLowerCase() ? 'default' : 'ghost'}
                  onClick={() => scrollToSection(item)}
                  className="w-full justify-start"
                >
                  {item}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="container px-4 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center"
          >
            <Badge variant="outline" className="mb-4">
              Available for opportunities
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Full Stack Developer
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Architecting scalable solutions and crafting exceptional digital experiences with modern technologies and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" onClick={() => scrollToSection('Projects')}>
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('Contact')}>
                Get in Touch
              </Button>
            </div>
            <div className="flex gap-4 justify-center pt-8">
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Separator className="container" />

      {/* About Section */}
      <section id="about" className="container px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Passionate about building the future of web
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Professional Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm a seasoned full-stack developer with over 6 years of experience designing and building enterprise-scale applications. 
                My expertise spans across modern web technologies, cloud infrastructure, and agile methodologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in creating high-performance, scalable solutions that drive business value. From architecting microservices 
                to optimizing frontend performance, I focus on delivering exceptional user experiences backed by robust engineering.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I lead development initiatives that impact millions of users, mentor engineering teams, and continuously 
                explore emerging technologies to stay at the forefront of software development.
              </p>
              <Separator />
              <div className="flex flex-wrap gap-2 pt-2">
                {['Problem Solver', 'Team Leader', 'Cloud Expert', 'Agile Practitioner', 'Open Source Contributor'].map((trait) => (
                  <Badge key={trait} variant="secondary">
                    {trait}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <Separator className="container" />

      {/* Projects Section */}
      <section id="projects" className="container px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="text-muted-foreground md:text-lg">
              A selection of my recent work and contributions
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <IconComponent className="h-10 w-10 mb-4" />
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.link}>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="secondary" className="w-full" asChild>
                        <a href={project.link}>
                          View Project
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <Separator className="container" />

      {/* Skills Section */}
      <section id="skills" className="container px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Technical Expertise
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="h-5 w-5" />
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Separator className="container" />

      {/* Experience Section */}
      <section id="experience" className="container px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Professional Experience
            </h2>
            <p className="text-muted-foreground md:text-lg">
              My journey in software engineering
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle className="text-2xl">{exp.role}</CardTitle>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                    <CardDescription className="text-base font-medium">
                      {exp.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Separator className="container" />

      {/* Contact Section */}
      <section id="contact" className="container px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Let's discuss your next project
            </p>
          </div>

          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>
                I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="resize-none"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button size="lg" className="w-full">
                Send Message
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="#">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;