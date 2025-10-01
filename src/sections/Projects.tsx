"use client";
import { Container, SectionHeading, Squares } from "@/components";
import { Github, ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { type Project } from "@/types";

const PROJECTS = [
    {
        title: "Safe Space",
        description:
            "Full‑stack e‑commerce with auth, cart, payments, and admin dashboard.",
        image: "health.jpg",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "#",
        demo: "#",
    },
    {
        title: "Freelance Marketplace",
        description:
            "Collaborative tasks with real‑time updates for teams and productivity.",
        image: "Freelance.jpg",
        tags: ["Next.js", "Socket.io", "PostgreSQL"],
        github: "#",
        demo: "#",
    },
    {
        title: "Reego Adventures",
        description:
            "Location‑based forecasts with charts and alerts.",
        image: "adventure.jpg",
        tags: ["React", "Chart.js", "Weather API"],
        github: "#",
        demo: "#",
    },
    {
        title: "Appliance Magic",
        description:
            "Modern social platform with real‑time messaging and user interactions.",
        image: "appliance.jpg",
        tags: ["React", "Firebase", "Material-UI"],
        github: "#",
        demo: "#",
    },
    {
        title: "Portfolio Website",
        description:
            "Responsive portfolio with smooth animations and modern design.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        github: "#",
        demo: "#",
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
                    <SectionHeading title="Featured Projects" subtitle="Some recent work" />
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-2">
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
                scale: 1.05,
                y: -8,
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
                            className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed"
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
                    <div className="flex gap-3 mt-auto">
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <Github className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                            href="#"
                            className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-all duration-300"
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={e => {
                                e.preventDefault();
                                e.stopPropagation();
                                onOpenDetail();
                            }}
                        >
                            <ExternalLink className="w-5 h-5" />
                        </motion.a>
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
    const demoDetails: Record<string, string> = {
        "E-Commerce Platform":
            "This demo showcases a seamless shopping experience with secure authentication, real-time cart updates, Stripe-powered payments, and a robust admin dashboard for managing products and orders.",
        "Task Management App":
            "The demo allows teams to collaborate on tasks with instant updates, assign responsibilities, track progress, and boost productivity through a clean, interactive interface.",
        "Weather Dashboard":
            "Explore live weather forecasts by location, view historical data with interactive charts, and receive timely alerts for severe conditions—all in a visually engaging dashboard.",
        "Social Media Platform":
            "Experience modern social networking with real-time messaging, user profiles, and interactive posts. The demo highlights instant communication and dynamic user engagement.",
        "Portfolio Website":
            "This demo features a responsive, animated portfolio with smooth transitions, project showcases, and a modern design to highlight your skills and achievements.",
    };

    return (
        <Dialog
            open={true}
            onClose={onClose}
            className="fixed inset-0 z-[100] flex items-center justify-center"
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
                className="relative z-[101] w-full max-w-4xl mx-auto bg-gradient-to-br from-white/10 via-black/60 to-black/90 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                style={{ height: "38rem", maxHeight: "90vh" }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-white bg-black/40 rounded-full p-3 hover:bg-black/70 transition flex items-center justify-center"
                    aria-label="Close"
                >
                    <X className="w-6 h-6" />
                </button>
                <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-1/2 flex-shrink-0 flex items-center justify-center bg-black/30">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover md:rounded-l-3xl"
                            style={{ maxHeight: "38rem", minHeight: "16rem" }}
                        />
                    </div>
                    <motion.div
                        drag="y"
                        dragConstraints={{ top: -200, bottom: 0 }}
                        className="w-full md:w-1/2 overflow-y-auto h-full p-8 flex flex-col justify-center cursor-grab active:cursor-grabbing"
                        style={{ touchAction: "none", maxHeight: "38rem", wordBreak: "break-word", whiteSpace: "normal" }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
                        <p className="text-white/80 text-base mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-3 mb-4">
                            {project.tags.map((tag: string, tagIndex: number) => (
                                <span
                                    key={tagIndex}
                                    className="px-4 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white/80 break-words"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="mb-5">
                            <span className="block text-white font-semibold mb-1">Demo Details:</span>
                            <p className="text-white/70 text-sm break-words">
                                {demoDetails[project.title] || "Demo details not available."}
                            </p>
                        </div>
                        <div className="flex gap-4 mt-auto flex-wrap">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-12 h-12 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </Dialog>
    );
}
