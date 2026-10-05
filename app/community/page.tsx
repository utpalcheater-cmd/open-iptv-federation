import Link from 'next/link'
import { channelFeed } from '@/lib/data'
import { ChannelCard } from '@/components/channel-card'

export default function LivePage() {
  return (
    <div className="container page-shell">
      <div className="section-header">
        <div>
          <p className="eyebrow">LIVE</p>
          <h1>Global live television</h1>
        </div>
      </div>

      <div className="filter-row">
        <Link href="/live" className="chip active">All</Link>
        <Link href="/live" className="chip">News</Link>
        <Link href="/live" className="chip">Community</Link>
        <Link href="/live" className="chip">Culture</Link>
      </div>

      <div className="card-grid">
        {channelFeed.map((channel) => (
          <ChannelCard key={channel.id} channel={channel} />
        ))}
      </div>
    </div>
  )
}
