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
  title: "Ambar Gupta | AI & Full Stack Developer",

  description:
    "AI Developer Portfolio showcasing projects, certifications, skills, and experience in AI, web development, and data science.",

  openGraph: {
    title: "Ambar Gupta | AI & Full Stack Developer",

    description:
      "AI Developer Portfolio showcasing projects, certifications, and technical skills.",

    url: "https://ambar-portfolio.onrender.com",

    siteName: "Ambar Portfolio",

    images: [
      {
        url: "/AgPort.png",
        width: 1200,
        height: 630,
        alt: "Ambar Gupta Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Ambar Gupta | AI Developer",

    description:
      "Modern AI Developer Portfolio built with Next.js and Tailwind CSS.",

    images: ["/AgPort.png"],
  },
};
