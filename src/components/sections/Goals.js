'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Card, { CardBody } from '@/components/ui/Card';
import MotionWrapper from '@/components/ui/MotionWrapper';
import { careerGoals } from '@/constants/goals';

export default function Goals() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <Container>
        <SectionTitle
          title="Career Goals & Vision"
          subtitle="Where I'm heading in my development journey"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {careerGoals.map((goal, index) => (
            <MotionWrapper
              key={goal.id}
              variant="fadeIn"
              delay={index * 0.1}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardBody>
                  <div className="flex items-start mb-4">
                    <div className="text-4xl mr-4">{goal.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {goal.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {goal.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        Progress
                      </span>
                      <span className="text-xs font-bold text-primary-600 dark:text-primary-400">
                        {goal.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}
