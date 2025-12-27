import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/theme-toggle';

// Page titles for the header
const pageTitles: Record<string, string> = {
    '/admin': 'Dashboard',
    '/admin/analytics': 'Analytics',
    '/admin/content/site': 'Site Information',
    '/admin/content/about': 'About Section',
    '/admin/content/projects': 'Projects',
    '/admin/content/skills': 'Skills',
    '/admin/content/experience': 'Experience',
    '/admin/messages': 'Messages',
    '/admin/visitors': 'Visitors',
    '/admin/settings': 'Settings',
};

export function AdminLayout() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const location = useLocation();
    const pageTitle = pageTitles[location.pathname] || 'Admin';

    return (
        <div className="min-h-screen bg-background">
            <AdminSidebar
                collapsed={sidebarCollapsed}
                onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            />

            {/* Main Content */}
            <main
                className={cn(
                    "min-h-screen transition-all duration-200",
                    sidebarCollapsed ? "ml-16" : "ml-64"
                )}
            >
                {/* Top Bar */}
                <header className="sticky top-0 z-30 h-14 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border flex items-center justify-between px-6">
                    <div>
                        <span className="text-sm text-muted-foreground">Admin Panel</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-sm font-semibold text-primary-foreground">D</span>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-6">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
