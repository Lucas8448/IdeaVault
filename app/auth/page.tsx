import { Button } from "@/components/ui/button"
import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"

export default function auth() {
  return (
    <>
      <main className="flex items-center justify-center h-screen ">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Authenticate</CardTitle>
            <CardDescription>Select how you want to authenticate to use the application</CardDescription>
          </CardHeader>
          <CardFooter className="flex">
            <Button className="mx-2" variant="outline">Google<Icons.google className="w-5 h-5 ms-2"/></Button>
            <Button className="mx-2" variant="outline">Github<Icons.gitHub className="w-5 h-5 ms-2"/></Button>
          </CardFooter>
        </Card>
      </main>
    </>
  )
}