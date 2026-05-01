import { ChartAreaInteractive } from '@/components/example-chart'
import { db } from '@/db/db'
import { bets, trades } from '@/db/schema'
import { Trade } from '@/db/types'
import { generateBettingChart } from '@/lib/algorithm'
import { LiveChart } from './liveChart'




async function Chart() {
  const data = await db.select().from(bets)

  const bet = data[0]
  

  return (
    <div className='w-full p-4 max-w-7xl'>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">{bet.title}</h1>
          <p className="text-muted-foreground">
            Live betting odds and statistics for the upcoming game.
          </p>
        </div>
        {/* <h2 className="text-sm text-black font-bold">
          Time Left: 12:00 PM
        </h2> */}
      </div>
        <div className="w-full">
          <LiveChart betId={bet.id} betNames={[bet.optionA, bet.optionB]} />
        </div>
    </div>
  )
}

export default Chart