import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nexa — SaaS & Business Template",
    template: "%s | Nexa",
  },

  description:
    "A modern SaaS and business website template built with Next.js, TypeScript, and Tailwind CSS.",

  keywords: [
    "SaaS template",
    "Next.js template",
    "business template",
    "Tailwind CSS",
    "TypeScript",
    "React",
    "landing page",
  ],

  authors: [
    {
      name: "Nexa",
    },
  ],

  creator: "Nexa",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}