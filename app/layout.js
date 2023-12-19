import { poppins } from '@/fonts';
import './globals.css';

export const metadata = {
  title: 'Startup Directory Web App',
  description: 'Explore various startups and their details.',
  generator: 'Next.js',
  applicationName: 'Startup Directory Web App',
  keywords: ['startup', 'directory', 'web', 'app'],
  authors: [
    {
      name: 'Adhham Dev',
      url: 'https://adhhamdev.netlify.app',
      email: 'msmadhhamg@gmail.com',
      tel: '0770355887',
    },
  ],
  creator: 'Adhham Dev',
  publisher: 'Adhham Dev',
  formatDetection: {
    telephone: 'yes',
    email: 'yes',
  },
};

export const generateViewport = () => ({
  themeColor: '#000000',
  initialScale: 1,
  viewportFit: 'cover',
});

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
