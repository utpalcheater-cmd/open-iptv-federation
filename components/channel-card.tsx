import Link from 'next/link'
import { channelFeed } from '@/lib/data'

export function ChannelCard({ channel, compact = false }: { channel: (typeof channelFeed)[number]; compact?: boolean }) {
  return (
    <article className={`channel-card ${compact ? 'compact' : ''}`}>
      <div className="channel-visual">
        <img src={channel.thumbnail} alt={channel.name} />
      </div>
      <div className="channel-info">
        <div className="channel-headline">
          <img src={channel.logo} alt={channel.name} className="channel-logo" />
          <div>
            <span className="eyebrow">{channel.category}</span>
            <h3>{channel.name}</h3>
          </div>
        </div>
        <p>{channel.description}</p>
        <div className="meta-row">
          <span className={`status-pill status-${channel.status}`}>{channel.status}</span>
          <span>{channel.country}</span>
          <span>{channel.language}</span>
        </div>
        <div className="meta-row">
          <span>{channel.currentProgram}</span>
          <span>→ {channel.nextProgram}</span>
        </div>
        <div className="actions-row">
          <Link href={`/channels/${channel.id}`}>View channel</Link>
          {channel.sourceUrl ? <a href={channel.sourceUrl} target="_blank" rel="noreferrer">Official source</a> : null}
        </div>
      </div>
    </article>
  )
}
