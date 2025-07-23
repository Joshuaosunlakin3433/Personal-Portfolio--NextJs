import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  weight: '400', // Calistoga typically only comes in 400 weight
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-calistoga', // This creates a CSS variable for use in Tailwind
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with 💜 by JO",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          `bg-gray-900 ${calistoga.variable}  text-white antialiased font-sans`
        )}  
  
      >
        {children}
      </body>
    </html>
  );
}
