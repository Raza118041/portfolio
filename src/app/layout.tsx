import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { Sora } from "next/font/google";




export const metadata: Metadata = {
  title: "Ali Raza | Portfolio",
  description: "Ali Raza - A skilled React.js and Next.js developer with expertise in frontend development, and web optimization.",
  keywords: "Ali Raza, React.js Developer, Next.js, Frontend Developer, Web Development, JavaScript",
  authors: [{ name: "Ali Raza", url: "https://yourportfolio.com" }],
  openGraph: {
    title: "Ali Raza | React & Next.js Developer",
    description: "Showcasing my expertise in React.js, Next.js, and frontend development with real-world projects and UI/UX designs.",
    url: "https://yourportfolio.com",
    siteName: "Ali Raza Portfolio",
    images: [
      {
        url: "https://yourportfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Raza - Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Raza | React.js & Next.js Developer",
    description: "Discover my portfolio featuring cutting-edge frontend development projects using React and Next.js.",
    images: ["https://yourportfolio.com/twitter-image.jpg"],
  },
};

const sora = Sora({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={sora.className}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
