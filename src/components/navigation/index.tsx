import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Menu, X } from "lucide-react";

interface NavigationProps {
  onBookingClick: () => void;
}

export function Navigation({ onBookingClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Packages", href: "#packages" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        // className="border-2 border-black"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          transition: "all 0.3s",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "none",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          boxShadow: isScrolled ? "0 4px 10px rgba(0,0,0,0.1)" : "none",
          padding: "1rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <motion.a
  href="#"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    textDecoration: "none",
  }}
  whileHover={{ scale: 1.05 }}
>
  <img
    src="/images /web_logo.png"
    alt="Mahadev Studio Logo"
    style={{
      width: "45px",
      height: "45px",
      objectFit: "contain",
    }}
  />
  <span
    style={{
      fontSize: "1.25rem",
      color: isScrolled ? "#111827" : "#111827",
      transition: "color 0.3s",
    }}
  >
   <i> Mahadev <span style={{ color: "#db2777" }}>Studio</span></i>
  </span>
</motion.a>


          {/* Desktop Navigation */}
          {isDesktop && (
            <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  style={{
                    color: isScrolled ? "#374151" : "#000000",
                    textDecoration: "none",
                    transition: "color 0.3s",
                    fontSize: "1rem",
                  }}
                  whileHover={{ y: -2, color: "#db2777" }}
                >
                  {item.label}
                </motion.a>
              ))}

              {/* Book Now Button */}
              <button
                onClick={onBookingClick}
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  fontWeight: 500,
                  cursor: "pointer",
                  marginLeft: "1rem",
                  color: "#fff",
                  background: "linear-gradient(to right, #db2777, #ef4444)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Book Now
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          {!isDesktop && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                padding: "0.5rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: isScrolled ? "#111827" : "#000000",
              }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && !isDesktop && (
          <>
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "16rem",
                backgroundColor: "#fff",
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                zIndex: 50,
                padding: "1.5rem",
              }}
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  padding: "0.5rem",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                <X size={24} />
              </button>

              <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    style={{ color: "#111827", fontSize: "1.125rem", textDecoration: "none" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ color: "#db2777" }}
                  >
                    {item.label}
                  </motion.a>
                ))}

                <button
                  onClick={() => {
                    onBookingClick();
                    setIsMobileMenuOpen(false);
                  }}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "0.5rem",
                    background: "linear-gradient(to right, #db2777, #ef4444)",
                    color: "#fff",
                    fontWeight: 500,
                    border: "none",
                    cursor: "pointer",
                    marginTop: "1.5rem",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  Book Now
                </button>
              </div>
            </motion.div>

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 40,
              }}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
