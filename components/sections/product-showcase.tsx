import { BarChart3, Check, TrendingUp } from "lucide-react";

import { Container } from "@/components/ui/container";
import { productShowcase } from "@/content/product-showcase";

export function ProductShowcase() {
    return (
        <section
            id="solutions"
            className="scroll-mt-24 border-t border-border/70 py-24 sm:py-28 lg:py-32"
        >
            <Container>
                <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                            Product showcase
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                            Give your product the presentation it deserves.
                        </h2>

                        <p className="mt-6 text-base leading-8 text-muted">
                            Turn complex product data into a clear,
                            focused experience that helps your users
                            understand what matters.
                        </p>

                        <ul className="mt-8 space-y-4">
                            {productShowcase.features.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 text-sm text-muted"
                                >
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <Check size={14} />
                                    </span>

                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface shadow-2xl shadow-black/20">
                        <div className="flex h-12 items-center justify-between border-b border-border px-5">
                            <div className="flex items-center gap-2">
                                <span className="h-7 w-7 rounded-[var(--radius-sm)] bg-primary/20" />
                                <span className="h-3 w-20 rounded-full bg-surface-elevated" />
                            </div>

                            <div className="h-7 w-20 rounded-full bg-surface-elevated" />
                        </div>

                        <div className="grid gap-5 p-5 sm:grid-cols-3">
                            <div className="rounded-[var(--radius-md)] border border-border bg-background p-5">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-muted">
                                        Revenue
                                    </span>

                                    <TrendingUp
                                        size={16}
                                        className="text-primary"
                                    />
                                </div>

                                <p className="mt-4 text-2xl font-semibold">
                                    {productShowcase.revenue}
                                </p>

                                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-elevated">
                                    <div className="h-full w-[72%] rounded-full bg-primary" />
                                </div>
                            </div>

                            <div className="rounded-[var(--radius-md)] border border-border bg-background p-5">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-muted">
                                        Active users
                                    </span>

                                    <BarChart3
                                        size={16}
                                        className="text-primary"
                                    />
                                </div>

                                <p className="mt-4 text-2xl font-semibold">
                                    {productShowcase.activeUsers}
                                </p>

                                <div className="mt-4 flex h-12 items-end gap-1">
                                    {productShowcase.userChart.map(
                                        (height, index) => (
                                            <span
                                                key={index}
                                                className="flex-1 rounded-t bg-primary/40"
                                                style={{
                                                    height: `${height}%`,
                                                }}
                                            />
                                        )
                                    )}
                                </div>
                            </div>

                            <div className="rounded-[var(--radius-md)] border border-border bg-background p-5">
                                <span className="text-xs text-muted">
                                    Conversion
                                </span>

                                <p className="mt-4 text-2xl font-semibold">
                                    {productShowcase.conversion}
                                </p>

                                <p className="mt-3 text-xs text-primary">
                                    {productShowcase.conversionChange}
                                </p>
                            </div>
                        </div>

                        <div className="mx-5 mb-5 rounded-[var(--radius-md)] border border-border bg-background p-5">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">
                                    Performance
                                </span>

                                <span className="text-xs text-muted">
                                    Last 30 days
                                </span>
                            </div>

                            <div className="mt-8 flex h-32 items-end gap-2">
                                {productShowcase.performanceChart.map(
                                    (height, index) => (
                                        <div
                                            key={index}
                                            className="flex-1 rounded-t bg-primary/30"
                                            style={{
                                                height: `${height}%`,
                                            }}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}