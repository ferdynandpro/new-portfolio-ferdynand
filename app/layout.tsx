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
  metadataBase: new URL("https://ferdynandsilalahi.site"),
  title: "Ferdynand Silalahi | Professional Web Developer",
  description: "A proactive full-stack web developer based in Tabalong, South Kalimantan. Specializing in building modern web applications, POS systems, and scalable digital solutions using React, Next.js, and Node.js.",
  keywords: [
    "Ferdynand Silalahi", 
    "Web Developer", 
    "Full-Stack Developer", 
    "Frontend Developer", 
    "Freelance Programmer Tabalong", 
    "React.js", 
    "Next.js", 
    "Node.js", 
    "Portfolio"
  ],
  authors: [{ name: "Ferdynand Silalahi" }],
  creator: "Ferdynand Silalahi",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ferdynandsilalahi.site", 
    title: "Ferdynand Silalahi | Professional Web Developer",
    description: "Building clean, responsive, and high-performance digital interfaces to elevate your business.",
    siteName: "Ferdynand Silalahi Portfolio",
    images: [
      {
        url: "/asd.webp", 
        width: 1200,
        height: 630,
        alt: "Ferdynand Silalahi Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ferdynand Silalahi | Web Developer",
    description: "Building clean, responsive, and high-performance digital interfaces.",
    images: ["/asd.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}