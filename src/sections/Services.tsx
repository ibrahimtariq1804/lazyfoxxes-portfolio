"use client";
import Link from "next/link";
import { Container, SectionHeading } from "@/components";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { SERVICE_ICONS } from "@/lib/service-icons";

function ServiceIcon({ slug }: { slug: string }) {
	const service = SERVICES.find((s) => s.slug === slug);
	if (!service) return null;
	const Icon = SERVICE_ICONS[service.icon];
	return (
		<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20">
			<Icon className="w-5 h-5 text-primary" />
		</div>
	);
}

export function Services() {
	return (
		<section id="services" className="bg-black transition-colors duration-500 py-12 sm:py-16 md:py-20">
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-8 sm:mb-12"
				>
					<SectionHeading title="Our Services" subtitle="How we can help you succeed" />
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
					{SERVICES.map((svc, i) => (
						<motion.div
							key={svc.slug}
							initial={{ opacity: 0, y: 40, scale: 0.95 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							transition={{
								duration: 0.5,
								delay: i * 0.1,
								type: "spring",
								stiffness: 100,
							}}
							viewport={{ once: true, margin: "-50px" }}
							whileHover={{
								y: -4,
								borderColor: "rgba(96, 165, 250, 0.4)",
								boxShadow: "0 10px 40px rgba(96, 165, 250, 0.12)",
							}}
							className="group backdrop-blur-sm border border-border rounded-xl p-5 sm:p-6 transition-all flex flex-col h-full"
						>
							<div className="flex items-center gap-3 mb-3">
								<ServiceIcon slug={svc.slug} />
								<h3 className="text-lg font-bold text-white">{svc.title}</h3>
							</div>

							<p className="text-foreground/70 text-sm mb-4 leading-relaxed flex-1">
								{svc.description}
							</p>

							<div className="flex flex-wrap gap-2 mb-5">
								{svc.details.slice(0, 3).map((d) => (
									<span
										key={d}
										className="text-xs px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-foreground/70"
									>
										{d.split(":")[0]}
									</span>
								))}
							</div>

							<Link
								href={`/services/${svc.slug}`}
								className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group-hover:gap-3"
							>
								Learn More
								<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
							</Link>
						</motion.div>
					))}
				</div>
			</Container>
		</section>
	);
}
