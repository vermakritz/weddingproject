import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, Play } from "lucide-react";
import { ImageWithFallback } from "../figma/imagewithfallback";

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  // 🖼️ Add your own images here
  // You can place them in /public/images or import them directly
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
      {/* Subtle dotted background */}
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

          {/* Filter Buttons */}
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
                initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 10 }}
                transition={{ duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.08, zIndex: 10, rotateZ: 3, y: -10 }}
                onClick={() => setSelectedImage(index)}
                style={{ position: "relative", cursor: "pointer" }}
              >
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "1rem",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                    aspectRatio: "1 / 1", // ✅ keeps cards perfectly square
                  }}
                >
                  <motion.div
                    style={{ width: "100%", height: "100%" }}
                    whileHover={{ scale: 1.15, rotate: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                  >
                    <ImageWithFallback
                      src={item.url}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </motion.div>

                  {/* Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5), transparent)",
                      opacity: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      padding: "1.5rem",
                      transition: "opacity 0.3s",
                    }}
                    className="group-hover-overlay"
                  >
                    <h3
                      style={{
                        color: "#fff",
                        fontSize: "1.25rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.title}
                    </h3>
                    <motion.div
                      style={{
                        width: "3rem",
                        height: "3rem",
                        background: "#ec4899",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Play
                        size={20}
                        style={{ color: "#fff", marginLeft: "0.25rem" }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox for image preview */}
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
                transition: "background-color 0.3s",
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
    </section>
  );
}
