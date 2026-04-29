"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-06-30T00:00:00", value: 142 },
  { date: "2024-06-30T00:05:00", value: 378 },
  { date: "2024-06-30T00:10:00", value: 95 },
  { date: "2024-06-30T00:15:00", value: 410 },
  { date: "2024-06-30T00:20:00", value: 267 },
  { date: "2024-06-30T00:25:00", value: 333 },
  { date: "2024-06-30T00:30:00", value: 121 },
  { date: "2024-06-30T00:35:00", value: 489 },
  { date: "2024-06-30T00:40:00", value: 210 },
  { date: "2024-06-30T00:45:00", value: 356 },
  { date: "2024-06-30T00:50:00", value: 178 },
  { date: "2024-06-30T00:55:00", value: 402 },
  { date: "2024-06-30T01:00:00", value: 289 },
  { date: "2024-06-30T01:05:00", value: 134 },
  { date: "2024-06-30T01:10:00", value: 365 },
  { date: "2024-06-30T01:15:00", value: 222 },
  { date: "2024-06-30T01:20:00", value: 497 },
  { date: "2024-06-30T01:25:00", value: 310 },
  { date: "2024-06-30T01:30:00", value: 88 },
  { date: "2024-06-30T01:35:00", value: 276 },
  { date: "2024-06-30T01:40:00", value: 415 },
  { date: "2024-06-30T01:45:00", value: 199 },
  { date: "2024-06-30T01:50:00", value: 342 },
  { date: "2024-06-30T01:55:00", value: 153 },
  { date: "2024-06-30T02:00:00", value: 468 },
  { date: "2024-06-30T02:05:00", value: 231 },
  { date: "2024-06-30T02:10:00", value: 384 },
  { date: "2024-06-30T02:15:00", value: 120 },
  { date: "2024-06-30T02:20:00", value: 259 },
  { date: "2024-06-30T02:25:00", value: 430 },
  { date: "2024-06-30T02:30:00", value: 167 },
  { date: "2024-06-30T02:35:00", value: 398 },
  { date: "2024-06-30T02:40:00", value: 284 },
  { date: "2024-06-30T02:45:00", value: 91 },
  { date: "2024-06-30T02:50:00", value: 360 },
  { date: "2024-06-30T02:55:00", value: 248 },
  { date: "2024-06-30T03:00:00", value: 479 },
  { date: "2024-06-30T03:05:00", value: 305 },
  { date: "2024-06-30T03:10:00", value: 140 },
  { date: "2024-06-30T03:15:00", value: 270 },
  { date: "2024-06-30T03:20:00", value: 420 },
  { date: "2024-06-30T03:25:00", value: 185 },
  { date: "2024-06-30T03:30:00", value: 350 },
  { date: "2024-06-30T03:35:00", value: 160 },
  { date: "2024-06-30T03:40:00", value: 495 },
  { date: "2024-06-30T03:45:00", value: 240 },
  { date: "2024-06-30T03:50:00", value: 375 },
  { date: "2024-06-30T03:55:00", value: 130 },
  { date: "2024-06-30T04:00:00", value: 265 },
  { date: "2024-06-30T04:05:00", value: 440 },
]
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
                    <Area
                    dataKey="value"
                    type="natural"
                    stroke="#00f5ff"
                    strokeWidth={2}
                    fill="url(#neon)"
                    />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
