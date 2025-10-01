"use client";
import { Container, SectionHeading, Squares } from "@/components";
import { motion } from "framer-motion";

const WHY_CHOOSE_US = [
	{
		title: "Modern Tech Stack",
		description:
			"We use Next.js, TypeScript, and Tailwind CSS for fast, scalable, and maintainable web apps.",
		icon: "⚡",
	},
	{
		title: "Performance Focused",
		description: "Optimized for speed and SEO, your site loads fast and ranks higher.",
		icon: "🚀",
	},
	{
		title: "Clean Code",
		description: "Readable, maintainable code with best practices and robust testing.",
		icon: "🧹",
	},
	{
		title: "Delightful UX",
		description:
			"Animations, accessibility, and responsive design for a great user experience.",
		icon: "🎨",
	},
];

export function About() {
	return (
		<section id="about" className="relative py-12 sm:py-16 md:py-20 bg-black overflow-hidden">
			<div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
				<Squares
					direction="diagonal"
					speed={1}
					borderColor="#222"
					squareSize={40}
					hoverFillColor="#222"
				/>
			</div>
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="text-center mb-8 sm:mb-12"
				>
					<SectionHeading title="About" subtitle="Who I am and what I do" />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					className="max-w-2xl mx-auto mb-8 sm:mb-10 px-4"
				>
					<p className="text-white/80 text-base sm:text-lg text-center leading-relaxed">
						I build modern web apps with Next.js, TypeScript, and Tailwind CSS.
						<br className="hidden sm:block" />
						<span className="sm:hidden"> </span>
						I care about clean code, performance, and delightful UX.
					</p>
				</motion.div>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.12 } },
					}}
					className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-3xl mx-auto px-2"
				>
					{WHY_CHOOSE_US.map((point) => (
						<motion.div
							key={point.title}
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: { opacity: 1, y: 0 },
							}}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="bg-gradient-to-br from-white/10 via-black/60 to-black/90 border border-white/10 rounded-xl p-5 sm:p-7 flex flex-col items-center shadow-lg hover:scale-[1.02] sm:hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
						>
							<div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{point.icon}</div>
							<div className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2 text-center">
								{point.title}
							</div>
							<div className="text-sm sm:text-base text-white/70 text-center leading-relaxed">
								{point.description}
							</div>
						</motion.div>
					))}
				</motion.div>
			</Container>
		</section>
	);
}
