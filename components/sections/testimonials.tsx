import { Quote } from "lucide-react";

import { Container } from "@/components/ui/container";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
    return (
        <section
            id="testimonials"
            className="scroll-mt-24 border-t border-border/70 py-24 sm:py-28 lg:py-32"
        >
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                        Testimonials
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                        Loved by teams building what&apos;s next.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                        See why modern teams choose a focused foundation
                        for their next product.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <article
                            key={testimonial.name}
                            className="flex flex-col rounded-[var(--radius-xl)] border border-border bg-surface p-8 transition-colors hover:bg-surface-elevated sm:p-10"
                        >
                            <Quote
                                size={24}
                                strokeWidth={1.7}
                                className="text-primary"
                            />

                            <blockquote className="mt-6 flex-1 text-base leading-8 text-foreground">
                                &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>

                            <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                                    {testimonial.initials}
                                </div>

                                <div>
                                    <p className="text-sm font-medium">
                                        {testimonial.name}
                                    </p>

                                    <p className="mt-1 text-xs text-muted">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}