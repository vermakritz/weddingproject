import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 1024; // mimic 'hidden lg:block'
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleResize = () => setVisible(window.innerWidth >= 1024);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!visible) return null; // hide on small screens

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "12px",
          height: "12px",
          background: "linear-gradient(to bottom right, #ec4899, #ef4444)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 400,
          mass: 0.3,
        }}
      />

      {/* Outer ring */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          border: "2px solid rgba(244, 114, 182, 0.5)", // border-pink-400/50
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          damping: 60,
          stiffness: 150,
          mass: 0.6,
        }}
      />

      {/* Trail effect */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "4px",
          height: "4px",
          backgroundColor: "#f87171", // red-400
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: 0.5,
        }}
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "spring",
          damping: 80,
          stiffness: 200,
          mass: 1,
        }}
      />
    </>
  );
}
