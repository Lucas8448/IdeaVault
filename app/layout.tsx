import "@/styles/globals.css"
import { Metadata } from "next"
import React from "react"
import { ClerkProvider } from '@clerk/nextjs'
import {dark} from "@clerk/themes";

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import { Socket } from "@/components/context/Socket"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <ClerkProvider appearance={dark}>
        <html lang="en" suppressHydrationWarning>
          <head />
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
            )}
          >
            <Socket>
              <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <div className="relative flex flex-col min-h-screen">
                  <SiteHeader />
                  <div className="flex-1">{children}
                    <Analytics />
                    <SpeedInsights />
                  </div>
                </div>
              </ThemeProvider>
            </Socket>
          </body>
        </html>
      </ClerkProvider>
    </>
  )
}
