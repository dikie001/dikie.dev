import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/data/skills';

export function Skills() {
    return (
        <section id="skills" className="container py-24 border-t">
            <div className="text-center mb-16">
                <Badge className="mb-4">Expertise</Badge>
                <h2 className="text-4xl font-bold">Technical Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {Object.entries(skills).map(([category, data]) => (
                    <Card key={category}>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Code2 className="h-5 w-5 text-primary" />
                                {category}
                            </CardTitle>
                            <Badge variant="secondary">{data.level}%</Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="h-1.5 w-full bg-secondary rounded-full mb-4">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${data.level}%` }}
                                    className="h-full bg-primary rounded-full"
                                />
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {data.items.map(item => (
                                    <Badge key={item} variant="outline" className="text-[10px]">
                                        {item}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
