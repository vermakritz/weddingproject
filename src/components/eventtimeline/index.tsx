import { motion } from "framer-motion";
import { Clock, Music, UtensilsCrossed, Cake, PartyPopper } from "lucide-react";

export function EventTimeline() {
  const events = [
    {
      time: "3:00 PM",
      title: "Guest Arrival",
      description: "Welcome drinks and canapés",
      icon: Clock,
      color: "from-pink-500 to-pink-600",
    },
    {
      time: "4:00 PM",
      title: "Ceremony",
      description: "Exchange of vows at the garden",
      icon: PartyPopper,
      color: "from-red-500 to-red-600",
    },
    {
      time: "5:00 PM",
      title: "Cocktail Hour",
      description: "Celebrate with champagne",
      icon: UtensilsCrossed,
      color: "from-pink-600 to-red-500",
    },
    {
      time: "6:30 PM",
      title: "Reception Dinner",
      description: "Gourmet dinner and toasts",
      icon: UtensilsCrossed,
      color: "from-red-500 to-pink-500",
    },
    {
      time: "8:00 PM",
      title: "Cake Cutting",
      description: "Sweet moments to share",
      icon: Cake,
      color: "from-pink-500 to-pink-600",
    },
    {
      time: "9:00 PM",
      title: "Dance Party",
      description: "Let's celebrate all night!",
      icon: Music,
      color: "from-red-600 to-pink-600",
    },
  ];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: `linear-gradient(45deg, #ec4899 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626), 
                           linear-gradient(45deg, #ec4899 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626)`,
          backgroundSize: "60px 60px",
          backgroundPosition: "0 0, 30px 30px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Clock className="text-pink-500 mx-auto mb-4" size={48} />
          <h2 className="text-4xl md:text-5xl mb-4">Wedding Day Timeline</h2>
          <p className="text-pink-300 text-lg max-w-2xl mx-auto">
            Here's what to expect on our special day
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => {
            const Icon = event.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border-2 border-pink-500/30 shadow-xl hover:border-pink-500 transition-all duration-300 h-full">
                  {/* Icon with gradient background */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon size={32} className="text-white" />
                  </motion.div>

                  {/* Time */}
                  <div className="text-pink-400 text-xl mb-2">{event.time}</div>

                  {/* Title */}
                  <h3 className="text-2xl mb-3">{event.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400">{event.description}</p>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-transparent rounded-bl-full rounded-tr-2xl"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
