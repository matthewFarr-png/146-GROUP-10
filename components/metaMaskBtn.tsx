"use client"

import { IoWalletOutline } from "react-icons/io5"
import { Button } from "./ui/button"
import { useSDK } from "@metamask/sdk-react"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import { formatAddress } from "@/lib/tools"

export const ConnectWalletButton = () => {
  const { sdk, connected, connecting, account } = useSDK()

  const connect = async () => {
    try {
      await sdk?.connect()
    } catch (err) {
      console.warn("No accounts found", err)
    }
  }

  const disconnect = async () => {
    try {
      await sdk?.terminate()
    } catch (err) {
      console.warn("Failed to disconnect", err)
    }
  }

  return (
    <div className="relative">
      {connected ? (
        <Popover>
          <PopoverTrigger asChild>
            <div className="border-2 py-2 px-4">
              {formatAddress(account)}
            </div>
          </PopoverTrigger>

          <PopoverContent className="w-44 p-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600 hover:text-red-700"
              onClick={disconnect}
            >
              Disconnect
            </Button>
          </PopoverContent>
        </Popover>
      ) : (
        <Button disabled={connecting} onClick={connect}>
          <IoWalletOutline className="mr-2 h-4 w-4" />
          {connecting ? "Connecting..." : "Connect Wallet"}
        </Button>
      )}
    </div>
  )
}