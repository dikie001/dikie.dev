import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
    LayoutDashboard,
    Users,
    MessageSquare,
    BarChart3,
    Settings,
    LogOut,
    Home,
    ChevronLeft,
    Menu,
    FileText,
    Briefcase,
    Code,
    User,
    Globe,
    FolderOpen,
    Wrench
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface NavItem {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    href: string;
}

interface NavSection {
    title: string;
    items: NavItem[];
}

const navSections: NavSection[] = [
    {
        title: 'Overview',
        items: [
            { label: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
            { label: 'Analytics', icon: BarChart3, href: '/admin/analytics' },
        ]
    },
    {
        title: 'Content',
        items: [
            { label: 'Site Info', icon: Globe, href: '/admin/content/site' },
            { label: 'About', icon: User, href: '/admin/content/about' },
            { label: 'Projects', icon: FolderOpen, href: '/admin/content/projects' },
            { label: 'Skills', icon: Code, href: '/admin/content/skills' },
            { label: 'Experience', icon: Briefcase, href: '/admin/content/experience' },
        ]
    },
    {
        title: 'Communication',
        items: [
            { label: 'Messages', icon: MessageSquare, href: '/admin/messages' },
            { label: 'Visitors', icon: Users, href: '/admin/visitors' },
        ]
    },
    {
        title: 'System',
        items: [
            { label: 'Settings', icon: Settings, href: '/admin/settings' },
        ]
    }
];

interface AdminSidebarProps {
    collapsed?: boolean;
    onToggle?: () => void;
}

export function AdminSidebar({ collapsed = false, onToggle }: AdminSidebarProps) {
    const location = useLocation();

    return (
        <aside
            className={cn(
                "fixed left-0 top-0 z-40 h-screen bg-card border-r border-border flex flex-col",
                collapsed ? "w-16" : "w-64"
            )}
        >
            {/* Header */}
            <div className="flex h-14 items-center justify-between px-4 border-b border-border shrink-0">
                {!collapsed && (
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                            <Wrench className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <span className="font-semibold">Admin</span>
                    </div>
                )}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onToggle}
                    className="h-8 w-8 shrink-0"
                >
                    {collapsed ? <Menu className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                </Button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-2 space-y-4">
                {navSections.map((section, sectionIndex) => (
                    <div key={section.title}>
                        {/* Section Header */}
                        {!collapsed && (
                            <div className="px-3 py-2">
                                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    {section.title}
                                </span>
                            </div>
                        )}

                        {/* Section Items */}
                        <div className="space-y-1">
                            {section.items.map((item) => {
                                const isActive = location.pathname === item.href ||
                                    (item.href !== '/admin' && location.pathname.startsWith(item.href));
                                return (
                                    <Link
                                        key={item.href}
                                        to={item.href}
                                        className={cn(
                                            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                            isActive
                                                ? "bg-primary text-primary-foreground"
                                                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                                            collapsed && "justify-center px-2"
                                        )}
                                        title={collapsed ? item.label : undefined}
                                    >
                                        <item.icon className="h-4 w-4 shrink-0" />
                                        {!collapsed && <span>{item.label}</span>}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Separator between sections */}
                        {sectionIndex < navSections.length - 1 && !collapsed && (
                            <Separator className="my-3 mx-2" />
                        )}
                    </div>
                ))}
            </nav>

            {/* Footer */}
            <div className="border-t border-border p-2 shrink-0 space-y-1">
                <Link
                    to="/"
                    target="_blank"
                    className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors",
                        collapsed && "justify-center px-2"
                    )}
                    title={collapsed ? "View Site" : undefined}
                >
                    <Home className="h-4 w-4 shrink-0" />
                    {!collapsed && <span>View Site</span>}
                </Link>
                <button
                    className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors",
                        collapsed && "justify-center px-2"
                    )}
                    title={collapsed ? "Logout" : undefined}
                >
                    <LogOut className="h-4 w-4 shrink-0" />
                    {!collapsed && <span>Logout</span>}
                </button>
            </div>
        </aside>
    );
}
