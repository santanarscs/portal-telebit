import Image from 'next/image'
import { LogoutIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
function Profile() {
  const router = useRouter()
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-end mr-4">
        <h2 className="text-md font-gray-800">Usuário logado</h2>
        <button className="flex items-center text-red-500 text-sm mt-1/2 hover:opacity-75 transition-opacity">
          <LogoutIcon className="h-4 w-4" />
          Sair
        </button>
      </div>
      <Image onClick={() => router.push('/profile')} className="cursor-pointer h-9 w-9 rounded-full shadow-md" src="https://robohash.org/abnemoaut.png?size=50x50&set=set2" alt="Usuário logado" width="50" height="50" />

    </div>
  )
}

export { Profile }