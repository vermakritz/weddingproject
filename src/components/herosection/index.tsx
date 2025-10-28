import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Camera, Video, Heart, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { MagneticButton } from "../magneticbutton";

interface HeroSectionProps {
  onBookingClick: () => void;
}

export function HeroSection({ onBookingClick }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(false);
  const [visibleIcons, setVisibleIcons] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);

    // Observe when Hero section enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Progressive icon appearance (lazy-rendered)
  useEffect(() => {
    if (inView) {
      const totalIcons = 20;
      let count = 0;

      const interval = setInterval(() => {
        count += 2; // reveal 2 icons at a time
        setVisibleIcons((prev) => Math.min(prev + 2, totalIcons));
        if (count >= totalIcons) clearInterval(interval);
      }, 400);

      return () => clearInterval(interval);
    }
  }, [inView]);

  const icons = [Heart, Camera, Video, Sparkles];

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        marginTop: "10vh",
      }}
    >
      {/* Animated Gradient Background */}
      {inView && (
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.3,
          }}
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(220, 38, 38, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Background with lazy image */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {/* Blurred low-res background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: 'url("/images /SAN03416 (1).avif")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#000",
            filter: "blur(15px)",
            transform: "scale(1.05)",
            zIndex: 1,
          }}
        />

        {/* High-res lazy image */}
        <img
          src="/images /SAN03416.JPG"
          alt="Wedding Hero"
          loading="lazy"
          decoding="async"
          onLoad={(e) => (e.currentTarget.style.opacity = "1")}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0,
            transition: "opacity 1s ease-in",
            zIndex: 2,
          }}
        />

        {/* Dark overlay */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
            zIndex: 3,
          }}
          animate={{ opacity: [0.7, 0.5, 0.7] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Floating Icons — Lazy progressive render */}
      {mounted && inView && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            overflow: "hidden",
            zIndex: 5,
          }}
        >
          {[...Array(visibleIcons)].map((_, i) => {
            const Icon = icons[i % icons.length];
            const randomX = Math.random() * 100;
            const randomSize = Math.random() * 25 + 15;
            const randomDuration = Math.random() * 12 + 12;
            const randomDelay = Math.random() * 10;

            return (
              <motion.div
                key={i}
                style={{ position: "absolute", left: `${randomX}%` }}
                initial={{ y: "100vh", opacity: 0 }}
                animate={{
                  y: "-20vh",
                  opacity: [0, 0.6, 0.8, 0.6, 0],
                  rotate: 360,
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay,
                  ease: "linear",
                }}
              >
                <Icon
                  color={
                    i % 3 === 0
                      ? "#ec4899"
                      : i % 3 === 1
                      ? "#f87171"
                      : "#f9a8d4"
                  }
                  size={randomSize}
                  fill={i % 2 === 0 ? "currentColor" : "none"}
                />
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Main Content */}
      {inView && (
        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            padding: "0 1rem",
            maxWidth: "80rem",
            margin: "0 auto",
          }}
        >
          {/* Animated Logo Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ marginBottom: "2rem" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <motion.div
                animate={{ rotateY: [0, 360], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Camera color="#ec4899" size={50} />
              </motion.div>
              <motion.div
                animate={{ rotateY: [0, 360], scale: [1, 1.1, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1.5,
                  ease: "easeInOut",
                }}
              >
                <Video color="#ef4444" size={50} />
              </motion.div>
            </div>
          </motion.div>

          {/* Texts */}
          <motion.h2
            style={{
              color: "#f9a8d4",
              fontSize: "1.25rem",
              marginBottom: "1rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            MAHADEV STUDIO
          </motion.h2>

          <motion.h1
            style={{
              color: "#fff",
              fontSize: "4rem",
              marginBottom: "1.5rem",
              lineHeight: 1.1,
            }}
            animate={{
              textShadow: [
                "0 0 20px rgba(236, 72, 153, 0.3)",
                "0 0 40px rgba(236, 72, 153, 0.5)",
                "0 0 20px rgba(236, 72, 153, 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Capture Your
            <br />
            <motion.span
              style={{
                backgroundImage: "linear-gradient(to right, #f472b6, #ef4444)",
                backgroundClip: "text",
                color: "transparent",
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Best Wedding Moments
            </motion.span>
          </motion.h1>

          <motion.p
            style={{
              color: "#fbcfe8",
              fontSize: "1.25rem",
              maxWidth: "40rem",
              margin: "0 auto 3rem auto",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Professional Wedding Photography & Videography Services
            <br />
            Turning your special day into timeless memories
          </motion.p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MagneticButton strength={20}>
              <Button
                onClick={onBookingClick}
                style={{
                  background: "linear-gradient(to right, #db2777, #dc2626)",
                  color: "#fff",
                  padding: "1.5rem 3rem",
                  fontSize: "1.125rem",
                  border: "none",
                  borderRadius: "50px",
                  cursor: "pointer",
                  boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)",
                }}
              >
                Book Your Date
              </Button>
            </MagneticButton>

            <MagneticButton strength={20}>
              <Button
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  border: "2px solid white",
                  color: "white",
                  padding: "1.5rem 3rem",
                  fontSize: "1.125rem",
                  borderRadius: "50px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "white";
                  e.currentTarget.style.color = "black";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "white";
                }}
              >
                View Portfolio
              </Button>
            </MagneticButton>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            style={{
              marginTop: "4rem",
              color: "#f9a8d4",
              textTransform: "uppercase",
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore ↓
          </motion.div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/918449004613?text=Hello%20Mahadev%20Studio!%20I%27d%20like%20to%20book%20a%20session."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 0px rgba(37, 211, 102, 0.4)",
            "0 0 20px rgba(37, 211, 102, 0.6)",
            "0 0 0px rgba(37, 211, 102, 0.4)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.15 }}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          backgroundColor: "#25D366",
          color: "white",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 15px rgba(0,0,0,0.3)",
          zIndex: 1000,
        }}
      >
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          loading="lazy"
          style={{ width: "35px", height: "35px" }}
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.a>
    </section>
  );
}
