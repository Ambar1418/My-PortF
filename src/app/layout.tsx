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
  description: "Futuristic AI + Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#050505] text-foreground min-h-screen flex flex-col selection:bg-neon-blue selection:text-black`}
        suppressHydrationWarning
      >
        {/* Animated Background Elements (Full Screen) */}
        <div className="fixed inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-neon-blue/10 blur-[150px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-neon-purple/10 blur-[150px]" />
        </div>

        <main className="relative z-10 w-full flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
