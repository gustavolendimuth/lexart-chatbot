import AuthProvider from '@/context/authProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lexart Bot',
  description: 'A bot for Lexart tech test',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={ `${inter.className} text-zinc-50` }>{children}</body>
      </AuthProvider>
    </html>
  );
}
