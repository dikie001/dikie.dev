import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
    User,
    Save,
    Check,
    Target,
    Clock,
    Sparkles,
    Plus,
    X
} from 'lucide-react';

export function AboutContent() {
    const [saved, setSaved] = useState(false);

    const [aboutData, setAboutData] = useState({
        sectionTitle: 'Full Stack Developer Focused on Impact',
        bio: [
            'I design and build reliable, maintainable web applications with a strong emphasis on clarity, performance, and long-term scalability.',
            'My work centers on solving real problems by translating complex requirements into clean, production-ready systems.'
        ],
        currentFocus: 'Advanced application architecture, system design',
        availability: 'Entry-level roles, internships, selective collaborations',
        toolset: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'MongoDB', 'Mongoose']
    });

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const addTool = () => {
        const newTool = prompt('Enter new tool/technology:');
        if (newTool && newTool.trim()) {
            setAboutData(prev => ({
                ...prev,
                toolset: [...prev.toolset, newTool.trim()]
            }));
        }
    };

    const removeTool = (index: number) => {
        setAboutData(prev => ({
            ...prev,
            toolset: prev.toolset.filter((_, i) => i !== index)
        }));
    };

    const updateBio = (index: number, value: string) => {
        setAboutData(prev => ({
            ...prev,
            bio: prev.bio.map((p, i) => i === index ? value : p)
        }));
    };

    const addBioParagraph = () => {
        setAboutData(prev => ({
            ...prev,
            bio: [...prev.bio, '']
        }));
    };

    const removeBioParagraph = (index: number) => {
        if (aboutData.bio.length > 1) {
            setAboutData(prev => ({
                ...prev,
                bio: prev.bio.filter((_, i) => i !== index)
            }));
        }
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">About Section</h1>
                    <p className="text-muted-foreground">Manage your about me content and toolset.</p>
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
                {/* Main Bio */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5" />
                            Bio Content
                        </CardTitle>
                        <CardDescription>Your professional introduction</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Section Title</label>
                            <Input
                                value={aboutData.sectionTitle}
                                onChange={(e) => setAboutData(prev => ({ ...prev, sectionTitle: e.target.value }))}
                                placeholder="Full Stack Developer Focused on Impact"
                            />
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium">Bio Paragraphs</label>
                                <Button variant="outline" size="sm" onClick={addBioParagraph}>
                                    <Plus className="h-3 w-3 mr-1" />
                                    Add Paragraph
                                </Button>
                            </div>
                            {aboutData.bio.map((paragraph, index) => (
                                <div key={index} className="flex gap-2">
                                    <Textarea
                                        value={paragraph}
                                        onChange={(e) => updateBio(index, e.target.value)}
                                        placeholder={`Paragraph ${index + 1}...`}
                                        className="resize-none flex-1"
                                        rows={3}
                                    />
                                    {aboutData.bio.length > 1 && (
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => removeBioParagraph(index)}
                                            className="shrink-0 text-muted-foreground hover:text-destructive"
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Current Focus */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Target className="h-5 w-5" />
                            Current Focus
                        </CardTitle>
                        <CardDescription>What you're currently working on or learning</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Focus Area</label>
                            <Textarea
                                value={aboutData.currentFocus}
                                onChange={(e) => setAboutData(prev => ({ ...prev, currentFocus: e.target.value }))}
                                placeholder="e.g., Advanced application architecture, system design"
                                className="resize-none"
                                rows={3}
                            />
                        </div>
                        <div className="p-3 bg-secondary/30 rounded-lg">
                            <p className="text-sm text-muted-foreground">
                                This appears in the "Current Focus" card on your About section.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Availability */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Clock className="h-5 w-5" />
                            Availability
                        </CardTitle>
                        <CardDescription>What opportunities you're open to</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Availability Status</label>
                            <Textarea
                                value={aboutData.availability}
                                onChange={(e) => setAboutData(prev => ({ ...prev, availability: e.target.value }))}
                                placeholder="e.g., Entry-level roles, internships, selective collaborations"
                                className="resize-none"
                                rows={3}
                            />
                        </div>
                        <div className="p-3 bg-secondary/30 rounded-lg">
                            <p className="text-sm text-muted-foreground">
                                This appears in the "Availability" card on your About section.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Toolset */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Sparkles className="h-5 w-5" />
                            Core Tools & Platforms
                        </CardTitle>
                        <CardDescription>Technologies displayed in your About section</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {aboutData.toolset.map((tool, index) => (
                                <Badge
                                    key={index}
                                    variant="secondary"
                                    className="px-3 py-1.5 text-sm flex items-center gap-1 group"
                                >
                                    {tool}
                                    <button
                                        onClick={() => removeTool(index)}
                                        className="ml-1 opacity-50 group-hover:opacity-100 hover:text-destructive"
                                    >
                                        <X className="h-3 w-3" />
                                    </button>
                                </Badge>
                            ))}
                            <Button variant="outline" size="sm" onClick={addTool}>
                                <Plus className="h-3 w-3 mr-1" />
                                Add Tool
                            </Button>
                        </div>
                        <div className="p-3 bg-secondary/30 rounded-lg">
                            <p className="text-sm text-muted-foreground">
                                Click the X on any tool to remove it. These are shown as badges in your About section.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
