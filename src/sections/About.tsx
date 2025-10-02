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
					<SectionHeading title="About" subtitle="Who we are and what we do" />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					className="max-w-2xl mx-auto mb-8 sm:mb-10 px-4"
				>
					<p className="text-white/80 text-base sm:text-lg text-center leading-relaxed">
						We are a team of three passionate developers who build modern, scalable web and mobile applications. 
						<br className="hidden sm:block" />
						<span className="sm:hidden"> </span>
						With expertise in Next.js, TypeScript, React Native, and cloud technologies, we deliver high-quality solutions that combine clean code, exceptional performance, and delightful user experiences.
					</p>
				</motion.div>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.15 } },
					}}
					className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-3xl mx-auto px-2"
				>
					{WHY_CHOOSE_US.map((point, idx) => (
						<motion.div
							key={point.title}
							variants={{
								hidden: { opacity: 0, y: 40, scale: 0.9, rotateX: -15 },
								visible: { opacity: 1, y: 0, scale: 1, rotateX: 0 },
							}}
							transition={{ 
								duration: 0.6, 
								ease: "easeOut",
								type: "spring",
								stiffness: 100
							}}
							whileHover={{ 
								scale: 1.05,
								y: -8,
								boxShadow: "0 20px 60px rgba(96, 165, 250, 0.2)",
								borderColor: "rgba(96, 165, 250, 0.4)"
							}}
							whileTap={{ scale: 0.98 }}
							className="bg-gradient-to-br from-white/10 via-black/60 to-black/90 border border-white/10 rounded-xl p-5 sm:p-7 flex flex-col items-center shadow-lg transition-all duration-300 cursor-pointer"
						>
							<motion.div 
								initial={{ scale: 0, rotate: -180 }}
								whileInView={{ scale: 1, rotate: 0 }}
								transition={{ delay: idx * 0.15 + 0.3, type: "spring", stiffness: 200 }}
								className="text-3xl sm:text-4xl mb-2 sm:mb-3"
							>
								{point.icon}
							</motion.div>
							<motion.div 
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: idx * 0.15 + 0.4 }}
								className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2 text-center"
							>
								{point.title}
							</motion.div>
							<motion.div 
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: idx * 0.15 + 0.5 }}
								className="text-sm sm:text-base text-white/70 text-center leading-relaxed"
							>
								{point.description}
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</Container>
		</section>
	);
}
