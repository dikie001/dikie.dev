import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
        <section id="about" className="py-24 bg-secondary/5">
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
                            <div className="absolute inset-0 bg-gradient-to-br from-card via-muted to-card" />

                            {/* Decorative Pattern */}
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
                                    backgroundSize: '20px 20px',
                                }}
                            />

                            {/* Profile Image Placeholder */}
                            <div className="absolute inset-8 rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-primary/60 opacity-80 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">👨‍💻</div>
                                    <p className="text-primary-foreground font-medium">Your Photo Here</p>
                                </div>
                            </div>

                            {/* Decorative Border */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-primary/50 opacity-50" />
                        </div>

                        {/* Floating Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="absolute -bottom-6 -right-6 bg-card/80 backdrop-blur-md rounded-2xl p-6 border shadow-lg"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
                                    <Rocket className="w-6 h-6 text-primary-foreground" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-primary">5+ Years</p>
                                    <p className="text-sm text-muted-foreground">of Excellence</p>
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
                        <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
                            About Me
                        </span>
                        <h2 className="text-4xl font-bold mb-6">
                            Passionate About Creating
                            <br />
                            <span className="text-primary">Digital Excellence</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                            I'm a Full-Stack Developer with a passion for creating beautiful,
                            functional, and user-centered digital experiences. With over 5 years
                            of experience in the industry, I've had the privilege of working with
                            startups and established companies alike.
                        </p>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
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
                                    className="flex items-start gap-3 p-4 rounded-xl bg-card border hover:border-primary transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-1">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
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
                        <Card
                            key={stat.label}
                            className="text-center p-6 hover:border-primary hover:shadow-lg transition-all group"
                        >
                            <CardContent className="p-0">
                                <motion.p
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: "spring" }}
                                    className="text-4xl md:text-5xl font-bold text-primary mb-2"
                                >
                                    {stat.value}
                                </motion.p>
                                <p className="text-muted-foreground text-sm">{stat.label}</p>
                            </CardContent>
                        </Card>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
