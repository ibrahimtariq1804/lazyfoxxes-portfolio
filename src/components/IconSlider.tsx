"use client";
import { motion } from "framer-motion";

interface IconItem {
  name: string;
  icon: string;
  category: string;
}

interface IconSliderProps {
  icons: IconItem[];
  className?: string;
}

export function IconSlider({ icons, className = "" }: IconSliderProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-8 py-8"
        animate={{
          x: [0, -100 * icons.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "linear",
          },
        }}
      >
        {/* Render icons twice for seamless loop */}
        {[...icons, ...icons].map((item, index) => (
          <motion.div
            key={`${item.name}-${index}`}
            className="flex-shrink-0 flex flex-col items-center gap-3 p-6 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <span className="text-sm text-white/70 group-hover:text-white transition-colors">
              {item.name}
            </span>
            <span className="text-xs text-white/50">
              {item.category}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
