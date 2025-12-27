import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export function AdminLayout() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="min-h-screen bg-background">
            <AdminSidebar
                collapsed={sidebarCollapsed}
                onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            />

            {/* Main Content */}
            <main
                className={cn(
                    "transition-all duration-300",
                    sidebarCollapsed ? "ml-16" : "ml-64"
                )}
            >
                {/* Top Bar */}
                <header className="sticky top-0 z-30 h-16 bg-card border-b border-border flex items-center justify-between px-6">
                    <h1 className="text-lg font-semibold">Portfolio Admin</h1>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                                <span className="text-sm font-medium text-primary">A</span>
                            </div>
                            <span className="text-sm font-medium">Admin</span>
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
