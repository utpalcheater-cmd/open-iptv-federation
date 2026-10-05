import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://openiptv.example/', lastModified: new Date() },
    { url: 'https://openiptv.example/live', lastModified: new Date() },
    { url: 'https://openiptv.example/community', lastModified: new Date() },
    { url: 'https://openiptv.example/submit', lastModified: new Date() },
    { url: 'https://openiptv.example/moderation', lastModified: new Date() },
    { url: 'https://openiptv.example/policies/privacy', lastModified: new Date() },
    { url: 'https://openiptv.example/policies/content-policy', lastModified: new Date() },
    { url: 'https://openiptv.example/policies/federation-policy', lastModified: new Date() }
  ]
}
