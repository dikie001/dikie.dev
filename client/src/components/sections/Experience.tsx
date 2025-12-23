import { Badge } from '@/components/ui/badge';
import { Calendar, Award } from 'lucide-react';
import { experience } from '@/data/experience';

export function Experience() {
    return (
        <section id="experience" className="container py-24 border-t">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold">Professional Experience</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-8">
                {experience.map((exp, i) => (
                    <div key={i} className="relative pl-8 border-l-2 border-secondary pb-8 last:pb-0">
                        <div
                            className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 bg-background ${exp.current ? 'border-primary' : 'border-secondary'
                                }`}
                        />
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-bold">{exp.role}</h3>
                                <p className="text-primary font-medium">{exp.company}</p>
                            </div>
                            <Badge variant="outline" className="mt-2 sm:mt-0">
                                <Calendar className="h-3 w-3 mr-1" />
                                {exp.period}
                            </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                            {exp.achievements.map((ach, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm">
                                    <Award className="h-3 w-3 text-primary" />
                                    {ach}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
