"use client";
import { Container, SectionHeading } from "@/components";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Review {
	name: string;
	role: string;
	company: string;
	rating: number;
	comment: string;
	avatar?: string;
	initials: string;
}

const REVIEWS: Review[] = [
	{
		name: "Roshaan Bin Amir",
		role: "CEO & Founder",
		company: "Tech Innovators Inc",
		rating: 5,
		comment: "Working with LazyFoxxes was an absolute pleasure! They transformed our vision into a stunning, high-performance web application. Their attention to detail and technical expertise exceeded our expectations. Highly recommended for any serious project!",
		initials: "RA",
	},
	{
		name: "Muhammad Ibrahim",
		role: "Product Manager",
		company: "Digital Solutions Ltd",
		rating: 5,
		comment: "The team delivered exceptional work on our mobile app. Their professionalism, communication, and ability to solve complex problems quickly made the entire development process smooth. The final product is exactly what we envisioned and more!",
		initials: "MI",
	},
	{
		name: "Momin Tariq",
		role: "CTO",
		company: "StartUp Ventures",
		rating: 5,
		comment: "LazyFoxxes built our entire tech infrastructure from scratch. Their full-stack expertise and modern approach to development resulted in a scalable, maintainable platform. They're not just developers—they're true technology partners!",
		initials: "MT",
	},
	{
		name: "Mobeen Tahir",
		role: "Founder",
		company: "E-Commerce Hub",
		rating: 5,
		comment: "Outstanding service! They developed a comprehensive e-commerce platform with advanced features that boosted our sales by 300%. The UI/UX is beautiful, and the backend is rock solid. Worth every penny!",
		initials: "MT",
	},
	{
		name: "Saif Ali Khan",
		role: "Director of Technology",
		company: "Global Systems",
		rating: 5,
		comment: "I've worked with many development teams, but LazyFoxxes stands out for their innovation and dedication. They consistently delivered ahead of schedule and the quality of their code is impeccable. A truly world-class team!",
		initials: "SK",
	},
	{
		name: "David Paul",
		role: "Business Owner",
		company: "Paul Consulting",
		rating: 5,
		comment: "The team transformed our outdated website into a modern, responsive platform that our clients love. Their creative solutions and technical skills are top-notch. Communication was seamless throughout the project!",
		initials: "DP",
	},
	{
		name: "ApplianceMagicLLC",
		role: "Managing Director",
		company: "Appliance Magic LLC",
		rating: 5,
		comment: "We partnered with LazyFoxxes to build our online appliance store and couldn't be happier! The platform they developed is fast, user-friendly, and has significantly improved our customer experience. Sales have increased dramatically since launch!",
		initials: "AM",
	},
	{
		name: "Reego Adventures",
		role: "Founder & CEO",
		company: "Reego Adventures",
		rating: 5,
		comment: "LazyFoxxes created an amazing adventure booking platform for us. The integration of maps, booking systems, and user reviews works flawlessly. Their passion for excellence shows in every detail. Absolutely phenomenal work!",
		initials: "RA",
	},
];

export function Reviews() {
	return (
		<section id="reviews" className="relative py-12 sm:py-16 md:py-20 bg-black transition-colors duration-500 overflow-hidden">
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-8 sm:mb-12 md:mb-16"
				>
					<SectionHeading title="Client Reviews" subtitle="What our clients say about us" />
				</motion.div>

				{/* Reviews Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2">
					{REVIEWS.map((review, index) => (
						<ReviewCard key={index} review={review} index={index} />
					))}
				</div>
			</Container>
		</section>
	);
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40, scale: 0.95 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{
				duration: 0.5,
				delay: index * 0.1,
				type: "spring",
				stiffness: 100,
			}}
			whileHover={{
				scale: 1.03,
				y: -8,
				boxShadow: "0 20px 60px rgba(96, 165, 250, 0.2)",
			}}
			className="relative flex flex-col h-full bg-gradient-to-br from-white/10 via-black/60 to-black/90 border border-white/10 hover:border-blue-400/40 rounded-xl sm:rounded-2xl p-5 sm:p-6 overflow-hidden shadow-lg transition-all duration-500"
		>
			{/* Quote Icon Background */}
			<div className="absolute top-4 right-4 opacity-10">
				<Quote className="w-16 h-16 text-blue-400" />
			</div>

			{/* Header with Avatar and Info */}
			<div className="flex items-start gap-4 mb-4 relative z-10">
				{/* Avatar */}
				<motion.div
					initial={{ scale: 0, rotate: -180 }}
					whileInView={{ scale: 1, rotate: 0 }}
					transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
					className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg"
				>
					<span className="text-white font-bold text-base sm:text-lg">
						{review.initials}
					</span>
				</motion.div>

				{/* Name and Role */}
				<div className="flex-1 min-w-0">
					<motion.h3
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: index * 0.1 + 0.3 }}
						className="text-base sm:text-lg font-bold text-white truncate"
					>
						{review.name}
					</motion.h3>
					<motion.p
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: index * 0.1 + 0.35 }}
						className="text-xs sm:text-sm text-white/70 truncate"
					>
						{review.role}
					</motion.p>
					<motion.p
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: index * 0.1 + 0.4 }}
						className="text-xs text-blue-400/80 truncate"
					>
						{review.company}
					</motion.p>
				</div>
			</div>

			{/* Star Rating */}
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ delay: index * 0.1 + 0.45 }}
				className="flex gap-1 mb-3 relative z-10"
			>
				{Array.from({ length: 5 }).map((_, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, rotate: -180, scale: 0 }}
						whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
						transition={{
							delay: index * 0.1 + 0.5 + i * 0.05,
							type: "spring",
							stiffness: 200,
						}}
					>
						<Star
							className={`w-4 h-4 ${
								i < review.rating
									? "fill-yellow-400 text-yellow-400"
									: "fill-gray-600 text-gray-600"
							}`}
						/>
					</motion.div>
				))}
			</motion.div>

			{/* Review Comment */}
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: index * 0.1 + 0.7 }}
				className="text-white/80 text-xs sm:text-sm leading-relaxed flex-1 relative z-10"
			>
				{review.comment}
			</motion.p>

			{/* Decorative gradient at bottom */}
			<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
		</motion.div>
	);
}

