import Link from 'next/link'
import MenuItem from './menu-item'
import MenuTitle from './menu-title'
import { Avatar, AvatarFallback } from './ui/avatar'
import LightDarkToggle from './ui/light-dark-toggle'

const MainMenu = () => {
  return (
    <nav className='bg-muted overflow-auto p-4 flex flex-col'>
      <header className='border-b dark:border-black border-b-zinc-50 pb-4'>
        <MenuTitle />
      </header>

      <div className='py-4 grow'>
        <MenuItem href='/dashboard'>My Dashboard</MenuItem>
        <MenuItem href='/dashboard/teams'>Teams</MenuItem>
        <MenuItem href='/dashboard/employees'>Employees</MenuItem>
        <MenuItem href='/dashboard/account'>Account</MenuItem>
        <MenuItem href='/dashboard/settings'>Settings</MenuItem>
      </div>

      <footer className='flex gap-2 items-center'>
        <Avatar>
          <AvatarFallback className='bg-pink-300 dark:bg-pink-800'>TP</AvatarFallback>
        </Avatar>
        <Link href='/logout' className='hover:underline'>
          Logout
        </Link>

        <LightDarkToggle className='ml-auto' />
      </footer>
    </nav>
  )
}

export default MainMenu
