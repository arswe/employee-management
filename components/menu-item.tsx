'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  children: React.ReactNode
  href: string
}

const MenuItem = ({ children, href }: Props) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return <Link href={href}>{children}</Link>
}

export default MenuItem
