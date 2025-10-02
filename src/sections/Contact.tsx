"use client";
import { Container, SectionHeading } from "@/components";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
	return (
		<section id="contact" className="py-12 sm:py-16 md:py-20 bg-black transition-colors duration-500">
			<Container>
				<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
					<SectionHeading title="Get In Touch" subtitle="Let's build something great together" />
				</motion.div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 px-2">
					<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-50px" }}>
						<h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">Ready to collaborate? Let&apos;s connect!</h3>
						<p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed">
							We&apos;re always excited to discuss new projects and opportunities. Whether you need a modern web application, a mobile app, or a complete digital solution, our team is here to bring your vision to life.
						</p>
						<div className="space-y-4 sm:space-y-5">
							<div className="flex items-center gap-3"><Mail className="size-4 sm:size-5 text-primary flex-shrink-0" /><span className="text-sm sm:text-base">contact@lazyfoxxes.com</span></div>
							<div className="flex items-center gap-3"><Phone className="size-4 sm:size-5 text-primary flex-shrink-0" /><span className="text-sm sm:text-base">+92 (300) 123-4567</span></div>
							<div className="flex items-center gap-3"><MapPin className="size-4 sm:size-5 text-primary flex-shrink-0" /><span className="text-sm sm:text-base">Islamabad, Pakistan</span></div>
						</div>
						<div className="flex gap-3 sm:gap-4 mt-5 sm:mt-6">
							<a href="https://github.com/lazyfoxxes" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 border border-border hover:border-primary/50 rounded-lg transition-colors"><Github className="size-4 sm:size-5" /></a>
							<a href="https://linkedin.com/company/lazyfoxxes" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 border border-border hover:border-primary/50 rounded-lg transition-colors"><Linkedin className="size-4 sm:size-5" /></a>
							<a href="https://twitter.com/lazyfoxxes" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 border border-border hover:border-primary/50 rounded-lg transition-colors"><Twitter className="size-4 sm:size-5" /></a>
						</div>
					</motion.div>

					<motion.form initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true, margin: "-50px" }} className="space-y-3 sm:space-y-4">
						<input type="text" placeholder="Your Name" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-black/50 focus:border-primary/50 focus:outline-none transition-colors text-sm sm:text-base" />
						<input type="email" placeholder="Your Email" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-black/50 focus:border-primary/50 focus:outline-none transition-colors text-sm sm:text-base" />
						<input type="text" placeholder="Subject" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-black/50 focus:border-primary/50 focus:outline-none transition-colors text-sm sm:text-base" />
						<textarea rows={5} placeholder="Your Message" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-black/50 focus:border-primary/50 focus:outline-none transition-colors resize-none text-sm sm:text-base" />
						<button type="submit" className="w-full px-6 py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm sm:text-base">Send Message</button>
					</motion.form>
				</div>
			</Container>
		</section>
	);
}
