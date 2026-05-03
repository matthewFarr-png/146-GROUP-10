import { NextResponse } from "next/server"
import { db } from "@/db/db"
import { trades } from "@/db/schema"

export async function POST(req: Request) {
  
  try {

    const { side, amount, betId, address } = await req.json()

    if (!side || !amount || !betId) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      )
    }

    const result = await db
      .insert(trades)
      .values({
        userId: address,
        betId: Number(betId),
        side,
        amount: String(amount),
      })
      .returning()

    return NextResponse.json({
      success: true,
      data: result[0],
    })
  } catch (err) {
    console.error(err)

    return NextResponse.json(
      { error: "Failed to insert trade" },
      { status: 500 }
    )
  }
}