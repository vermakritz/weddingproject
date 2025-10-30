import { motion } from "framer-motion";
import { Camera, Video, Image, Film, Users, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function Services() {
  const services = [
    {
      icon: Camera,
      title: "Wedding Photography",
      description:
        "Stunning high-resolution photos that capture every precious moment of your special day",
      features: [
        "Full Day Coverage",
        "Digital Gallery",
        "Professional Editing",
        "Raw Files Included",
      ],
      gradient: "linear-gradient(to bottom right, #ec4899, #db2777)",
    },
    {
      icon: Video,
      title: "Cinematic Videography",
      description:
        "Beautifully crafted wedding films with aerial drone footage and cinematic storytelling",
      features: [
        "4K Video Quality",
        "Drone Footage",
        "Same-Day Edit",
        "Highlight Reel",
      ],
      gradient: "linear-gradient(to bottom right, #ef4444, #dc2626)",
    },
    {
      icon: Image,
      title: "Pre-Wedding Shoots",
      description:
        "Romantic engagement and pre-wedding photoshoots at stunning locations",
      features: [
        "Location Scouting",
        "Wardrobe Consultation",
        "Multiple Looks",
        "Digital & Print",
      ],
      gradient: "linear-gradient(to bottom right, #db2777, #ef4444)",
    },
    {
      icon: Film,
      title: "Event Coverage",
      description:
        "Complete coverage of all your wedding events from engagement to reception",
      features: [
        "Multi-Day Coverage",
        "Multiple Ceremonies",
        "Cultural Events",
        "Reception Party",
      ],
      gradient: "linear-gradient(to bottom right, #dc2626, #db2777)",
    },
    {
      icon: Users,
      title: "Team Coverage",
      description:
        "Professional team of photographers and videographers for comprehensive coverage",
      features: [
        "Lead Photographer",
        "Second Shooter",
        "Videographer",
        "Assistant Team",
      ],
      gradient: "linear-gradient(to bottom right, #ec4899, #ef4444)",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description:
        "Fast delivery of edited photos and videos so you can relive your moments sooner",
      features: [
        "48hr Sneak Peek",
        "30 Days Gallery",
        "60 Days Video",
        "Express Options",
      ],
      gradient: "linear-gradient(to bottom right, #ef4444, #ec4899)",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 0",
        background: "linear-gradient(to bottom right, white, #fff0f5, white)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "40px",
          left: "40px",
          width: "256px",
          height: "256px",
          backgroundColor: "#fbcfe8",
          borderRadius: "50%",
          filter: "blur(60px)",
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          width: "256px",
          height: "256px",
          backgroundColor: "#fecaca",
          borderRadius: "50%",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 16px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginBottom: "64px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <Camera color="#db2777" size={40} />
            <Video color="#dc2626" size={40} />
          </div>
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#111827",
              marginBottom: "12px",
              fontWeight: 800,
              fontStyle: "italic",
              fontFamily: "Georgia, 'Times New Roman', serif",
              letterSpacing: "0.5px",
            }}
          >
            Our Services
          </h2>
          <p
            style={{
              color: "#4b5563",
              fontSize: "18px",
              maxWidth: "640px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Comprehensive wedding media services tailored to capture your love
            story perfectly.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                style={{
                  position: "relative",
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "16px",
                    paddingLeft: "42px",
                    paddingTop: "12px",
                    paddingRight: "42px",
                    boxShadow:
                      "0 10px 25px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.03)",
                    border: "2px solid #fce7f3",
                    transition: "all 0.3s ease",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border = "2px solid #f9a8d4";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border = "2px solid #fce7f3";
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      width: "64px",
                      height: "64px",
                      background: service.gradient,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
                      position: "relative",
                    }}
                  >
                    <Icon size={32} color="white" />
                    
                    {/* Animated pulse ring */}
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0, 0.4],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      style={{
                        position: "absolute",
                        inset: -8,
                        borderRadius: "50%",
                        background: service.gradient,
                        opacity: 0.4,
                      }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "22px",
                      color: "#111827",
                      marginBottom: "16px",
                      fontWeight: 600,
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      color: "#4b5563",
                      marginBottom: "24px",
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + idx * 0.05,
                        }}
                        style={{
                          color: "#374151",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "8px",
                        }}
                      >
                        <span style={{ color: "#ec4899" }}>✓</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Decorative corner */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "80px",
                      height: "80px",
                      background:
                        "linear-gradient(to bottom right, #fce7f3, transparent)",
                      borderBottomLeftRadius: "9999px",
                      borderTopRightRadius: "16px",
                      opacity: 0.5,
                    }}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}