import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/reactbits/NoiseOverlay";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anishpokharel.com"),
  title: "Anish Pokharel | Senior Full Stack Developer & Architect",
  description:
    "Personal Portfolio of Anish Pokharel — Full Stack Developer based in Nepal specializing in Next.js, React, Node.js, TypeScript, and Cloud Infrastructure.",
  keywords: [
    "Anish Pokharel",
    "Full Stack Developer",
    "Next.js Developer",
    "React Engineer",
    "TypeScript",
    "Nepal Developer",
    "Web Architect",
  ],
  authors: [{ name: "Anish Pokharel" }],
  openGraph: {
    title: "Anish Pokharel | Senior Full Stack Developer",
    description:
      "I build modern, scalable and high-performance web applications with beautiful user experiences.",
    url: "https://anishpokharel.com",
    siteName: "Anish Pokharel Portfolio",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Anish Pokharel Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anish Pokharel | Senior Full Stack Developer",
    description:
      "I build modern, scalable and high-performance web applications with beautiful user experiences.",
    images: ["/images/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} scroll-smooth dark`}>
      <body className="bg-[#09090b] text-zinc-100 antialiased selection:bg-purple-600 selection:text-white min-h-screen flex flex-col">
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
