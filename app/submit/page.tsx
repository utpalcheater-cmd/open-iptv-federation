import { communities } from '@/lib/data'

export default function CommunityPage() {
  return (
    <div className="container page-shell">
      <div className="section-header">
        <div>
          <p className="eyebrow">Community layer</p>
          <h1>Independent communities and creator submissions</h1>
        </div>
      </div>

      <div className="community-grid">
        {communities.map((community) => (
          <article key={community.id} className="community-card large">
            <div className="community-topline">
              <span>{community.category}</span>
              <span className={`status-pill status-${community.status}`}>{community.status}</span>
            </div>
            <h3>{community.name}</h3>
            <p>{community.description}</p>
            <ul>
              <li>{community.location}</li>
              <li>{community.language}</li>
              <li>{community.members.toLocaleString()} members</li>
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}
