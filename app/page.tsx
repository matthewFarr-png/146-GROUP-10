import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
          <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl">Sac State Decentralized Betting Platform</h1>
      <div className="py-4">
      <Link href="/trade">
        <Button>Get Started!</Button>
      </Link>
      </div>
    </div>

    </div>
  );
}
