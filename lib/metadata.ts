import type { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://openiptv.example'),
  title: {
    default: 'Open IPTV Federation',
    template: '%s | Open IPTV Federation'
  },
  description: 'Global open IPTV federation for authorized live broadcasters, communities and creators.',
  keywords: ['IPTV', 'federation', 'live TV', 'community channels', 'broadcasting'],
  openGraph: {
    title: 'Open IPTV Federation',
    description: 'Open-source television federation built around authorized sources.',
    siteName: 'Open IPTV Federation',
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open IPTV Federation',
    description: 'Global discovery and federation for live channels and communities.'
  },
  robots: {
    index: true,
    follow: true
  }
}
