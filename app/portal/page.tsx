import { currentUser } from '@clerk/nextjs'
import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function Page() {
  const user = await currentUser()
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Welcome, {user?.firstName}
        </h1>
        <Card className="m-2">
          <CardHeader>
            <CardTitle>Get started</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="default">
              <Link href="/portal/session/join">Join a session</Link>
            </Button>
            <Button variant="outline" className="mx-2">
              <Link href="/portal/session/new">Create new session</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
