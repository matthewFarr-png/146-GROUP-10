import Header from "@/components/header"
import Chart from "./chart"
import Orders from "./orders"
import { db } from "@/db/db"
import { bets } from "@/db/schema"
import History from "./history"


async function Page() {

const data = await db.select().from(bets)

if(!data || data.length === 0) {
  return <div>No bets available</div>
}

const data2 = data[0]

  
  return (
    <div>
      <Header />

      <div className="w-full px-4 py-6">
        <div className="flex flex-col md:flex-row gap-4 max-w-7xl mx-auto">
          
          {/* Chart */}
          <div className="w-full md:w-3/4">
            <Chart />
          </div>

          {/* Orders */}
          <div className="w-full md:w-1/4">
            <Orders data={data2} />
            
            <History />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page