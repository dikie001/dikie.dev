import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
    Code,
    Save,
    Check,
    Plus,
    Trash2,
    X,
    GripVertical
} from 'lucide-react';

interface SkillCategory {
    id: number;
    name: string;
    level: number;
    items: string[];
}

export function SkillsContent() {
    const [saved, setSaved] = useState(false);

    const [skills, setSkills] = useState<SkillCategory[]>([
        { id: 1, name: 'Frontend', level: 99, items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML/CSS'] },
        { id: 2, name: 'Backend', level: 98, items: ['Node.js', 'Express', 'REST APIs'] },
        { id: 3, name: 'Databases', level: 97, items: ['PostgreSQL', 'Prisma', 'MongoDB', 'Mongoose'] },
        { id: 4, name: 'Tools', level: 100, items: ['Git', 'VS Code', 'Thunder Client', 'Figma'] },
    ]);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const updateCategory = (id: number, field: string, value: string | number) => {
        setSkills(skills.map(s => s.id === id ? { ...s, [field]: value } : s));
    };

    const addSkillToCategory = (categoryId: number) => {
        const newSkill = prompt('Enter new skill:');
        if (newSkill && newSkill.trim()) {
            setSkills(skills.map(s =>
                s.id === categoryId
                    ? { ...s, items: [...s.items, newSkill.trim()] }
                    : s
            ));
        }
    };

    const removeSkillFromCategory = (categoryId: number, skillIndex: number) => {
        setSkills(skills.map(s =>
            s.id === categoryId
                ? { ...s, items: s.items.filter((_, i) => i !== skillIndex) }
                : s
        ));
    };

    const addCategory = () => {
        const newId = Math.max(...skills.map(s => s.id), 0) + 1;
        setSkills([...skills, {
            id: newId,
            name: 'New Category',
            level: 80,
            items: []
        }]);
    };

    const deleteCategory = (id: number) => {
        if (confirm('Delete this category and all its skills?')) {
            setSkills(skills.filter(s => s.id !== id));
        }
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Skills</h1>
                    <p className="text-muted-foreground">Manage your skill categories and proficiency levels.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={addCategory}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Category
                    </Button>
                    <Button onClick={handleSave}>
                        {saved ? (
                            <>
                                <Check className="h-4 w-4 mr-2" />
                                Saved!
                            </>
                        ) : (
                            <>
                                <Save className="h-4 w-4 mr-2" />
                                Save All
                            </>
                        )}
                    </Button>
                </div>
            </div>

            {/* Skills Categories */}
            <div className="grid gap-6 lg:grid-cols-2">
                {skills.map((category) => (
                    <Card key={category.id}>
                        <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-2">
                                    <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
                                    <div>
                                        <Input
                                            value={category.name}
                                            onChange={(e) => updateCategory(category.id, 'name', e.target.value)}
                                            className="text-lg font-semibold h-auto p-0 border-0 focus-visible:ring-0 bg-transparent"
                                        />
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => deleteCategory(category.id)}
                                    className="text-muted-foreground hover:text-destructive"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {/* Proficiency Level */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-medium">Proficiency Level</label>
                                    <div className="flex items-center gap-2">
                                        <Input
                                            type="number"
                                            min={0}
                                            max={100}
                                            value={category.level}
                                            onChange={(e) => updateCategory(category.id, 'level', parseInt(e.target.value) || 0)}
                                            className="w-16 h-8 text-center"
                                        />
                                        <span className="text-sm text-muted-foreground">%</span>
                                    </div>
                                </div>
                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary rounded-full transition-all"
                                        style={{ width: `${category.level}%` }}
                                    />
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Skills in this category</label>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((skill, index) => (
                                        <Badge
                                            key={index}
                                            variant="outline"
                                            className="px-3 py-1.5 text-sm flex items-center gap-1 group"
                                        >
                                            {skill}
                                            <button
                                                onClick={() => removeSkillFromCategory(category.id, index)}
                                                className="ml-1 opacity-50 group-hover:opacity-100 hover:text-destructive"
                                            >
                                                <X className="h-3 w-3" />
                                            </button>
                                        </Badge>
                                    ))}
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => addSkillToCategory(category.id)}
                                        className="h-7"
                                    >
                                        <Plus className="h-3 w-3 mr-1" />
                                        Add
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Preview Info */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5" />
                        Preview
                    </CardTitle>
                    <CardDescription>How your skills section will appear</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {skills.map((category) => (
                            <div key={category.id} className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold">{category.name}</h3>
                                    <span className="text-sm text-primary font-medium">{category.level}%</span>
                                </div>
                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary rounded-full"
                                        style={{ width: `${category.level}%` }}
                                    />
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((item, idx) => (
                                        <Badge key={idx} variant="outline" className="text-xs">
                                            {item}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
