import { NextResponse } from 'next/server'
import { db } from '@/db/db'
import { trades } from '@/db/schema'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { side, amount, questionId } = body
    const userid = 123
    const betid = 123

    if (!side || !amount) {
      return NextResponse.json(
        { error: 'Missing fields' },
        { status: 400 }
      )
    }

    const result = await db.insert(trades)
    .values({
    userId: userid,
    betId: betid,
    side: side,
    amount: amount,
    }).returning()

    return NextResponse.json({
      success: true,
      data: result[0],
    })

  } catch (err) {
    console.error(err)

    return NextResponse.json(
      { error: 'Failed to insert trade' },
      { status: 500 }
    )
  }
}