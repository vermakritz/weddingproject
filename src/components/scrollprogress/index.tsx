import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, MotionValue } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX: MotionValue<number> = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 1024;
  });

  useEffect(() => {
    const handleResize = () => setVisible(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="scroll-progress"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: "linear-gradient(to right, #db2777, #ef4444, #db2777)",
        transformOrigin: "left",
        zIndex: 9999,
        display: visible ? "block" : "none",
        scaleX, // ✅ MotionValue passed correctly here
      }}
    />
  );
}
