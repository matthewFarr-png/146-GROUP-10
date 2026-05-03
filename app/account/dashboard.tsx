"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ethereum: any
  }
}

function Dashboard() {
  const [wallet, setWallet] = useState<string | null>(null)

  async function connectWallet() {
    if (!window.ethereum) {
      alert("MetaMask is not installed")
      return
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    })

    setWallet(accounts[0])
  }

  useEffect(() => {
    async function checkWallet() {
      if (!window.ethereum) return

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      })

      if (accounts.length > 0) {
        setWallet(accounts[0])
      }
    }

    checkWallet()
  }, [])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Account Dashboard</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">MetaMask Wallet</p>

          <p className="mt-1 break-all text-sm font-medium">
            {wallet ? wallet : "No wallet connected"}
          </p>
        </div>

        <Button onClick={connectWallet} className="w-full">
          {wallet ? "Wallet Connected" : "Connect MetaMask"}
        </Button>
      </CardContent>
    </Card>
  )
}

export default Dashboard