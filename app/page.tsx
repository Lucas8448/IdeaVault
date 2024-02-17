import Link from "next/link"
import React from "react"

import { siteConfig } from "@/config/site"
import { buttonVariants, Button } from "@/components/ui/button"

export default function Page() {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Brainstorming <br className="hidden sm:inline" />
          Easy and secure
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          The best solution for private brainstorming sessions. Express what you really feel!
        </p>
        <Link href="/portal">
          <Button className={buttonVariants({ variant: 'default' })}>Get Started</Button>
        </Link>
      </div>
    </section>
  )
}
