import { useState } from 'react';
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
    X,
    Globe,
    ShoppingCart,
    MessageCircle,
    Gamepad2,
    BookOpen,
    Code2,
    Folder,
    Layout,
    Database,
    Server,
    Smartphone,
    Palette
} from 'lucide-react';

// Available icons for projects
const availableIcons = [
    { name: 'Globe', icon: Globe },
    { name: 'ShoppingCart', icon: ShoppingCart },
    { name: 'MessageCircle', icon: MessageCircle },
    { name: 'Gamepad2', icon: Gamepad2 },
    { name: 'BookOpen', icon: BookOpen },
    { name: 'Code2', icon: Code2 },
    { name: 'Folder', icon: Folder },
    { name: 'Layout', icon: Layout },
    { name: 'Database', icon: Database },
    { name: 'Server', icon: Server },
    { name: 'Smartphone', icon: Smartphone },
    { name: 'Palette', icon: Palette },
];

interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    icon: string;
    featured: boolean;
}

export function ProjectsContent() {
    const [saved, setSaved] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);

    const [projects, setProjects] = useState<Project[]>([
        { id: 1, title: 'BITSA', description: 'Enterprise grade IT club management system with blogs, events, user profiles etc.', link: 'https://bitsa-ueab.vercel.app', icon: 'MessageCircle', featured: true },
        { id: 2, title: 'Brillia', description: 'A fun app with quizzes, facts, stories, quick challenges', link: 'https://brillia-six.vercel.app', icon: 'ShoppingCart', featured: true },
        { id: 3, title: 'Portfolio Website', description: 'Modern responsive portfolio showcasing projects and skills with dark/light theme toggle.', link: '#', icon: 'Globe', featured: false },
        { id: 4, title: 'Task Manager', description: 'Productivity app with drag-and-drop tasks, categories, and due date reminders.', link: '#', icon: 'BookOpen', featured: false },
        { id: 5, title: 'Quiz Game', description: 'Interactive quiz application with score tracking and multiple categories.', link: '#', icon: 'Gamepad2', featured: false },
        { id: 6, title: 'API Backend', description: 'RESTful API with authentication, CRUD operations, and database integration.', link: '#', icon: 'Code2', featured: false },
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
            icon: 'Folder',
            featured: false
        };
        setProjects([...projects, newProject]);
        startEdit(newProject);
    };

    const getIcon = (iconName: string) => {
        const found = availableIcons.find(i => i.name === iconName);
        return found ? found.icon : Folder;
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
            <Card>
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
                                getIcon={getIcon}
                                availableIcons={availableIcons}
                            />
                        ))
                    )}
                </CardContent>
            </Card>

            {/* Other Projects */}
            <Card>
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
                                getIcon={getIcon}
                                availableIcons={availableIcons}
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
    getIcon: (name: string) => React.ComponentType<{ className?: string }>;
    availableIcons: { name: string; icon: React.ComponentType<{ className?: string }> }[];
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
    getIcon,
    availableIcons
}: ProjectCardProps) {
    const Icon = getIcon(project.icon);

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

                <div className="space-y-2">
                    <label className="text-sm font-medium">Icon</label>
                    <div className="flex flex-wrap gap-2">
                        {availableIcons.map((iconItem) => {
                            const IconComponent = iconItem.icon;
                            return (
                                <button
                                    key={iconItem.name}
                                    onClick={() => setEditForm({ ...editForm, icon: iconItem.name })}
                                    className={`p-2 rounded-lg border transition-colors ${editForm.icon === iconItem.name
                                            ? 'border-primary bg-primary/10'
                                            : 'border-border hover:border-primary/50'
                                        }`}
                                    title={iconItem.name}
                                >
                                    <IconComponent className="h-4 w-4" />
                                </button>
                            );
                        })}
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
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5 text-primary" />
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
