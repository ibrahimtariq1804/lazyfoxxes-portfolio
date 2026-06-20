"use client";
import { Container, SectionHeading, Squares } from "@/components";
import { Github, ExternalLink, X, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { type Project } from "@/types";

const PROJECTS: Project[] = [
    {
        title: "Reego Adventure",
        description:
            "A WordPress-based tourism & booking site for a Northern Pakistan adventure travel company operating across Gilgit-Baltistan — Hunza, Skardu, Shigar, and Khaplu. Showcases trekking expeditions (K2 Base Camp, Nanga Parbat, Biafo Glacier), cultural tours, and seasonal travel guides.",
        image: "adventure.jpg",
        tags: ["WordPress", "Custom PHP", "WhatsApp API", "SEO", "WooCommerce"],
        github: "#",
        demo: "#",
        liveUrl: "https://reegoadventure.com",
        maintenanceNote:
            "Actively maintained with ongoing content updates — new tour packages added as recently as November 2025, fresh client testimonials January 2026, and rotating seasonal banners (live 'Early Booking' and 'Adventure Season 2025' promos on homepage). This shows LazyFoxxes manages content updates, new tour listings, and seasonal marketing pushes — not just a 'launch and forget' build.",
    },
    {
        title: "Serengé Retreat",
        description:
            "A premium eco-wellness retreat website for a boutique nature/wellness sanctuary in Shigar Valley, Baltistan. Built on Next.js with a story-driven brand experience: ambient audio ('Listen to the Valley'), immersive imagery, SEO landing pages (digital detox, riverside stays, how-to-reach guides), and a partner integration linking back to Reego Adventure as their tour partner.",
        image: "serenge.jpg",
        tags: ["Next.js", "React", "SEO", "Optimized Images", "Custom Audio"],
        github: "#",
        demo: "#",
        liveUrl: "https://serengeretreatpakistan.com",
        maintenanceNote:
            "A technically sophisticated, custom-coded build (Next.js, optimized image pipelines, dedicated SEO content pages) rather than a templated CMS site — great for showing range beyond WordPress. The cross-linking with Reego Adventure also demonstrates the ability to build and maintain an ecosystem of related client sites, not just standalone pages.",
    },
    {
        title: "Appliance Magic LLC",
        description:
            "A local-service lead-generation website for a family-owned appliance repair company serving Northern Virginia for 20+ years. Focuses on conversion: service booking flow, click-to-call, trust signals (certified technicians, warranty, licensed & insured), animated stat counters, and city-specific service area targeting for local SEO.",
        image: "appliance.jpg",
        tags: ["WordPress", "Elementor", "Local SEO", "Booking Flow", "CRO"],
        github: "#",
        demo: "#",
        liveUrl: "https://appliancemagicllc.com",
        maintenanceNote:
            "A practical, conversion-focused small-business site that shows LazyFoxxes also handles bread-and-butter local-business builds — not just flashy travel/wellness brands. Ongoing care revolves around local SEO service-area pages (Woodbridge, Fairfax, Alexandria, Arlington, Springfield) and keeping the booking flow optimized.",
    },
    {
        title: "Safe Space",
        description:
            "A comprehensive health and wellness platform featuring secure user authentication, appointment booking, real-time consultation, and health tracking. Built with modern technologies for optimal performance and user experience.",
        image: "health.jpg",
        tags: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
        github: "#",
        demo: "#",
        maintenanceNote:
            "This comprehensive health platform demonstrates our ability to build secure, HIPAA-compliant applications with real-time features. The admin dashboard provides healthcare providers powerful tools for managing patients and appointments.",
    },
];

export function Projects() {
    const [detailIndex, setDetailIndex] = useState<number | null>(null);

    const handleOpenDetail = (index: number) => setDetailIndex(index);
    const handleCloseDetail = () => setDetailIndex(null);

    return (
        <section id="projects" className="relative py-12 sm:py-16 md:py-20 bg-black transition-colors duration-500 overflow-hidden">
            <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
                <Squares direction="diagonal" speed={1} borderColor="#222" squareSize={40} hoverFillColor="#222" />
            </div>
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                >
                    <SectionHeading title="Featured Projects" subtitle="Real client work we're proud of" />
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 md:gap-10 px-2 max-w-5xl mx-auto">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            onOpenDetail={() => handleOpenDetail(index)}
                        />
                    ))}
                </div>
            </Container>
            <AnimatePresence>
                {detailIndex !== null && (
                    <ProjectDetailCard
                        project={PROJECTS[detailIndex]}
                        onClose={handleCloseDetail}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}

function ProjectCard({
    project,
    index,
    onOpenDetail,
}: {
    project: Project;
    index: number;
    onOpenDetail: () => void;
}) {
    return (
        <motion.div
            className="project-card cursor-pointer"
            initial={{ opacity: 0, y: 40, scale: 0.95, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ 
                duration: 0.5, 
                delay: index * 0.12, 
                type: "spring",
                stiffness: 100
            }}
            whileHover={{ 
                scale: 1.03,
                y: -6,
                boxShadow: "0 20px 60px rgba(96, 165, 250, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenDetail}
        >
            <div className="flex flex-col h-full bg-gradient-to-br from-white/10 via-black/60 to-black/90 border border-white/10 hover:border-blue-400/40 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg transition-all duration-500">
                <motion.div 
                    className="relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ delay: index * 0.12 + 0.2, duration: 0.4 }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 sm:h-56 object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    {/* Live badge */}
                    {project.liveUrl && (
                        <span className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-green-500/20 border border-green-400/40 backdrop-blur-sm rounded-full text-xs text-green-300 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                            Live Site
                        </span>
                    )}
                </motion.div>
                <div className="flex flex-col flex-1 justify-between p-4 sm:p-6">
                    <div>
                        <motion.h3 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ delay: index * 0.12 + 0.3, duration: 0.4 }}
                            className="text-xl sm:text-2xl font-bold text-white mb-2"
                        >
                            {project.title}
                        </motion.h3>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ delay: index * 0.12 + 0.4, duration: 0.4 }}
                            className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3"
                        >
                            {project.description}
                        </motion.p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        {project.tags.map((tag: string, tagIndex: number) => (
                            <motion.span
                                key={tagIndex}
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ 
                                    delay: index * 0.12 + 0.5 + (tagIndex * 0.05),
                                    type: "spring",
                                    stiffness: 200
                                }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/80 hover:bg-white/20 transition-colors duration-200"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                    <div className="flex gap-3 mt-auto items-center">
                        {project.liveUrl && (
                            <motion.a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white text-xs font-medium transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={e => e.stopPropagation()}
                            >
                                <ExternalLink className="w-3.5 h-3.5" />
                                Visit Site
                            </motion.a>
                        )}
                        <motion.button
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 hover:bg-white/20 rounded-full text-white text-xs font-medium transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={e => {
                                e.preventDefault();
                                e.stopPropagation();
                                onOpenDetail();
                            }}
                        >
                            View Details
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function ProjectDetailCard({
    project,
    onClose,
}: {
    project: Project;
    onClose: () => void;
}) {
    return (
        <Dialog
            open={true}
            onClose={onClose}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 40 }}
                transition={{ duration: 0.5 }}
                className="relative z-[101] w-full max-w-4xl mx-auto bg-gradient-to-br from-white/10 via-black/60 to-black/90 border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] md:max-h-[85vh]"
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 md:top-6 md:right-6 z-20 text-white bg-black/60 rounded-full p-2 md:p-3 hover:bg-black/80 transition flex items-center justify-center"
                    aria-label="Close"
                >
                    <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                
                {/* Mobile: Vertical scroll layout | Desktop: Side-by-side */}
                <div className="flex flex-col md:flex-row h-full overflow-hidden">
                    {/* Image Section */}
                    <div className="w-full md:w-2/5 flex-shrink-0 bg-black/30 h-44 sm:h-52 md:h-auto relative">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/40" />
                        {project.liveUrl && (
                            <span className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-green-500/20 border border-green-400/40 backdrop-blur-sm rounded-full text-xs text-green-300 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                                Live at{" "}
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-green-200"
                                    onClick={e => e.stopPropagation()}
                                >
                                    {project.liveUrl.replace("https://", "")}
                                </a>
                            </span>
                        )}
                    </div>
                    
                    {/* Content Section - Scrollable */}
                    <div
                        className="w-full md:w-3/5 overflow-y-auto flex-1 p-5 sm:p-6 md:p-8"
                        style={{ wordBreak: "break-word", whiteSpace: "normal" }}
                    >
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 pr-10">{project.title}</h2>
                        <p className="text-white/80 text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed">{project.description}</p>
                        
                        {/* Tech stack */}
                        <div className="mb-4 sm:mb-5">
                            <span className="block text-white/50 text-xs uppercase tracking-widest font-semibold mb-2">Tech Stack</span>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {project.tags.map((tag: string, tagIndex: number) => (
                                    <span
                                        key={tagIndex}
                                        className="px-3 sm:px-4 py-1 bg-blue-500/10 border border-blue-400/20 rounded-full text-xs sm:text-sm text-blue-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Maintenance note */}
                        {project.maintenanceNote && (
                            <div className="mb-4 sm:mb-5 p-4 bg-white/5 border border-white/10 rounded-xl">
                                <span className="flex items-center gap-2 text-white font-semibold mb-2 text-sm sm:text-base">
                                    <Wrench className="w-4 h-4 text-blue-400" />
                                    Ongoing Maintenance
                                </span>
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                                    {project.maintenanceNote}
                                </p>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex gap-3 sm:gap-4 flex-wrap pb-2">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-full text-white text-sm font-medium transition-all duration-300"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Visit Live Site
                                </a>
                            )}
                            {project.github && project.github !== "#" && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                                >
                                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </Dialog>
    );
}
