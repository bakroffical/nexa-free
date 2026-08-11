import {
    ArrowRight,
    Check,
    LayoutDashboard,
    Rocket,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import {
    howItWorksSteps,
    type HowItWorksIcon,
} from "@/content/how-it-works";

const icons: Record<HowItWorksIcon, typeof LayoutDashboard> = {
    dashboard: LayoutDashboard,
    check: Check,
    rocket: Rocket,
};

export function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="scroll-mt-24 border-t border-border/70 py-24 sm:py-28 lg:py-32"
        >
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                        How it works
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                        From idea to launch in three simple steps.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                        A straightforward workflow that keeps your team
                        focused on building what matters.
                    </p>
                </div>

                <div className="relative mt-16 grid gap-8 lg:grid-cols-3 lg:gap-0">
                    <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-14 hidden h-px bg-border lg:block" />

                    {howItWorksSteps.map((step, index) => {
                        const Icon = icons[step.icon];

                        return (
                            <div
                                key={step.number}
                                className="relative px-0 lg:px-8"
                            >
                                <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-border bg-background">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-[var(--radius-lg)] bg-primary/10 text-primary">
                                        <Icon
                                            size={24}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface text-[10px] font-semibold text-muted">
                                        {step.number}
                                    </span>
                                </div>

                                <div className="mx-auto mt-8 max-w-sm text-center">
                                    <h3 className="text-lg font-semibold">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-muted">
                                        {step.description}
                                    </p>
                                </div>

                                {index < howItWorksSteps.length - 1 && (
                                    <div className="mx-auto mt-8 flex justify-center text-border lg:hidden">
                                        <ArrowRight
                                            size={20}
                                            className="rotate-90"
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}