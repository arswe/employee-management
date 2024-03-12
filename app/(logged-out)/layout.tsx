import LightDarkToggle from '@/components/ui/light-dark-toggle'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const LoggedOutLayout = ({ children }: Props) => {
  return (
    <>
      <div className='flex flex-col gap-4 min-h-screen items-center justify-center p-28'>
        {children}
      </div>
      <LightDarkToggle className='fixed top-[calc(50%-12px)] right-2' />
    </>
  )
}

export default LoggedOutLayout
