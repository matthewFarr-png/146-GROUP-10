import { ChartAreaInteractive } from '@/components/example-chart'




function Chart() {
  return (
    <div className='w-full p-4 max-w-7xl'>
        <h1 className="text-2xl font-bold mb-4">Sacramento St. Vs Idaho</h1>
        <p className="text-muted-foreground pb-4">
          Live betting odds and statistics for the upcoming game.
        </p>
        <div className="w-full">
           <ChartAreaInteractive />
        </div>
    </div>
  )
}

export default Chart