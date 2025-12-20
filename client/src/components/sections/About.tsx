import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
    { value: "10+", label: "Awards Won" },
];

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable, scalable, and efficient code",
    },
    {
        icon: Palette,
        title: "Creative Design",
        description: "Crafting visually stunning user interfaces",
    },
    {
        icon: Rocket,
        title: "Fast Delivery",
        description: "Meeting deadlines without compromising quality",
    },
    {
        icon: Users,
        title: "Team Player",
        description: "Collaborating effectively with cross-functional teams",
    },
];

export function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="section bg-[var(--background-elevated)]">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Image */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                            {/* Placeholder with gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--background-card)] via-[var(--background-muted)] to-[var(--background-card)]" />

                            {/* Decorative Pattern */}
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: `radial-gradient(var(--luxury-gold) 1px, transparent 1px)`,
                                    backgroundSize: '20px 20px',
                                }}
                            />

                            {/* Profile Image Placeholder */}
                            <div className="absolute inset-8 rounded-2xl bg-gradient-to-br from-[var(--luxury-gold)] via-[var(--antique-gold)] to-[var(--luxury-gold-dark)] opacity-80 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">👨‍💻</div>
                                    <p className="text-[var(--background)] font-medium">Your Photo Here</p>
                                </div>
                            </div>

                            {/* Decorative Border */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-[var(--border-gold)] opacity-50" />
                        </div>

                        {/* Floating Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 glow-gold"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--luxury-gold)] to-[var(--antique-gold)] flex items-center justify-center">
                                    <Rocket className="w-6 h-6 text-[var(--background)]" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gradient-gold">5+ Years</p>
                                    <p className="text-sm text-[var(--foreground-muted)]">of Excellence</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-[var(--luxury-gold)] text-sm font-medium uppercase tracking-widest mb-4 block">
                            About Me
                        </span>
                        <h2 className="section-title mb-6">
                            Passionate About Creating
                            <br />
                            <span className="text-gradient-gold">Digital Excellence</span>
                        </h2>
                        <p className="text-[var(--foreground-muted)] text-lg mb-6 leading-relaxed">
                            I'm a Full-Stack Developer with a passion for creating beautiful,
                            functional, and user-centered digital experiences. With over 5 years
                            of experience in the industry, I've had the privilege of working with
                            startups and established companies alike.
                        </p>
                        <p className="text-[var(--foreground-muted)] mb-8 leading-relaxed">
                            My approach combines technical expertise with creative problem-solving
                            to deliver solutions that not only meet requirements but exceed expectations.
                            I believe in clean code, intuitive design, and the power of collaboration.
                        </p>

                        {/* Highlights Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    className="flex items-start gap-3 p-4 rounded-xl bg-[var(--background-card)] border border-[var(--border)] hover:border-[var(--border-gold)] transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[rgba(212,175,55,0.1)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(212,175,55,0.2)] transition-colors">
                                        <item.icon className="w-5 h-5 text-[var(--luxury-gold)]" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-1">{item.title}</h4>
                                        <p className="text-sm text-[var(--foreground-muted)]">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="text-center p-6 rounded-2xl border border-[var(--border)] bg-[var(--background-card)] hover:border-[var(--border-gold)] hover:shadow-[var(--shadow-gold)] transition-all group"
                        >
                            <motion.p
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: "spring" }}
                                className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2"
                            >
                                {stat.value}
                            </motion.p>
                            <p className="text-[var(--foreground-muted)] text-sm">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
