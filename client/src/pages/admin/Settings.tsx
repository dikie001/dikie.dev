import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
    Settings as SettingsIcon,
    User,
    Lock,
    Bell,
    Globe,
    Palette,
    Shield,
    Save,
    Eye,
    EyeOff,
    Check
} from 'lucide-react';

export function Settings() {
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Settings</h1>
                    <p className="text-muted-foreground">Manage your admin preferences and security.</p>
                </div>
                <Button onClick={handleSave}>
                    {saved ? (
                        <>
                            <Check className="h-4 w-4 mr-2" />
                            Saved!
                        </>
                    ) : (
                        <>
                            <Save className="h-4 w-4 mr-2" />
                            Save Changes
                        </>
                    )}
                </Button>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Profile Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5" />
                            Profile Settings
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center">
                                <span className="text-3xl font-bold text-primary">D</span>
                            </div>
                            <div>
                                <h3 className="font-semibold">Dickens Omondi</h3>
                                <p className="text-sm text-muted-foreground">Administrator</p>
                                <Button variant="link" className="px-0 h-auto text-sm">
                                    Change avatar
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Display Name</label>
                            <Input defaultValue="Dickens Omondi" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <Input type="email" defaultValue="omondidickens255@gmail.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Bio</label>
                            <Input defaultValue="Full Stack Developer" />
                        </div>
                    </CardContent>
                </Card>

                {/* Security Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Lock className="h-5 w-5" />
                            Security
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Current Password</label>
                            <div className="relative">
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter current password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">New Password</label>
                            <div className="relative">
                                <Input
                                    type={showNewPassword ? 'text' : 'password'}
                                    placeholder="Enter new password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Confirm New Password</label>
                            <Input type="password" placeholder="Confirm new password" />
                        </div>

                        <div className="pt-4 border-t border-border">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Two-Factor Authentication</p>
                                    <p className="text-sm text-muted-foreground">Add extra security to your account</p>
                                </div>
                                <Badge variant="secondary">Disabled</Badge>
                            </div>
                            <Button variant="outline" className="mt-3">
                                <Shield className="h-4 w-4 mr-2" />
                                Enable 2FA
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Notification Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Bell className="h-5 w-5" />
                            Notifications
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[
                            { label: 'New message notifications', description: 'Get notified when someone sends a message', enabled: true },
                            { label: 'Weekly analytics report', description: 'Receive a weekly summary of your analytics', enabled: true },
                            { label: 'Visitor milestones', description: 'Get notified when you reach visitor milestones', enabled: false },
                            { label: 'Security alerts', description: 'Get notified about security-related events', enabled: true },
                        ].map((notification) => (
                            <div key={notification.label} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                                <div>
                                    <p className="font-medium">{notification.label}</p>
                                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                                </div>
                                <button
                                    className={`w-12 h-6 rounded-full transition-colors ${notification.enabled ? 'bg-primary' : 'bg-secondary'
                                        }`}
                                >
                                    <div
                                        className={`w-5 h-5 rounded-full bg-white shadow transform transition-transform ${notification.enabled ? 'translate-x-6' : 'translate-x-0.5'
                                            }`}
                                    />
                                </button>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Site Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Globe className="h-5 w-5" />
                            Site Settings
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Site Title</label>
                            <Input defaultValue="Dickens Omondi - Portfolio" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Site Description</label>
                            <Input defaultValue="Full Stack Developer building digital experiences" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Meta Keywords</label>
                            <Input defaultValue="developer, portfolio, react, typescript, fullstack" />
                        </div>

                        <div className="pt-4 border-t border-border">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Analytics Tracking</p>
                                    <p className="text-sm text-muted-foreground">Track visitor analytics on your site</p>
                                </div>
                                <Badge className="bg-green-500/10 text-green-500">Active</Badge>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Contact Form</p>
                                <p className="text-sm text-muted-foreground">Allow visitors to send messages</p>
                            </div>
                            <Badge className="bg-green-500/10 text-green-500">Active</Badge>
                        </div>
                    </CardContent>
                </Card>

                {/* Appearance */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Palette className="h-5 w-5" />
                            Appearance
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid sm:grid-cols-3 gap-4">
                            <div className="p-4 border border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                                <div className="h-20 bg-white border border-border rounded-md mb-3" />
                                <p className="font-medium text-center">Light</p>
                            </div>
                            <div className="p-4 border-2 border-primary rounded-lg cursor-pointer">
                                <div className="h-20 bg-zinc-900 border border-border rounded-md mb-3" />
                                <p className="font-medium text-center">Dark</p>
                            </div>
                            <div className="p-4 border border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                                <div className="h-20 bg-gradient-to-r from-white to-zinc-900 border border-border rounded-md mb-3" />
                                <p className="font-medium text-center">System</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Danger Zone */}
                <Card className="lg:col-span-2 border-destructive/50">
                    <CardHeader>
                        <CardTitle className="text-destructive">Danger Zone</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between p-4 bg-destructive/5 rounded-lg">
                            <div>
                                <p className="font-medium">Reset All Analytics</p>
                                <p className="text-sm text-muted-foreground">This will permanently delete all visitor data and analytics.</p>
                            </div>
                            <Button variant="destructive">Reset Data</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
