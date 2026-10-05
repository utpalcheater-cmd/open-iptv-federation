'use client'

import { useState } from 'react'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    })

    if (!response.ok) {
      setError('Authentication failed. Use the configured administrator password.')
      return
    }

    window.location.href = '/admin'
  }

  return (
    <div className="container page-shell narrow-shell">
      <div className="panel auth-panel">
        <p className="eyebrow">Secure operator access</p>
        <h1>Admin login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Administrator password
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          <button className="primary-button" type="submit">Sign in</button>
          {error ? <p className="error-message">{error}</p> : null}
        </form>
      </div>
    </div>
  )
}
