'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Card, { CardBody } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { projectsData, projectCategories } from '@/constants/projects';
import { staggerContainer, fadeInUp } from '@/components/ui/MotionWrapper';

export default function Projects() {

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="A showcase of my recent work and achievements"
        />

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Card hover className="h-full flex flex-col">
                <CardBody className="flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-xs text-gray-600 dark:text-gray-400">
                          <svg className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-1 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlight */}
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                      💡 {project.highlights}
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {projectsData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
