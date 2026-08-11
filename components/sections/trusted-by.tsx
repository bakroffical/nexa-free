import { Container } from "@/components/ui/container";
import { trustedCompanies } from "@/content/trusted-by";

export function TrustedBy() {
    return (
        <section className="border-y border-border/70">
            <Container>
                <div className="py-10">
                    <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
                        Trusted by modern teams
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-5">
                        {trustedCompanies.map((company) => (
                            <div
                                key={company}
                                className="flex h-10 items-center justify-center text-sm font-semibold tracking-tight text-muted/70"
                            >
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}