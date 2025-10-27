import { motion } from "framer-motion";
import { Heart, Award, Users, Camera, CheckCircle, Video, Globe } from "lucide-react";
import { ImageWithFallback } from "../figma/imagewithfallback";

export function About() {
  const values = [
    {
      icon: Camera,
      title: "Artistic Storytelling",
      description: "We capture emotions, traditions, and moments that define your love story through a creative lens.",
    },
    {
      icon: CheckCircle,
      title: "Seamless Experience",
      description: "Using premium cameras, lenses, and lighting, we deliver crystal-clear quality in every shot and frame.",
    },
    {
      icon: Video,
      title: "High-End Equipment",
      description: "Your vision and comfort are our top priorities",
    },
    {
      icon: Globe,
      title: "Pan-India Availability",
      description: "Whether it’s a destination wedding or a hometown ceremony, we cover events across India with dedication and style.",
    },
  ];

  return (
    <section
      style={{
        padding: "5rem 0",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(to bottom right, #fff, #fdf2f8, #fff)",
      }}
    >
      {/* Decorative Blobs */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "24rem",
          height: "24rem",
          backgroundColor: "#fbcfe8",
          borderRadius: "50%",
          filter: "blur(6rem)",
          opacity: 0.2,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "24rem",
          height: "24rem",
          backgroundColor: "#fecaca",
          borderRadius: "50%",
          filter: "blur(6rem)",
          opacity: 0.2,
        }}
      />

      {/* Main Container */}
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 1rem",
          position: "relative",
          zIndex: 10,
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "4rem",
        }}
      >
        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            alignItems: "center",
            gap: "4rem",
          }}
        >
          {/* Left Section - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                borderRadius: "2rem",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                position: "relative",
              }}
            >
             <img
                       src="/images /SAN03416.JPG"
                       alt="Professional Wedding Photographer"
                       style={{
                       width: "100%",
                      height: "900px",
                     display: "block",
                     borderRadius: "2rem",
                          objectFit: "cover",}}
                              />


              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                }}
              />

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                style={{
                  position: "absolute",
                  bottom: "2rem",
                  left: "2rem",
                  backgroundColor: "#fff",
                  borderRadius: "1rem",
                  padding: "1rem 1.5rem",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: "bold",
                    background: "linear-gradient(to right, #ec4899, #ef4444)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    marginBottom: "0.25rem",
                  }}
                >
                  10+ Years
                </div>
                <div style={{ color: "#4b5563" }}>Experience</div>
              </motion.div>
            </div>

            {/* Glow Decorations */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                top: "-1.5rem",
                right: "-1.5rem",
                width: "6rem",
                height: "6rem",
                borderRadius: "50%",
                background: "linear-gradient(to bottom right, #f472b6, #ef4444)",
                filter: "blur(2rem)",
                opacity: 0.6,
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                bottom: "-1.5rem",
                left: "-1.5rem",
                width: "8rem",
                height: "8rem",
                borderRadius: "50%",
                background: "linear-gradient(to bottom right, #ef4444, #f472b6)",
                filter: "blur(2rem)",
                opacity: 0.6,
              }}
            />
          </motion.div>

          {/* Right Section - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
          
            <h2
              style={{
                fontSize: "2.5rem",
                marginBottom: "1.5rem",
                color: "#111827",
                fontWeight: 700,
              }}
            >
            <Heart size={48} style={{ color: "#db2777"}} />
  
              About Our Studio
              <Heart size={48} style={{ color: "#db2777", marginLeft: "10px"}} />
            </h2>

            <div
  style={{
    marginBottom: "2rem",
    color: "#4b5563",
    fontSize: "1.125rem",
    lineHeight: 1.8,
  }}
>
  <div style={{ marginBottom: "1rem", textAlign: "justify" }}>
    At{" "}
    <span
  style={{
    color: "purple",
    fontWeight: "600",
  }}
>
  <i>Mahadev Studio</i>
</span>

    , we specialize in turning your most cherished moments into timeless{" "}
    <span
  style={{
    color: "#FF4400",
    fontWeight: "600",
  }}
>
  <i> memories</i>
  </span>
    . From vibrant pre-wedding rituals to the grandeur of your{" "}
    <span
      style={{
        color: "orange",
        fontWeight: "600",
      }}
    >
      wedding day
    </span>
    , our team beautifully blends{" "}
    <span
      style={{   color: "purple",
        fontWeight: "600", }}
     
    >
      artistry
    </span>
    ,{" "}
    <span
      style={{   color: "#FF2E51",
        fontWeight: "600", }}
      
    >
      emotion
    </span>{" "}
    and{" "}
    <span
      style={{   color: "#750014",
        fontWeight: "600", }}
     
    >
      storytelling
    </span>{" "}
    in every shot.
  </div>

  <div
    style={{
      fontWeight: "600",
      color: "#111827",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      marginBottom: "0.8rem",
      textAlign: "center",
    }}
  >
   <i>EVENT COVERAGE INCLUDES </i> 
  </div>

  <div style={{ marginBottom: "0.5rem", textAlign: "center" }}>
    <span
      style={{ fontWeight: "600", color: "#FF4400" }}
      
    >
      Small Events:
    </span>{" "}
    Haldi | Mehndi | Tilak | Engagement
  </div>

  <div style={{ textAlign: "center" }}>
    <span
      style={{ fontWeight: "600", color: "#FF4400" }}
      
    >
      Big Events:
    </span>{" "}
    Wedding | Pre-Wedding | Sangeet
  </div>
</div>


            {/* Values Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      backgroundColor: "#fff",
                      padding: "1.5rem",
                      borderRadius: "1rem",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                      border: "2px solid #fce7f3",
                      transition: "all 0.3s",
                    }}
                  >
                    <div
                      style={{
                        width: "3rem",
                        height: "3rem",
                        background:
                          "linear-gradient(to bottom right, #ec4899, #ef4444)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      <Icon size={24} style={{ color: "#fff" }} />
                    </div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        marginBottom: "0.5rem",
                        color: "#111827",
                      }}
                    >
                      {value.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
