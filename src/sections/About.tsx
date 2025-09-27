import { Container, SectionHeading } from "@/components";

export function About() {
	return (
		<section className="py-16">
			<Container>
				<SectionHeading title="About" subtitle="Who I am and what I do" />
				<div className="prose dark:prose-invert max-w-none">
					<p>
						I build modern web apps with Next.js, TypeScript, and Tailwind CSS. I care about clean code,
						performance, and delightful UX.
					</p>
				</div>
			</Container>
		</section>
	);
}
