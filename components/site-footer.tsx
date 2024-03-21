import * as React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import Link from 'next/link'


export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex max-w-7xl flex-col items-center justify-between gap-4 py-6 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-row items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-base font-bold leading-loose md:text-left">
            {siteConfig.name}
          </p>

        </div>
        <div className='text-center space-x-2'>
          <Link className="text-center text-base font-semibold leading-loose md:text-left" href='/terms'>
            Terms
          </Link>
          {' | '}
          <Link className="text-center text-base font-semibold leading-loose md:text-left" href='/privacy'>
            Privacy
          </Link>
          {' | '}
          <a href={`mailto:${siteConfig.mailto}`} className="relative truncate hover:underline">
            {siteConfig.mailto}
          </a>
        </div>
      </div>
    </footer>
  )
}
