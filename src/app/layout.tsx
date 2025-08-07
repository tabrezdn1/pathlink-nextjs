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
  title: 'Pathlink - Your Career Path Starts Here',
  description: 'Connecting talent with opportunities globally',
  keywords: ['jobs', 'careers', 'recruitment', 'AI', 'professional'],
  authors: [{ name: 'Pathlink Team' }],
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
          <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden w-full max-w-full">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
