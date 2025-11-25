"use client";
import { useEffect, useState, useRef } from "react";

const NAV_ITEMS = [
	{ id: "home", label: "Home" },
	{ id: "services", label: "Services" },
	{ id: "skills", label: "Skills" },
	{ id: "about", label: "About" },
	{ id: "projects", label: "Projects" },
	{ id: "reviews", label: "Reviews" },
	{ id: "contact", label: "Contact" },
];

const NAVBAR_HEIGHT = 72; // Adjusted for new navbar height

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [active, setActive] = useState("home");
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const [glowStyle, setGlowStyle] = useState({ left: 0, width: 0 });
	const navRef = useRef<HTMLDivElement>(null);
	const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

	useEffect(() => {
		const onScroll = () => {
			const scrollY = window.scrollY + NAVBAR_HEIGHT + 2;
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
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

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
		window.addEventListener('resize', updateGlowPosition);
		return () => window.removeEventListener('resize', updateGlowPosition);
	}, [active]);

	const scrollTo = (id: string) => {
		const el = document.getElementById(id);
		if (el) {
			const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
			window.scrollTo({ top: y, behavior: "auto" });
			setActive(id);
		}
		setIsOpen(false);
	};

	return (
		<nav className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 py-3">
			{/* Centered rectangular navbar container with theme-matching gradient */}
			<div className="relative w-full max-w-6xl">
				{/* Subtle dark glow behind navbar - blends with black background */}
				<div className="absolute inset-0 bg-black/40 rounded-[28px] blur-xl" />
				
				{/* Main navbar container - Liquid Glass Effect */}
				<div 
					className="relative rounded-[24px] overflow-hidden"
					style={{
						background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%)',
						backdropFilter: 'blur(20px) saturate(180%)',
						WebkitBackdropFilter: 'blur(20px) saturate(180%)',
						boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.2)',
						border: '1px solid rgba(255, 255, 255, 0.08)',
					}}
				>
					{/* Subtle top highlight for glass effect */}
					<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
					
					{/* Inner glass reflection */}
					<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" style={{ height: '50%' }} />
					
					<div className="h-14 sm:h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
					{/* Left side - Logo and Brand Name */}
					<div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
						<img
							src="/logo.png"
							alt="LazyFoxxes Logo"
							className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
						/>
						<span
							className="text-xl sm:text-2xl font-bold text-white italic whitespace-nowrap"
							style={{ fontFamily: '"VAG Rounded", Arial, sans-serif', fontWeight: 700 }}
						>
							lazyfoxxes
						</span>
					</div>

					{/* Right side - Navigation Items (Desktop) */}
					<div className="hidden lg:flex items-center gap-1 relative" ref={navRef}>
						{/* Sliding glow effect */}
						<div 
							className="absolute rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 transition-all duration-500 ease-out pointer-events-none"
							style={{
								width: `${glowStyle.width}px`,
								height: '36px',
								left: `${glowStyle.left}px`,
								top: '50%',
								transform: 'translateY(-50%)',
								filter: 'blur(8px)',
								opacity: glowStyle.width > 0 ? 0.6 : 0,
							}}
						/>
						
						{NAV_ITEMS.map((item, index) => (
							<button
								key={item.id}
								ref={(el) => { buttonRefs.current[index] = el; }}
								onClick={() => scrollTo(item.id)}
								onMouseEnter={() => setHoveredIndex(index)}
								onMouseLeave={() => setHoveredIndex(null)}
								className={`relative px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-300 ease-out ${
									active === item.id 
										? "text-white" 
										: "text-white/70 hover:text-white"
								}`}
							>
								<span className="relative z-10">{item.label}</span>
								
								{/* Individual button background */}
								<div className={`absolute inset-0 rounded-lg transition-all duration-300 ease-out ${
									active === item.id 
										? "bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-blue-500/25 border border-blue-400/40" 
										: hoveredIndex === index
										? "bg-white/5 border border-white/10"
										: "bg-transparent border border-transparent"
								}`} />
							</button>
						))}
					</div>

					{/* Mobile menu button */}
					<button 
						className="lg:hidden text-white relative w-8 h-8 flex flex-col justify-center items-center rounded-xl hover:bg-white/10 transition-colors"
						onClick={() => setIsOpen((v) => !v)}
						aria-label="Toggle menu"
					>
						<span className="sr-only">Toggle menu</span>
						<div className="w-5 h-4 relative flex flex-col justify-between">
							<span
								className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-in-out ${
									isOpen ? "rotate-45 translate-y-[7px]" : "rotate-0 translate-y-0"
								}`}
							/>
							<span
								className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-in-out ${
									isOpen ? "opacity-0 translate-x-3" : "opacity-100 translate-x-0"
								}`}
							/>
							<span
								className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-in-out ${
									isOpen ? "-rotate-45 -translate-y-[7px]" : "rotate-0 translate-y-0"
								}`}
							/>
						</div>
					</button>
					</div>

				{/* Mobile menu dropdown - Liquid Glass Effect */}
				{isOpen && (
					<div 
						className="lg:hidden rounded-b-[24px]"
						style={{
							background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%)',
							borderTop: '1px solid rgba(255, 255, 255, 0.05)',
						}}
					>
						<div className="px-4 py-3 flex flex-col gap-1">
							{NAV_ITEMS.map((item) => (
								<button
									key={item.id}
									onClick={() => scrollTo(item.id)}
									className={`relative px-4 py-3 text-left text-sm font-medium rounded-xl transition-all duration-300 ease-out ${
										active === item.id 
											? "text-white bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 border border-blue-400/30" 
											: "text-white/80 hover:text-white hover:bg-white/5"
									}`}
								>
									{item.label}
								</button>
							))}
						</div>
					</div>
				)}
				</div>
			</div>
		</nav>
	);
}
