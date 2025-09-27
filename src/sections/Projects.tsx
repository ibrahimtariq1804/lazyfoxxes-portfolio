"use client";
import { Container, SectionHeading } from "@/components";
import { Github, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const PROJECTS = [
	{
		title: "E-Commerce Platform",
		description:
			"Full‑stack e‑commerce with auth, cart, payments, and admin dashboard.",
		image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
		tags: ["React", "Node.js", "MongoDB", "Stripe"],
		github: "#",
		demo: "#",
	},
	{
		title: "Task Management App",
		description:
			"Collaborative tasks with real‑time updates for teams and productivity.",
		image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop",
		tags: ["Next.js", "Socket.io", "PostgreSQL"],
		github: "#",
		demo: "#",
	},
	{
		title: "Weather Dashboard",
		description:
			"Location‑based forecasts with charts and alerts.",
		image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1200&h=800&fit=crop",
		tags: ["React", "Chart.js", "Weather API"],
		github: "#",
		demo: "#",
	},
	{
		title: "Social Media Platform",
		description:
			"Modern social platform with real‑time messaging and user interactions.",
		image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop",
		tags: ["React", "Firebase", "Material-UI"],
		github: "#",
		demo: "#",
	},
	{
		title: "Portfolio Website",
		description:
			"Responsive portfolio with smooth animations and modern design.",
		image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop",
		tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
		github: "#",
		demo: "#",
	},
];

export function Projects() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = parseInt(entry.target.getAttribute('data-index') || '0');
					if (entry.isIntersecting) {
						setVisibleCards(prev => new Set([...prev, index]));
					}
				});
			},
			{ 
				threshold: 0.1,
				rootMargin: '0px 0px -100px 0px'
			}
		);

		const cards = containerRef.current?.querySelectorAll('.project-card');
		cards?.forEach(card => observer.observe(card));

		return () => observer.disconnect();
	}, []);

	return (
		<section id="projects" className="py-20 overflow-hidden bg-black transition-colors duration-500">
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<SectionHeading title="Featured Projects" subtitle="Some recent work" />
				</motion.div>
				
				<div ref={containerRef} className="space-y-16">
					{PROJECTS.map((project, index) => (
						<ProjectCard 
							key={index}
							project={project}
							index={index}
							isVisible={visibleCards.has(index)}
						/>
					))}
				</div>
			</Container>
		</section>
	);
}

function ProjectCard({ project, index, isVisible }: { project: any; index: number; isVisible: boolean }) {
	const cardRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: cardRef,
		offset: ["start 0.8", "end 0.2"]
	});

	const x = useTransform(scrollYProgress, [0, 1], [100, -100]);
	const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

	return (
		<motion.div
			ref={cardRef}
			data-index={index}
			className="project-card"
			style={{ x, opacity }}
			initial={{ opacity: 0, x: 100 }}
			animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
			transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
		>
			<div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500">
				{/* Image */}
				<div className="relative overflow-hidden">
					<div className="aspect-[16/10] relative overflow-hidden">
						<img 
							src={project.image} 
							alt={project.title}
							className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
						
						{/* Overlay content */}
						<div className="absolute bottom-0 left-0 right-0 p-6">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
										{project.title}
									</h3>
									<p className="text-white/80 text-sm leading-relaxed max-w-md">
										{project.description}
									</p>
								</div>
								
								{/* Action buttons */}
								<div className="flex gap-3">
									<motion.a
										href={project.github}
										className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
									>
										<Github className="w-5 h-5" />
									</motion.a>
									<motion.a
										href={project.demo}
										className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-all duration-300"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
									>
										<ExternalLink className="w-5 h-5" />
									</motion.a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Tags */}
				<div className="p-6 pt-4">
					<div className="flex flex-wrap gap-2">
						{project.tags.map((tag: string, tagIndex: number) => (
							<motion.span
								key={tagIndex}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
								transition={{ duration: 0.2, delay: tagIndex * 0.05 }}
								className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/80 hover:bg-white/20 transition-colors duration-200"
							>
								{tag}
							</motion.span>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
}
