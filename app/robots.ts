import { notFound } from 'next/navigation'

type PolicyKey = 'privacy' | 'content-policy' | 'advertising-policy' | 'acknowledgement' | 'how-we-operate' | 'federation-policy' | 'security'

const policyMap: Record<PolicyKey, { title: string; text: string }> = {
  privacy: {
    title: 'Privacy',
    text: 'We collect the minimum operational and moderation data needed to keep the platform safe, transparent and functional. Analytics are limited to high-level aggregate reporting and service health. We do not place hidden tracking code on broadcaster or community pages beyond what is necessary for performance and security.'
  },
  'content-policy': {
    title: 'Content Policy',
    text: 'The federation permits only authorized, lawful and context-appropriate source integrations. We do not accept sexual or exploitative material, child sexual abuse material, extremist propaganda, hateful content, privacy violations, or deceptive or fraudulent submissions. These are reviewed according to a policy gateway that prioritizes human moderation in uncertain or high-risk situations.'
  },
  'advertising-policy': {
    title: 'Advertising Policy',
    text: 'Advertising must be clearly labelled, non-deceptive and compatible with platform safety and public trust. We do not permit misleading claims, covert tracking, or deceptive sponsorship that could be confused with editorial content.'
  },
  acknowledgement: {
    title: 'Acknowledgement',
    text: 'The Federation serves as a discovery and integration layer. It respects all broadcaster, community and creator identities, and it does not acquire or rewrite their branding, media or identity without authorization.'
  },
  'how-we-operate': {
    title: 'How We Operate',
    text: 'We connect viewers to authorized sources and maintain clear metadata, schedule intelligence and transparent moderation. All channel and community integrations remain independently controlled, and decisions are documented in moderation records.'
  },
  'federation-policy': {
    title: 'Federation Policy',
    text: 'Independent channels and communities maintain their own authority and infrastructure. The Federation presents them as separate identities while preserving their source control, consent and rights status.'
  },
  security: {
    title: 'Security',
    text: 'We use secure operational practices, input validation, rate limiting, strict access control, environment-based configuration, and a careful review framework for all integrations. Secrets are not committed to source code or public documentation.'
  }
}

export default function PolicyPage({ params }: { params: { slug: string } }) {
  const key = params.slug as PolicyKey
  const page = policyMap[key]

  if (!page) {
    notFound()
  }

  return (
    <div className="container page-shell narrow-shell">
      <div className="panel policy-panel">
        <p className="eyebrow">Public policy</p>
        <h1>{page.title}</h1>
        <p>{page.text}</p>
      </div>
    </div>
  )
}
