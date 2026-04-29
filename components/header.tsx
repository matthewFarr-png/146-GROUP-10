import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl font-semibold tracking-tight">
            BlockBet
          </h1>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="outline">Login</Button>
          <Button>Sign Up</Button>
        </div>

      </div>
    </header>
  )
}