import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

export function AboutSection() {
    const highlights = ['Cloud Architecture', 'Performance Optimization', 'CI/CD & DevOps', 'Team Leadership'];

    return (
        <section id="about" className="container py-24 border-t">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <Badge>About Me</Badge>
                    <h2 className="text-4xl font-bold">Building the Future of Web</h2>
                    <p className="text-muted-foreground text-lg">
                        With over 6 years of experience, I specialize in transforming complex business requirements into elegant, scalable solutions.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {highlights.map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <Card className="bg-primary text-primary-foreground p-8">
                    <GraduationCap className="h-12 w-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Professional Journey</h3>
                    <p className="opacity-90">
                        Led teams building applications serving millions. Expertise spans frontend excellence to backend architecture.
                    </p>
                </Card>
            </div>
        </section>
    );
}
