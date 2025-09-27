export type SectionHeadingProps = {
	title: string;
	subtitle?: string;
	className?: string;
};

export function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
	return (
		<div className={`mb-8 ${className}`}>
			<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
			{subtitle ? (
				<p className="mt-2 text-muted-foreground text-sm sm:text-base">{subtitle}</p>
			) : null}
		</div>
	);
}
