import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NAVARASA | Official Band Website",
  description: "Experience the cinematic electronic music of NAVARASA. Explore albums, videos, and upcoming tour dates in a futuristic neon world.",
  keywords: ["Navarasa", "Electronic Music", "Synthwave", "Cyberpunk Band", "New Music", "Cinematic Soundscapes"],
  openGraph: {
    title: "NAVARASA | Official Band Website",
    description: "Experience the cinematic electronic music of NAVARASA.",
    images: ["/album_1.png"],
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
        className={`${inter.variable} ${outfit.variable} antialiased bg-[#050508] font-[var(--font-inter)]`}
      >
        {children}
      </body>
    </html>
  );
}
