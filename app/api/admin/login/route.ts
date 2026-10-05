import { NextResponse } from 'next/server'
import { evaluateSubmission } from '@/lib/content-policy'

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const result = evaluateSubmission(payload)

    return NextResponse.json({ ok: true, result }, { status: 200 })
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid submission payload.' }, { status: 400 })
  }
}
