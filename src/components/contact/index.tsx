import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

interface ContactProps {
  onBookingClick: () => void;
}

export function Contact({ onBookingClick }: ContactProps) {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+918009582467", "Mon-Sat: 9AM - 6PM"],
      color: "linear-gradient(to bottom right, #ec4899, #db2777)",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["mahadevstudio864@gmail.com", "saurabhsaxena905@gmail.com"],
      color: "linear-gradient(to bottom right, #ef4444, #dc2626)",
    },
    {
      icon: MapPin,
      title: "Studio Location",
      details: ["Mata Vaishno Enclave, Bareilly - Nainital Rd, opp. Kudesia Underpass, Izatnagar, Bareilly, Uttar Pradesh 243122"],
      color: "linear-gradient(to bottom right, #db2777, #ef4444)",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Saturday", "9:00 AM - 6:00 PM"],
      color: "linear-gradient(to bottom right, #dc2626, #db2777)",
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/mahadev_studio_photography?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D", label: "Instagram", followers: "50K+" },
    { icon: Facebook, href: "https://www.facebook.com/saurabsaxena905", label: "Facebook", followers: "25K+" },
  ];

  return (
    <section
      style={{
        padding: "5rem 1rem",
        background: "linear-gradient(135deg, #fce7f3, #fff, #fce7f3)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Blobs */}
      <div
        style={{
          position: "absolute",
          top: "5rem",
          right: "2.5rem",
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
          left: "2.5rem",
          width: "16rem",
          height: "16rem",
          backgroundColor: "#f87171",
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
          <Mail
            size={48}
            style={{
              color: "#db2777",
              display: "block",
              margin: "0 auto 1rem",
            }}
          />
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#111827",
              marginBottom: "1rem",
            }}
          >
            Get in Touch
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#4b5563",
              maxWidth: "32rem",
              margin: "0 auto",
            }}
          >
            Ready to book your wedding date? We'd love to hear from you!
          </p>
        </motion.div>

        {/* ✅ Responsive Grid (Fix) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
          >
            {/* Two-column layout only for larger screens */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                gap: "3rem",
                alignItems: "flex-start",
              }}
            >
              {/* Left Column - Contact Info */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: "1rem",
                        padding: "1.5rem",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                        border: "2px solid #fbcfe8",
                        display: "flex",
                        gap: "1rem",
                        transition: "all 0.3s",
                      }}
                    >
                      <div
                        style={{
                          width: "3.5rem",
                          height: "3.5rem",
                          background: info.color,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 5px 10px rgba(0,0,0,0.15)",
                        }}
                      >
                        <Icon size={28} color="#fff" />
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: "1.25rem",
                            color: "#111827",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {info.title}
                        </h3>
                        {info.details.map((d, idx) => (
                          <p key={idx} style={{ color: "#4b5563", margin: "0.25rem 0" }}>
                            {d}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right Column - CTA + Social */}
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {/* Booking CTA */}
                <div
                  style={{
                    background: "linear-gradient(to bottom right, #db2777, #ef4444)",
                    borderRadius: "2rem",
                    padding: "2.5rem",
                    color: "#fff",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  }}
                >
                  <motion.div
                    animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: 0.1,
                      backgroundImage:
                        "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <div style={{ position: "relative", zIndex: 10 }}>
                    <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                      Ready to Book?
                    </h3>
                    <p
                      style={{
                        fontSize: "1.125rem",
                        marginBottom: "2rem",
                        color: "#fbcfe8",
                      }}
                    >
                      Let's discuss your wedding photography and videography
                      needs. Schedule a free consultation with our team today!
                    </p>
                    <button
                      onClick={onBookingClick}
                      style={{
                        backgroundColor: "#fff",
                        color: "#db2777",
                        padding: "1.25rem 2rem",
                        borderRadius: "1rem",
                        fontSize: "1.125rem",
                        fontWeight: 600,
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                        width: "100%",
                      }}
                    >
                      Book Free Consultation
                    </button>
                  </div>
                </div>

                {/* Social Media Card */}
                <div
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "2rem",
                    padding: "2rem",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    border: "2px solid #fbcfe8",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      marginBottom: "1.5rem",
                      color: "#111827",
                    }}
                  >
                    Follow Our Work
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={index}
                          href={social.href}
                          whileHover={{ scale: 1.05 }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            background:
                              "linear-gradient(to right, #fdf2f8, #fee2e2)",
                            padding: "1rem",
                            borderRadius: "1rem",
                            textDecoration: "none",
                            border: "2px solid transparent",
                          }}
                        >
                          <div
                            style={{
                              width: "3rem",
                              height: "3rem",
                              background:
                                "linear-gradient(to bottom right, #db2777, #ef4444)",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Icon size={24} color="#fff" />
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ color: "#111827" }}>
                              {social.label}
                            </div>
                            <div
                              style={{
                                color: "#6b7280",
                                fontSize: "0.875rem",
                              }}
                            >
                              {social.followers} followers
                            </div>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        {/* Map Section */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  style={{
    background: "linear-gradient(180deg, #fde7f3 0%, #fce7f3 100%)",
    borderRadius: "2rem",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    marginTop: "4rem",
    padding: "4rem 1rem",
    position: "relative",
    textAlign: "center",
  }}
>
  {/* Subtle floating hearts (optional decorative icons) */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage:
        "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2210%22 height=%2210%22><text y=%229%22 font-size=%2210%22 fill=%22%23f9a8d4%22>❤</text></svg>')",
      backgroundRepeat: "repeat",
      backgroundSize: "50px",
      opacity: 0.07,
    }}
  />

  {/* Location Pin */}
  <MapPin
    size={64}
    style={{
      color: "#db2777",
      marginBottom: "1rem",
      position: "relative",
      zIndex: 2,
    }}
  />

  {/* Title */}
  <h3
    style={{
      fontSize: "1.75rem",
      color: "#111827",
      fontWeight: 600,
      marginBottom: "0.5rem",
      position: "relative",
      zIndex: 2,
    }}
  >
    Visit Our Studio
  </h3>

  {/* Address */}
  <p
    style={{
      color: "#374151",
      fontSize: "1rem",
      marginBottom: "1.5rem",
      position: "relative",
      zIndex: 2,
    }}
  >
    Mata Vaishno Enclave, Bareilly - Nainital Rd, opp. Kudesia Underpass, Izatnagar, Bareilly, Uttar Pradesh 243122
  </p>

  {/* CTA Button */}
  <motion.a
    href="https://www.google.com/maps/place/Mahadev+Studio./@28.380046,79.415339,19z/data=!4m6!3m5!1s0x39a007231c56870d:0x1cf8d86a70000000!8m2!3d28.3823914!4d79.4169376!16s%2Fg%2F11p6slsnz_?hl=en&entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    style={{
      display: "inline-block",
      background: "linear-gradient(to right, #db2777, #ef4444)",
      color: "#fff",
      padding: "0.9rem 2.5rem",
      borderRadius: "9999px",
      textDecoration: "none",
      fontWeight: 600,
      fontSize: "1rem",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      position: "relative",
      zIndex: 2,
    }}
  >
    Get Directions
  </motion.a>
</motion.div>

      </div>
    </section>
  );
}
