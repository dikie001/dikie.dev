import { useEffect } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X, ArrowRight } from "lucide-react";

export type activeSectionType =
  | "Home"
  | "About"
  | "Projects"
  | "Skills"
  | "Experience"
  | "Contact";

interface NavbarProps {
  activeSection: activeSectionType;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (section: activeSectionType) => void;
}

const navigation: activeSectionType[] = [
  "Home",
  "About",
  "Projects",
  "Skills",
  "Experience",
];

export function Navbar({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}: NavbarProps) {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-4 inset-x-0 z-50 px-4 pointer-events-none" // pointer-events-none allows clicking through the empty space around the floating nav
      >
        <div className="container mx-auto">
          <div className="relative pointer-events-auto flex h-14 items-center justify-between rounded-full border border-border/40 bg-background/80 px-4 sm:px-6 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer group select-none"
              onClick={() => scrollToSection("Home")}
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Sparkles className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
              </div>
              <span className="text-lg font-bold tracking-tight hidden sm:block">
                DIKIE<span className="text-muted-foreground">.DEV</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 mx-4">
              {navigation.map((item) => {
                const isActive = activeSection === item;
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`relative px-4 py-1.5 text-sm font-medium transition-colors rounded-full ${isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 rounded-full bg-secondary border border-black/5 dark:border-white/5"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              {/* Desktop CTA */}
              <Button
                size="sm"
                className="hidden lg:flex rounded-full px-5 ml-1"
                onClick={() => scrollToSection("Contact")}
              >
                Let's Talk
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden rounded-full h-9 w-9"
              >
                {isMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl lg:hidden flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col gap-6 items-center text-center">
              {[...navigation, "Contact" as activeSectionType].map(
                (item, index) => {
                  const isActive = activeSection === item;
                  return (
                    <motion.button
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => {
                        scrollToSection(item);
                        setIsMenuOpen(false);
                      }}
                      className={`text-3xl font-bold tracking-tight transition-colors ${isActive ? "text-primary" : "text-muted-foreground"
                        }`}
                    >
                      {item}
                    </motion.button>
                  );
                }
              )}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Button
                  size="lg"
                  className="rounded-full px-8 text-lg"
                  onClick={() => {
                    scrollToSection("Contact");
                    setIsMenuOpen(false);
                  }}
                >
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </nav>

            <div className="absolute bottom-10 text-muted-foreground text-sm">
              DIKIE.DEV © {new Date().getFullYear()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
