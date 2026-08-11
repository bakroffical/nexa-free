import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { pricingPlans } from "@/content/pricing";

export function Pricing() {
    return (
        <section
            id="pricing"
            className="scroll-mt-24 border-t border-border/70 py-24 sm:py-28 lg:py-32"
        >
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                        Pricing
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                        Simple pricing that scales with you.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                        Start for free, upgrade when you need more, and
                        scale without unnecessary complexity.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
                    {pricingPlans.map((plan) => (
                        <article
                            key={plan.name}
                            className={`relative flex flex-col rounded-[var(--radius-xl)] border bg-surface p-8 sm:p-10 ${plan.popular
                                ? "border-primary shadow-2xl shadow-primary/10"
                                : "border-border"
                                }`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-primary/30 bg-primary px-4 py-1 text-xs font-medium text-white">
                                    Most Popular
                                </span>
                            )}

                            <div>
                                <h3 className="text-lg font-semibold">
                                    {plan.name}
                                </h3>

                                <p className="mt-2 min-h-12 text-sm leading-6 text-muted">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mt-8">
                                <div className="flex items-end gap-2">
                                    <span className="text-4xl font-semibold tracking-[-0.04em]">
                                        {plan.price}
                                    </span>

                                    <span className="mb-1 text-xs text-muted">
                                        {plan.period}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Button
                                    href="#cta"
                                    variant={plan.variant}
                                    className="w-full"
                                >
                                    {plan.cta}
                                </Button>
                            </div>

                            <div className="mt-8 border-t border-border pt-8">
                                <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                                    Included
                                </p>

                                <ul className="mt-5 space-y-4">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-3 text-sm text-muted"
                                        >
                                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <Check size={12} />
                                            </span>

                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}