"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LightRays } from "@/components";

export function Hero() {
	const [isMobile, setIsMobile] = useState(false);
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 500], [0, -80]);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 640);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	return (
		<section
			id="home"
			className="relative -mt-[4.5rem] min-h-dvh flex flex-col items-center justify-center overflow-hidden bg-black px-5 sm:px-6 pt-[4.75rem] pb-10 sm:pt-[6rem] sm:pb-14"
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
					followMouse={!isMobile}
					mouseInfluence={0.15}
					noiseAmount={0.1}
					distortion={0.2}
				/>
				<div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/10 rounded-full blur-3xl" />
			</div>

			<motion.div
				style={isMobile ? undefined : { y }}
				className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center gap-3.5 sm:gap-4"
			>
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="flex flex-col items-center sm:block text-[2.25rem] leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white w-full"
				>
					<span className="block sm:inline">We&apos;re</span>
					<span className="relative inline-block mt-0.5 sm:mt-0 sm:ml-2">
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
					className="w-full text-sm sm:text-base md:text-lg text-blue-300/90 font-medium px-1"
				>
					Redefining Productivity the Foxx Way.
				</motion.p>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.25 }}
					className="w-full text-[0.8125rem] sm:text-sm md:text-base text-white/70 leading-relaxed px-1 sm:px-0 max-w-xl text-pretty"
				>
					LazyFoxxes is a digital agency that builds modern web applications, mobile solutions, and SEO-driven digital experiences for businesses ready to grow online. We combine clean code, thoughtful design, and emerging AI search optimization to help your brand get discovered on Google and in AI-powered assistants like ChatGPT and Perplexity. From landing pages to full-stack platforms, we deliver fast, scalable products tailored to your goals—with lasting impact on visibility, performance, and user experience. Great software should work hard so you don&apos;t have to. That&apos;s the Foxx way.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.35 }}
					className="w-full flex justify-center pt-1 sm:pt-2"
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
