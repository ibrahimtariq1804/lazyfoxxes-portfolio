"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
	{ id: "home", label: "Home" },
	{ id: "services", label: "Services" },
	{ id: "skills", label: "Skills" },
	{ id: "about", label: "About" },
	{ id: "projects", label: "Projects" },
	{ id: "contact", label: "Contact" },
];

const NAVBAR_HEIGHT = 64; // h-16 = 64px (16 * 4px)

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [active, setActive] = useState("home");

	useEffect(() => {
		const onScroll = () => {
			const scrollY = window.scrollY + NAVBAR_HEIGHT + 2; // +2 for small buffer
			let current = NAV_ITEMS[0].id;
			for (const item of NAV_ITEMS) {
				const el = document.getElementById(item.id);
				if (el && scrollY >= el.offsetTop) {
					current = item.id;
				}
			}
			setActive(current);
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll(); // Set initial active
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollTo = (id: string) => {
		const el = document.getElementById(id);
		if (el) {
			// Emit a custom event to signal navigation is happening
			window.dispatchEvent(new CustomEvent('navigationScrollStart'));
			
			const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
			window.scrollTo({ top: y, behavior: "smooth" });
			setActive(id); // Update active immediately
			
			// Signal navigation is complete after scroll animation
			setTimeout(() => {
				window.dispatchEvent(new CustomEvent('navigationScrollEnd'));
			}, 1000);
		}
		setIsOpen(false);
	};

	return (
		<nav className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-white/10">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<img
						src="/logo.png" // Place your image in public/fox-logo.png
						alt="LazyFoxxes Logo"
						className="h-13 w-13 object-contain" // Adjust size to match text
						style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
					/>
					<div
                        className="text-3xl font-bold text-white italic"
                        style={{ fontFamily: '"VAG Rounded", Arial, sans-serif', fontWeight: 700 }}
                    >
                        lazyfoxxes
                    </div>
				</div>
				<div className="hidden md:flex gap-6">
					{NAV_ITEMS.map((item) => (
						<button
							key={item.id}
							onClick={() => scrollTo(item.id)}
							className={`px-3 py-2 text-sm font-medium transition-colors ${
								active === item.id ? "text-blue-400" : "text-white/70 hover:text-white"
							}`}
						>
							{item.label}
						</button>
					))}
				</div>
				<button className="md:hidden text-white" onClick={() => setIsOpen((v) => !v)}>
					{isOpen ? <X size={22} /> : <Menu size={22} />}
				</button>
			</div>
			{isOpen ? (
				<div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-md">
					<div className="px-4 py-3 flex flex-col">
						{NAV_ITEMS.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollTo(item.id)}
								className={`px-3 py-2 text-left text-sm ${
									active === item.id ? "text-blue-400" : "text-white/80"
								}`}
							>
								{item.label}
							</button>
						))}
					</div>
				</div>
			) : null}
		</nav>
	);
}
