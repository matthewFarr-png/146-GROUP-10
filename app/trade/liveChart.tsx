"use client"

import useSWR from "swr"
import { ChartAreaInteractive } from "@/components/example-chart"
import toTrade, { generateBettingChart } from "@/lib/algorithm"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function LiveChart({
  betNames,
}: {
  betId: number
  betNames: [string, string]
}) {
  const { data, isLoading } = useSWR(
    `/api/chart`,
    fetcher,
    {
      refreshInterval: 3000,
      revalidateOnFocus: true,
    }
  )

  if (isLoading) return <p>Loading chart...</p>

  const chartData = generateBettingChart(data.data.map(toTrade), betNames)

  return (
    <ChartAreaInteractive
      chartData={chartData}
      betNames={betNames}
    />
  )
}