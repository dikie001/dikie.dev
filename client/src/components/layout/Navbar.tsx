import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
    activeSection: string;
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
    scrollToSection: (section: string) => void;
}

const navigation = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Testimonials', 'Contact'];

export function Navbar({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }: NavbarProps) {
    return (
        <nav className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between">
                <div
                    className="flex items-center gap-2 font-bold text-xl cursor-pointer"
                    onClick={() => scrollToSection('Home')}
                >
                    <Terminal className="h-6 w-6 text-primary" />
                    <span>DIKIE.DEV</span>
                </div>
                <div className="hidden md:flex gap-1">
                    {navigation.map((item) => (
                        <Button
                            key={item}
                            variant="ghost"
                            size="sm"
                            onClick={() => scrollToSection(item)}
                            className={activeSection === item.toLowerCase() ? "bg-secondary text-primary" : "text-muted-foreground"}
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
                    {isMenuOpen ? <X /> : <Menu />}
                </Button>
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="md:hidden border-t bg-background overflow-hidden"
                    >
                        <div className="container py-4 flex flex-col gap-2">
                            {navigation.map((item) => (
                                <Button
                                    key={item}
                                    variant="ghost"
                                    className="justify-start"
                                    onClick={() => scrollToSection(item)}
                                >
                                    {item}
                                </Button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
