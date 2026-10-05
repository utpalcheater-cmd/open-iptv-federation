export const channelFeed = [
  {
    id: 'bbc-world',
    name: 'BBC World News',
    description: 'Global international reporting and live briefing coverage.',
    category: 'News',
    country: 'United Kingdom',
    language: 'English',
    logo: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
    type: 'official',
    status: 'live',
    currentProgram: 'World News Today',
    nextProgram: 'Business Briefing',
    sourceUrl: 'https://www.bbc.com/news',
    embedUrl: 'https://www.youtube.com/embed/9bZkp7q19f0',
    streamUrl: 'https://www.bbc.com/news',
    youtubeUrl: 'https://www.youtube.com/@BBCNews',
    priority: 100,
    isOfficial: true,
    approved: true
  },
  {
    id: 'cnn-world',
    name: 'CNN International',
    description: 'Global newsgathering with live international updates.',
    category: 'News',
    country: 'United States',
    language: 'English',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    type: 'official',
    status: 'live',
    currentProgram: 'CNN Live',
    nextProgram: 'Global Briefing',
    sourceUrl: 'https://edition.cnn.com/',
    embedUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
    streamUrl: 'https://edition.cnn.com/',
    youtubeUrl: 'https://www.youtube.com/@CNN',
    priority: 98,
    isOfficial: true,
    approved: true
  },
  {
    id: 'al-jazeera',
    name: 'Al Jazeera English',
    description: 'International news and analysis from a regional perspective.',
    category: 'News',
    country: 'Qatar',
    language: 'English',
    logo: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    type: 'official',
    status: 'scheduled',
    currentProgram: 'Focus',
    nextProgram: 'Inside the Story',
    sourceUrl: 'https://www.aljazeera.com/',
    embedUrl: 'https://www.youtube.com/embed/N2OMV3I0C3A',
    streamUrl: 'https://www.aljazeera.com/',
    youtubeUrl: 'https://www.youtube.com/@AJEnglish',
    priority: 94,
    isOfficial: true,
    approved: true
  },
  {
    id: 'reuters-live',
    name: 'Reuters World',
    description: 'Fast-moving international coverage and market signal reporting.',
    category: 'News',
    country: 'United Kingdom',
    language: 'English',
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
    type: 'official',
    status: 'live',
    currentProgram: 'Global Wire',
    nextProgram: 'World Markets',
    sourceUrl: 'https://www.reuters.com/',
    streamUrl: 'https://www.reuters.com/',
    priority: 92,
    isOfficial: true,
    approved: true
  },
  {
    id: 'community-berlin',
    name: 'Berlin Community TV',
    description: 'Independent local public affairs community channel.',
    category: 'Community',
    country: 'Germany',
    language: 'German',
    logo: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    type: 'independent-community',
    status: 'live',
    currentProgram: 'City Council Watch',
    nextProgram: 'Open Studio',
    sourceUrl: 'https://example.org/community-berlin',
    streamUrl: 'https://example.org/community-berlin/stream',
    priority: 78,
    isOfficial: false,
    approved: true
  },
  {
    id: 'creator-kultur',
    name: 'Kultur Wave',
    description: 'Independent cultural and arts creator channel with community submissions.',
    category: 'Culture',
    country: 'France',
    language: 'French',
    logo: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
    type: 'creator-submission',
    status: 'review',
    currentProgram: 'Culture and Cities',
    nextProgram: 'Roundtable',
    sourceUrl: 'https://example.org/kultur-wave',
    streamUrl: 'https://example.org/kultur-wave/stream',
    priority: 52,
    isOfficial: false,
    approved: false
  }
] as const

export const communities = [
  {
    id: 'global-news-hub',
    name: 'Global News Hub',
    location: 'Toronto, Canada',
    language: 'English',
    category: 'News',
    description: 'Independent journalism and live briefings from a community network.',
    status: 'approved',
    members: 12400
  },
  {
    id: 'diaspora-culture',
    name: 'Diaspora Culture',
    location: 'Paris, France',
    language: 'French',
    category: 'Culture',
    description: 'Creator-led cultural storytelling and regional programming.',
    status: 'approved',
    members: 5400
  },
  {
    id: 'city-lens',
    name: 'City Lens',
    location: 'Berlin, Germany',
    language: 'German',
    category: 'Community',
    description: 'Urban news, public service, and local civic coverage.',
    status: 'review',
    members: 2100
  }
] as const

export const moderationLog = [
  {
    id: 'mod-101',
    title: 'Kultur Wave submission',
    submitter: 'Community creator',
    decision: 'REVIEW',
    reviewer: 'Moderator Team',
    notes: 'Source URL valid. Rights declaration reviewed. Additional consent detail required before publication.',
    createdAt: '2026-10-04'
  },
  {
    id: 'mod-102',
    title: 'Berlin Community TV approval',
    submitter: 'Community admin',
    decision: 'ALLOW',
    reviewer: 'Policy desk',
    notes: 'Content rights confirmed. Community remains independent.',
    createdAt: '2026-10-03'
  }
] as const

export const policySummary = {
  allow: 'Approved for publication with retained source identity and clear rights declaration.',
  review: 'Escalated to human moderation for rights and consent verification.',
  reject: 'Rejected due to content policy, risk factors, or missing authorization.'
}
