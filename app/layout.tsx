import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Caveat } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  title: "Shivam | Full Stack Developer - React, Node.js, Next.js",
  description: "Shivam is a full stack web developer specializing in React, Node.js, and Next.js. Available for freelance or full-time opportunities.",
  keywords: ["Full Stack Developer", "React Developer", "Next.js Developer", "Node.js", "Portfolio", "Shivam"],
  authors: [{ name: "Shivam", url: "https://shivam09.tech" }],
  creator: "Shivam",
  openGraph: {
    title: "Shivam | Full Stack Developer",
    description: "Explore Shivam's portfolio showcasing full stack projects built with React, Node.js, and Next.js.",
    url: "https://shivam09.tech",
    siteName: "Shivam Portfolio",
    type: "website",
    images: [
      {
        url: "https://shivam09.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shivam | Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam | Full Stack Developer",
    description: "React, Node.js, Next.js developer — check out my projects!",
    creator: "@shivam_visss",
    images: ["https://shivam09.tech/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
         
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} antialiased dark:bg-neutral-900 text-black dark:text-white`}
      >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

        {children}
            </ThemeProvider>

      </body>
    </html>
  );
}
