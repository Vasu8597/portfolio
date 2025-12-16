import Container from '@/components/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import MotionWrapper from '@/components/ui/MotionWrapper';
import { educationData } from '@/constants/experience';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <Container>
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about my background and expertise"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Summary */}
          <MotionWrapper variant="slideInLeft">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Professional Summary
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I'm a passionate Frontend Developer with over 3 years of experience
                  specializing in building modern, scalable, and high-performance web applications.
                </p>
                <p>
                  My expertise lies in React.js and Next.js ecosystems, where I've successfully
                  delivered applications across various domains including education, healthcare,
                  analytics, and business operations.
                </p>
                <p>
                  I have a strong foundation in state management using Redux Toolkit and Context API,
                  form handling with Formik and Yup, and creating beautiful UIs with Material-UI,
                  Tailwind CSS, and other modern styling solutions.
                </p>
                <p>
                  Beyond coding, I'm experienced in agile methodologies, mentoring junior developers,
                  conducting code reviews, and ensuring code quality through comprehensive testing
                  with Jest and React Testing Library.
                </p>
              </div>
            </div>
          </MotionWrapper>

          {/* Education & Highlights */}
          <MotionWrapper variant="slideInRight">
            <div className="space-y-8">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Education
                </h3>
                <div className="space-y-4">
                  {educationData.map((edu) => (
                    <div
                      key={edu.id}
                      className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400">
                        {edu.field}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {edu.duration}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Key Highlights
                </h3>
                <ul className="space-y-3">
                  {[
                    'Built scalable applications with React & Next.js',
                    'Expert in Redux Toolkit & Context API',
                    'Proficient in REST APIs & WebSockets',
                    'Strong focus on performance optimization',
                    'Experienced in agile development',
                    'Mentored junior developers',
                  ].map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
