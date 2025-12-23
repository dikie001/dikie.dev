import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';

interface NavbarProps {
    activeSection: string;
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
    scrollToSection: (section: string) => void;
}

const navigation = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Testimonials', 'Contact'];

export function Navbar({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }: NavbarProps) {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 py-4"
        >
            <div className="container mx-auto px-4">
                <div className="relative flex h-14 items-center justify-between rounded-full border border-border/50 bg-background/70 px-6 shadow-lg shadow-primary/5 backdrop-blur-xl">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-2.5 cursor-pointer group"
                        onClick={() => scrollToSection('Home')}
                    >
                        <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70 shadow-md shadow-primary/30">
                            <Sparkles className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="text-lg font-bold tracking-tight">
                            <span className="text-primary">DIKIE</span>
                            <span className="text-muted-foreground">.DEV</span>
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navigation.map((item) => {
                            const isActive = activeSection === item.toLowerCase();
                            return (
                                <motion.button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-full ${isActive
                                            ? 'text-primary'
                                            : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{item}</span>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-secondary/50 text-foreground transition-colors hover:bg-secondary"
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="lg:hidden absolute top-full left-0 right-0 mt-2 px-4"
                    >
                        <div className="rounded-2xl border border-border/50 bg-background/95 p-4 shadow-xl backdrop-blur-xl">
                            <div className="flex flex-col gap-1">
                                {navigation.map((item, index) => {
                                    const isActive = activeSection === item.toLowerCase();
                                    return (
                                        <motion.button
                                            key={item}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            onClick={() => scrollToSection(item)}
                                            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${isActive
                                                    ? 'bg-primary/10 text-primary border border-primary/20'
                                                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                                                }`}
                                        >
                                            <span className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-primary' : 'bg-muted-foreground/50'}`} />
                                            {item}
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
