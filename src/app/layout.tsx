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
  metadataBase: new URL("https://ambar-portfolio.onrender.com"),

  title: "Ambar Gupta | AI Developer & Full Stack Engineer",

  description:
    "Modern AI Developer portfolio showcasing projects, certifications, skills, and experience in AI, web development, and data science.",

  openGraph: {
    title: "Ambar Gupta | AI Developer & Full Stack Engineer",

    description:
      "Modern AI Developer portfolio showcasing projects, certifications, skills, and experience in AI and full stack development.",

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
      "AI Developer portfolio built with Next.js and Tailwind CSS.",

    images: ["/AgPort.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#050505] text-foreground min-h-screen flex flex-col selection:bg-blue-500 selection:text-black`}
        suppressHydrationWarning
      >
        <main className="relative z-10 w-full flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}