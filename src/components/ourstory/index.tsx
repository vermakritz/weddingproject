import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";

export function OurStory() {
  const milestones = [
    {
      year: "2018",
      title: "First Met",
      description: "Our paths crossed at a coffee shop on a rainy Sunday morning. Little did we know, it was the beginning of forever.",
      icon: Sparkles,
    },
    {
      year: "2019",
      title: "First Date",
      description: "An evening walk along the beach turned into hours of conversation under the stars. We knew something special was happening.",
      icon: Star,
    },
    {
      year: "2022",
      title: "The Proposal",
      description: "James got down on one knee at the place where we first met, making it the most magical moment of our lives.",
      icon: Heart,
    },
    {
      year: "2025",
      title: "Our Wedding",
      description: "We can't wait to celebrate our love with all of you and start this beautiful journey as husband and wife.",
      icon: Heart,
    },
  ];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #ec4899 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Heart className="text-pink-500" size={48} fill="currentColor" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-4">Our Love Story</h2>
          <p className="text-pink-300 text-lg max-w-2xl mx-auto">
            Every great love story has a beginning. Here's ours.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-pink-600 via-red-600 to-pink-600 hidden md:block"></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const Icon = milestone.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-center md:text-left`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gradient-to-br from-pink-900/50 to-red-900/50 p-8 rounded-2xl backdrop-blur-sm border border-pink-500/30 shadow-xl"
                    >
                      <div className="text-pink-400 text-xl mb-3">{milestone.year}</div>
                      <h3 className="text-2xl md:text-3xl mb-4">{milestone.title}</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-red-600 rounded-full flex items-center justify-center shadow-xl border-4 border-black">
                      <Icon size={32} className="text-white" fill="currentColor" />
                    </div>
                  </motion.div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
