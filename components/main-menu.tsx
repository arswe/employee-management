import MenuItem from './menu-item'
import MenuTitle from './menu-title'

const MainMenu = () => {
  return (
    <div className='bg-muted overflow-auto p-4'>
      <div className='border-b dark:border-black border-b-zinc-50 pb-4'>
        <MenuTitle />
      </div>

      <div>
        <MenuItem href='/dashboard'>My Dashboard</MenuItem>
        <MenuItem href='/dashboard/teams'>Teams</MenuItem>
        <MenuItem href='/dashboard/employees'>employees</MenuItem>
        <MenuItem href='/dashboard/account'>account</MenuItem>
        <MenuItem href='/dashboard/settings'>settings</MenuItem>
      </div>
    </div>
  )
}

export default MainMenu
