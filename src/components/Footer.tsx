import Link from "next/link";
import { SERVICES } from "@/lib/services";

export function Footer() {
	return (
		<footer className="border-t border-white/10 py-10 sm:py-12 bg-black">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-8">
					{SERVICES.map((service) => (
						<Link
							key={service.slug}
							href={`/services/${service.slug}`}
							className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
						>
							{service.title}
						</Link>
					))}
				</div>
				<p className="text-center text-sm text-white/70">
					© {new Date().getFullYear()} lazyfoxxes. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
