import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

interface PackagesProps {
  onBookingClick: () => void;
}

export function Packages({ onBookingClick }: PackagesProps) {
  const packages = [
    {
      name: "Silver",
      price: "Rs.85,000",
      // duration: "6 Hours",
      description: "Reagular and premium wedding package included.",
      features: [
        " Coverage of 2 Small Events + Wedding Day",
        "Traditional Photography + Traditional Videography",

       "Candid Photography",
        "Couple Portraits (15 Edited Images)",
        "Bridal & Groom Photos (Venue + Parlour)",
    
        "Traditional Video (Full Function Length)" , 
        "Cinematic Wedding Video",
        "3–5 Minute Highlight Trailer (Event Mix)",

        "All RAW Photos & Videos",
        
        "200 Edited Photos (Selected for Album)",
        "Album (Hard Copy) – 12x18 inch",
        "30 Sheets",
        "Matte / Gloss / Sparkle Finish Options",
         "Lustre or Metallic Paper",
      ],
      color: ["#ec4899", "#db2777"],
      popular: false,
    },
    {
      name: "Gold",
      price: "Rs.1,25,000",
      // duration: "Full Wedding Coverage",
      description: "Reagular and premium wedding package included.",
      features: [
        " Coverage of 2 Small Events, 1 Big Event + Wedding Day",
       
        "Traditional & Candid Photography",
        "Groom & Bridal Photos (On Venue)",
       " Couple Portraits (30 Edited Images)",
    
        "Videography:",
        "Traditional & Cinematic Videography",
        "Full-Length Traditional Videos (Per Function)",
        "5-Minute Highlight Trailer (Big Event + Wedding Only)",
        
       "Deliverables:",
       " All RAW Photos & Videos",
        "250 Edited Photos (Selected for Album)",
        "Premium Album (Hard Copy) – 12x18 inch, 35 Sheets",
        "Finish Options: Matte / Gloss",
         "Paper Options: NT Metallic / Lustre",
      
      ],
      color: ["#ef4444", "#ec4899"],
      popular: true,
    }
    ,    
    {
      name: "Platinum",
      price: "Rs.1,65,0000",
      // duration: "Multi-Day",
      description: "Regular and premium wedding package included.",
      features: [
        "Coverage of 2 Small Events, 1 Big Event, and Wedding Day",
        "Traditional & Candid Photography",
        "Groom & Bridal Photos (On Venue)",
        "Couple Portraits (30 Edited Images)",

        "Videography:",
       "Traditional & Cinematic Videography",
         "Full-Length Traditional Videos (Per Function)",
         "5-Minute Highlight Trailer (Big Event + Wedding Only)",

       "Deliverables:",

         "All RAW Photos & Videos",
         
         "250 Edited Photos (Selected for Album)",
         
         "Premium Album (Hard Copy) – 12×18 inch, 35 Sheets",
         
         "Finish & Paper Options: Matte / Gloss / NT Metallic / Lustre",
      ],
      color: ["#db2777", "#ef4444"],
      popular: false,
    },
  ];

  return (
    <section
      style={{
        padding: "5rem 0",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(to bottom right, #fdf2f8, #fff, #fdf2f8)",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "5rem",
          left: "2.5rem",
          width: "16rem",
          height: "16rem",
          backgroundColor: "#f9a8d4",
          borderRadius: "50%",
          filter: "blur(6rem)",
          opacity: 0.2,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5rem",
          right: "2.5rem",
          width: "16rem",
          height: "16rem",
          backgroundColor: "#f87171",
          borderRadius: "50%",
          filter: "blur(6rem)",
          opacity: 0.2,
        }}
      />

      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 1rem", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <Star size={48} fill="#db2777" style={{ margin: "0 auto 1rem", color: "#db2777" }} />
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#111827" }}>Wedding Packages</h2>
          <p style={{ fontSize: "1.125rem", maxWidth: "32rem", margin: "0 auto", color: "#4b5563" }}>
            Choose the perfect package for your special day
          </p>
        </motion.div>

        {/* Package Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.06, y: -19 }}
              style={{ position: "relative" }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  style={{
                    position: "absolute",
                    top: "-1rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 10,
                  }}
                >
                  <div
                    style={{
                      background: "linear-gradient(to right, #ec4899, #ef4444)",
                      color: "#fff",
                      padding: "0.5rem 1.5rem",
                      borderRadius: "9999px",
                      boxShadow: "0 10px 15px rgba(0,0,0,0.2)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Star size={16} fill="#fff" />
                    <span>Most Popular</span>
                  </div>
                </motion.div>
              )}

              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "2rem",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  overflow: "hidden",
                  border: pkg.popular ? "4px solid #f9a8d4" : "2px solid #fce7f3",
                  height: "100%",
                }}
              >
                {/* Header */}
                <div
                  style={{
                    background: `linear-gradient(to bottom right, ${pkg.color[0]}, ${pkg.color[1]})`,
                    padding: "2rem",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  <h3 style={{ fontSize: "1.875rem", marginBottom: "0.5rem" }}>{pkg.name}</h3>
                  <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>{pkg.price}</div>
                  {/* <p style={{ color: "#fbcfe8" }}>{pkg.duration}</p> */}
                </div>

                {/* Content */}
                <div style={{ padding: "2rem" }}>
                  <p style={{ textAlign: "center", marginBottom: "2rem", fontSize: "1.125rem", color: "#4b5563" }}>
                    {pkg.description}
                  </p>

                  <ul style={{ marginBottom: "2rem", padding: 0, listStyle: "none" }}>
                    {pkg.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + idx * 0.05 }}
                        style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "1rem" }}
                      >
                        <div
                          style={{
                            width: "1.5rem",
                            height: "1.5rem",
                            background: `linear-gradient(to bottom right, #ec4899, #ef4444)`,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: "0.125rem",
                          }}
                        >
                          <Check size={14} style={{ color: "#fff" }} />
                        </div>
                        <span style={{ color: "#374151" }}>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <button
                     onClick={() => {
                      window.open("https://docs.google.com/forms/d/e/1FAIpQLScF7TP6y4nytPfCL-boOCnOOE__3qJ8Trmp0wg26iL66xt4Ww/viewform?usp=publish-editor");
                    }}
                    style={{
                      width: "100%",
                      padding: "1.5rem",
                      fontSize: "1.125rem",
                      color: "#fff",
                      background: pkg.popular
                        ? "linear-gradient(to right, #ec4899, #ef4444)"
                        : "#111827",
                      border: "none",
                      borderRadius: "1rem",
                      cursor: "pointer",
                      boxShadow: "0 10px 15px rgba(0,0,0,0.2)",
                      transition: "all 0.3s",
                    }}
                  >
                    Book This Package
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: "4rem",
            textAlign: "center",
            backgroundColor: "#fff",
            borderRadius: "1rem",
            padding: "2rem",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            border: "2px solid #fbcfe8",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#111827" }}>
            Custom Add-ons Available
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", color: "#4b5563" }}>
            {["Photo Booth", "Additional Hours", "Extra Albums", "Canvas Prints", "Livestreaming"].map((addon, i) => (
              <span
                key={i}
                style={{
                  backgroundColor: "#fbcfe8",
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                }}
              >
                {addon}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
