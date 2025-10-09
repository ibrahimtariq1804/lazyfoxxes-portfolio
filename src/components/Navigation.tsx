"use client";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
	{ id: "home", label: "Home" },
	{ id: "services", label: "Services" },
	{ id: "skills", label: "Skills" },
	{ id: "about", label: "About" },
	{ id: "projects", label: "Projects" },
	{ id: "contact", label: "Contact" },
];

const NAVBAR_HEIGHT = 80; // h-20 = 80px

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
			const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
			window.scrollTo({ top: y, behavior: "smooth" });
			setActive(id);
		}
		setIsOpen(false);
	};

	return (
		<nav className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
				{/* Logo */}
				<div className="flex items-center gap-3">
					<img
						src="/logo.png"
						alt="LazyFoxxes Logo"
						className="h-10 w-10 object-contain"
					/>
					<div className="text-2xl font-bold text-gray-900">
						LazyFoxxes
					</div>
				</div>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-8">
					{NAV_ITEMS.map((item) => (
						<button
							key={item.id}
							onClick={() => scrollTo(item.id)}
							className={`relative text-sm font-medium transition-all duration-300 ease-out group ${
								active === item.id 
									? "text-blue-600" 
									: "text-gray-700 hover:text-blue-600"
							}`}
						>
							{item.label}
							{/* Underline effect */}
							<span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transition-all duration-300 ease-out ${
								active === item.id 
									? "opacity-100 scale-x-100" 
									: "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
							}`} />
						</button>
					))}
					
					{/* CTA Button */}
					<button
						onClick={() => scrollTo("contact")}
						className="ml-4 px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-out shadow-sm hover:shadow-md"
					>
						Get In Touch
					</button>
				</div>

				{/* Mobile Menu Button */}
				<button 
					className="md:hidden text-gray-700 relative w-6 h-6 flex flex-col justify-center items-center"
					onClick={() => setIsOpen((v) => !v)}
					aria-label="Toggle menu"
				>
					<span className="sr-only">Toggle menu</span>
					<div className="w-5 h-4 relative flex flex-col justify-between">
						{/* Top line */}
						<span
							className={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ease-in-out ${
								isOpen ? "rotate-45 translate-y-[7px]" : "rotate-0 translate-y-0"
							}`}
						/>
						{/* Middle line */}
						<span
							className={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ease-in-out ${
								isOpen ? "opacity-0 translate-x-3" : "opacity-100 translate-x-0"
							}`}
						/>
						{/* Bottom line */}
						<span
							className={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ease-in-out ${
								isOpen ? "-rotate-45 -translate-y-[7px]" : "rotate-0 translate-y-0"
							}`}
						/>
					</div>
				</button>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
					<div className="px-4 py-4 flex flex-col gap-2">
						{NAV_ITEMS.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollTo(item.id)}
								className={`px-3 py-2 text-left text-sm font-medium transition-colors duration-300 ease-out ${
									active === item.id 
										? "text-blue-600" 
										: "text-gray-700 hover:text-blue-600"
								}`}
							>
								{item.label}
							</button>
						))}
						<button
							onClick={() => scrollTo("contact")}
							className="mt-2 px-4 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-out"
						>
							Get In Touch
						</button>
					</div>
				</div>
			)}
		</nav>
	);
}
