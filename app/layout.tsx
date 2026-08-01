import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Aditya — Software Engineering Student • Full-Stack Developer • AI Builder",
  description:
    "Portfolio of Aditya, a Software Engineering student at the University of Europe for Applied Sciences in Berlin and Co-Founder of SimpleGerman. Specializing in Next.js, TypeScript, Python, and AI automation tools.",
  keywords: [
    "Aditya Parasher",
    "Software Engineer Berlin",
    "Full-Stack Developer",
    "AI Builder",
    "UE Berlin Software Engineering",
    "SimpleGerman",
    "Next.js Developer",
    "Python Automation",
  ],
  authors: [{ name: "Aditya Parasher" }],
  openGraph: {
    title: "Aditya — Software Engineering Student • Full-Stack Developer • AI Builder",
    description:
      "I design and build modern web applications, AI-powered tools, and automation software using TypeScript, Python, React, Next.js, and cloud technologies.",
    url: "https://github.com/Aadi-code186",
    siteName: "Aditya Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya — Software Engineering Student • Full-Stack Developer • AI Builder",
    description:
      "I design and build modern web applications, AI-powered tools, and automation software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#EAEFF5] text-slate-800 antialiased selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
