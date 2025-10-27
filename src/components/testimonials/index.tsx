import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Darshita Singh",
      // date: "June 2024",
      rating: 5,
      text: "It was really wonderful experience. Everything was on point. They listened to our suggestions also and were polite and friendly as well as professional in their work too. Picture were awesome. It was economical while maintaining high quality. The shoot also wrapped up in time and overall it was 10 on 10.😊👍👍👍. We highly recommend them without a doubt.",
      image: "https://images.unsplash.com/photo-1596026339984-e16bfa013cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcm9tYW50aWN8ZW58MXx8fHwxNzYxMTEzNDg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Mahender Singh",
      // date: "September 2024",
      rating: 5,
      text: "good photograph is knowing where to stand.” – “You don't take a photograph, you make it.” – “Photography is more than a medium for factual communication of ideas. It is a creative art.” Mahadev Studio is place where you can make your moment of life for life tim",
      image: "https://images.unsplash.com/photo-1714972383570-44ddc9738355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwZGFuY2luZ3xlbnwxfHx8fDE3NjExMTUyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Sughandha Bharti",
      // date: "November 2024",
      rating: 5,
      text: "They understood our cultural traditions and captured them beautifully. The attention to detail was incredible. Our families are still raving about the photos!",
      image: "https://images.unsplash.com/photo-1677677402907-05f2883e3f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwb3V0ZG9vciUyMGNlcmVtb255fGVufDF8fHx8MTc2MTExNTI2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Anmol Kappor",
      // date: "August 2024",
      rating: 5,
      text: "Mahadev studio provide best service and stunning photos.. owner is very supportive and humble. Provide high quality images with reasonable price.",
      image: "https://images.unsplash.com/photo-1652360136442-944207f66c29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBicmlkZXxlbnwxfHx8fDE3NjEwNzEzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Amanda & Chris",
      // date: "December 2024",
      rating: 5,
      text: "Faster and excellent service.😊😊😊😊 20 photo mugs delivered on time.excellent work.👌",
      image: "https://images.unsplash.com/photo-1674924258890-f4a5d99bb28c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBlbGVnYW50fGVufDF8fHx8MTc2MTEwODU2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Jessica & Ryan",
      // date: "October 2024",
      rating: 5,
      text: "The highlight video brought us to tears - they told our story so beautifully. Professional, talented, and genuinely caring. 10/10 would recommend!",
      image: "https://images.unsplash.com/photo-1639520722708-bb1a6acabc48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmxvd2VycyUyMHBpbmt8ZW58MXx8fHwxNzYxMTE0ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section
      style={{
        padding: "5rem 0",
        backgroundColor: "#000",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background */}
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage: `linear-gradient(45deg, #ec4899 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626),
                            linear-gradient(45deg, #ec4899 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626)`,
          backgroundSize: "60px 60px",
          backgroundPosition: "0 0, 30px 30px",
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <Star size={48} fill="#ec4899" style={{ margin: "0 auto 1rem", display: "block" }} />
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Happy Couples</h2>
          <p style={{ fontSize: "1.125rem", color: "#fbcfe8", maxWidth: "32rem", margin: "0 auto" }}>
            Don't just take our word for it - hear from our amazing clients
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              style={{ position: "relative" }}
            >
              <div
                style={{
                  background: "linear-gradient(to bottom right, #111, #000)",
                  paddingLeft: "1.5rem",  
                  paddingTop: "0.5rem",  
                  paddingRight: "1.5rem",  
             
                  borderRadius: "1rem",
                  border: "2px solid rgba(236, 72, 153,0.3)",
                  transition: "all 0.3s",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <Quote size={32} style={{ color: "#ec4899", opacity: 0.5, marginBottom: "1rem" }} />

                {/* Rating */}
                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#facc15" />
                  ))}
                </div>

                <p style={{ color: "#d1d5db", fontStyle: "italic", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  "{t.text}"
                </p>

                <div style={{ paddingTop: "1.5rem", borderTop: "1px solid #1f2937" }}>
                  <p style={{ color: "#fff", marginBottom: "0.25rem" }}>{t.name}</p>
                  
                </div>

                {/* Decorative corner */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "4rem",
                    height: "4rem",
                    background: "linear-gradient(to bottom right, rgba(236,72,153,0.2), transparent)",
                    borderBottomLeftRadius: "50%",
                    borderTopRightRadius: "0.5rem",
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: "4rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {[
            { number: "500+", label: "Weddings Captured" },
            { number: "50K+", label: "Photos Delivered" },
            { number: "5-Star", label: "Average Rating" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  background: "linear-gradient(to right, #f472b6, #ef4444)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  marginBottom: "0.5rem",
                }}
              >
                {stat.number}
              </div>
              <div style={{ color: "#9ca3af" }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
