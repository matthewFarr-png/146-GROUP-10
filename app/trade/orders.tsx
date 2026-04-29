'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import {Bet} from '@/db/types'
import { toast } from "sonner"

type OrdersProps = {
  data: Bet
}

function Orders({ data }: OrdersProps) {
  const [active, setActive] = useState<string | null>(null)
  const [amount, setAmount] = useState('')  
  const [loading, setLoading] = useState(false)

  async function handleTrade() {
    setLoading(true)

    try 
    {await fetch('/api/trade', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        side: active,
        amount: amount || '0',
        questionId: data.id,
      }),
    })
  }   catch (err) {
      toast.error('Failed to place trade')
    }
    toast.success('Trade placed successfully', { position: "top-center" })


    setLoading(false)
  }


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
              onClick={() => {
                setActive(data.optionA) }
              }
              className={`flex-1 py-4 text-white ${
                active === data.optionA
                  ? 'bg-green-700 hover:bg-green-800'
                  : 'bg-gray-300 hover:bg-gray-400 text-black'
              }`}
            >
              {data.optionA} 
            </Button>

            {/* Idaho */}
            <Button
              onClick={() => setActive(data.optionB)}
              className={`flex-1 py-4 text-white ${
                active === data.optionB
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-gray-300 hover:bg-gray-400 text-black'
              }`}
            >
              {data.optionB}
            </Button>

          </div>

          <div className="pt-4">
            <Input placeholder="$0" value={amount} onChange={(e) => setAmount(e.target.value)}/>
          </div>

          <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white" onClick={handleTrade} disabled={loading || !active || !amount}> 
            {loading ? 'Placing...' : 'Trade'}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Orders