import * as React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "secondary" | "ghost";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className = "", variant = "primary", ...props }, ref) => {
		const base =
			"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-10 px-4 py-2";
		const variants: Record<string, string> = {
			primary: "bg-foreground text-background hover:opacity-90",
			secondary:
				"border border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]",
			ghost: "bg-transparent hover:bg-black/5 dark:hover:bg-white/10",
		};
		return (
			<button ref={ref} className={`${base} ${variants[variant]} ${className}`} {...props} />
		);
	}
);
Button.displayName = "Button";
