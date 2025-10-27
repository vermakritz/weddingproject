import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9996] overflow-hidden hidden lg:block">
      {[...Array(10)].map((_, i) => {
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 5;
        const randomDuration = Math.random() * 8 + 10;
        const randomSize = Math.random() * 8 + 6;
        const randomYOffset = Math.random() * 20 + 30; // floats between 20vh–60vh height range

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${randomX}%`,
            }}
            initial={{
              y: `${randomYOffset + 40}vh`, // start lower
              opacity: 0,
            }}
            animate={{
              y: `${randomYOffset - 40}vh`, // end higher
              opacity: [0, 0.4, 0.6, 0.4, 0],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: "easeInOut",
            }}
          >
            <Heart
              className="text-pink-400/30"
              size={randomSize}
              fill="currentColor"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
