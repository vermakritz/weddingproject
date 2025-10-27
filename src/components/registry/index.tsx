import { motion } from "framer-motion";
import { Gift, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";

export function Registry() {
  const registries = [
    {
      name: "Amazon",
      description: "Home essentials and more",
      url: "#",
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "Target",
      description: "Kitchen and dining",
      url: "#",
      color: "from-red-500 to-red-600",
    },
    {
      name: "Honeymoon Fund",
      description: "Help us create memories",
      url: "#",
      color: "from-pink-600 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pink-500 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Gift className="text-pink-500 mx-auto mb-4" size={48} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-4">Gift Registry</h2>
          <p className="text-pink-300 text-lg max-w-2xl mx-auto">
            Your presence is the greatest gift, but if you wish to honor us with a gift, we've registered at the following
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {registries.map((registry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <a
                href={registry.url}
                className="block bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border-2 border-pink-500/30 hover:border-pink-500 transition-all duration-300 shadow-xl group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${registry.color} rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform`}>
                  <ExternalLink size={28} className="text-white" />
                </div>
                <h3 className="text-2xl mb-2 text-center">{registry.name}</h3>
                <p className="text-gray-400 text-center">{registry.description}</p>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gradient-to-br from-pink-900/30 to-red-900/30 p-8 rounded-2xl border border-pink-500/30 backdrop-blur-sm"
        >
          <p className="text-pink-200 text-lg mb-6">
            We are truly grateful for your love and support. The best gift you could give us is your presence at our wedding!
          </p>
          <div className="flex items-center justify-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ❤️
            </motion.div>
            <span className="text-pink-300">With love, Sarah & James</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
            >
              ❤️
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
