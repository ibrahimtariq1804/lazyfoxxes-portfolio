"use client";
import { Container, SectionHeading } from "@/components";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<{
		type: "success" | "error" | null;
		message: string;
	}>({ type: null, message: "" });

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus({ type: null, message: "" });

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				setSubmitStatus({
					type: "success",
					message: "Thank you! Your message has been sent successfully.",
				});
				setFormData({ name: "", email: "", subject: "", message: "" });
			} else {
				setSubmitStatus({
					type: "error",
					message: data.error || "Failed to send message. Please try again.",
				});
			}
		} catch (error) {
			setSubmitStatus({
				type: "error",
				message: "An error occurred. Please try again later.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<section id="contact" className="py-12 sm:py-16 md:py-20 bg-black transition-colors duration-500">
			<Container>
				<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
					<SectionHeading title="Get In Touch" subtitle="Let's build something great together" />
				</motion.div>
				{/* Force deployment - Contact layout updated */}
				{/* Mobile: Form first, Details second | Desktop: Details left, Form right */}
				<div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 px-2">
					{/* FORM - Always first on mobile, second on desktop */}
					<motion.form 
						initial={{ opacity: 0, y: 30 }} 
						whileInView={{ opacity: 1, y: 0 }} 
						transition={{ duration: 0.5, delay: 0.1 }} 
						viewport={{ once: true, margin: "-50px" }} 
						className="space-y-3 sm:space-y-4 lg:order-2"
						onSubmit={handleSubmit}
					>
						<input 
							type="text" 
							name="name"
							placeholder="Your Name" 
							className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-black/50 focus:border-primary/50 focus:outline-none transition-colors text-sm sm:text-base" 
							value={formData.name}
							onChange={handleChange}
							required
						/>
						<input 
							type="email" 
							name="email"
							placeholder="Your Email" 
							className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-black/50 focus:border-primary/50 focus:outline-none transition-colors text-sm sm:text-base" 
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<input 
							type="text" 
							name="subject"
							placeholder="Subject" 
							className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-black/50 focus:border-primary/50 focus:outline-none transition-colors text-sm sm:text-base" 
							value={formData.subject}
							onChange={handleChange}
							required
						/>
						<textarea 
							rows={5} 
							name="message"
							placeholder="Your Message" 
							className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-black/50 focus:border-primary/50 focus:outline-none transition-colors resize-none text-sm sm:text-base" 
							value={formData.message}
							onChange={handleChange}
							required
						/>
						
						{submitStatus.type && (
							<motion.div 
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								className={`flex items-center gap-2 p-3 rounded-lg ${
									submitStatus.type === "success" 
										? "bg-green-500/10 text-green-400 border border-green-500/20" 
										: "bg-red-500/10 text-red-400 border border-red-500/20"
								}`}
							>
								{submitStatus.type === "success" ? (
									<CheckCircle className="size-5 flex-shrink-0" />
								) : (
									<XCircle className="size-5 flex-shrink-0" />
								)}
								<span className="text-sm">{submitStatus.message}</span>
							</motion.div>
						)}

						<button 
							type="submit" 
							className="w-full px-6 py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
							disabled={isSubmitting}
						>
							{isSubmitting ? "Sending..." : "Send Message"}
						</button>
					</motion.form>

					{/* DETAILS - Always second on mobile, first on desktop */}
					<motion.div 
						initial={{ opacity: 0, y: 30 }} 
						whileInView={{ opacity: 1, y: 0 }} 
						transition={{ duration: 0.5 }} 
						viewport={{ once: true, margin: "-50px" }}
						className="lg:order-1"
					>
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
				</div>
			</Container>
		</section>
	);
}
