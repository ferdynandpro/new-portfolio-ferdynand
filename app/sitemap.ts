import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://domainkamu.com'; // GANTI DENGAN DOMAIN ASLIMU NANTI

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0, // 1.0 berarti ini adalah halaman paling penting
    },
  ]
}