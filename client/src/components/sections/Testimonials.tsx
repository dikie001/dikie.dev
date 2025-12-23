import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
    return (
        <section id="testimonials" className="container py-24 border-t bg-secondary/10">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {testimonials.map((t, i) => (
                    <Card key={i} className="bg-background">
                        <CardContent className="pt-6">
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.rating)].map((_, idx) => (
                                    <Star key={idx} className="h-4 w-4 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="italic text-lg mb-6">"{t.content}"</p>
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <div className="font-bold">{t.name}</div>
                                    <div className="text-xs text-muted-foreground">{t.role}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
