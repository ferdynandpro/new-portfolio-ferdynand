import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://domainkamu.com'; // GANTI DENGAN DOMAIN ASLIMU NANTI

  return {
    rules: {
      userAgent: '*',
      allow: '/', // Mengizinkan semua bot untuk merayapi seluruh isi website
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Memberitahu bot di mana letak petanya
  }
}