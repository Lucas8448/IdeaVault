'use client'

import { useRouter } from "next/navigation"
import React, { useEffect } from "react"
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

export default function Page() {
  const router = useRouter()
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex flex-col items-start gap-2">
        <Card className="m-2">
          <CardHeader>
            <CardTitle>Choose a name</CardTitle>
          </CardHeader>
          <CardContent>
            
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
