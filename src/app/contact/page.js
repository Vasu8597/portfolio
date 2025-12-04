import Contact from '@/components/sections/Contact';
import Container from '@/components/Container';
import MotionWrapper from '@/components/ui/MotionWrapper';

export const metadata = {
  title: 'Contact - Vasu Kaneriya | Get In Touch',
  description: 'Get in touch with me for project inquiries, collaborations, or opportunities. I\'m always open to discussing new projects.',
  openGraph: {
    title: 'Contact - Vasu Kaneriya',
    description: 'Get in touch with me for project inquiries, collaborations, or opportunities.',
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Container>
          <MotionWrapper>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Have a project in mind or want to discuss opportunities? I'd love to hear from you!
              </p>
            </div>
          </MotionWrapper>
        </Container>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
