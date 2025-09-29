"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { LightRays } from "@/components";

export function Hero() {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 500], [0, -150]);

	return (
		<section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
			<div className="absolute inset-0">
				<LightRays 
					raysOrigin="top-center"
					raysColor="#3b82f6"
					raysSpeed={1.2}
					lightSpread={1.5}
					rayLength={2.5}
					pulsating={true}
					fadeDistance={1.2}
					saturation={1.2}
					followMouse={true}
					mouseInfluence={0.15}
					noiseAmount={0.1}
					distortion={0.2}
				/>
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
			</div>

			<motion.div style={{ y }} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-5xl md:text-7xl lg:text-8xl font-bold mb-7"
				>
					 We’re <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Lazyfoxxes</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-lg md:text-2xl text-foreground/70 mb-8"
				>
					Redefining Productivity the Foxx Way.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="flex flex-col sm:flex-row gap-4 justify-center"
				>
					<button
						onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
						className="px-8 py-3 bg-primary hover:opacity-90 text-primary-foreground rounded-lg font-medium transition-colors"
					>
						View My Work
					</button>
					<button
						onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
						className="px-8 py-3 border border-border hover:border-foreground/40 rounded-lg font-medium transition-colors"
					>
						Get In Touch
					</button>
				</motion.div>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
					<ChevronDown className="w-6 h-6 text-foreground/60 animate-bounce" />
				</motion.div>
			</motion.div>
		</section>
	);
}
