import { Container } from "@/components/ui/container";
import { faqs } from "@/content/faq";

export function FAQ() {
    return (
        <section
            id="faq"
            className="scroll-mt-24 border-t border-border/70 py-24 sm:py-28 lg:py-32"
        >
            <Container>
                <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                            FAQ
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                            Questions, answered.
                        </h2>

                        <p className="mt-6 text-base leading-8 text-muted">
                            Everything you need to know before getting
                            started with Nexa.
                        </p>
                    </div>

                    <div className="divide-y divide-border border-y border-border">
                        {faqs.map((faq) => (
                            <details
                                key={faq.question}
                                className="group"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-sm font-medium marker:hidden">
                                    <span>{faq.question}</span>

                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-transform duration-200 group-open:rotate-45">
                                        <span className="text-lg font-light leading-none">
                                            +
                                        </span>
                                    </span>
                                </summary>

                                <div className="pb-6 pr-12 text-sm leading-7 text-muted">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}