"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { ServiceFAQ } from "@/lib/services";

type ServiceFAQAccordionProps = {
	items: ServiceFAQ[];
};

export function ServiceFAQAccordion({ items }: ServiceFAQAccordionProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<div className="space-y-3">
			{items.map((item, index) => {
				const isOpen = openIndex === index;

				return (
					<div
						key={item.question}
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
					</div>
				);
			})}
		</div>
	);
}
