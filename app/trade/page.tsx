import Header from "@/components/header"
import Chart from "./chart"
import Orders from "./orders"

function Page() {
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
            <Orders />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page