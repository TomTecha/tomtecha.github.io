import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/app/context/LanguageContext";

export const metadata: Metadata = {
  title: "TomTecha – Elektros sistemų remontas",
  description:
    "Profesionalus hibridinių ir elektrinių automobilių baterijų remontas, vėjo jėgainių priežiūra ir remontas Lietuvoje.",
  keywords: [
    "hibridinio automobilio baterija",
    "elektromobilio baterija",
    "vėjo jėgainių remontas",
    "TomTecha",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
