export interface FAQItem {
    question: string;
    answer: string;
}

export const faqs: readonly FAQItem[] = [
    {
        question: "Can I customize the template?",
        answer:
            "Yes. Nexa is built with reusable components and a clear structure, making it easy to change colors, typography, content, sections, and layouts.",
    },
    {
        question: "Is Nexa responsive?",
        answer:
            "Yes. The template is designed for desktop, tablet, and mobile screens, including a responsive navigation and layouts that adapt to smaller screens.",
    },
    {
        question: "Can I connect my own backend?",
        answer:
            "Absolutely. Nexa is a frontend template, so you can connect it to your preferred backend, API, CMS, authentication system, or database.",
    },
    {
        question: "Does Nexa include a payment system?",
        answer:
            "No. The pricing section is a frontend demonstration. You can connect its actions to Stripe, Paddle, or another payment provider when integrating the template into your product.",
    },
    {
        question: "Can I use Nexa for a commercial project?",
        answer:
            "Yes. The template is designed to be adapted for real products, startups, SaaS platforms, agencies, and business websites.",
    },
    {
        question: "Is the code easy to extend?",
        answer:
            "Yes. Sections and UI components are kept modular so you can add, remove, or replace parts of the page without restructuring the entire application.",
    },
];
