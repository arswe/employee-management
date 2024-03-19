'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useContext } from 'react'
import { DrawerContext } from './ui/drawer'

interface Props {
  children: ReactNode
  href: string
}

const MenuItem = ({ children, href }: Props) => {
  const { onClose } = useContext(DrawerContext)
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li>
      <Link
        className={cn(
          'block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground',
          isActive &&
            'bg-primary hover:bg-primary dark:bg-primary hover:text-primary-foreground text-primary-foreground'
        )}
        href={href}
        onClick={onClose}
      >
        {children}
      </Link>
    </li>
  )
}

export default MenuItem
