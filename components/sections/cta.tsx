import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CTA() {
    return (
        <section
            id="cta"
            className="scroll-mt-24 border-t border-border/70 py-24 sm:py-28 lg:py-32"
        >
            <Container>
                <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-primary/30 bg-primary/10 px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-20">
                    <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

                    <div className="relative mx-auto max-w-3xl">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                            Get started
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                            Ready to build something great?
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                            Start with a focused foundation and turn your
                            idea into a product people want to use.
                        </p>

                        <div className="mt-10 flex justify-center">
                            <Button href="#pricing">
                                <span>Start Building</span>

                                <ArrowRight
                                    size={16}
                                    className="ml-2"
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
