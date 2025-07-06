import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ali Raza – Frontend Developer | React & Next.js",
  description: "I'm Ali Raza, a frontend developer specializing in React.js and Next.js. Explore my portfolio, projects, and skills.",
  keywords: [
    "Ali Raza",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Web Developer in Pakistan",
    "JavaScript Developer",
  ],
  creator: "Ali Raza",
  openGraph: {
    title: "Ali Raza – Frontend Developer Portfolio",
    description: "Showcasing my work, skills, and projects built using React.js, Next.js, and modern web technologies.",
    url: "https://ali-raza.vercel.app",
    siteName: "Ali Raza Portfolio",
    images: [
      {
        url: "https://ali-raza.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ali Raza Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0B5FFBH6S9"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0B5FFBH6S9');
            `,
          }}
        />
      </head>
      <body
        className={`${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
