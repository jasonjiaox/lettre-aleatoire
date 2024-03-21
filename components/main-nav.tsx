"use client"

import * as React from "react"
import Link from "next/link"
import {siteConfig} from "@/config/site"
import {Icons} from "@/components/icons"
import {ModeToggle} from "@/components/mode-toggle";
import {MainNavItem} from "@/types";


interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  return (
    <>
      <Link href="/" className="flex flex-row items-center space-x-2">
        <Icons.logo/>
        <span className="inline-block font-bold">
          {siteConfig.name}
        </span>
      </Link>
      <ModeToggle/>
    </>
  )
}
