import { NextResponse } from 'next/server'

const expectedPassword = process.env.ADMIN_PASSWORD || 'change-me-in-production'

export async function POST(request: Request) {
  const payload = await request.json()

  if (payload.password !== expectedPassword) {
    return NextResponse.json({ ok: false, message: 'Invalid password.' }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true }, { status: 200 })
  response.cookies.set('openiptv_admin', 'authenticated', {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8
  })

  return response
}
