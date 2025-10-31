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
  title: "Pixalaab Technologie - Développement Web, Applications Mobiles & Transformation Digitale",
  description:
    "Transformez votre vision digitale en réalité avec Pixalaab Technologie. Développement web, applications mobiles, transformation digitale et UX/UI design pour propulser votre entreprise.",
  keywords: [
    // 🔹 Mots-clés principaux
    "développement web",
    "application mobile",
    "transformation digitale",
    "UX/UI design",
    "agence digitale",
    "développement logiciel",
    "création site web",
    "application iOS Android",
    "Pixalaab",

    // 🔹 Services proposés
    "création d’application mobile",
    "site e-commerce sur mesure",
    "développement front-end et back-end",
    "intégration API",
    "développement React",
    "développement Next.js",
    "développement Flutter",
    "optimisation SEO",
    "hébergement web professionnel",
    "maintenance applicative",
    "design d’interface utilisateur",
    "expérience utilisateur",
    "marketing digital",
    "stratégie numérique",
    "solutions cloud",
    "automatisation d’entreprise",
    "création de tableau de bord",
    "gestion de données",
    "intelligence artificielle",
    "modernisation de systèmes",
    "développement sur mesure",

    // 🔹 Secteurs / contextes
    "entreprises béninoises",
    "entreprises international",
    "startup africaine",
    "startup international",
    "agence web au Bénin",
    "développement web en Afrique",
    "digitalisation des entreprises",
    "services informatiques professionnels",
    "conseil en transformation digitale",

    // 🔹 Valeur ajoutée
    "innovation technologique",
    "solutions numériques innovantes",
    "expertise digitale",
    "technologie moderne",
    "agence de communication digitale",
    "transformation numérique complète",
    "développement rapide et sécurisé",
    "solutions adaptées aux PME",
    "performance et scalabilité",
    "accompagnement digital stratégique",

    // 🔹 International (EN)
    "web development",
    "mobile app development",
    "digital transformation",
    "UX/UI design agency",
    "software development",
    "custom website",
    "iOS Android app",
    "SEO optimization",
    "cloud solutions",
    "AI integration",
    "startup support",
  ],

  authors: [{ name: "Pixalaab Technologie" }],
  creator: "Pixalaab Technologie",
  publisher: "Pixalaab Technologie",

  metadataBase: new URL("https://pixalaab.com"),

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://pixalaab.com",
    title: "Pixalaab Technologie - Votre Partenaire Digital",
    description:
      "Experts en développement web, mobile et transformation digitale. Nous créons des solutions innovantes pour accélérer votre croissance.",
    siteName: "Pixalaab Technologie",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pixalaab Technologie - Agence de développement digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pixalaab Technologie - Développement Digital",
    description:
      "Solutions web & mobile innovantes pour votre transformation digitale.",
    images: ["/icons/logo.jpg"],
    creator: "@pixalaab",
  },

  robots: {
    index: true,
    follow: true,
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
      { url: "/icons/logo.jpg", sizes: "16x16", type: "image/png" },
      { url: "/icons/logo.jpg", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/icons/logo.jpg", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/manifest.json",

  alternates: {
    canonical: "https://pixalaab.com",
    languages: {
      fr: "https://pixalaab.com/fr",
      en: "https://pixalaab.com/en",
    },
  },

  verification: {
    google: "votre-code-google-search-console",
  },

  category: "Technology",

  other: {
    "geo.region": "BJ-LI",
    "geo.placename": "Cotonou",
    // OpenGraph alternates for crawlers that read meta property directly
    "og:locale:alternate": "en_US",
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
