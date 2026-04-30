import { NextResponse } from 'next/server'
import { db } from '@/db/db'
import { trades } from '@/db/schema'

export async function GET() {
  try {
    const result = await db.select().from(trades)

    return NextResponse.json({
      success: true,
      data: result,
    })
  } catch (err) {
    console.error(err)

    return NextResponse.json(
      { error: 'Failed to fetch trades' },
      { status: 500 }
    )
  }
}