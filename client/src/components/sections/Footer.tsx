import { Terminal } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t py-12 text-center text-sm text-muted-foreground">
            <div className="container flex flex-col items-center gap-4">
                <Terminal className="h-6 w-6" />
                <p>© {new Date().getFullYear()} DIKIE. Made with React, TS, and Shadcn.</p>
            </div>
        </footer>
    );
}
