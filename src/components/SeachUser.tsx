import { SearchIcon } from '@heroicons/react/solid'

type SearchUser = {
  className?: string;
}

function SearchUser({className}: SearchUser) {
  return (
    <div
      className={`flex align-center rounded-sm relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${className}`}
    >
      <SearchIcon className="h-4 w-4 text-gray-500 mr-2" />
      <input
        className="focus:outline-none w-full"
        type="text" 
        placeholder="Busque por um usuário"
      />
    </div>
  )
}

export { SearchUser }