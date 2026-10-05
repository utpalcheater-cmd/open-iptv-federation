import { channelFeed, moderationLog } from '@/lib/data'

export default function AdminPage() {
  return (
    <div className="container page-shell">
      <div className="section-header">
        <div>
          <p className="eyebrow">Operator panel</p>
          <h1>Admin overview</h1>
        </div>
      </div>

      <div className="admin-grid">
        <div className="panel">
          <h3>Operations</h3>
          <ul className="admin-list">
            <li>Channels: {channelFeed.length}</li>
            <li>Moderation queue: {moderationLog.length}</li>
            <li>Policy decisions: REVIEW / ALLOW</li>
            <li>Emergency override: Enabled</li>
          </ul>
        </div>

        <div className="panel">
          <h3>Priority schedule</h3>
          <ul className="admin-list">
            {channelFeed.slice(0, 4).map((channel) => (
              <li key={channel.id}>{channel.name} — P{channel.priority}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
