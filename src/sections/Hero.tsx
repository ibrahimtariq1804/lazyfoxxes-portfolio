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
					className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-7 leading-tight text-white"
				>
					 We&apos;re <span className="relative inline-block">
						<span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
							Lazyfoxxes
						</span>
						<span className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-blue-500/40 blur-2xl opacity-60 animate-pulse"></span>
					</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.15 }}
					className="text-base sm:text-lg md:text-xl text-blue-300/90 mb-4 sm:mb-5 px-2"
				>
					Redefining Productivity the Foxx Way.
				</motion.p>
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-sm sm:text-base md:text-lg text-white/75 mb-6 sm:mb-8 px-2 max-w-2xl mx-auto leading-relaxed"
				>
					LazyFoxxes is a digital agency that builds modern web applications, mobile solutions, and SEO-driven digital experiences for businesses ready to grow online. We combine clean code, thoughtful design, and emerging AI search optimization to help your brand get discovered on Google and in AI-powered assistants like ChatGPT and Perplexity. From landing pages to full-stack platforms, we deliver fast, scalable products tailored to your goals—with lasting impact on visibility, performance, and user experience. Great software should work hard so you don&apos;t have to. That&apos;s the Foxx way.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="flex justify-center px-4 sm:px-0"
				>
					<button
						onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
						className="px-6 sm:px-8 py-3 bg-primary hover:opacity-90 text-primary-foreground rounded-lg font-medium transition-colors text-sm sm:text-base"
					>
						Get In Touch
					</button>
				</motion.div>
			</motion.div>
		</section>
	);
}
