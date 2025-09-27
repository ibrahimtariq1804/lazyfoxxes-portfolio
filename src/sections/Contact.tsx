"use client";
import { Container, SectionHeading } from "@/components";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
	return (
		<section id="contact" className="py-20 bg-black transition-colors duration-500">
			<Container>
				<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
					<SectionHeading title="Get In Touch" subtitle="Let’s build something great" />
				</motion.div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
					<motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
						<h3 className="text-xl font-semibold mb-6">Let’s start a conversation</h3>
						<div className="space-y-5">
							<div className="flex items-center gap-3"><Mail className="size-5 text-primary" /><span>john.doe@example.com</span></div>
							<div className="flex items-center gap-3"><Phone className="size-5 text-primary" /><span>+1 (555) 123-4567</span></div>
							<div className="flex items-center gap-3"><MapPin className="size-5 text-primary" /><span>San Francisco, CA</span></div>
						</div>
						<div className="flex gap-4 mt-6">
							<a href="#" className="p-3 border rounded-lg"><Github className="size-5" /></a>
							<a href="#" className="p-3 border rounded-lg"><Linkedin className="size-5" /></a>
							<a href="#" className="p-3 border rounded-lg"><Twitter className="size-5" /></a>
						</div>
					</motion.div>

					<motion.form initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-4">
						<input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border" />
						<input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border" />
						<input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-lg border" />
						<textarea rows={6} placeholder="Your Message" className="w-full px-4 py-3 rounded-lg border resize-none" />
						<button type="submit" className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground">Send Message</button>
					</motion.form>
				</div>
			</Container>
		</section>
	);
}
