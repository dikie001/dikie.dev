import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
    FolderOpen,
    Save,
    Check,
    Plus,
    Trash2,
    Star,
    StarOff,
    ExternalLink,
    Pencil,
    Upload,
    Image as ImageIcon,
    X
} from 'lucide-react';

interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    icon: string; // URL or base64 data URL
    featured: boolean;
}

export function ProjectsContent() {
    const [saved, setSaved] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);

    const [projects, setProjects] = useState<Project[]>([
        { id: 1, title: 'BITSA', description: 'Enterprise grade IT club management system with blogs, events, user profiles etc.', link: 'https://bitsa-ueab.vercel.app', icon: '', featured: true },
        { id: 2, title: 'Brillia', description: 'A fun app with quizzes, facts, stories, quick challenges', link: 'https://brillia-six.vercel.app', icon: '', featured: true },
        { id: 3, title: 'Portfolio Website', description: 'Modern responsive portfolio showcasing projects and skills with dark/light theme toggle.', link: '#', icon: '', featured: false },
        { id: 4, title: 'Task Manager', description: 'Productivity app with drag-and-drop tasks, categories, and due date reminders.', link: '#', icon: '', featured: false },
        { id: 5, title: 'Quiz Game', description: 'Interactive quiz application with score tracking and multiple categories.', link: '#', icon: '', featured: false },
        { id: 6, title: 'API Backend', description: 'RESTful API with authentication, CRUD operations, and database integration.', link: '#', icon: '', featured: false },
    ]);

    const [editForm, setEditForm] = useState<Project | null>(null);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const startEdit = (project: Project) => {
        setEditingId(project.id);
        setEditForm({ ...project });
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditForm(null);
    };

    const saveEdit = () => {
        if (editForm) {
            setProjects(projects.map(p => p.id === editForm.id ? editForm : p));
            setEditingId(null);
            setEditForm(null);
        }
    };

    const toggleFeatured = (id: number) => {
        setProjects(projects.map(p => p.id === id ? { ...p, featured: !p.featured } : p));
    };

    const deleteProject = (id: number) => {
        if (confirm('Are you sure you want to delete this project?')) {
            setProjects(projects.filter(p => p.id !== id));
        }
    };

    const addProject = () => {
        const newId = Math.max(...projects.map(p => p.id), 0) + 1;
        const newProject: Project = {
            id: newId,
            title: 'New Project',
            description: 'Project description...',
            link: '#',
            icon: '',
            featured: false
        };
        setProjects([...projects, newProject]);
        startEdit(newProject);
    };

    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Projects</h1>
                    <p className="text-muted-foreground">Manage your portfolio projects.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={addProject}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Project
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

            {/* Featured Projects */}
            <Card className='hover:border-primary/50'>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        Featured Projects ({featuredProjects.length})
                    </CardTitle>
                    <CardDescription>These appear prominently on your portfolio</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    {featuredProjects.length === 0 ? (
                        <p className="text-muted-foreground text-sm py-4 text-center">
                            No featured projects. Star a project to feature it.
                        </p>
                    ) : (
                        featuredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                isEditing={editingId === project.id}
                                editForm={editForm}
                                setEditForm={setEditForm}
                                onStartEdit={() => startEdit(project)}
                                onCancelEdit={cancelEdit}
                                onSaveEdit={saveEdit}
                                onToggleFeatured={() => toggleFeatured(project.id)}
                                onDelete={() => deleteProject(project.id)}
                            />
                        ))
                    )}
                </CardContent>
            </Card>

            {/* Other Projects */}
            <Card className='hover:border-primary/50'>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FolderOpen className="h-5 w-5" />
                        Other Projects ({otherProjects.length})
                    </CardTitle>
                    <CardDescription>Additional projects in your portfolio</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    {otherProjects.length === 0 ? (
                        <p className="text-muted-foreground text-sm py-4 text-center">
                            No other projects yet.
                        </p>
                    ) : (
                        otherProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                isEditing={editingId === project.id}
                                editForm={editForm}
                                setEditForm={setEditForm}
                                onStartEdit={() => startEdit(project)}
                                onCancelEdit={cancelEdit}
                                onSaveEdit={saveEdit}
                                onToggleFeatured={() => toggleFeatured(project.id)}
                                onDelete={() => deleteProject(project.id)}
                            />
                        ))
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

interface ProjectCardProps {
    project: Project;
    isEditing: boolean;
    editForm: Project | null;
    setEditForm: (form: Project | null) => void;
    onStartEdit: () => void;
    onCancelEdit: () => void;
    onSaveEdit: () => void;
    onToggleFeatured: () => void;
    onDelete: () => void;
}

function ProjectCard({
    project,
    isEditing,
    editForm,
    setEditForm,
    onStartEdit,
    onCancelEdit,
    onSaveEdit,
    onToggleFeatured,
    onDelete,
}: ProjectCardProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && editForm) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                alert('Please upload an image file');
                return;
            }
            // Validate file size (max 2MB)
            if (file.size > 2 * 1024 * 1024) {
                alert('Image size should be less than 2MB');
                return;
            }

            const reader = new FileReader();
            reader.onload = (event) => {
                const result = event.target?.result as string;
                setEditForm({ ...editForm, icon: result });
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        if (editForm) {
            setEditForm({ ...editForm, icon: '' });
        }
    };

    if (isEditing && editForm) {
        return (
            <div className="p-4 border border-primary rounded-lg space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Title</label>
                        <Input
                            value={editForm.title}
                            onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Link / URL</label>
                        <Input
                            value={editForm.link}
                            onChange={(e) => setEditForm({ ...editForm, link: e.target.value })}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <Textarea
                        value={editForm.description}
                        onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                        className="resize-none"
                        rows={2}
                    />
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                    <label className="text-sm font-medium">Project Icon / Image</label>
                    <div className="flex items-start gap-4">
                        {/* Preview */}
                        <div className="relative">
                            {editForm.icon ? (
                                <div className="relative">
                                    <img
                                        src={editForm.icon}
                                        alt="Project icon"
                                        className="h-20 w-20 rounded-lg object-cover border border-border"
                                    />
                                    <button
                                        onClick={removeImage}
                                        className="absolute -top-2 -right-2 h-5 w-5 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center hover:bg-destructive/90"
                                    >
                                        <X className="h-3 w-3" />
                                    </button>
                                </div>
                            ) : (
                                <div className="h-20 w-20 rounded-lg border-2 border-dashed border-border flex items-center justify-center bg-secondary/30">
                                    <ImageIcon className="h-8 w-8 text-muted-foreground/50" />
                                </div>
                            )}
                        </div>

                        {/* Upload Controls */}
                        <div className="flex-1 space-y-2">
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                            <Button
                                variant="outline"
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full"
                            >
                                <Upload className="h-4 w-4 mr-2" />
                                Upload Image
                            </Button>
                            <p className="text-xs text-muted-foreground">
                                PNG, JPG, or SVG. Max 2MB. Recommended: 200x200px
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-2">
                    <Button variant="ghost" onClick={onCancelEdit}>
                        Cancel
                    </Button>
                    <Button onClick={onSaveEdit}>
                        Save Changes
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-border/80">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                {project.icon ? (
                    <img
                        src={project.icon}
                        alt={project.title}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <FolderOpen className="h-5 w-5 text-primary" />
                )}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <h3 className="font-medium truncate">{project.title}</h3>
                    {project.featured && (
                        <Badge className="bg-yellow-500/10 text-yellow-500 shrink-0">Featured</Badge>
                    )}
                </div>
                <p className="text-sm text-muted-foreground truncate">{project.description}</p>
            </div>
            <div className="flex items-center gap-1 shrink-0">
                {project.link !== '#' && (
                    <Button variant="ghost" size="icon" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </Button>
                )}
                <Button variant="ghost" size="icon" onClick={onToggleFeatured}>
                    {project.featured ? (
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ) : (
                        <StarOff className="h-4 w-4" />
                    )}
                </Button>
                <Button variant="ghost" size="icon" onClick={onStartEdit}>
                    <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={onDelete} className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
