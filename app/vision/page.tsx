import Link from "next/link"
import React from "react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function Page() {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Our Vision
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          We are focused on creating a platform for users to collaborate in brainstorming anonymously with others, where only the teacher or host can see who has submitted ideas.
        </p>
      </div>
    </section>
  )
}
