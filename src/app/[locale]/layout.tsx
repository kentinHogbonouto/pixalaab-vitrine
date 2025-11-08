import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { QueryProvider } from "@/lib/queryClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { 
    default: "Pixalaab Technologie - Développement Web, Applications Mobiles & Transformation Digitale",
    template: "%s | Pixalaab Technologie - Experts en Solutions Numériques Modernes"
  },
  description:
    "Pixalaab Technologie est votre partenaire digital pour le développement web, mobile et la transformation numérique. Nous aidons les entreprises à innover, automatiser et réussir en ligne grâce à des solutions sur mesure et performantes.",
  keywords: [
    // 🔹 Mots-clés principaux
    "développement web",
    "application mobile",
    "transformation digitale",
    "UX/UI design",
    "agence digitale",
    "développement logiciel",
    "site web sur mesure",
    "application iOS Android",
    "Pixalaab Technologie",
    "agence web au Bénin",
    "développement web en Afrique",
    "solutions digitales Bénin",
    "entreprise de technologie",
    "digitalisation PME",

    // 🔹 Services
    "création d’application mobile",
    "site e-commerce",
    "intégration API",
    "développement React Next.js Flutter",
    "SEO et marketing digital",
    "hébergement web sécurisé",
    "maintenance applicative",
    "intelligence artificielle appliquée",
    "développement sur mesure",
    "automatisation et cloud computing",

    // 🔹 Valeur ajoutée
    "expertise technologique",
    "innovation numérique",
    "solutions digitales performantes",
    "transformation numérique complète",
    "accompagnement stratégique digital",
    "optimisation SEO & SEA",
    "développement durable numérique",

    // 🔹 International
    "web development",
    "mobile app development",
    "digital transformation",
    "software development agency",
    "custom web solutions",
    "SEO optimization",
    "AI integration",
    "cloud digital solutions",
  ],

  authors: [{ name: "Pixalaab Technologie", url: "https://pixaalab.com" }],
  creator: "Pixalaab Technologie",
  publisher: "Pixalaab Technologie",
  generator: "Next.js SEO Optimized",

  metadataBase: new URL("https://pixaalab.com"),

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://pixaalab.com",
    title: "Pixalaab Technologie - Experts en Développement Web & Mobile",
    description:
      "Boostez votre croissance digitale avec Pixalaab Technologie. Développement web, mobile et solutions sur mesure pour entreprises et startups.",
    siteName: "Pixalaab Technologie",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Pixalaab Technologie - Agence digitale au Bénin",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pixalaab Technologie | Agence Digitale et Développement Web",
    description:
      "Nous concevons des solutions web et mobiles sur mesure pour votre croissance digitale.",
    images: ["/icons/logo.jpg"],
    creator: "@pixalaab",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/icons/logo.jpg", sizes: "32x32", type: "image/png" },
      { url: "/icons/logo.jpg", sizes: "64x64", type: "image/png" },
    ],
    apple: [
      { url: "/icons/logo.jpg", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/manifest.json",

  alternates: {
    canonical: "https://pixaalab.com",
    languages: {
      fr: "https://pixaalab.com/fr",
      en: "https://pixaalab.com/en",
    },
  },

  verification: {
    google: "hE3PiAkjwB9idFceb22fGEPmWyswacczBA3yZ5u",
  },

  category: "Technology",
  other: {
    "geo.region": "BJ-LI",
    "geo.placename": "Cotonou",
    "og:locale:alternate": "en_US",
    "theme-color": "#0f172a",
  },
};

export default async function ModernLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-sm sm:text-base lg:text-lg`}
      >
        <QueryProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <Toaster />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
