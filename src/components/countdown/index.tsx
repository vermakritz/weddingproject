import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

export function Countdown() {
  const weddingDate = new Date("2025-06-15T16:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="text-pink-600" size={32} />
            <Clock className="text-red-600" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Counting Down to Forever
          </h2>
          <p className="text-gray-600 text-lg">
            Join us as we celebrate our love story
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-pink-200 relative overflow-hidden group">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                
                <div className="relative z-10">
                  <motion.div
                    key={unit.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl md:text-6xl mb-2 bg-gradient-to-br from-pink-600 to-red-600 bg-clip-text text-transparent group-hover:text-white transition-colors"
                  >
                    {String(unit.value).padStart(2, "0")}
                  </motion.div>
                  <div className="text-gray-600 uppercase tracking-wider group-hover:text-pink-100 transition-colors">
                    {unit.label}
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-pink-100 rounded-bl-full opacity-50"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
