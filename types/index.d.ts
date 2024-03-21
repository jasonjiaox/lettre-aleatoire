
export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SiteConfig = {
  name: string
  nameFull: string
  description: string
  url: string
  urlNoHttp: string
  mailto: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export type MarketingConfig = {
  mainNav: MainNavItem[]
}
