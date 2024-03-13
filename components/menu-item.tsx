'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  href: string
}

const MenuItem = ({ children, href }: Props) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      className={cn(
        'block hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground',
        isActive &&
          'bg-primary hover:bg-primary dark:bg-primary hover:text-foreground text-foreground'
      )}
      href={href}
    >
      {children}
    </Link>
  )
}

export default MenuItem
