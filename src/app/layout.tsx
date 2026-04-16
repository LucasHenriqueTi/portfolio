import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lucas Henrique — Full Stack Developer",
  description: "Portfólio de Lucas Henrique, Full Stack Developer especializado em React, Next.js, Node.js e NestJS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body>{children}</body>
    </html>
  );
}