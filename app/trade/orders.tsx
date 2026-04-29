'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

function Orders() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="w-full pt-16">
      <Card>
        <CardHeader>
      <CardTitle>Trade Options</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex w-full gap-2">

            {/* Sacramento */}
            <Button
              onClick={() => setActive('Sacramento')}
              className={`flex-1 py-4 text-white ${
                active === 'Sacramento'
                  ? 'bg-green-700 hover:bg-green-800'
                  : 'bg-gray-300 hover:bg-gray-400 text-black'
              }`}
            >
              Sacramento State
            </Button>

            {/* Idaho */}
            <Button
              onClick={() => setActive('Idaho')}
              className={`flex-1 py-4 text-white ${
                active === 'Idaho'
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-gray-300 hover:bg-gray-400 text-black'
              }`}
            >
              Idaho
            </Button>

          </div>

          <div className="pt-4">
            <Input placeholder="$0" />
          </div>

          <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
            Trade
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Orders