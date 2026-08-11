"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navigation = [
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <a
                        href="#"
                        className="text-xl font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    >
                        Nexa<span className="text-primary">.</span>
                    </a>

                    <nav
                        aria-label="Main navigation"
                        className="hidden items-center gap-8 md:flex"
                    >
                        {navigation.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-3 md:flex">
                        <Button href="#pricing">
                            Start Building
                        </Button>
                    </div>

                    <button
                        type="button"
                        onClick={() =>
                            setOpen((current) => !current)
                        }
                        onKeyDown={(event) => {
                            if (event.key === "Escape") {
                                setOpen(false);
                            }
                        }}
                        aria-label={
                            open
                                ? "Close navigation"
                                : "Open navigation"
                        }
                        aria-expanded={open}
                        aria-controls="mobile-navigation"
                        className="rounded-[var(--radius-md)] p-2 text-muted transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 md:hidden"
                    >
                        {open ? (
                            <X
                                size={22}
                                aria-hidden="true"
                            />
                        ) : (
                            <Menu
                                size={22}
                                aria-hidden="true"
                            />
                        )}
                    </button>
                </div>

                {open && (
                    <div
                        id="mobile-navigation"
                        className="border-t border-border py-4 md:hidden"
                    >
                        <nav
                            aria-label="Mobile navigation"
                            className="flex flex-col gap-1"
                        >
                            {navigation.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="rounded-[var(--radius-md)] px-4 py-3 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                                >
                                    {item.label}
                                </a>
                            ))}

                            <div className="mt-3 border-t border-border pt-4">
                                <Button
                                    href="#pricing"
                                    className="w-full"
                                    onClick={() => setOpen(false)}
                                >
                                    Start Building
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </Container>
        </header>
    );
}