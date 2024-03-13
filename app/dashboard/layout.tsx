import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-cols-[250px_1fr] h-screen'>
      <div className='bg-muted'>side panel</div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
