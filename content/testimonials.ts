export interface Testimonial {
    quote: string;
    name: string;
    role: string;
    initials: string;
}

export const testimonials: readonly Testimonial[] = [
    {
        quote:
            "An example of how a polished testimonial can look inside your SaaS landing page.",
        name: "Product Lead",
        role: "Sample testimonial",
        initials: "PL",
    },
    {
        quote:
            "The components are clean, flexible, and easy to adapt to a real product.",
        name: "Startup Founder",
        role: "Sample testimonial",
        initials: "SF",
    },
    {
        quote:
            "A strong starting point for teams that want to move quickly without sacrificing design.",
        name: "Engineering Lead",
        role: "Sample testimonial",
        initials: "EL",
    },
];