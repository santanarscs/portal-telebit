import { Profile } from "./Profile"

function Header() {
  return (
    <div className="h-16 flex items-center bg-white shadow-md">
      <div className="w-full px-6 flex items-center justify-between">
        <h1 className="font-bold text-gray-800">ADMIN</h1>
        <Profile />
      </div>
    </div>
  )
}

export { Header }