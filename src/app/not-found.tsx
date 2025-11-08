import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { getLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import NotFoundClient from "./[locale]/NotFoundClient";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./[locale]/globals.css";
import { QueryProvider } from "@/lib/queryClient";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootNotFound() {
  // Obtenir la locale ou utiliser la locale par défaut
  let locale: string;
  try {
    locale = await getLocale();
    if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
      locale = routing.defaultLocale;
    }
  } catch {
    locale = routing.defaultLocale;
  }

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
            <NotFoundClient />
            <Footer />
          </NextIntlClientProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

