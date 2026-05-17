import type { Metadata } from "next";
import {
  Schibsted_Grotesk,
  Hanken_Grotesk,
  JetBrains_Mono,
  Cormorant_Garamond,
} from "next/font/google";
import { clinic } from "@/lib/data";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smileskin.com.br"),
  title: "SmileSkin Tricologia · Tratamento capilar em Moema, São Paulo",
  description:
    "Toda queda de cabelo tem uma causa. Avaliação tricoscópica e protocolo capilar individual com o Dr. Deli Brito, em Moema, São Paulo.",
  openGraph: {
    title: "SmileSkin Tricologia · Toda queda de cabelo tem uma causa",
    description:
      "Avaliação do couro cabeludo no tricoscópio e protocolo capilar desenhado para o seu caso. Moema, São Paulo.",
    locale: "pt_BR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "SmileSkin Tricologia",
  medicalSpecialty: "Dermatology",
  description:
    "Clínica de tricologia em Moema, São Paulo. Avaliação tricoscópica e protocolos capilares individuais para queda e rarefação de cabelo.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Bem-te-vi, 333 · CJ 111",
    addressLocality: "Moema, São Paulo",
    addressRegion: "SP",
    postalCode: "04524-030",
    addressCountry: "BR",
  },
  telephone: "+5511916460110",
  email: clinic.email,
  openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-14:00"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${schibsted.variable} ${cormorant.variable} ${hanken.variable} ${jetbrains.variable}`}
      >
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded-sm focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-paper"
        >
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
