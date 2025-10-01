"use client";
import { motion, useScroll, useTransform } from "framer-motion";
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

			<motion.div style={{ y }} className="relative z-10 text-center px-6 sm:px-4 max-w-4xl mx-auto">
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-7 leading-tight"
				>
					 We&apos;re <span className="relative inline-block">
						<span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
							Lazyfoxxes
						</span>
						<span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 blur-xl opacity-50 animate-pulse"></span>
					</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-base sm:text-lg md:text-2xl text-foreground/70 mb-6 sm:mb-8 px-2"
				>
					Redefining Productivity the Foxx Way.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center px-4 sm:px-0"
				>
					<button
						onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
						className="px-6 sm:px-8 py-3 bg-primary hover:opacity-90 text-primary-foreground rounded-lg font-medium transition-colors text-sm sm:text-base"
					>
						View My Work
					</button>
					<button
						onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
						className="px-6 sm:px-8 py-3 border border-border hover:border-foreground/40 rounded-lg font-medium transition-colors text-sm sm:text-base"
					>
						Get In Touch
					</button>
				</motion.div>
			</motion.div>
		</section>
	);
}
