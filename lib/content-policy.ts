export function evaluateSubmission(form: {
  name: string
  country: string
  language: string
  category: string
  sourceUrl: string
  description: string
  rightsDeclaration: boolean
  consent: boolean
  policyAccepted: boolean
}) {
  const reasons: string[] = []

  if (!form.name.trim()) reasons.push('Channel name is required.')
  if (!form.country.trim()) reasons.push('Country is required.')
  if (!form.language.trim()) reasons.push('Language is required.')
  if (!form.sourceUrl.trim()) reasons.push('Source URL is required.')
  if (!form.rightsDeclaration) reasons.push('Rights declaration must be confirmed.')
  if (!form.consent) reasons.push('Creator consent must be provided.')
  if (!form.policyAccepted) reasons.push('Policy acceptance is required.')

  const lower = form.description.toLowerCase()
  if (lower.includes('sexual') || lower.includes('kill')) {
    reasons.push('Content description contains terms requiring human review.')
  }

  if (reasons.length === 0) {
    return {
      decision: 'ALLOW' as const,
      summary: 'Submission is structurally complete and aligns with the policy gateway.',
      reasons: ['No material risk indicators detected.'],
      risk: 'low' as const
    }
  }

  if (reasons.length > 2) {
    return {
      decision: 'REVIEW' as const,
      summary: 'The submission requires moderator review before publication.',
      reasons,
      risk: 'medium' as const
    }
  }

  return {
    decision: 'REJECT' as const,
    summary: 'The submission cannot be approved under current policy criteria.',
    reasons,
    risk: 'high' as const
  }
}
