import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { FinancialDataProvider } from '@/context/FinancialDataContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ricci Investor Update',
  description: 'Financial data visualization for Ricci Investments',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FinancialDataProvider>
          {children}
        </FinancialDataProvider>
      </body>
    </html>
  );
}
