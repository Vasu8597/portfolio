import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vasu Kaneriya - React JS Developer',
  description: 'Frontend Developer with 4+ years of experience building scalable, high-performance applications using React.js, Next.js, TypeScript, and modern web technologies.',
  keywords: ['React Developer', 'Next.js', 'Frontend Developer', 'JavaScript', 'TypeScript', 'Web Development'],
  authors: [{ name: 'Vasu Kaneriya' }],
  creator: 'Vasu Kaneriya',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vasukaneriya.com',
    title: 'Vasu Kaneriya - React JS Developer',
    description: 'Frontend Developer with 4+ years of experience building scalable, high-performance applications.',
    siteName: 'Vasu Kaneriya Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vasu Kaneriya - React JS Developer',
    description: 'Frontend Developer with 4+ years of experience building scalable, high-performance applications.',
    creator: '@vasukaneriya',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
