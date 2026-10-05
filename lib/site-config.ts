import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Open IPTV Federation',
  url: 'https://openiptv.example',
  description: 'Global open IPTV federation for authorized live broadcasters, communities, and creators.',
  twitter: '@openiptv'
}

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: 'website'
  }
}
