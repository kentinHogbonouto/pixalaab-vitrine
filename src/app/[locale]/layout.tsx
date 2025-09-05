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
  icons: {
    icon: "/icons/logo.jpg",
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
          <Header />
          <Toaster />
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
