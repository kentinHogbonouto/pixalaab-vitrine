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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const baseUrl = "https://pixaalab.com";
  const url = locale === "fr" ? baseUrl : `${baseUrl}/${locale}`;

  const title =
    locale === "fr"
      ? "Pixalaab Technologie - Développement Web, Applications Mobiles & Transformation Digitale"
      : "Pixalaab Technology - Web Development, Mobile Apps & Digital Transformation";

  const description =
    locale === "fr"
      ? "Pixalaab Technologie est votre partenaire digital pour le développement web, mobile et la transformation numérique. Nous aidons les entreprises à innover, automatiser et réussir en ligne grâce à des solutions sur mesure et performantes."
      : "Pixalaab Technology is your digital partner for web development, mobile apps and digital transformation. We help businesses innovate, automate and succeed online with custom and high-performance solutions.";

  const ogTitle =
    locale === "fr"
      ? "Pixalaab Technologie - Experts en Développement Web & Mobile"
      : "Pixalaab Technology - Web & Mobile Development Experts";

  const ogDescription =
    locale === "fr"
      ? "Boostez votre croissance digitale avec Pixalaab Technologie. Développement web, mobile et solutions sur mesure pour entreprises et startups."
      : "Boost your digital growth with Pixalaab Technology. Web and mobile development with custom solutions for businesses and startups.";

  return {
    title: {
      default: title,
      template: `%s | Pixalaab ${locale === "fr" ? "Technologie" : "Technology"}`,
    },
    description,
    keywords: [
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
    authors: [{ name: "Pixalaab Technologie", url: baseUrl }],
    creator: "Pixalaab Technologie",
    publisher: "Pixalaab Technologie",
    generator: "Next.js",
    metadataBase: new URL(baseUrl),
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url,
      title: ogTitle,
      description: ogDescription,
      siteName: "Pixalaab Technologie",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Pixalaab Technologie",
        },
      ],
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: ["/opengraph-image.png"],
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
        { url: "/icons/favicon/favicon.ico", sizes: "any" },
        { url: "/icons/favicon/favicon.svg", type: "image/svg+xml" },
      ],
      apple: [
        { url: "/icons/favicon/apple-touch-icon.png", sizes: "180x180" },
      ],
    },
    manifest: "/manifest.json",
    alternates: {
      canonical: url,
      languages: {
        fr: `${baseUrl}/fr`,
        en: `${baseUrl}/en`,
      },
    },
    // verification: {
    //   google: "hE3PiAkjwB9idFceb22fGEPmWyswacczBA3yZ5u",
    // },
    category: "Technology",
    other: {
      "geo.region": "BJ-LI",
      "geo.placename": "Cotonou",
      "theme-color": "#FF3130",
    },
  };
}

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
