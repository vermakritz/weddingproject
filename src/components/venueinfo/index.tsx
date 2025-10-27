import { motion } from "framer-motion";
import { MapPin, Hotel, Plane, Car } from "lucide-react";

export function VenueInfo() {
  const infoCards = [
    {
      icon: MapPin,
      title: "Venue",
      details: [
        "Sunset Gardens",
        "123 Paradise Lane",
        "Malibu, CA 90265",
      ],
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Hotel,
      title: "Accommodation",
      details: [
        "The Grand Hotel",
        "Special rates for guests",
        "Code: SARAHJAMES2025",
      ],
      color: "from-red-500 to-red-600",
    },
    {
      icon: Plane,
      title: "Airport",
      details: [
        "LAX International",
        "45 minutes from venue",
        "Shuttle service available",
      ],
      color: "from-pink-600 to-red-500",
    },
    {
      icon: Car,
      title: "Parking",
      details: [
        "Free valet parking",
        "Self-parking available",
        "Accessible parking spots",
      ],
      color: "from-red-600 to-pink-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-pink-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-red-300 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <MapPin className="text-pink-600 mx-auto mb-4" size={48} />
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Venue & Travel
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know to join us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {infoCards.map((card, index) => {
            const Icon = card.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-pink-100 hover:border-pink-300 transition-all duration-300 h-full">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-full flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon size={32} className="text-white" />
                  </motion.div>

                  <h3 className="text-2xl text-gray-900 mb-4">{card.title}</h3>

                  <ul className="space-y-2">
                    {card.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-pink-100 to-transparent rounded-tr-full rounded-bl-2xl opacity-50"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-pink-200"
        >
          <div className="aspect-video bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="text-pink-600 mx-auto mb-4" size={64} />
              <h3 className="text-2xl text-gray-900 mb-2">Sunset Gardens</h3>
              <p className="text-gray-600 mb-4">123 Paradise Lane, Malibu, CA 90265</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-pink-600 to-red-600 text-white px-8 py-3 rounded-full hover:from-pink-700 hover:to-red-700 transition-all shadow-lg"
              >
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
