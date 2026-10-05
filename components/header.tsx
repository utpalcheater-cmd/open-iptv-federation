import Link from 'next/link'

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Open IPTV Federation home">
          <span className="brand-mark">DJ</span>
          <span className="brand-copy">
            <strong>Open IPTV</strong>
            <small>Federation</small>
          </span>
        </Link>

        <nav className="nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/live">Live</Link>
          <Link href="/community">Communities</Link>
          <Link href="/submit">Submit</Link>
          <Link href="/moderation">Moderation</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  )
}
