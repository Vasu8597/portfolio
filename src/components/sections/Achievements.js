'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import MotionWrapper from '@/components/ui/MotionWrapper';
import { achievements } from '@/constants/goals';

export default function Achievements() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <Container>
        <SectionTitle
          title="Key Achievements"
          subtitle="Milestones that define my journey"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <MotionWrapper
              key={achievement.id}
              variant="fadeIn"
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                <div className="relative bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 group-hover:border-transparent transition-colors duration-300 h-full flex flex-col">
                  {/* Icon */}
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                    {achievement.description}
                  </p>

                  {/* Metric Badge */}
                  <div className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-bold">
                    {achievement.metric}
                  </div>
                </div>
              </motion.div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}
