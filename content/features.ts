export type FeatureIcon =
    | "gauge"
    | "rocket"
    | "lock"
    | "chart"
    | "users"
    | "code";

export interface Feature {
    icon: FeatureIcon;
    title: string;
    description: string;
}

export const features: readonly Feature[] = [
    {
        icon: "gauge",
        title: "Fast by default",
        description:
            "A performance-focused foundation designed to keep your product fast from the first visit.",
    },
    {
        icon: "rocket",
        title: "Built to launch",
        description:
            "Thoughtful sections and reusable components help you move from idea to production faster.",
    },
    {
        icon: "lock",
        title: "Secure by design",
        description:
            "A clean frontend architecture gives your team a solid foundation for building secure products.",
    },
    {
        icon: "chart",
        title: "Actionable insights",
        description:
            "Present important metrics and product insights in a clear interface your team can understand.",
    },
    {
        icon: "users",
        title: "Made for teams",
        description:
            "Create collaborative product experiences that keep everyone aligned and moving forward.",
    },
    {
        icon: "code",
        title: "Developer friendly",
        description:
            "Built with modern technologies and reusable patterns that are easy to customize and extend.",
    },
];
