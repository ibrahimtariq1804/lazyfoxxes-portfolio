"use client";
import { useState } from "react";
import { Container, SectionHeading } from "@/components";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
	{
		question: "What services does LazyFoxxes offer?",
		answer:
			"We provide web development, mobile app development, UI/UX design, backend development, search engine optimization (SEO), and AI search optimization. Whether you need a new product built from scratch or want to improve an existing digital presence, we cover the full stack—from design and development to discoverability and performance.",
	},
	{
		question: "How does your development process work?",
		answer:
			"We start by understanding your goals, audience, and requirements. From there, we plan the architecture, design the user experience, and build in iterative phases with regular check-ins. You stay involved throughout, with clear milestones, transparent communication, and room for feedback before launch.",
	},
	{
		question: "What is AI Search Optimization and why does it matter?",
		answer:
			"AI Search Optimization helps your brand appear in AI-powered tools like ChatGPT, Perplexity, and Google AI Overviews—not just traditional search results. We optimize your content, structure, and brand entity so AI assistants can find, understand, and recommend your business when users ask relevant questions.",
	},
	{
		question: "How can SEO and AI optimization create real business impact?",
		answer:
			"Strong SEO drives organic traffic from people actively searching for what you offer. AI optimization extends that reach into conversational search, where more users are discovering products and services. Together, they increase visibility, build trust, and bring qualified leads to your business without relying solely on paid ads.",
	},
	{
		question: "How long does a typical project take?",
		answer:
			"Timelines depend on scope. A landing page may take a few weeks, while a full web or mobile application can take several months. During our initial conversation, we provide a realistic timeline based on your features, integrations, and design requirements.",
	},
	{
		question: "Do you work with startups and small businesses?",
		answer:
			"Absolutely. We partner with startups, growing businesses, and established companies alike. We tailor our approach to your budget and stage—whether you need an MVP to validate an idea or a scalable platform ready for long-term growth.",
	},
	{
		question: "What technologies do you specialize in?",
		answer:
			"Our core stack includes Next.js, React, TypeScript, Tailwind CSS, Node.js, PostgreSQL, MongoDB, React Native, and cloud platforms like AWS and Vercel. We choose technologies based on performance, scalability, and what best fits your project—not trends for their own sake.",
	},
	{
		question: "Can you redesign or improve an existing website?",
		answer:
			"Yes. We regularly help clients modernize outdated sites, improve page speed, fix SEO issues, and add new features. We can work with your current codebase or recommend a fresh build when that makes more sense for your goals.",
	},
	{
		question: "How do you ensure quality and performance?",
		answer:
			"We follow best practices for clean, maintainable code, responsive design, accessibility, and thorough testing. Every project is optimized for fast load times, strong SEO fundamentals, and a smooth user experience across devices.",
	},
	{
		question: "What happens after my project launches?",
		answer:
			"Launch is just the beginning. We can support you with updates, performance monitoring, SEO improvements, and feature enhancements as your business grows. Many clients continue working with us long-term as a trusted technology partner.",
	},
];

export function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<section id="faq" className="relative py-12 sm:py-16 md:py-20 bg-black overflow-hidden">
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-8 sm:mb-12"
				>
					<SectionHeading title="FAQ" subtitle="Common questions about our work and services" />
				</motion.div>

				<div className="max-w-3xl mx-auto space-y-3 px-2">
					{FAQ_ITEMS.map((item, index) => {
						const isOpen = openIndex === index;

						return (
							<motion.div
								key={item.question}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: index * 0.05 }}
								viewport={{ once: true, margin: "-30px" }}
								className={`border rounded-xl overflow-hidden transition-colors ${
									isOpen
										? "border-primary/40 bg-primary/5"
										: "border-white/10 bg-gradient-to-br from-white/5 via-black/60 to-black/90"
								}`}
							>
								<button
									type="button"
									onClick={() => setOpenIndex(isOpen ? null : index)}
									className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left cursor-pointer"
									aria-expanded={isOpen}
								>
									<span className="text-sm sm:text-base font-semibold text-white leading-snug">
										{item.question}
									</span>
									<ChevronDown
										className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
											isOpen ? "rotate-180" : ""
										}`}
									/>
								</button>

								<AnimatePresence initial={false}>
									{isOpen && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3, ease: "easeInOut" }}
											className="overflow-hidden"
										>
											<p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-white/70 leading-relaxed">
												{item.answer}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						);
					})}
				</div>
			</Container>
		</section>
	);
}
