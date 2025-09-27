"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export function RootClient() {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			smoothWheel: true,
		});
		let rafId = 0;
		function raf(time: number) {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		}
		rafId = requestAnimationFrame(raf);
		return () => cancelAnimationFrame(rafId);
	}, []);
	return null;
}
