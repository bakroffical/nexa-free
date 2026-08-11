import {
    BarChart3,
    Code2,
    Gauge,
    Lock,
    Rocket,
    Users,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { features, type FeatureIcon } from "@/content/features";

const icons: Record<FeatureIcon, typeof Gauge> = {
    gauge: Gauge,
    rocket: Rocket,
    lock: Lock,
    chart: BarChart3,
    users: Users,
    code: Code2,
};

export function Features() {
    return (
        <section
            id="features"
            className="scroll-mt-24 border-t border-border/70 py-24 sm:py-28 lg:py-32"
        >
            <Container>
                <div className="max-w-2xl">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                        Features
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                        Everything you need to build better products.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                        A flexible foundation designed for modern teams,
                        startups, and digital products.
                    </p>
                </div>

                <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = icons[feature.icon];

                        return (
                            <article
                                key={feature.title}
                                className="bg-background p-8 transition-colors hover:bg-surface sm:p-10"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-primary/20 bg-primary/10 text-primary">
                                    <Icon size={20} strokeWidth={1.8} />
                                </div>

                                <h3 className="mt-6 text-lg font-semibold">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-muted">
                                    {feature.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}