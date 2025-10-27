import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Heart, Check } from "lucide-react";

export function BookingDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    weddingDate: "",
    venue: "",
    package: "",
    guests: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        weddingDate: "",
        venue: "",
        package: "",
        guests: "",
        message: "",
      });
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.7)",
              backdropFilter: "blur(5px)",
              zIndex: 50,
            }}
          />

          {/* Dialog */}
          <div
            style={{
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 50,
              padding: "1rem",
              pointerEvents: "none",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              style={{
                backgroundColor: "#fff",
                borderRadius: "2rem",
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                maxWidth: "768px",
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                pointerEvents: "auto",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  backgroundColor: "#f3f4f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.3s",
                  zIndex: 10,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e5e7eb")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")}
              >
                <X size={20} />
              </button>

              {!submitted ? (
                <div style={{ padding: "2rem", textAlign: "left" }}>
                  {/* Header */}
                  <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Calendar
                        size={56}
                        fill="currentColor"
                        style={{ color: "#db2777", margin: "0 auto 1rem" }}
                      />
                    </motion.div>
                    <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem", color: "#111827" }}>
                      Book Your Wedding Date
                    </h2>
                    <p style={{ fontSize: "1.125rem", color: "#6b7280" }}>
                      Let's capture your special moments together
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", flexWrap: "wrap" }}>
                      {/* Name & Phone */}
                      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        <div style={{ flex: 1 }}>
                          <label htmlFor="name" style={{ display: "block", fontWeight: 500, marginBottom: "0.5rem" }}>Full Name *</label>
                          <input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            placeholder="John & Jane Doe"
                            style={{
                              width: "100%",
                              padding: "0.5rem 0.2rem",
                              borderRadius: "0.75rem",
                              border: "1px solid #fbb6ce",
                              backgroundColor: "#fdf2f8",
                              outline: "none",
                              transition: "border-color 0.3s",
                            }}
                            onFocus={(e) => (e.currentTarget.style.borderColor = "#db2777")}
                            onBlur={(e) => (e.currentTarget.style.borderColor = "#fbb6ce")}
                          />
                        </div>

                        <div style={{ flex: 1 }}>
                          <label htmlFor="phone" style={{ display: "block", fontWeight: 500, marginBottom: "0.5rem" }}>Phone Number *</label>
                          <input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                            placeholder="(555) 123-4567"
                            style={{
                              width: "100%",
                              padding: "0.5rem 0.2rem",
                              borderRadius: "0.75rem",
                              border: "1px solid #fbb6ce",
                              backgroundColor: "#fdf2f8",
                              outline: "none",
                              transition: "border-color 0.3s",
                            }}
                            onFocus={(e) => (e.currentTarget.style.borderColor = "#db2777")}
                            onBlur={(e) => (e.currentTarget.style.borderColor = "#fbb6ce")}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" style={{ display: "block", fontWeight: 500, marginBottom: "0.5rem" }}>Email Address *</label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          placeholder="couple@example.com"
                          style={{
                            width: "100%",
                            padding: "0.5rem 0.2rem",
                            borderRadius: "0.75rem",
                            border: "1px solid #fbb6ce",
                            backgroundColor: "#fdf2f8",
                            outline: "none",
                            transition: "border-color 0.3s",
                          }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = "#db2777")}
                          onBlur={(e) => (e.currentTarget.style.borderColor = "#fbb6ce")}
                        />
                      </div>

                      {/* Wedding Date & Guests */}
                      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        <div style={{ flex: 1 }}>
                          <label htmlFor="weddingDate" style={{ display: "block", fontWeight: 500, marginBottom: "0.5rem" }}>Wedding Date *</label>
                          <input
                            id="weddingDate"
                            type="date"
                            value={formData.weddingDate}
                            onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                            required
                            style={{
                              width: "100%",
                              padding: "0.5rem 0.2rem",
                              borderRadius: "0.75rem",
                              border: "1px solid #fbb6ce",
                              backgroundColor: "#fdf2f8",
                              outline: "none",
                              transition: "border-color 0.3s",
                            }}
                            onFocus={(e) => (e.currentTarget.style.borderColor = "#db2777")}
                            onBlur={(e) => (e.currentTarget.style.borderColor = "#fbb6ce")}
                          />
                        </div>

                        <div style={{ flex: 1 }}>
                          <label htmlFor="guests" style={{ display: "block", fontWeight: 500, marginBottom: "0.5rem" }}>Number of Guests *</label>
                          <input
                            id="guests"
                            type="number"
                            min="1"
                            value={formData.guests}
                            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                            required
                            placeholder="150"
                            style={{
                              width: "100%",
                              padding: "0.5rem 0.2rem",
                              borderRadius: "0.75rem",
                              border: "1px solid #fbb6ce",
                              backgroundColor: "#fdf2f8",
                              outline: "none",
                              transition: "border-color 0.3s",
                            }}
                            onFocus={(e) => (e.currentTarget.style.borderColor = "#db2777")}
                            onBlur={(e) => (e.currentTarget.style.borderColor = "#fbb6ce")}
                          />
                        </div>
                      </div>

                      {/* Venue */}
                      <div>
                        <label htmlFor="venue" style={{ display: "block", fontWeight: 500, marginBottom: "0.5rem" }}>Wedding Venue</label>
                        <input
                          id="venue"
                          value={formData.venue}
                          onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                          placeholder="Venue name and location"
                          style={{
                            width: "100%",
                            padding: "0.5rem 0.2rem",
                            borderRadius: "0.75rem",
                            border: "1px solid #fbb6ce",
                            backgroundColor: "#fdf2f8",
                            outline: "none",
                            transition: "border-color 0.3s",
                          }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = "#db2777")}
                          onBlur={(e) => (e.currentTarget.style.borderColor = "#fbb6ce")}
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" style={{ display: "block", fontWeight: 500, marginBottom: "0.5rem" }}>Additional Details</label>
                        <textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your wedding vision..."
                          rows={4}
                          style={{
                            width: "100%",
                            padding: "0.5rem 0.2rem",
                            borderRadius: "0.75rem",
                            border: "1px solid #fbb6ce",
                            backgroundColor: "#fdf2f8",
                            outline: "none",
                            resize: "none",
                            transition: "border-color 0.3s",
                          }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = "#db2777")}
                          onBlur={(e) => (e.currentTarget.style.borderColor = "#fbb6ce")}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        background: "linear-gradient(to right, #db2777, #ef4444)",
                        color: "#fff",
                        borderRadius: "1rem",
                        border: "none",
                        fontSize: "1.125rem",
                        cursor: "pointer",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                        transition: "all 0.3s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "linear-gradient(to right, #be185d, #dc2626)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "linear-gradient(to right, #db2777, #ef4444)")}
                    >
                      Submit Booking Request
                    </button>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ padding: "4rem", textAlign: "center" }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    <div
                      style={{
                        width: "6rem",
                        height: "6rem",
                        borderRadius: "50%",
                        background: "linear-gradient(to bottom right, #db2777, #ef4444)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1.5rem",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                      }}
                    >
                      <Check size={48} color="#fff" />
                    </div>
                  </motion.div>
                  <h3 style={{ fontSize: "2rem", color: "#111827", marginBottom: "1rem" }}>Request Submitted!</h3>
                  <p style={{ color: "#6b7280", fontSize: "1.125rem", marginBottom: "1rem" }}>
                    Thank you for choosing us to capture your special day!
                  </p>
                  <div style={{ color: "#9ca3af" }}>
                    We'll review your request and get back to you within 24 hours.
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginTop: "1.5rem" }}>
                    <Heart size={24} style={{ color: "#db2777" }} />
                    <span style={{ color: "#f472b6" }}>We can't wait to work with you!</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
