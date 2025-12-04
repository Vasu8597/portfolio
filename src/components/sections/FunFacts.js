'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { funFacts } from '@/constants/goals';

export default function FunFacts() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-gray-800 dark:to-gray-900">
      <Container>
        <SectionTitle
          title="Fun Facts About Me"
          subtitle="Beyond the code - get to know the person behind the developer"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {funFacts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 }
              }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-primary-500 dark:hover:border-primary-400">
                {/* Icon with animation */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="text-6xl mb-4"
                >
                  {item.icon}
                </motion.div>

                {/* Fact Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.fact}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Want to know more? Let's connect and chat about tech, projects, or anything interesting! 🚀
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
