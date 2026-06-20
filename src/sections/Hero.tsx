"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { LightRays } from "@/components";

export function Hero() {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 500], [0, -80]);

	return (
		<section
			id="home"
			className="relative -mt-[4.5rem] min-h-dvh flex flex-col items-center justify-start sm:justify-center overflow-hidden bg-black px-4 sm:px-6 pt-[5.5rem] sm:pt-[6rem] pb-10 sm:pb-14"
		>
			<div className="absolute inset-0 pointer-events-none">
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
				<div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/10 rounded-full blur-3xl" />
			</div>

			<motion.div
				style={{ y }}
				className="relative z-10 w-full max-w-3xl mx-auto text-center flex flex-col items-center gap-3 sm:gap-4"
			>
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-[2rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
				>
					<span className="block sm:inline">We&apos;re </span>
					<span className="relative inline-block mt-1 sm:mt-0">
						<span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
							Lazyfoxxes
						</span>
						<span className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-blue-500/40 blur-2xl opacity-60 animate-pulse" />
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.15 }}
					className="text-sm sm:text-base md:text-lg text-blue-300/90 font-medium max-w-md sm:max-w-none"
				>
					Redefining Productivity the Foxx Way.
				</motion.p>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.25 }}
					className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed max-w-xl mx-auto text-pretty"
				>
					LazyFoxxes is a digital agency that builds modern web applications, mobile solutions, and SEO-driven digital experiences for businesses ready to grow online. We combine clean code, thoughtful design, and emerging AI search optimization to help your brand get discovered on Google and in AI-powered assistants like ChatGPT and Perplexity. From landing pages to full-stack platforms, we deliver fast, scalable products tailored to your goals—with lasting impact on visibility, performance, and user experience. Great software should work hard so you don&apos;t have to. That&apos;s the Foxx way.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.35 }}
					className="pt-1 sm:pt-2"
				>
					<button
						onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
						className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary hover:opacity-90 text-primary-foreground rounded-lg font-medium transition-colors text-sm sm:text-base"
					>
						Get In Touch
					</button>
				</motion.div>
			</motion.div>
		</section>
	);
}
