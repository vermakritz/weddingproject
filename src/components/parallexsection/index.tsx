import { useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface ParallaxSectionProps {
  children: ReactNode;
  intensity?: number;
}

export function ParallaxSection({ children, intensity = 100 }: ParallaxSectionProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / intensity;
      const y = (e.clientY - window.innerHeight / 2) / intensity;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [intensity]);

  return (
    <motion.div
      animate={{
        x: offset.x,
        y: offset.y,
      }}
      transition={{
        type: "spring",
        damping: 80,
        stiffness: 100,
        mass: 1.5,
      }}
      className="hidden lg:block"
    >
      {children}
    </motion.div>
  );
}
