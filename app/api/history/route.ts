import { NextResponse } from 'next/server'
import { db } from '@/db/db'
import { trades } from '@/db/schema'
import { desc, asc } from 'drizzle-orm';

export async function GET() {
  try {
    const result = await db.select().from(trades).limit(10).orderBy(desc(trades.createdAt))

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