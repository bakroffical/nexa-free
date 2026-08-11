export type PricingVariant = "primary" | "secondary";

export interface PricingPlan {
    name: string;
    description: string;
    price: string;
    period: string;
    features: readonly string[];
    cta: string;
    variant: PricingVariant;
    popular?: boolean;
}

export const pricingPlans: readonly PricingPlan[] = [
    {
        name: "Free",
        description: "For individuals getting started.",
        price: "$0",
        period: "forever",
        features: [
            "Up to 3 projects",
            "Basic analytics",
            "Core integrations",
            "Community support",
        ],
        cta: "Get Started",
        variant: "secondary",
    },
    {
        name: "Pro",
        description: "For teams ready to grow.",
        price: "$29",
        period: "per month",
        features: [
            "Unlimited projects",
            "Advanced analytics",
            "All integrations",
            "Priority support",
            "Team collaboration",
            "Custom workflows",
        ],
        cta: "Start Free Trial",
        variant: "primary",
        popular: true,
    },
    {
        name: "Enterprise",
        description: "For organizations at scale.",
        price: "Custom",
        period: "tailored to you",
        features: [
            "Everything in Pro",
            "Advanced security",
            "Dedicated support",
            "Custom contracts",
            "Enterprise controls",
            "Onboarding assistance",
        ],
        cta: "Contact Sales",
        variant: "secondary",
    },
];
