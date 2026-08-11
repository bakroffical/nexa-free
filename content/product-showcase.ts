export interface ProductShowcaseData {
    features: readonly string[];
    revenue: string;
    activeUsers: string;
    conversion: string;
    conversionChange: string;
    userChart: readonly number[];
    performanceChart: readonly number[];
}

export const productShowcase: ProductShowcaseData = {
    features: [
        "Clear and focused dashboards",
        "Real-time product insights",
        "Designed for everyday workflows",
    ],

    revenue: "$84.2k",
    activeUsers: "12.8k",
    conversion: "8.42%",
    conversionChange: "+2.4% this month",

    userChart: [30, 48, 36, 65, 52, 78, 60, 88],

    performanceChart: [
        35,
        52,
        45,
        68,
        58,
        72,
        64,
        82,
        70,
        92,
        78,
        96,
    ],
};
