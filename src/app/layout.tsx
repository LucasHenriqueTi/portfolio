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
      <body>{children}</body>
    </html>
  );
}