import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Users,
    Eye,
    MessageSquare,
    TrendingUp,
    Globe,
    Monitor,
    Smartphone,
    Clock,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react';

// Mock data - replace with actual API calls
const stats = [
    {
        title: 'Total Visitors',
        value: '2,847',
        change: '+12.5%',
        trend: 'up',
        icon: Users,
        description: 'vs last month'
    },
    {
        title: 'Page Views',
        value: '14,523',
        change: '+8.2%',
        trend: 'up',
        icon: Eye,
        description: 'vs last month'
    },
    {
        title: 'Messages',
        value: '23',
        change: '+3',
        trend: 'up',
        icon: MessageSquare,
        description: 'new this week'
    },
    {
        title: 'Avg. Session',
        value: '2m 34s',
        change: '-5.1%',
        trend: 'down',
        icon: Clock,
        description: 'vs last month'
    },
];

const recentVisitors = [
    { id: 1, country: 'United States', city: 'New York', device: 'Desktop', browser: 'Chrome', page: '/projects', time: '2 min ago' },
    { id: 2, country: 'Germany', city: 'Berlin', device: 'Mobile', browser: 'Safari', page: '/', time: '5 min ago' },
    { id: 3, country: 'Japan', city: 'Tokyo', device: 'Desktop', browser: 'Firefox', page: '/about', time: '12 min ago' },
    { id: 4, country: 'Brazil', city: 'São Paulo', device: 'Mobile', browser: 'Chrome', page: '/contact', time: '18 min ago' },
    { id: 5, country: 'UK', city: 'London', device: 'Tablet', browser: 'Safari', page: '/projects', time: '25 min ago' },
];

const topPages = [
    { page: '/', views: 5234, percentage: 36 },
    { page: '/projects', views: 3821, percentage: 26 },
    { page: '/about', views: 2456, percentage: 17 },
    { page: '/contact', views: 1892, percentage: 13 },
    { page: '/skills', views: 1120, percentage: 8 },
];

const deviceStats = [
    { device: 'Desktop', icon: Monitor, percentage: 58, count: 1651 },
    { device: 'Mobile', icon: Smartphone, percentage: 35, count: 996 },
    { device: 'Tablet', icon: Monitor, percentage: 7, count: 200 },
];

const trafficSources = [
    { source: 'Direct', percentage: 42, count: 1196 },
    { source: 'Google', percentage: 31, count: 883 },
    { source: 'LinkedIn', percentage: 15, count: 427 },
    { source: 'GitHub', percentage: 8, count: 228 },
    { source: 'Twitter', percentage: 4, count: 113 },
];

export function Dashboard() {
    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <p className="text-muted-foreground">Welcome back! Here's what's happening.</p>
                </div>
                <Button>
                    <Globe className="h-4 w-4 mr-2" />
                    View Site
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="flex items-center text-xs">
                                {stat.trend === 'up' ? (
                                    <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                                ) : (
                                    <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                                )}
                                <span className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                                    {stat.change}
                                </span>
                                <span className="text-muted-foreground ml-1">{stat.description}</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Recent Visitors */}
                <Card className="lg:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Recent Visitors</CardTitle>
                        <Button variant="ghost" size="sm">View All</Button>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentVisitors.map((visitor) => (
                                <div
                                    key={visitor.id}
                                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Globe className="h-4 w-4 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">{visitor.city}, {visitor.country}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {visitor.device} · {visitor.browser} · {visitor.page}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-muted-foreground">{visitor.time}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Top Pages */}
                <Card>
                    <CardHeader>
                        <CardTitle>Top Pages</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {topPages.map((page) => (
                                <div key={page.page} className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="font-medium">{page.page}</span>
                                        <span className="text-muted-foreground">{page.views.toLocaleString()}</span>
                                    </div>
                                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary rounded-full"
                                            style={{ width: `${page.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Bottom Grid */}
            <div className="grid gap-6 md:grid-cols-2">
                {/* Device Breakdown */}
                <Card>
                    <CardHeader>
                        <CardTitle>Device Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {deviceStats.map((device) => (
                                <div key={device.device} className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                                        <device.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-sm font-medium">{device.device}</span>
                                            <span className="text-sm text-muted-foreground">{device.percentage}%</span>
                                        </div>
                                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary rounded-full"
                                                style={{ width: `${device.percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                    <span className="text-sm text-muted-foreground w-16 text-right">
                                        {device.count.toLocaleString()}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Traffic Sources */}
                <Card>
                    <CardHeader>
                        <CardTitle>Traffic Sources</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {trafficSources.map((source) => (
                                <div key={source.source} className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                                        <TrendingUp className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-sm font-medium">{source.source}</span>
                                            <span className="text-sm text-muted-foreground">{source.percentage}%</span>
                                        </div>
                                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary rounded-full"
                                                style={{ width: `${source.percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                    <span className="text-sm text-muted-foreground w-16 text-right">
                                        {source.count.toLocaleString()}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
