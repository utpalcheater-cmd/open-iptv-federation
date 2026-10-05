import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ ok: true, status: 'healthy', service: 'open-iptv-federation' }, { status: 200 })
}
