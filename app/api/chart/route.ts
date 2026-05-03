import { NextRequest, NextResponse } from "next/server"
import { db } from "@/db/db"
import { trades } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("betId")

    if (!id) {
      return NextResponse.json(
        { error: "Missing betId" },
        { status: 400 }
      )
    }

    const result = await db
      .select()
      .from(trades)
      .where(eq(trades.betId, Number(id)))

    return NextResponse.json({
      success: true,
      data: result,
    })
  } catch (err) {
    console.error(err)

    return NextResponse.json(
      { error: "Failed to fetch trades" },
      { status: 500 }
    )
  }
}