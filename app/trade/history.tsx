'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState } from "react"
import useSWR from 'swr'
import {Trade} from '@/db/types'





function History() {

    const [history, setHistory] = useState([])
    const { data } = useSWR('/api/history', url => fetch(url).then(r => r.json()), {
    refreshInterval: 5000,
    })
    const trades: Trade[] = data?.data ?? []


  return (
    <div className="max-w-4xl mx-auto py-4">
        <div>
            <h2 className="text-md font-semibold">Trade History</h2>
        <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">User Id</TableHead>
                <TableHead className="w-[100px]">Trade</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
          {trades.map((trade) => (
            <TableRow key={trade.id}>
              <TableCell className="font-medium">{trade.userId}</TableCell>
              <TableCell className="text-right">{trade.side}</TableCell>
              <TableCell className="text-right">${trade.amount}</TableCell>
            </TableRow>
          ))}
            </TableBody>
            </Table>
    </div>
    </div>
  )
}

export default History