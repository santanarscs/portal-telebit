
import { MenuIcon } from '@heroicons/react/outline'
import { useSidebarDrawer } from '../../context/SidebarDrawerProps'
import { Profile } from "./Profile"

function Header() {
  const { toggleStatusSidebar } = useSidebarDrawer()

  return (
    <div className="h-16 flex items-center bg-white shadow-md">
      <div className="max-w-screen-2xl w-full m-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={toggleStatusSidebar} className="lg:hidden mr-2">
            <MenuIcon className="h-6 w-6 "/>
          </button>
          <h1 className="font-bold text-gray-800 text-2xl">Admin<span className="font-bold text-blue-500 text-3xl">.</span></h1>
        </div>
        <Profile />
      </div>
    </div>
  )
}

export { Header }