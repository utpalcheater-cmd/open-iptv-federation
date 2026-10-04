export type ChannelType = 'official' | 'independent-broadcaster' | 'independent-community' | 'creator-submission'
export type ChannelStatus = 'live' | 'scheduled' | 'offline' | 'review'
export type PolicyDecision = 'ALLOW' | 'REVIEW' | 'REJECT'

export type SourceRecord = {
  id: string
  name: string
  description: string
  category: string
  country: string
  language: string
  logo: string
  thumbnail: string
  type: ChannelType
  status: ChannelStatus
  currentProgram: string
  nextProgram: string
  sourceUrl: string
  embedUrl?: string
  streamUrl?: string
  youtubeUrl?: string
  priority: number
  isOfficial: boolean
  approved: boolean
}

export type CommunityRecord = {
  id: string
  name: string
  location: string
  language: string
  category: string
  description: string
  status: 'approved' | 'review' | 'rejected'
  members: number
}

export type PolicyResult = {
  decision: PolicyDecision
  summary: string
  reasons: string[]
  risk: 'low' | 'medium' | 'high'
}

export type ModerationLog = {
  id: string
  title: string
  submitter: string
  decision: PolicyDecision
  reviewer: string
  notes: string
  createdAt: string
}
