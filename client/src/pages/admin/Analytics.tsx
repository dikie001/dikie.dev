import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    BarChart3,
    TrendingUp,
    TrendingDown,
    Users,
    Eye,
    Clock,
    Globe,
    Monitor,
    Smartphone,
    Tablet,
    ArrowUpRight,
    ArrowDownRight,
    Calendar
} from 'lucide-react';

// Time period options
const periods = ['7 days', '30 days', '90 days', '12 months'];

// Mock data
const overviewStats = [
    { label: 'Total Visitors', value: '12,847', change: '+18.2%', trend: 'up', icon: Users },
    { label: 'Page Views', value: '45,234', change: '+12.5%', trend: 'up', icon: Eye },
    { label: 'Avg. Duration', value: '2m 45s', change: '+5.3%', trend: 'up', icon: Clock },
    { label: 'Bounce Rate', value: '34.2%', change: '-2.1%', trend: 'down', icon: TrendingDown },
];

const dailyData = [
    { day: 'Mon', visitors: 320, pageViews: 890 },
    { day: 'Tue', visitors: 410, pageViews: 1120 },
    { day: 'Wed', visitors: 380, pageViews: 980 },
    { day: 'Thu', visitors: 520, pageViews: 1450 },
    { day: 'Fri', visitors: 480, pageViews: 1280 },
    { day: 'Sat', visitors: 290, pageViews: 720 },
    { day: 'Sun', visitors: 260, pageViews: 680 },
];

const topCountries = [
    { country: 'United States', visitors: 4285, percentage: 33.4, flag: '🇺🇸' },
    { country: 'United Kingdom', visitors: 1842, percentage: 14.3, flag: '🇬🇧' },
    { country: 'Germany', visitors: 1523, percentage: 11.9, flag: '🇩🇪' },
    { country: 'Canada', visitors: 1256, percentage: 9.8, flag: '🇨🇦' },
    { country: 'India', visitors: 1124, percentage: 8.7, flag: '🇮🇳' },
    { country: 'Australia', visitors: 892, percentage: 6.9, flag: '🇦🇺' },
    { country: 'France', visitors: 654, percentage: 5.1, flag: '🇫🇷' },
    { country: 'Others', visitors: 1271, percentage: 9.9, flag: '🌍' },
];

const browserData = [
    { browser: 'Chrome', percentage: 58, color: 'bg-yellow-500' },
    { browser: 'Safari', percentage: 22, color: 'bg-blue-500' },
    { browser: 'Firefox', percentage: 12, color: 'bg-orange-500' },
    { browser: 'Edge', percentage: 6, color: 'bg-cyan-500' },
    { browser: 'Others', percentage: 2, color: 'bg-gray-500' },
];

const deviceData = [
    { device: 'Desktop', percentage: 58, count: 7451, icon: Monitor },
    { device: 'Mobile', percentage: 35, count: 4496, icon: Smartphone },
    { device: 'Tablet', percentage: 7, count: 900, icon: Tablet },
];

const topReferrers = [
    { source: 'google.com', visits: 3842, percentage: 29.9 },
    { source: 'Direct', visits: 3156, percentage: 24.6 },
    { source: 'linkedin.com', visits: 2134, percentage: 16.6 },
    { source: 'github.com', visits: 1523, percentage: 11.9 },
    { source: 'twitter.com', visits: 892, percentage: 6.9 },
    { source: 'dev.to', visits: 543, percentage: 4.2 },
    { source: 'Others', visits: 757, percentage: 5.9 },
];

const pagePerformance = [
    { page: '/', views: 15234, avgTime: '1m 45s', bounceRate: '28%' },
    { page: '/projects', views: 12456, avgTime: '3m 12s', bounceRate: '22%' },
    { page: '/about', views: 8234, avgTime: '2m 05s', bounceRate: '35%' },
    { page: '/skills', views: 5642, avgTime: '1m 30s', bounceRate: '42%' },
    { page: '/contact', views: 3668, avgTime: '2m 45s', bounceRate: '18%' },
];

export function Analytics() {
    const [selectedPeriod, setSelectedPeriod] = useState('30 days');
    const maxVisitors = Math.max(...dailyData.map(d => d.visitors));

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Analytics</h1>
                    <p className="text-muted-foreground">Detailed insights into your portfolio performance.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div className="flex bg-secondary rounded-lg p-1">
                        {periods.map((period) => (
                            <button
                                key={period}
                                onClick={() => setSelectedPeriod(period)}
                                className={`px-3 py-1 text-sm rounded-md transition-colors ${selectedPeriod === period
                                        ? 'bg-primary text-primary-foreground'
                                        : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                {period}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Overview Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {overviewStats.map((stat) => (
                    <Card key={stat.label}>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                {stat.label}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="flex items-center text-xs mt-1">
                                {stat.trend === 'up' ? (
                                    <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                                ) : (
                                    <ArrowDownRight className="h-3 w-3 text-green-500 mr-1" />
                                )}
                                <span className="text-green-500">{stat.change}</span>
                                <span className="text-muted-foreground ml-1">vs last period</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Charts Row */}
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Daily Visitors Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="h-5 w-5" />
                            Daily Visitors
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-end justify-between gap-2 h-48">
                            {dailyData.map((day) => (
                                <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                                    <div
                                        className="w-full bg-primary rounded-t-sm"
                                        style={{ height: `${(day.visitors / maxVisitors) * 160}px` }}
                                    />
                                    <span className="text-xs text-muted-foreground">{day.day}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 text-sm">
                            <span className="text-muted-foreground">Total this week</span>
                            <span className="font-medium">
                                {dailyData.reduce((acc, d) => acc + d.visitors, 0).toLocaleString()} visitors
                            </span>
                        </div>
                    </CardContent>
                </Card>

                {/* Browser Distribution */}
                <Card>
                    <CardHeader>
                        <CardTitle>Browser Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {browserData.map((browser) => (
                                <div key={browser.browser} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="font-medium">{browser.browser}</span>
                                        <span className="text-muted-foreground">{browser.percentage}%</span>
                                    </div>
                                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${browser.color} rounded-full`}
                                            style={{ width: `${browser.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Geographic & Device Row */}
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Top Countries */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Globe className="h-5 w-5" />
                            Top Countries
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {topCountries.map((country) => (
                                <div key={country.country} className="flex items-center gap-3">
                                    <span className="text-xl">{country.flag}</span>
                                    <div className="flex-1">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="font-medium">{country.country}</span>
                                            <span className="text-muted-foreground">
                                                {country.visitors.toLocaleString()}
                                            </span>
                                        </div>
                                        <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary rounded-full"
                                                style={{ width: `${country.percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                    <span className="text-xs text-muted-foreground w-12 text-right">
                                        {country.percentage}%
                                    </span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Device & Referrers */}
                <div className="space-y-6">
                    {/* Device Breakdown */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Devices</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-3 gap-4">
                                {deviceData.map((device) => (
                                    <div key={device.device} className="text-center p-4 bg-secondary/30 rounded-lg">
                                        <device.icon className="h-8 w-8 mx-auto text-primary mb-2" />
                                        <p className="text-2xl font-bold">{device.percentage}%</p>
                                        <p className="text-xs text-muted-foreground">{device.device}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Top Referrers */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <TrendingUp className="h-5 w-5" />
                                Top Referrers
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {topReferrers.slice(0, 5).map((referrer) => (
                                    <div key={referrer.source} className="flex items-center justify-between py-2">
                                        <span className="text-sm font-medium">{referrer.source}</span>
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm text-muted-foreground">
                                                {referrer.visits.toLocaleString()}
                                            </span>
                                            <Badge variant="secondary" className="w-14 justify-center">
                                                {referrer.percentage}%
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Page Performance */}
            <Card>
                <CardHeader>
                    <CardTitle>Page Performance</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Page</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Views</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Avg. Time</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Bounce Rate</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Performance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pagePerformance.map((page) => (
                                    <tr key={page.page} className="border-b border-border last:border-0">
                                        <td className="py-3 px-4 font-medium">{page.page}</td>
                                        <td className="py-3 px-4">{page.views.toLocaleString()}</td>
                                        <td className="py-3 px-4">{page.avgTime}</td>
                                        <td className="py-3 px-4">{page.bounceRate}</td>
                                        <td className="py-3 px-4">
                                            <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-primary rounded-full"
                                                    style={{ width: `${(page.views / 15234) * 100}%` }}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
