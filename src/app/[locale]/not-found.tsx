import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import NotFoundClient from "./NotFoundClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t("notFound.metaTitle"),
    description: t("notFound.metaDescription"),
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title: t("notFound.metaTitle"),
      description: t("notFound.metaDescription"),
      type: "website",
    },
  };
}

export default async function NotFound() {
  return <NotFoundClient />;
}

