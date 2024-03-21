import { marketingConfig } from "@/config/marketing"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import React from "react";

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container flex max-w-7xl flex-row items-center justify-between gap-4 border-b py-6 md:h-24 md:flex-row md:py-0">
        <MainNav items={marketingConfig.mainNav}/>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter className="border-t" />
    </div>
  )
}
