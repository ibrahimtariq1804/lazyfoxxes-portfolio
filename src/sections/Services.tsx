"use client";
import { useEffect, useRef, useState } from "react";
import { Container, SectionHeading } from "@/components";
import { motion } from "framer-motion";

const SERVICES = [
	{
		title: "Web Development",
		description:
			"Building responsive and modern web applications using React, Next.js, and TypeScript. Fast, scalable, SEO‑friendly.",
		icon: "🌐",
		details: [
			"Frontend: React, Next.js, TypeScript, Tailwind CSS",
			"Backend: Node.js, Express",
			"Database: PostgreSQL, MongoDB, MySQL",
			"Cloud: AWS, Vercel",
			"Tooling: Git, Docker, CI/CD, Testing",
		],
	},
	{
		title: "Mobile Development",
		description:
			"Native and cross‑platform apps using React Native. Smooth performance and intuitive UX across devices.",
		icon: "📱",
		details: [
			"React Native , Flutter",
			"State: Redux, Zustand",
			"Backend: REST, GraphQL",
			"Stores: App Store, Play Store",
		],
	},
	{
		title: "UI/UX Design",
		description:
			"Beautiful and intuitive interfaces. Wireframes, prototypes, and design systems that convert.",
		icon: "🎨",
		details: [
			"Figma, Design Systems",
			"User research and testing",
			"Accessibility (WCAG)",
		],
	},
	{
		title: "Backend Development",
		description:
			"Scalable APIs and services with robust security and performance.",
		icon: "⚙️",
		details: [
			"Node.js, Python",
			"PostgreSQL, MongoDB, FireBase",
			"Docker, CI/CD",
		],
	},
];

export function Services() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [active, setActive] = useState(0);

	useEffect(() => {
		const onScroll = () => {
			const nodes = SERVICES.map((_, i) => document.getElementById(`service-detail-${i}`));
			const y = window.scrollY;
			const h = window.innerHeight;
			nodes.forEach((el, i) => {
				if (!el) return;
				const rect = el.getBoundingClientRect();
				const center = rect.top + window.scrollY + rect.height / 2;
				const viewportCenter = y + h / 2;
				if (Math.abs(center - viewportCenter) < rect.height / 2) setActive(i);
			});
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<section id="services" className="bg-black transition-colors duration-500 py-12 sm:py-16 md:py-20">
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-8 sm:mb-12"
				>
					<SectionHeading title="Our Services" subtitle="How I can help" />
				</motion.div>

				{/* Mobile View: Simple cards with everything */}
				<div className="lg:hidden space-y-6 pb-8">
					{SERVICES.map((svc, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 40, scale: 0.95 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ 
								duration: 0.5, 
								delay: i * 0.15,
								type: "spring",
								stiffness: 100
							}}
							viewport={{ once: true, margin: "-50px" }}
							whileHover={{ 
								scale: 1.02,
								borderColor: "rgba(96, 165, 250, 0.4)",
								boxShadow: "0 10px 40px rgba(96, 165, 250, 0.15)"
							}}
							whileTap={{ scale: 0.98 }}
							className="backdrop-blur-sm border border-border rounded-xl p-5 transition-all cursor-pointer"
						>
							<div className="flex items-center gap-3 mb-3">
								<motion.div 
									initial={{ scale: 0, rotate: -180 }}
									whileInView={{ scale: 1, rotate: 0 }}
									transition={{ delay: i * 0.15 + 0.2, type: "spring", stiffness: 200 }}
									className="text-3xl"
								>
									{svc.icon}
								</motion.div>
								<motion.h3 
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: i * 0.15 + 0.3 }}
									className="text-lg font-bold"
								>
									{svc.title}
								</motion.h3>
							</div>
							<motion.p 
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: i * 0.15 + 0.4 }}
								className="text-foreground/70 text-sm mb-4 leading-relaxed"
							>
								{svc.description}
							</motion.p>
							<div className="space-y-2">
								<motion.h4 
									initial={{ opacity: 0, x: -10 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: i * 0.15 + 0.5 }}
									className="text-xs font-semibold text-primary/80 uppercase tracking-wide"
								>
									Tech Stack
								</motion.h4>
								<div className="flex flex-wrap gap-2">
									{svc.details.map((d, di) => (
										<motion.span 
											key={di} 
											initial={{ opacity: 0, scale: 0.8, y: 10 }}
											whileInView={{ opacity: 1, scale: 1, y: 0 }}
											transition={{ 
												delay: i * 0.15 + 0.6 + (di * 0.05),
												type: "spring",
												stiffness: 200
											}}
											whileHover={{ scale: 1.1, y: -2 }}
											className="text-xs px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-foreground/80 hover:bg-primary/20 hover:border-primary/40 transition-colors"
										>
											{d}
										</motion.span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Desktop View: Original two-column layout */}
				<div ref={containerRef} className="hidden lg:grid lg:grid-cols-2 gap-10 pb-10">
					<div className="lg:sticky lg:top-24 lg:self-start space-y-6">
						{SERVICES.map((svc, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: -40 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: i * 0.05 }}
								viewport={{ once: true }}
								className={`backdrop-blur-sm border rounded-xl p-6 transition-all cursor-pointer ${
									active === i ? "border-primary/60 bg-primary/5" : "border-border hover:border-foreground/30"
								}`}
								onClick={() => document.getElementById(`service-detail-${i}`)?.scrollIntoView({ behavior: "smooth", block: "center" })}
							>
								<div className="flex items-center gap-4">
									<div className="text-3xl">{svc.icon}</div>
									<h3 className={`text-lg font-semibold ${active === i ? "text-primary" : ""}`}>{svc.title}</h3>
								</div>
								{active === i ? (
									<motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="mt-3 text-sm text-foreground/70">
										{svc.description.slice(0, 120)}...
									</motion.p>
								) : null}
							</motion.div>
						))}
					</div>

					<div className="space-y-32">
						{SERVICES.map((svc, i) => (
							<motion.div
								key={i}
								id={`service-detail-${i}`}
								initial={{ opacity: 0, y: 80 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true, margin: "-10%" }}
								className="min-h-[80vh] flex flex-col justify-center"
							>
								<div className="backdrop-blur-sm border rounded-xl p-8">
									<div className="flex items-center gap-4 mb-4">
										<div className="text-4xl">{svc.icon}</div>
										<h3 className="text-2xl font-bold">{svc.title}</h3>
									</div>
									<p className="text-foreground/80 mb-6 leading-relaxed">{svc.description}</p>
									<h4 className="text-base font-semibold mb-3">Technologies & Tools</h4>
									<div className="grid gap-3">
										{svc.details.map((d, di) => (
											<motion.div key={di} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: di * 0.05 }} viewport={{ once: true }} className="flex items-center gap-3 p-4 rounded-lg border hover:border-primary/40 transition-colors">
												<div className="w-2 h-2 bg-primary rounded-full" />
												<span className="text-sm">{d}</span>
											</motion.div>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
