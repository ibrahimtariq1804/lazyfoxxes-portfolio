"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
	{ id: "home", label: "Home" },
	{ id: "services", label: "Services" },
	{ id: "skills", label: "Skills" },
	{ id: "projects", label: "Projects" },
	{ id: "contact", label: "Contact" },
];

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [active, setActive] = useState("home");

	useEffect(() => {
		const onScroll = () => {
			const scrollY = window.scrollY;
			NAV_ITEMS.forEach((item) => {
				const el = document.getElementById(item.id);
				if (!el) return;
				const { top, height } = el.getBoundingClientRect();
				const offsetTop = top + window.scrollY;
				if (scrollY >= offsetTop - 120 && scrollY < offsetTop + height - 120) {
					setActive(item.id);
				}
			});
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollTo = (id: string) => {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: "smooth" });
		setIsOpen(false);
	};

	return (
		<nav className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-white/10">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
				<div className="text-base font-semibold text-white">Ibrahim</div>
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
