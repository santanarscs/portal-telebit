
import { MenuIcon } from '@heroicons/react/outline'
import { Profile } from "./Profile"

function Header() {
  return (
    <div className="h-16 flex items-center bg-white shadow-md">
      <div className="max-w-screen-2xl w-full px-6 flex items-center justify-between">
        <div className="flex items-center">
          <button className="lg:hidden lg:mr-1">
            <MenuIcon className="h-6 w-6 "/>
          </button>
          <h1 className="font-bold text-gray-800">ADMIN</h1>
        </div>
        <Profile />
      </div>
    </div>
  )
}

export { Header }