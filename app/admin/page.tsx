import { moderationLog } from '@/lib/data'

export default function ModerationPage() {
  return (
    <div className="container page-shell">
      <div className="section-header">
        <div>
          <p className="eyebrow">Moderation</p>
          <h1>Decision records and rights review</h1>
        </div>
      </div>

      <div className="stack-list full-width">
        {moderationLog.map((entry) => (
          <div key={entry.id} className="mini-card">
            <div className="mini-topline">
              <span>{entry.decision}</span>
              <small>{entry.createdAt}</small>
            </div>
            <h3>{entry.title}</h3>
            <p>{entry.notes}</p>
            <ul>
              <li>Submitter: {entry.submitter}</li>
              <li>Reviewer: {entry.reviewer}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
