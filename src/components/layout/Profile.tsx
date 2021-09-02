import Image from 'next/image'
import { useRouter } from 'next/router'
function Profile() {
  const router = useRouter()
  return (
    <div className="flex items-center">
      <div className="hidden lg:flex flex-col items-end mr-4">
        <h2 className="text-md font-gray-800">Jhon Doe</h2>
        <small className="text-gray-500 text-xs">jhondoe@telebitbrasil.com</small>
      </div>
      <Image onClick={() => router.push('/profile')} className="cursor-pointer h-9 w-9 rounded-full shadow-md" src="https://robohash.org/abnemoaut.png?size=50x50&set=set2" alt="Usuário logado" width="50" height="50" />

    </div>
  )
}

export { Profile }