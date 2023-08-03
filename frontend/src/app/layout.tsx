import AuthProvider from '@/context/AuthProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ErrorBoundary from './ErrorBoundary';
import './globals.css';
import LoginModal from './login/LoginModal';

import ChatProvider from '@/context/ChatProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';

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
      <body className={ `${inter.className} text-zinc-50 flex flex-col` }>
        <AuthProvider>
          <ErrorBoundary>
            <Header />
            <LoginModal />
            <ChatProvider>
              {children}
            </ChatProvider>
            <ToastContainer
              position="top-right"
              autoClose={ 5000 }
              hideProgressBar={ false }
              newestOnTop={ false }
              closeOnClick
              rtl={ false }
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </ErrorBoundary>
        </AuthProvider>
      </body>
    </html>
  );
}
