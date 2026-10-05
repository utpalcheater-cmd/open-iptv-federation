'use client'

import { useState } from 'react'
import { evaluateSubmission } from '@/lib/content-policy'

export function SubmissionForm() {
  const [state, setState] = useState({
    name: '',
    country: '',
    language: '',
    category: '',
    sourceUrl: '',
    description: '',
    rightsDeclaration: false,
    consent: false,
    policyAccepted: false
  })

  const [result, setResult] = useState<ReturnType<typeof evaluateSubmission> | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target

    if (type === 'checkbox') {
      const checked = (event.target as HTMLInputElement).checked
      setState((current) => ({ ...current, [name]: checked }))
      return
    }

    setState((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const verdict = evaluateSubmission(state)
    setResult(verdict)
  }

  return (
    <form className="submission-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label>
          Channel or community name
          <input name="name" value={state.name} onChange={handleChange} />
        </label>
        <label>
          Country
          <input name="country" value={state.country} onChange={handleChange} />
        </label>
        <label>
          Language
          <input name="language" value={state.language} onChange={handleChange} />
        </label>
        <label>
          Category
          <input name="category" value={state.category} onChange={handleChange} />
        </label>
      </div>

      <label>
        Source URL or official stream page
        <input name="sourceUrl" value={state.sourceUrl} onChange={handleChange} />
      </label>

      <label>
        Description
        <textarea name="description" value={state.description} onChange={handleChange} rows={5} />
      </label>

      <div className="checkbox-stack">
        <label><input type="checkbox" name="rightsDeclaration" checked={state.rightsDeclaration} onChange={handleChange} /> Rights and authorization declaration</label>
        <label><input type="checkbox" name="consent" checked={state.consent} onChange={handleChange} /> Consent and contact confirmation</label>
        <label><input type="checkbox" name="policyAccepted" checked={state.policyAccepted} onChange={handleChange} /> Acceptance of content policy</label>
      </div>

      <button className="primary-button" type="submit">Submit for moderation</button>

      {result ? (
        <div className={`policy-result policy-${result.decision.toLowerCase()}`}>
          <h3>{result.decision}</h3>
          <p>{result.summary}</p>
          <ul>
            {result.reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </form>
  )
}
