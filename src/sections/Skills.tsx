"use client";
import { Container, SectionHeading, IconSlider, Squares } from "@/components";
import { motion } from "framer-motion";

const SKILLS_ICONS = [
	// Frontend Technologies
	{ name: "React", icon: "⚛️", category: "Frontend" },
	{ name: "Next.js", icon: "▲", category: "Frontend" },
	{ name: "TypeScript", icon: "🔷", category: "Frontend" },
	{ name: "JavaScript", icon: "🟨", category: "Frontend" },
	{ name: "Tailwind CSS", icon: "🎨", category: "Frontend" },
	{ name: "HTML5", icon: "🌐", category: "Frontend" },
	{ name: "CSS3", icon: "💎", category: "Frontend" },
	{ name: "Sass", icon: "💅", category: "Frontend" },
	
	// Backend Technologies
	{ name: "Node.js", icon: "🟢", category: "Backend" },
	{ name: "Express", icon: "🚀", category: "Backend" },
	{ name: "Python", icon: "🐍", category: "Backend" },
	{ name: "Django", icon: "🎯", category: "Backend" },
	{ name: "FastAPI", icon: "⚡", category: "Backend" },
	{ name: "Java", icon: "☕", category: "Backend" },
	
	// Databases
	{ name: "PostgreSQL", icon: "🐘", category: "Database" },
	{ name: "MongoDB", icon: "🍃", category: "Database" },
	{ name: "MySQL", icon: "🐬", category: "Database" },
	
	// Mobile Development
	{ name: "React Native", icon: "📱", category: "Mobile" },
	{ name: "Flutter", icon: "🦋", category: "Mobile" },
	{ name: "Kotlin", icon: "🟣", category: "Mobile" },
	
	// Cloud & DevOps
	{ name: "AWS", icon: "☁️", category: "Cloud" },
	{ name: "Docker", icon: "🐳", category: "DevOps" },
	{ name: "Vercel", icon: "▲", category: "Cloud" },
	{ name: "Netlify", icon: "🌐", category: "Cloud" },
	{ name: "GitHub Actions", icon: "⚙️", category: "DevOps" },
	
	// Design & Tools
	{ name: "Figma", icon: "🎨", category: "Design" },
	{ name: "Adobe XD", icon: "🎭", category: "Design" },
	{ name: "Git", icon: "📚", category: "Tools" },
	{ name: "VS Code", icon: "💻", category: "Tools" },
	{ name: "Webpack", icon: "📦", category: "Tools" },
	{ name: "Vite", icon: "⚡", category: "Tools" },
	
	// Testing & Quality
	{ name: "Jest", icon: "🧪", category: "Testing" },
	{ name: "Cypress", icon: "🌲", category: "Testing" },
	{ name: "Playwright", icon: "🎭", category: "Testing" },
	{ name: "ESLint", icon: "🔍", category: "Quality" },
	{ name: "Prettier", icon: "✨", category: "Quality" },
	
	// APIs & Integration
	{ name: "REST API", icon: "🔗", category: "API" },
	{ name: "GraphQL", icon: "📊", category: "API" },
	{ name: "WebSocket", icon: "🔌", category: "API" },
	{ name: "Stripe", icon: "💳", category: "Payment" },
	{ name: "Firebase", icon: "🔥", category: "Backend" },
];

export function Skills() {
	return (
		<section id="skills" className="relative py-12 sm:py-16 md:py-20 bg-black transition-colors duration-500 overflow-hidden">
			<div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
             <Squares direction="diagonal" speed={1} borderColor="#222" squareSize={40} hoverFillColor="#222" />
            </div>
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-8 sm:mb-12"
				>
					<SectionHeading title="Skills & Expertise" subtitle="Technologies and tools we master" />
				</motion.div>
				
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					className="px-2 sm:px-0"
				>
					<IconSlider icons={SKILLS_ICONS} />
				</motion.div>
			</Container>
		</section>
	);
}
