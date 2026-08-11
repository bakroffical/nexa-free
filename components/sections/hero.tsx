import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
    return (
        <section className="overflow-hidden">
            <Container>
                <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center lg:py-28">
                    <div className="max-w-4xl">
                        <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-medium text-primary">
                            The modern SaaS template
                        </span>

                        <h1 className="mt-8 text-5xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
                            Build your next product
                            <span className="block text-primary">
                                with confidence.
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                            Everything you need to launch,
                            grow, and scale your digital
                            product faster.
                        </p>

                        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                            <Button href="#pricing">
                                Start Building
                            </Button>

                            <Button
                                href="#solutions"
                                variant="secondary"
                            >
                                View Demo
                            </Button>
                        </div>
                    </div>

                    <div
                        className="mt-20 w-full max-w-5xl"
                        aria-hidden="true"
                    >
                        <div className="overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface shadow-2xl shadow-black/30">
                            <div className="flex h-10 items-center gap-2 border-b border-border px-4">
                                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                            </div>

                            <div className="grid min-h-[280px] grid-cols-12 gap-6 p-6 sm:min-h-[360px] sm:p-10">
                                <div className="col-span-3 hidden rounded-[var(--radius-md)] bg-surface-elevated sm:block" />

                                <div className="col-span-12 flex flex-col gap-5 sm:col-span-9">
                                    <div className="h-10 w-2/3 rounded-[var(--radius-md)] bg-surface-elevated" />

                                    <div className="grid gap-4 sm:grid-cols-3">
                                        <div className="h-28 rounded-[var(--radius-md)] bg-surface-elevated" />
                                        <div className="h-28 rounded-[var(--radius-md)] bg-surface-elevated" />
                                        <div className="h-28 rounded-[var(--radius-md)] bg-primary/20" />
                                    </div>

                                    <div className="h-24 rounded-[var(--radius-md)] bg-surface-elevated" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
