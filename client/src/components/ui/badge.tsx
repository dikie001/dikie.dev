import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-[var(--luxury-gold)] text-[var(--background)]",
                secondary:
                    "border-transparent bg-[var(--background-muted)] text-[var(--foreground)]",
                outline:
                    "border-[var(--border-gold)] text-[var(--luxury-gold)] bg-transparent",
                ghost:
                    "border-[var(--border)] text-[var(--foreground-muted)] bg-[var(--background-card)]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
