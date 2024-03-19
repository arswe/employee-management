import MainMenu from '@/components/main-menu'
import MenuTitle from '@/components/menu-title'
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid md:grid-cols-[250px_1fr] h-screen'>
      <MainMenu className='hidden md:flex' />
      <div className='p-4 block md:hidden sticky top-0 left-0 bg-background border-b border-border'>
        <MenuTitle />
      </div>

      <div className='overflow-auto py-2 px-4'>
        <h1 className='pb-4'> Welcome back, AbdurRahman</h1>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
