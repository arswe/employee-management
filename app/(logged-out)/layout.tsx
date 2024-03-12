import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const LoggedOutLayout = ({ children }: Props) => {
  return <div className='flex flex-col min-h-screen items-center justify-center p-28'>{children}</div>
}

export default LoggedOutLayout
