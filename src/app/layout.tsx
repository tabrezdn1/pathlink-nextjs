import type { Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PathLink - Your Career Path Starts Here',
  description: 'Connecting talent with opportunities globally',
  keywords: ['jobs', 'careers', 'recruitment', 'AI', 'professional'],
  authors: [{ name: 'PathLink Team' }],
};

export const viewport = {
  themeColor: '#05324f',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lexend.variable} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white text-gray-900 transition-colors duration-300 dark:bg-black dark:text-white">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
