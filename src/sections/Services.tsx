"use client";
import { useEffect, useRef, useState } from "react";
import { Container, SectionHeading } from "@/components";
import { motion } from "framer-motion";

const SERVICES = [
	{
		title: "Web Development",
		description:
			"We create high-performance, scalable web applications using cutting-edge technologies. From simple landing pages to complex enterprise solutions, we deliver responsive, SEO-optimized websites that provide exceptional user experiences and drive business growth.",
		icon: "🌐",
		details: [
			"Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion",
			"Backend: Node.js, Express, RESTful APIs, GraphQL",
			"Database: PostgreSQL, MongoDB, MySQL, Redis",
			"Cloud & Hosting: AWS, Vercel, Netlify, Azure",
			"DevOps: Docker, CI/CD, GitHub Actions, Testing (Jest, Cypress)",
		],
	},
	{
		title: "Mobile Development",
		description:
			"We build native and cross-platform mobile applications that deliver seamless experiences across iOS and Android. Our mobile solutions combine beautiful design with robust functionality, ensuring your app performs flawlessly on any device.",
		icon: "📱",
		details: [
			"Frameworks: React Native, Flutter, Kotlin",
			"State Management: Redux, Zustand, Context API",
			"Backend Integration: REST APIs, GraphQL, Firebase",
			"Publishing: App Store & Google Play Store deployment",
			"Features: Push notifications, offline mode, real-time sync",
		],
	},
	{
		title: "UI/UX Design",
		description:
			"We craft beautiful, intuitive interfaces that users love. Our design process focuses on understanding your users' needs and creating experiences that are not only visually stunning but also highly functional and accessible to everyone.",
		icon: "🎨",
		details: [
			"Design Tools: Figma, Adobe XD, Sketch",
			"Design Systems & Component Libraries",
			"User Research, Personas & User Flows",
			"Wireframing & Interactive Prototyping",
			"Accessibility Standards (WCAG 2.1 AA)",
		],
	},
	{
		title: "Backend Development",
		description:
			"We architect and build robust, scalable backend systems that power your applications. From API development to database design and cloud infrastructure, we ensure your backend is secure, performant, and ready to scale with your business.",
		icon: "⚙️",
		details: [
			"Languages: Node.js, Python, Java",
			"Databases: PostgreSQL, MongoDB, MySQL, Firebase",
			"API Development: REST, GraphQL, WebSocket",
			"Cloud Services: AWS, Google Cloud, Azure",
			"DevOps: Docker, Kubernetes, CI/CD pipelines",
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
					<SectionHeading title="Our Services" subtitle="How we can help you succeed" />
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
