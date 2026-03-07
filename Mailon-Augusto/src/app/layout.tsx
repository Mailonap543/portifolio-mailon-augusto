import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google";
import Script from "next/script";
import React from "react";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mailon Augusto | Full Stack Developer",
  description:
      "Portfólio de Mailon Augusto — Desenvolvedor Full Stack especializado em Java, Spring Boot e Angular.",
  keywords: ["Mailon Augusto", "Full Stack", "Java", "Spring Boot", "Angular", "Developer"],
  authors: [{ name: "Mailon Augusto", url: "https://github.com/Mailonap543" }],
  openGraph: {
    title: "Mailon Augusto | Full Stack Developer",
    description: "Desenvolvedor Full Stack — Java · Spring Boot · Angular",
    type: "website",
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-BR" className="scroll-smooth">
      <head>
        <title>Mailon Augusto | Full Stack Developer</title>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
            crossOrigin="anonymous"
        />
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body
          className={`${orbitron.variable} ${shareTechMono.variable} antialiased`}
      >
      {children}
      <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc4s9bIOgUxi8T/jzmFXFMrWCU3FA0e6bMkHHenwl3Fo"
          crossOrigin="anonymous"
      />
      </body>
      </html>
  );
}