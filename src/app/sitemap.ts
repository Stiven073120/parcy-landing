import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://parcydigital.com';
  const currentDate = new Date();

  return [
    // NO incluimos la raíz (/) porque solo redirige a /landing
    // El redirect 301 ya le dice a Google que /landing es la URL canónica
    {
      url: `${baseUrl}/landing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0, // Prioridad máxima porque es la página principal
    },
    {
      url: `${baseUrl}/landing/pricing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/landing/why-parcy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
