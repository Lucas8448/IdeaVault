'use client'

import { useRouter } from "next/navigation"
import React, { useMemo } from "react"
import { useAuth } from "@/components/context/Auth"

export default function Page() {
  const auth = useAuth()
  const router = useRouter()
  
  useMemo(() => {
    if (auth.currentUser == null) {
      router.push('/login');
    }
  }, [auth.currentUser, router]);
  
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Welcome, {auth.currentUser && auth.currentUser.displayName}
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          We are focused on creating a platform for users to collaborate in brainstorming anonymously with others, where only the teacher or host can see who has submitted ideas.
        </p>
      </div>
    </section>
  )
}
