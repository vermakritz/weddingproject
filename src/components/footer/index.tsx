import { motion } from "framer-motion";
import { Camera, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/mahadev_studio_photography?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/saurabsaxena905", label: "Facebook" },
    { icon: Mail, href: "mailto:mahadevstudio864@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Packages", href: "#packages" },
    { label: "About Us", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0a0a0a, #111827)",
        color: "#f9fafb",
        padding: "4rem 1rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top Gradient Bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "4px",
          background: "linear-gradient(to right, #db2777, #ef4444, #db2777)",
        }}
      ></div>

      {/* Animated Subtle Background */}
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage: "radial-gradient(circle, #ec4899 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        {/* Top Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
          }}
        >
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Camera size={32} style={{ color: "#db2777" }} />
              <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                Mahadev <span style={{ color: "#f472b6" }}>Studio</span>
              </span>
            </div>
            <p style={{ color: "#9ca3af", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              Professional wedding photography and videography services,
              capturing your forever moments with passion and creativity.
            </p>

            <div style={{ display: "flex", gap: "1rem" }}>
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(to bottom right, #db2777, #ef4444)",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                      cursor: "pointer",
                    }}
                  >
                    <Icon size={18} color="#fff" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", fontWeight: "600" }}>Quick Links</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    style={{
                      color: "#9ca3af",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f472b6")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", fontWeight: "600" }}>Contact Us</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li style={{ display: "flex", gap: "0.5rem", color: "#9ca3af" }}>
                <Phone size={20} style={{ color: "#f472b6", flexShrink: 0 }} />
                <div>
                  <div>+91-8449004613</div>
                  <div style={{ fontSize: "0.875rem" }}>Mon-Sat: 9AM - 6PM</div>
                </div>
              </li>
              <li style={{ display: "flex", gap: "0.5rem", color: "#9ca3af" }}>
                <Mail size={20} style={{ color: "#f472b6", flexShrink: 0 }} />
                <div>mahadevstudio864@gmail.com</div>
              </li>
              <li style={{ display: "flex", gap: "0.5rem", color: "#9ca3af" }}>
                <MapPin size={20} style={{ color: "#f472b6", flexShrink: 0 }} />
                <div>
                  <div>Mata Vaishno Enclave, Bareilly - Nainital Rd, opp. Kudesia Underpass,</div>
                  <div>Izatnagar, Bareilly, Uttar Pradesh 243122</div>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", fontWeight: "600" }}>Stay Updated</h3>
            <p style={{ color: "#9ca3af", marginBottom: "1rem" }}>
              Subscribe to our newsletter for wedding tips and exclusive offers.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  backgroundColor: "#1f2937",
                  border: "1px solid #374151",
                  borderRadius: "0.5rem",
                  padding: "0.75rem 1rem",
                  color: "#fff",
                  outline: "none",
                  transition: "border-color 0.3s",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#db2777")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#374151")}
              />
              <button
                style={{
                  background: "linear-gradient(to right, #db2777, #ef4444)",
                  color: "#fff",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "linear-gradient(to right, #be185d, #dc2626)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "linear-gradient(to right, #db2777, #ef4444)")}
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(to right, transparent, #374151, transparent)",
          }}
        ></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            textAlign: "center",
            color: "#9ca3af",
            fontSize: "0.875rem",
          }}
        >
          <div>© 2025 Mahadev . All rights reserved.</div>
          <div style={{ marginTop: "0.75rem", display: "flex", justifyContent: "center", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((text, idx) => (
              <a
                key={idx}
                href="#"
                style={{ color: "#9ca3af", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f472b6")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
              >
                {text}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
