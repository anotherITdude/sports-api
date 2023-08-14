import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Frontend Test | Submitted by AnotherItDude",
  description: "August 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="`${inter.className}` bg-neutral-300">{children}</body>
      </html>
    </ClerkProvider>
  );
}
