import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t">
            <div className="container max-w-4xl">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Brand */}
                    <div className="text-center sm:text-left">
                        <p className="font-semibold">
                            <span className="text-primary">DICKENS</span> OMONDI
                        </p>
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} • dikie.dev • All rights reserved.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/dikie001"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/dikie"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                            href="mailto:omondidickens255@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
