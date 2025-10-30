import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, Play } from "lucide-react";
import { ImageWithFallback } from "../figma/imagewithfallback";

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleImages, setVisibleImages] = useState<Record<number, boolean>>({});

  const observerRef = useRef<IntersectionObserver | null>(null);

  const portfolioItems = [
    { url: "/images /MS_00003.avif", category: "ceremony", title: "Bridal Elegance" },
    { url: "/images /MS_08066.avif", category: "details", title: "Wedding Rings" },
    { url: "/images /MS_08161.avif", category: "reception", title: "First Dance" },
    { url: "/images /MS_08174.avif", category: "ceremony", title: "Outdoor Ceremony" },
    { url: "/images /SAN03413.JPG", category: "details", title: "Floral Arrangements" },
    { url: "/images /SAN03416 (1).avif", category: "reception", title: "Reception Setup" },
    { url: "/images /SAN03204.avif", category: "couples", title: "Romantic Moments" },
    { url: "/images /SAN03366_1.avif", category: "couples", title: "Elegant Venue" },
    { url: "/images /MS_08195.avif", category: "details", title: "Detail Shots" },
  ];

  const filters = [
    { id: "all", label: "All Work" },
    { id: "ceremony", label: "Ceremonies" },
    { id: "couples", label: "Couples" },
    { id: "reception", label: "Receptions" },
    { id: "details", label: "Details" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  // 🪄 Setup intersection observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleImages((prev) => ({ ...prev, [index]: true }));
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll(".portfolio-item");
    items.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [activeFilter]);

  return (
    <section
      id="portfolio"
      style={{
        padding: "5rem 0",
        backgroundColor: "#000",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dotted Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage: `radial-gradient(circle, #ec4899 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 1rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <Camera size={48} style={{ color: "#ec4899", margin: "0 auto 1rem" }} />
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Our Portfolio</h2>
          <p
            style={{
              color: "#fbb6ce",
              fontSize: "1.125rem",
              maxWidth: "32rem",
              margin: "0 auto 2rem",
            }}
          >
            Explore our collection of beautiful wedding moments we've captured
          </p>

          {/* Filters */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "9999px",
                  cursor: "pointer",
                  background:
                    activeFilter === filter.id
                      ? "linear-gradient(90deg, #ec4899, #f43f5e)"
                      : "#1f2937",
                  color: activeFilter === filter.id ? "#fff" : "#d1d5db",
                  boxShadow:
                    activeFilter === filter.id ? "0 4px 6px rgba(0,0,0,0.3)" : "none",
                  border: "none",
                  transition: "all 0.3s",
                }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.url}
                className="portfolio-item"
                data-index={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "1rem",
                  cursor: "pointer",
                  aspectRatio: "1 / 1",
                  backgroundColor: "#111", // placeholder while loading
                }}
                onClick={() => setSelectedImage(index)}
              >
                {visibleImages[index] ? (
                  <ImageWithFallback
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "opacity 0.6s ease",
                    }}
                  />
                ) : (
                  // 👇 Placeholder shimmer while image loads
                  <motion.div
                    style={{
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, #111 25%, #1f1f1f 50%, #111 75%)",
                      backgroundSize: "200% 100%",
                      borderRadius: "1rem",
                    }}
                    animate={{
                      backgroundPosition: ["200% 0", "-200% 0"],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.95)",
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                width: "3rem",
                height: "3rem",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <X size={24} style={{ color: "#fff" }} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{ maxWidth: "80vw", maxHeight: "90vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={filteredItems[selectedImage].url}
                alt={filteredItems[selectedImage].title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "0.5rem",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* adding youtube  */}
{/* 🎥 YouTube Video Gallery Section (Optimized Smooth Scroll) */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  style={{
    marginTop: "6rem",
    textAlign: "center",
    willChange: "transform",
  }}
>
  <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#fff" }}>
    Our Wedding Films
  </h2>
  <p
    style={{
      color: "#fbb6ce",
      fontSize: "1.125rem",
      maxWidth: "32rem",
      margin: "0 auto 2.5rem",
    }}
  >
    Relive the moments — watch our beautifully captured wedding stories
  </p>

  {/* Inline CSS for smooth scroll + custom scrollbar */}
  <style>
    {`
      .video-scroll-container {
        display: flex;
        gap: 2rem;
        overflow-x: auto;
        padding: 1rem 0;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: thin;
        scrollbar-color: #ec4899 #1f2937;
        transform: translateZ(0); /* Forces GPU acceleration */
        will-change: transform;
      }
      .video-scroll-container::-webkit-scrollbar {
        height: 8px;
      }
      .video-scroll-container::-webkit-scrollbar-track {
        background: #1f2937;
        border-radius: 10px;
      }
      .video-scroll-container::-webkit-scrollbar-thumb {
        background: #ec4899;
        border-radius: 10px;
      }
      .video-scroll-container::-webkit-scrollbar-thumb:hover {
        background: #f43f5e;
      }
    `}
  </style>

  <div
    className="video-scroll-container"
    style={{
      WebkitOverflowScrolling: "touch",
      overflowY: "hidden",
    }}
  >
    {[
      "https://www.youtube.com/embed/UBKI3z1Icjg?si=2xfhGNjSEqik4nEO",
      "https://www.youtube.com/embed/x3jRnNMhvVI?si=EvOg6rb1kj0Pu9yo",
      "https://www.youtube.com/embed/tmnysmTyjMY?si=ztZmmboNNzr8lgwz",
      "https://www.youtube.com/embed/w7wrzQyVF4c?si=5yTr-0a2SUwXXzej",
      "https://www.youtube.com/embed/OhmsDjPkyjA?si=n9QwHGnwhr9rcNr3",
      "https://www.youtube.com/embed/O-MmrSkvWGA?si=SdehFscowUzeqkm-", 
    ].map((videoUrl, index) => (
      <div
        key={index}
        style={{
          minWidth: "480px",
          height: "270px",
          borderRadius: "1rem",
          overflow: "hidden",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          flexShrink: 0,
          background: "#111",
          transform: "translateZ(0)",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          title={`YouTube video ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          style={{
            borderRadius: "1rem",
            width: "100%",
            height: "100%",
            display: "block",
          }}
        ></iframe>
      </div>
    ))}
  </div>
</motion.div>


      
    </section>
  );
}
