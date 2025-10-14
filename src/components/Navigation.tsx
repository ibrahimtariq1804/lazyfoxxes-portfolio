"use client";
import { useEffect, useState, useRef } from "react";

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
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const [glowStyle, setGlowStyle] = useState({ left: 0, width: 0 });
	const navRef = useRef<HTMLDivElement>(null);
	const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

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

	// Update glow position based on active button's actual position
	useEffect(() => {
		const updateGlowPosition = () => {
			const activeIndex = NAV_ITEMS.findIndex(item => item.id === active);
			const activeButton = buttonRefs.current[activeIndex];
			const navContainer = navRef.current;

			if (activeButton && navContainer) {
				const buttonRect = activeButton.getBoundingClientRect();
				const containerRect = navContainer.getBoundingClientRect();
				
				setGlowStyle({
					left: buttonRect.left - containerRect.left,
					width: buttonRect.width,
				});
			}
		};

		updateGlowPosition();
		
		// Update on window resize to handle responsive changes
		window.addEventListener('resize', updateGlowPosition);
		return () => window.removeEventListener('resize', updateGlowPosition);
	}, [active]);

	const scrollTo = (id: string) => {
		const el = document.getElementById(id);
		if (el) {
			const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
			
			// Use "auto" (instant) scroll to avoid getting trapped in tall sections
			// This ensures we jump directly to the target without smooth scrolling through intermediate content
			window.scrollTo({ top: y, behavior: "auto" });
			setActive(id); // Update active immediately
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
			<div className="hidden md:flex gap-2 relative" ref={navRef}>
				{/* Sliding glow effect */}
				<div 
					className="absolute rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 transition-all duration-500 ease-out"
					style={{
						width: `${glowStyle.width}px`,
						height: '40px',
						left: `${glowStyle.left}px`,
						top: '50%',
						transform: 'translateY(-50%)',
						filter: 'blur(6px)',
						opacity: glowStyle.width > 0 ? 0.8 : 0,
					}}
				/>
					
				{NAV_ITEMS.map((item, index) => (
					<button
						key={item.id}
						ref={(el) => { buttonRefs.current[index] = el; }}
						onClick={() => scrollTo(item.id)}
						onMouseEnter={() => setHoveredIndex(index)}
						onMouseLeave={() => setHoveredIndex(null)}
						className={`relative px-6 py-2 text-sm font-medium transition-all duration-300 ease-out group ${
							active === item.id 
								? "text-white" 
								: "text-white/70 hover:text-white"
						}`}
					>
							<span className="relative z-10">{item.label}</span>
							
							{/* Individual button background */}
							<div className={`absolute inset-0 rounded-full transition-all duration-300 ease-out ${
								active === item.id 
									? "bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 border border-blue-400/30" 
									: hoveredIndex === index
									? "bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-blue-400/10 border border-blue-400/20"
									: "bg-transparent"
							}`} />
						</button>
					))}
				</div>
				<button 
					className="md:hidden text-white relative w-6 h-6 flex flex-col justify-center items-center"
					onClick={() => setIsOpen((v) => !v)}
					aria-label="Toggle menu"
				>
					<span className="sr-only">Toggle menu</span>
					<div className="w-5 h-4 relative flex flex-col justify-between">
						{/* Top line */}
						<span
							className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-in-out ${
								isOpen ? "rotate-45 translate-y-[7px]" : "rotate-0 translate-y-0"
							}`}
						/>
						{/* Middle line */}
						<span
							className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-in-out ${
								isOpen ? "opacity-0 translate-x-3" : "opacity-100 translate-x-0"
							}`}
						/>
						{/* Bottom line */}
						<span
							className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-in-out ${
								isOpen ? "-rotate-45 -translate-y-[7px]" : "rotate-0 translate-y-0"
							}`}
						/>
					</div>
				</button>
			</div>
			{isOpen ? (
				<div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-md">
					<div className="px-4 py-3 flex flex-col gap-1">
						{NAV_ITEMS.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollTo(item.id)}
								className={`relative px-4 py-3 text-left text-sm rounded-full transition-all duration-300 ease-out group ${
									active === item.id 
										? "text-white" 
										: "text-white/80 hover:text-white"
								}`}
							>
								<span className="relative z-10">{item.label}</span>
								
								{/* Mobile gradient background */}
								<div className={`absolute inset-0 rounded-full transition-all duration-300 ease-out ${
									active === item.id 
										? "bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 border border-blue-400/30" 
										: "bg-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400/10 group-hover:via-purple-400/10 group-hover:to-blue-400/10"
								}`} />
							</button>
						))}
					</div>
				</div>
			) : null}
		</nav>
	);
}
