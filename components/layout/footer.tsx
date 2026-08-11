import { Container } from "@/components/ui/container";

const productLinks = [
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
];

const companyLinks = [
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#cta" },
];

export function Footer() {
    return (
        <footer className="border-t border-border">
            <Container>
                <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:py-20">
                    <div className="max-w-sm">
                        <a
                            href="#"
                            className="text-xl font-semibold tracking-tight"
                        >
                            Nexa<span className="text-primary">.</span>
                        </a>

                        <p className="mt-5 text-sm leading-7 text-muted">
                            A modern foundation for building,
                            launching, and growing digital products.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold">
                            Product
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {productLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold">
                            Company
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border py-6 text-sm text-muted">
                    <p>
                        © 2026 Nexa. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}