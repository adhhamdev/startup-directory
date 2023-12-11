import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Startup Directory Web App',
  description: 'Explore various startups and their details.',
  generator: 'Next.js',
  applicationName: 'Startup Directory Web App',
  keywords: ['startup', 'directory', 'web', 'app'],
  authors: [{ name: 'Adhham Dev', url: 'https://adhhamdev.netlify.app', email: 'msmadhhamg@gmail.com', tel: '0770355887'}],
  creator: 'Adhham Dev',
  publisher: 'Adhham Dev',
  formatDetection: {
    telephone: 'yes',
    email: 'yes',
  },
}

export const generateViewport = () => ({themeColor: '#000000', initialScale: 1, viewportFit: 'cover'})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
