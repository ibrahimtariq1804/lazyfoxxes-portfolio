export function Footer() {
	return (
		<footer className="border-t border-white/10 py-8 bg-black">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-white/70">
				© {new Date().getFullYear()} lazyfoxxes. All rights reserved.
			</div>
		</footer>
	);
}
