import { SubmissionForm } from '@/components/submission-form'

export default function SubmissionPage() {
  return (
    <div className="container page-shell narrow-shell">
      <div className="section-header">
        <div>
          <p className="eyebrow">SUBMIT → POLICY CHECK → ALLOW / REVIEW / REJECT → PUBLISH</p>
          <h1>Community source submission</h1>
        </div>
      </div>

      <SubmissionForm />
    </div>
  )
}
