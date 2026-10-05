import Link from 'next/link'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Open IPTV Federation</h3>
          <p>Authorized sources, independent communities, transparent moderation and a live television standard.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link href="/live">Live</Link></li>
            <li><Link href="/community">Communities</Link></li>
            <li><Link href="/submit">Submit a source</Link></li>
          </ul>
        </div>
        <div>
          <h4>Policies</h4>
          <ul>
            <li><Link href="/policies/privacy">Privacy</Link></li>
            <li><Link href="/policies/content-policy">Content Policy</Link></li>
            <li><Link href="/policies/security">Security</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
