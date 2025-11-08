import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pixaalab.com';

  // Images des favicons et icônes selon la documentation Next.js
  const faviconImages = [
    `${baseUrl}/icons/favicon/favicon.ico`,
    `${baseUrl}/icons/favicon/favicon.svg`,
    `${baseUrl}/icons/favicon/favicon-96x96.png`,
    `${baseUrl}/icons/favicon/apple-touch-icon.png`,
    `${baseUrl}/icons/favicon/web-app-manifest-192x192.png`,
    `${baseUrl}/icons/favicon/web-app-manifest-512x512.png`,
    `${baseUrl}/icons/favicon/logo.jpg`,
    `${baseUrl}/icons/logo.png`,
    `${baseUrl}/icons/logo-startup.png`,
    `${baseUrl}/icons/small-logo.png`,
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          fr: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
      images: faviconImages,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          fr: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
      images: faviconImages,
    },
  ];
}

