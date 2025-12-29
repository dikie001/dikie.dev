import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Save,
  Check,
  Plus,
  Trash2,
  X,
  Calendar,
  Building2,
  CheckCircle2,
  Pencil,
} from "lucide-react";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  current: boolean;
}

export function ExperienceContent() {
  const [saved, setSaved] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: 1,
      role: "Student Developer",
      company: "Self-Taught / Online Courses",
      period: "2023 - Present",
      description:
        "Building full-stack web applications while learning modern technologies through online courses and personal projects.",
      achievements: [
        "Completed multiple React projects",
        "Built REST APIs with Express",
        "Learned PostgreSQL and MongoDB",
        "Active on GitHub",
      ],
      current: true,
    },
    {
      id: 2,
      role: "Freelance Projects",
      company: "Various Clients",
      period: "2024",
      description:
        "Working on small web development projects to gain real-world experience and build portfolio.",
      achievements: [
        "Delivered client websites",
        "Worked with deadlines",
        "Improved communication skills",
        "Learned project management",
      ],
      current: false,
    },
  ]);

  const [editForm, setEditForm] = useState<Experience | null>(null);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const startEdit = (exp: Experience) => {
    setEditingId(exp.id);
    setEditForm({ ...exp });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm(null);
  };

  const saveEdit = () => {
    if (editForm) {
      setExperiences(
        experiences.map((e) => (e.id === editForm.id ? editForm : e))
      );
      setEditingId(null);
      setEditForm(null);
    }
  };

  const addExperience = () => {
    const newId = Math.max(...experiences.map((e) => e.id), 0) + 1;
    const newExp: Experience = {
      id: newId,
      role: "New Role",
      company: "Company Name",
      period: "20XX - Present",
      description: "Description of your role and responsibilities...",
      achievements: [],
      current: false,
    };
    setExperiences([newExp, ...experiences]);
    startEdit(newExp);
  };

  const deleteExperience = (id: number) => {
    if (confirm("Delete this experience entry?")) {
      setExperiences(experiences.filter((e) => e.id !== id));
    }
  };

  const toggleCurrent = (id: number) => {
    setExperiences(
      experiences.map((e) => (e.id === id ? { ...e, current: !e.current } : e))
    );
  };

  const addAchievement = () => {
    if (editForm) {
      setEditForm({
        ...editForm,
        achievements: [...editForm.achievements, ""],
      });
    }
  };

  const updateAchievement = (index: number, value: string) => {
    if (editForm) {
      setEditForm({
        ...editForm,
        achievements: editForm.achievements.map((a, i) =>
          i === index ? value : a
        ),
      });
    }
  };

  const removeAchievement = (index: number) => {
    if (editForm) {
      setEditForm({
        ...editForm,
        achievements: editForm.achievements.filter((_, i) => i !== index),
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Experience</h1>
          <p className="text-muted-foreground">
            Manage your work history and achievements.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={addExperience}>
            <Plus className="h-4 w-4 mr-2" />
            Add Experience
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

      {/* Experience Timeline */}
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <Card key={exp.id} className={exp.current ? "border-primary/50" : ""}>
            {editingId === exp.id && editForm ? (
              // Edit Mode
              <CardContent className="pt-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Role / Position
                    </label>
                    <Input
                      value={editForm.role}
                      onChange={(e) =>
                        setEditForm({ ...editForm, role: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Company / Organization
                    </label>
                    <Input
                      value={editForm.company}
                      onChange={(e) =>
                        setEditForm({ ...editForm, company: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Period</label>
                    <Input
                      value={editForm.period}
                      onChange={(e) =>
                        setEditForm({ ...editForm, period: e.target.value })
                      }
                      placeholder="e.g., 2023 - Present"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Status</label>
                    <Button
                      variant={editForm.current ? "default" : "outline"}
                      onClick={() =>
                        setEditForm({ ...editForm, current: !editForm.current })
                      }
                      className="w-full"
                    >
                      {editForm.current ? "Current Position" : "Past Position"}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={editForm.description}
                    onChange={(e) =>
                      setEditForm({ ...editForm, description: e.target.value })
                    }
                    className="resize-none"
                    rows={3}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Achievements</label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={addAchievement}
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Add
                    </Button>
                  </div>
                  {editForm.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex gap-2">
                      <Input
                        value={achievement}
                        onChange={(e) => updateAchievement(idx, e.target.value)}
                        placeholder="Achievement..."
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeAchievement(idx)}
                        className="shrink-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <Button variant="ghost" onClick={cancelEdit}>
                    Cancel
                  </Button>
                  <Button onClick={saveEdit}>Save Changes</Button>
                </div>
              </CardContent>
            ) : (
              // View Mode
              <>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {exp.role}
                          {exp.current && (
                            <Badge className="bg-green-500/10 text-green-500">
                              Current
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <Building2 className="h-3 w-3" />
                          {exp.company}
                          <span className="text-muted-foreground/50">•</span>
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => startEdit(exp)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteExperience(exp.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {exp.description}
                  </p>
                  {exp.achievements.length > 0 && (
                    <div className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle2 className="h-3 w-3 text-primary shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </>
            )}
          </Card>
        ))}
      </div>

      {experiences.length === 0 && (
        <Card className="hover:border-primary/50">
          {" "}
          <CardContent className="py-12 text-center">
            <Briefcase className="h-12 w-12 mx-auto text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground">No experience entries yet.</p>
            <Button variant="outline" onClick={addExperience} className="mt-4">
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Experience
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
