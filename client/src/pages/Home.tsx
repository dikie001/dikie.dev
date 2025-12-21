import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail, ExternalLink, Code2, Menu, X, ArrowRight, Terminal, Layers, Zap, Globe, Database, Cpu, Award, Users, TrendingUp, CheckCircle2, Star, Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navigation = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Testimonials', 'Contact'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

  const skills = {
    'Frontend Development': {
      items: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Redux', 'GraphQL', 'Webpack'],
      level: 95
    },
    'Backend Development': {
      items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'REST APIs', 'Microservices'],
      level: 90
    },
    'Cloud & DevOps': {
      items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Jenkins', 'GitHub Actions', 'Nginx'],
      level: 85
    },
    'Tools & Platforms': {
      items: ['Git', 'VS Code', 'Figma', 'Postman', 'Jest', 'Cypress', 'Jira', 'Slack'],
      level: 92
    }
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
      description: 'Developed enterprise-grade web applications using modern tech stack. Established coding standards and best practices. Optimized database queries improving response time by 50%.',
      achievements: ['Reduced page load time by 40%', 'Implemented automated testing', 'Led security audit initiatives', 'Built reusable component library'],
      current: false
    },
    {
      role: 'Software Engineer',
      company: 'Startup Ventures',
      period: '2018 - 2020',
      description: 'Built responsive web applications from concept to deployment. Collaborated with UX team to create intuitive interfaces. Integrated third-party APIs and payment gateways.',
      achievements: ['Launched 8 successful products', 'Achieved 95% test coverage', 'Reduced bug rate by 30%', 'Improved code quality score'],
      current: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, Tech Innovations Corp',
      content: 'Outstanding technical leadership and delivery. Transformed our infrastructure and built a world-class engineering team.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, Digital Solutions',
      content: 'Exceptional problem-solver who consistently delivers high-quality solutions on time. A pleasure to work with.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'CEO, Startup Ventures',
      content: 'Instrumental in our growth from startup to scale-up. Technical excellence combined with strong business acumen.',
      rating: 5
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

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
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('Home')}
          >
            <Terminal className="h-6 w-6" />
            <span className="text-xl font-bold">Portfolio</span>
          </motion.div>

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

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t overflow-hidden"
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
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="container px-4 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Badge variant="outline" className="mb-4 px-4 py-2">
                  <CheckCircle2 className="mr-2 h-3 w-3" />
                  Available for opportunities
                </Badge>
              </motion.div>
            </div>

            <div className="text-center space-y-6">
              <motion.h1 
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Full Stack Developer &
                <br />
                <span className="text-muted-foreground">Solution Architect</span>
              </motion.h1>

              <motion.p 
                className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Transforming ideas into scalable, high-performance applications. Specialized in modern web technologies, cloud architecture, and team leadership.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button size="lg" onClick={() => scrollToSection('Projects')}>
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('Contact')}>
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
              </motion.div>

              <motion.div 
                className="flex gap-3 justify-center pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { icon: Github, label: 'GitHub' },
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Mail, label: 'Email' }
                ].map(({ icon: Icon, label }) => (
                  <motion.div key={label} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="icon" asChild>
                      <a href="#" aria-label={label}>
                        <Icon className="h-5 w-5" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6 pb-6">
                        <IconComponent className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <div className="text-3xl font-bold mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
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
          className="mx-auto max-w-5xl"
        >
          <div className="space-y-4 text-center mb-12">
            <Badge variant="outline">About Me</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Building the Future of Web
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Professional Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  With over 6 years of experience in full-stack development, I've led teams building applications that serve millions of users worldwide. My expertise spans from frontend excellence to backend architecture and cloud infrastructure.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in transforming complex business requirements into elegant, scalable solutions that drive real business value.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Core Competencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    'Full-Stack Development',
                    'Cloud Architecture (AWS, GCP)',
                    'Team Leadership & Mentoring',
                    'Performance Optimization',
                    'CI/CD & DevOps',
                    'Agile Methodologies'
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
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
            <Badge variant="outline">Portfolio</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              A showcase of recent work and impactful solutions
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {projects.filter(p => p.featured).map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-xl transition-all border-2">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <IconComponent className="h-12 w-12 text-primary" />
                        <Badge>Featured</Badge>
                      </div>
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Separator />
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key}>
                            <div className="font-bold text-lg">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="default" className="w-full" asChild>
                        <a href={project.link}>
                          View Project
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-lg transition-all">
                    <CardHeader>
                      <IconComponent className="h-10 w-10 mb-2 text-primary" />
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-3">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="outline" className="text-xs">+{project.tech.length - 3}</Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" className="w-full" asChild>
                        <a href={project.link}>
                          Details
                          <ArrowRight className="ml-2 h-3 w-3" />
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
            <Badge variant="outline">Expertise</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Technical Skills
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              Modern technologies and tools I work with daily
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {Object.entries(skills).map(([category, data], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="flex items-center gap-2">
                        <Code2 className="h-5 w-5" />
                        {category}
                      </CardTitle>
                      <Badge variant="secondary">{data.level}%</Badge>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <motion.div
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${data.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {data.items.map((skill) => (
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
            <Badge variant="outline">Career</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Professional Experience
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              My journey in software engineering and leadership
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
                <Card className={`hover:shadow-lg transition-shadow ${exp.current ? 'border-2 border-primary' : ''}`}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <CardTitle className="text-2xl">{exp.role}</CardTitle>
                      <div className="flex gap-2">
                        {exp.current && <Badge>Current</Badge>}
                        <Badge variant="outline" className="whitespace-nowrap">
                          <Calendar className="mr-1 h-3 w-3" />
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-base font-medium flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      {exp.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <Separator />
                    <div>
                      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        Key Achievements
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}