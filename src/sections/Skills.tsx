"use client";
import { Container, SectionHeading, IconSlider, Squares } from "@/components";
import { motion } from "framer-motion";
import {
	SiReact,
	SiNextdotjs,
	SiTypescript,
	SiJavascript,
	SiTailwindcss,
	SiSass,
	SiNodedotjs,
	SiPython,
	SiDjango,
	SiFastapi,
	SiPostgresql,
	SiMongodb,
	SiMysql,
	SiFlutter,
	SiKotlin,
	SiVercel,
	SiNetlify,
	SiGithubactions,
	SiGit,
	SiStripe,
	SiFirebase,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";


const SKILLS_ICONS = [
	// Frontend Technologies
	{ name: "React", icon: <SiReact size={40} color="#61DAFB" />, category: "Frontend" },
	{ name: "Next.js", icon: <SiNextdotjs size={40} color="#ffffff" />, category: "Frontend" },
	{ name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" />, category: "Frontend" },
	{ name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" />, category: "Frontend" },
	{ name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#06B6D4" />, category: "Frontend" },
	{ name: "Sass", icon: <SiSass size={40} color="#CC6699" />, category: "Frontend" },

	// Backend Technologies
	{ name: "Node.js", icon: <SiNodedotjs size={40} color="#339933" />, category: "Backend" },
	{ name: "Python", icon: <SiPython size={40} color="#3776AB" />, category: "Backend" },
	{ name: "Django", icon: <SiDjango size={40} color="#092E20" />, category: "Backend" },
	{ name: "FastAPI", icon: <SiFastapi size={40} color="#009688" />, category: "Backend" },
	{ name: "Java", icon: <FaJava size={40} color="#ED8B00" />, category: "Backend" },

	// Databases
	{ name: "PostgreSQL", icon: <SiPostgresql size={40} color="#4169E1" />, category: "Database" },
	{ name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" />, category: "Database" },
	{ name: "MySQL", icon: <SiMysql size={40} color="#4479A1" />, category: "Database" },

	// Mobile Development
	{ name: "React Native", icon: <SiReact size={40} color="#61DAFB" />, category: "Mobile" },
	{ name: "Flutter", icon: <SiFlutter size={40} color="#02569B" />, category: "Mobile" },
	{ name: "Kotlin", icon: <SiKotlin size={40} color="#7F52FF" />, category: "Mobile" },

	// Cloud & DevOps
	{ name: "AWS", icon: <FaAws size={40} color="#FF9900" />, category: "Cloud" },
	{ name: "Vercel", icon: <SiVercel size={40} color="#ffffff" />, category: "Cloud" },
	{ name: "Netlify", icon: <SiNetlify size={40} color="#00C7B7" />, category: "Cloud" },
	{ name: "GitHub Actions", icon: <SiGithubactions size={40} color="#2088FF" />, category: "DevOps" },

	// Design & Tools
	{ name: "Git", icon: <SiGit size={40} color="#F05032" />, category: "Tools" },
	{ name: "VS Code", icon: <VscVscode size={40} color="#007ACC" />, category: "Tools" },

	// APIs & Integration
	{ name: "REST API", icon: <TbApi size={40} color="#6EC6CA" />, category: "API" },
	{ name: "Stripe", icon: <SiStripe size={40} color="#635BFF" />, category: "Payment" },
	{ name: "Firebase", icon: <SiFirebase size={40} color="#FFCA28" />, category: "Backend" },
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
