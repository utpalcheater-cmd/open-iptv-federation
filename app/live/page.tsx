import Link from 'next/link'
import { notFound } from 'next/navigation'
import { channelFeed } from '@/lib/data'

export function generateStaticParams() {
  return channelFeed.map((channel) => ({ slug: channel.id }))
}

export default function ChannelDetailPage({ params }: { params: { slug: string } }) {
  const channel = channelFeed.find((item) => item.id === params.slug)

  if (!channel) {
    notFound()
  }

  return (
    <article className="container channel-page">
      <div className="channel-hero">
        <div className="channel-image-wrap">
          <img src={channel.thumbnail} alt={channel.name} />
        </div>
        <div className="channel-summary">
          <div className="channel-headline">
            <img src={channel.logo} alt={channel.name} className="channel-logo large" />
            <div>
              <p className="eyebrow">{channel.category}</p>
              <h1>{channel.name}</h1>
            </div>
          </div>
          <p>{channel.description}</p>
          <div className="meta-row">
            <span className={`status-pill status-${channel.status}`}>{channel.status}</span>
            <span>{channel.country}</span>
            <span>{channel.language}</span>
          </div>
          <div className="detail-actions">
            {channel.embedUrl ? (
              <a href={channel.embedUrl} target="_blank" rel="noreferrer" className="primary-button">Open official embed</a>
            ) : null}
            {channel.youtubeUrl ? (
              <a href={channel.youtubeUrl} target="_blank" rel="noreferrer" className="secondary-button">YouTube</a>
            ) : null}
            <Link href="/live" className="text-link">Back to live</Link>
          </div>
        </div>
      </div>

      <div className="channel-body-grid">
        <section className="panel">
          <h2>Current programming</h2>
          <ul className="programme-list">
            <li><strong>Now:</strong> {channel.currentProgram}</li>
            <li><strong>Next:</strong> {channel.nextProgram}</li>
            <li><strong>Source policy:</strong> {channel.isOfficial ? 'Official federation source' : 'Independent source approval managed by the federation'}</li>
          </ul>
        </section>

        <section className="panel">
          <h2>Source identity</h2>
          <p>We keep the broadcaster identity unchanged and present the source according to its authorized access method. We do not replace logos, thumbnails or branding without source authorization.</p>
          <a href={channel.sourceUrl} target="_blank" rel="noreferrer" className="text-link">Official source</a>
        </section>
      </div>

      {channel.embedUrl ? (
        <section className="player-shell panel">
          <iframe
            src={channel.embedUrl}
            title={`${channel.name} live player`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </section>
      ) : null}
    </article>
  )
}
