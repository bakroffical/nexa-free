import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface CommonProps {
    children: ReactNode;
    variant?: ButtonVariant;
    className?: string;
}

type ButtonProps = CommonProps &
    (
        | (ButtonHTMLAttributes<HTMLButtonElement> & {
            href?: never;
        })
        | (AnchorHTMLAttributes<HTMLAnchorElement> & {
            href: string;
        })
    );

const variants: Record<ButtonVariant, string> = {
    primary:
        "bg-primary text-white hover:bg-primary-hover",
    secondary:
        "border border-border bg-surface text-foreground hover:bg-surface-elevated",
    ghost:
        "text-muted hover:bg-surface hover:text-foreground",
};

const baseClassName =
    "inline-flex h-11 items-center justify-center rounded-[var(--radius-md)] px-5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";

export function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    const classes = `${baseClassName} ${variants[variant]} ${className}`;

    if ("href" in props) {
        return (
            <a
                {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
                className={classes}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
            className={classes}
        >
            {children}
        </button>
    );
}