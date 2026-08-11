export type HowItWorksIcon =
    | "dashboard"
    | "check"
    | "rocket";

export interface HowItWorksStep {
    number: string;
    icon: HowItWorksIcon;
    title: string;
    description: string;
}

export const howItWorksSteps: readonly HowItWorksStep[] = [
    {
        number: "01",
        icon: "dashboard",
        title: "Create your workspace",
        description:
            "Set up your product workspace and bring everything your team needs into one focused environment.",
    },
    {
        number: "02",
        icon: "check",
        title: "Customize your workflow",
        description:
            "Shape the experience around your process with flexible components, clear data, and reusable workflows.",
    },
    {
        number: "03",
        icon: "rocket",
        title: "Launch and grow",
        description:
            "Ship faster, understand what is working, and keep improving your product as your business grows.",
    },
];
