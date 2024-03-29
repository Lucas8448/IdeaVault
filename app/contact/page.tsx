import Link from "next/link"
import React from "react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function Page() {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Contact
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Email: lucas.bateson@gmail.com <br className="hidden sm:inline" />
          Discord: battlelord_
        </p>
      </div>
    </section>
  )
}
