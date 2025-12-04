import Container from '@/components/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import MotionWrapper from '@/components/ui/MotionWrapper';
import Badge from '@/components/ui/Badge';
import { educationData, experienceData } from '@/constants/experience';
import { personalInfo } from '@/constants/socialLinks';

export const metadata = {
  title: 'About - Vasu Kaneriya | React JS Developer',
  description: 'Learn more about my background, experience, and expertise in frontend development. 4+ years of building scalable applications with React.js and Next.js.',
  openGraph: {
    title: 'About - Vasu Kaneriya',
    description: 'Learn more about my background, experience, and expertise in frontend development.',
  },
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Container>
          <MotionWrapper>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Passionate about creating exceptional digital experiences
              </p>
            </div>
          </MotionWrapper>
        </Container>
      </section>

      {/* Professional Summary */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <Container>
          <div className="max-w-4xl mx-auto">
            <MotionWrapper variant="fadeInUp">
              <SectionTitle
                title="Professional Summary"
                align="left"
              />
              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg">
                <p>
                  I'm a passionate Frontend Developer with over 3 years of experience 
                  specializing in building modern, scalable, and high-performance web applications.
                </p>
                <p>
                  My expertise lies in the React.js and Next.js ecosystems, where I've successfully 
                  delivered applications across various domains including education, healthcare, 
                  analytics, and business operations. I have a strong foundation in state management 
                  using Redux Toolkit and Context API, form handling with Formik and Yup, and creating 
                  beautiful UIs with Material-UI, Tailwind CSS, and other modern styling solutions.
                </p>
                <p>
                  Beyond coding, I'm experienced in agile methodologies, mentoring junior developers, 
                  conducting code reviews, and ensuring code quality through comprehensive testing 
                  with Jest and React Testing Library. I believe in writing clean, maintainable code 
                  and staying up-to-date with the latest web development trends and best practices.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </Container>
      </section>

      {/* Experience Details */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <MotionWrapper variant="fadeInUp">
              <SectionTitle
                title="Work Experience"
                align="left"
              />
              {experienceData.map((exp) => (
                <div key={exp.id} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        {exp.duration} • {exp.type}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Responsibilities:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </MotionWrapper>
          </div>
        </Container>
      </section>

      {/* Education */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <Container>
          <div className="max-w-4xl mx-auto">
            <MotionWrapper variant="fadeInUp">
              <SectionTitle
                title="Education"
                align="left"
              />
              <div className="space-y-6">
                {educationData.map((edu) => (
                  <div 
                    key={edu.id}
                    className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                      {edu.field}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {edu.duration} • {edu.type}
                    </p>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <Container>
          <MotionWrapper variant="scaleIn">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Work Together
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new projects and opportunities.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </MotionWrapper>
        </Container>
      </section>
    </div>
  );
}
