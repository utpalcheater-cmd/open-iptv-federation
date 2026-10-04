import { cookies } from 'next/headers'

export function isAdminAuthenticated() {
  const cookieStore = cookies()
  const session = cookieStore.get('openiptv_admin')
  return session?.value === 'authenticated'
}

export function requireAdmin() {
  if (!isAdminAuthenticated()) {
    return false
  }

  return true
}

export function setAdminSession() {
  return { name: 'openiptv_admin', value: 'authenticated', httpOnly: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 8 }
}
