"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components";
import { ServiceFAQAccordion } from "@/components/ServiceFAQAccordion";
import { SERVICE_ICONS } from "@/lib/service-icons";
import type { Service } from "@/lib/services";

type ServicePageContentProps = {
	service: Service;
};

function ServiceIconLarge({ iconName }: { iconName: Service["icon"] }) {
	const Icon = SERVICE_ICONS[iconName];
	return (
		<div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 border border-primary/20">
			<Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
		</div>
	);
}

export function ServicePageContent({ service }: ServicePageContentProps) {
	return (
		<div className="bg-black min-h-screen">
			{/* Hero */}
			<section className="relative overflow-hidden pt-8 sm:pt-12 pb-12 sm:pb-16">
				<div className="absolute inset-0 pointer-events-none">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-3xl" />
					<div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
				</div>

				<Container>
					<Link
						href="/#services"
						className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8"
					>
						<ArrowLeft className="w-4 h-4" />
						Back to Services
					</Link>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="max-w-3xl"
					>
						<ServiceIconLarge iconName={service.icon} />
						<h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
							{service.title}
						</h1>
						<p className="mt-3 text-base sm:text-lg text-blue-300/90 font-medium">
							{service.tagline}
						</p>
						<p className="mt-5 text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl">
							{service.longDescription}
						</p>
					</motion.div>
				</Container>
			</section>

			{/* Benefits */}
			<section className="py-12 sm:py-16 border-t border-white/10">
				<Container>
					<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
						Why Choose Our {service.title}
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
						{service.benefits.map((benefit, i) => (
							<motion.div
								key={benefit}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: i * 0.05 }}
								viewport={{ once: true }}
								className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/5"
							>
								<CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
								<span className="text-sm sm:text-base text-white/80">{benefit}</span>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* Technologies */}
			<section className="py-12 sm:py-16 border-t border-white/10">
				<Container>
					<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
						Technologies & Tools
					</h2>
					<div className="grid gap-3 max-w-3xl">
						{service.details.map((detail, i) => (
							<motion.div
								key={detail}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.4, delay: i * 0.05 }}
								viewport={{ once: true }}
								className="flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-primary/30 transition-colors"
							>
								<div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
								<span className="text-sm sm:text-base text-white/80">{detail}</span>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* Process */}
			<section className="py-12 sm:py-16 border-t border-white/10">
				<Container>
					<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
						How We Deliver
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl">
						{service.process.map((step, i) => (
							<motion.div
								key={step.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: i * 0.08 }}
								viewport={{ once: true }}
								className="p-5 sm:p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 via-black/60 to-black/90"
							>
								<span className="text-xs font-semibold text-primary uppercase tracking-wide">
									Step {i + 1}
								</span>
								<h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
								<p className="mt-2 text-sm text-white/70 leading-relaxed">{step.description}</p>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* FAQs */}
			<section className="py-12 sm:py-16 border-t border-white/10">
				<Container>
					<h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
						Frequently Asked Questions
					</h2>
					<p className="text-sm sm:text-base text-white/60 mb-6 sm:mb-8 max-w-2xl">
						Common questions about our {service.title.toLowerCase()} service. Can&apos;t find what you&apos;re looking for?{" "}
						<Link href="/#contact" className="text-primary hover:underline">
							Get in touch
						</Link>
						.
					</p>
					<div className="max-w-3xl">
						<ServiceFAQAccordion items={service.faqs} />
					</div>
				</Container>
			</section>

			{/* CTA */}
			<section className="py-12 sm:py-16 border-t border-white/10">
				<Container>
					<div className="max-w-2xl mx-auto text-center p-8 sm:p-10 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-black/80 to-black">
						<h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
							Ready to get started?
						</h2>
						<p className="text-sm sm:text-base text-white/70 mb-6">
							Let&apos;s discuss how our {service.title.toLowerCase()} service can help grow your business.
						</p>
						<Link
							href="/#contact"
							className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:opacity-90 text-primary-foreground rounded-lg font-medium transition-colors text-sm sm:text-base"
						>
							Contact Us
							<ArrowRight className="w-4 h-4" />
						</Link>
					</div>
				</Container>
			</section>
		</div>
	);
}
