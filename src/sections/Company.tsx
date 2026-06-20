"use client";
import { Container, SectionHeading } from "@/components";
import { motion } from "framer-motion";

export function Company() {
	return (
		<section id="about" className="relative py-12 sm:py-16 md:py-20 bg-black overflow-hidden">
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="text-center mb-8 sm:mb-10"
				>
					<SectionHeading title="About Us" subtitle="Who we are and what we stand for" />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					className="max-w-3xl mx-auto px-4"
				>
					<p className="text-white/80 text-base sm:text-lg text-center leading-relaxed">
						LazyFoxxes is a digital agency dedicated to helping businesses thrive in an increasingly connected world. We combine technical expertise with creative vision to deliver web applications, mobile solutions, and digital experiences that drive real results. From startups launching their first product to established companies seeking a modern digital presence, we partner with clients who value quality, performance, and thoughtful design.
					</p>
					<p className="text-white/80 text-base sm:text-lg text-center leading-relaxed mt-5">
						Our approach is simple: understand your goals, craft a tailored strategy, and build solutions that scale with your business. We work across the full stack—from intuitive user interfaces and robust backend systems to search optimization and emerging AI-powered discovery channels. Every project we take on is guided by clean code, fast performance, and user experiences that feel effortless. Whether you need a high-converting website, a cross-platform mobile app, or a comprehensive digital overhaul, LazyFoxxes brings the skills and dedication to turn your vision into reality. We believe great software should work hard so you don&apos;t have to—that&apos;s the Foxx way.
					</p>
				</motion.div>
			</Container>
		</section>
	);
}
