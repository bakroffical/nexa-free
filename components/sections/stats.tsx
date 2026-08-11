import { Container } from "@/components/ui/container";
import { stats } from "@/content/stats";

export function Stats() {
    return (
        <section className="border-t border-border/70 py-20 sm:py-24">
            <Container>
                <div className="grid divide-y divide-border border-y border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="px-6 py-8 text-center sm:px-8 lg:py-10"
                        >
                            <p className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                                {stat.value}
                            </p>

                            <p className="mt-2 text-sm text-muted">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}