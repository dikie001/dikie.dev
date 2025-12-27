import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
    Globe,
    Save,
    Check,
    User,
    Mail,
    MapPin,
    Briefcase,
    Github,
    Linkedin,
    Twitter
} from 'lucide-react';

export function SiteContent() {
    const [saved, setSaved] = useState(false);

    // Mock data - would come from API/state management
    const [siteData, setSiteData] = useState({
        name: 'Dickens Omondi',
        firstName: 'DICKENS',
        lastName: 'OMONDI',
        title: 'Full Stack Developer',
        tagline: 'A results-driven Full Stack Developer focused on delivering scalable, high-impact digital solutions.',
        greeting: 'Hello there, I\'m',
        email: 'omondidickens255@gmail.com',
        location: 'Open to Remote Work',
        availability: 'Available for Freelance Work',
        version: '1.0.0',
        github: 'https://github.com/dikie001',
        linkedin: 'https://linkedin.com/in/dikie',
        twitter: '',
    });

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
        // Here you would save to backend/localStorage
    };

    const updateField = (field: string, value: string) => {
        setSiteData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Site Information</h1>
                    <p className="text-muted-foreground">Manage your personal info and branding.</p>
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
                {/* Personal Info */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5" />
                            Personal Information
                        </CardTitle>
                        <CardDescription>Your name and identity on the site</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">First Name</label>
                                <Input
                                    value={siteData.firstName}
                                    onChange={(e) => updateField('firstName', e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Last Name</label>
                                <Input
                                    value={siteData.lastName}
                                    onChange={(e) => updateField('lastName', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Professional Title</label>
                            <Input
                                value={siteData.title}
                                onChange={(e) => updateField('title', e.target.value)}
                                placeholder="e.g., Full Stack Developer"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Greeting Text</label>
                            <Input
                                value={siteData.greeting}
                                onChange={(e) => updateField('greeting', e.target.value)}
                                placeholder="e.g., Hello there, I'm"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Tagline / Subtitle</label>
                            <Textarea
                                value={siteData.tagline}
                                onChange={(e) => updateField('tagline', e.target.value)}
                                placeholder="Brief description that appears under your name"
                                className="resize-none"
                                rows={3}
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Contact & Location */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Mail className="h-5 w-5" />
                            Contact & Location
                        </CardTitle>
                        <CardDescription>How visitors can reach you</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email Address</label>
                            <Input
                                type="email"
                                value={siteData.email}
                                onChange={(e) => updateField('email', e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Location / Work Preference</label>
                            <Input
                                value={siteData.location}
                                onChange={(e) => updateField('location', e.target.value)}
                                placeholder="e.g., San Francisco, CA or Remote"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Availability Status</label>
                            <Input
                                value={siteData.availability}
                                onChange={(e) => updateField('availability', e.target.value)}
                                placeholder="e.g., Available for Freelance Work"
                            />
                        </div>

                        <div className="p-3 bg-secondary/30 rounded-lg">
                            <p className="text-sm text-muted-foreground">
                                This status will appear on your hero section badge.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Social Links */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Globe className="h-5 w-5" />
                            Social Links
                        </CardTitle>
                        <CardDescription>Your online presence</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium flex items-center gap-2">
                                <Github className="h-4 w-4" />
                                GitHub
                            </label>
                            <Input
                                value={siteData.github}
                                onChange={(e) => updateField('github', e.target.value)}
                                placeholder="https://github.com/username"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium flex items-center gap-2">
                                <Linkedin className="h-4 w-4" />
                                LinkedIn
                            </label>
                            <Input
                                value={siteData.linkedin}
                                onChange={(e) => updateField('linkedin', e.target.value)}
                                placeholder="https://linkedin.com/in/username"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium flex items-center gap-2">
                                <Twitter className="h-4 w-4" />
                                Twitter / X
                            </label>
                            <Input
                                value={siteData.twitter}
                                onChange={(e) => updateField('twitter', e.target.value)}
                                placeholder="https://twitter.com/username"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Site Meta */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Briefcase className="h-5 w-5" />
                            Site Metadata
                        </CardTitle>
                        <CardDescription>Technical site information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Site Version</label>
                            <Input
                                value={siteData.version}
                                onChange={(e) => updateField('version', e.target.value)}
                                placeholder="1.0.0"
                            />
                        </div>

                        <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                            <div>
                                <p className="font-medium">Site Status</p>
                                <p className="text-sm text-muted-foreground">Your portfolio is live</p>
                            </div>
                            <Badge className="bg-green-500/10 text-green-500">Online</Badge>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                            <div>
                                <p className="font-medium">Last Updated</p>
                                <p className="text-sm text-muted-foreground">Most recent changes</p>
                            </div>
                            <span className="text-sm text-muted-foreground">
                                {new Date().toLocaleDateString()}
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
