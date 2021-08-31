import NextLink from 'next/link'
import Image from 'next/image'
import { PencilAltIcon, TrashIcon, DocumentSearchIcon } from '@heroicons/react/outline'
import { Header } from "../../components/layout/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from '../../components/Pagination';
import usersData from '../../../public/users.json'

export default function Users() {
  const users = usersData;
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex my-6 px-6 max-w-screen-2xl">
        <Sidebar />
        <div className="flex-1 rounded-md bg-white shadow-md p-8">
          <div className="flex mb-8 justify-between items-center">
            <div>
              <h1 className="font-semibold text-lg text-gray-800">Colaboradores</h1>
            </div>
            <NextLink href="/users/create" passHref>
              <a className="text-sm bg-blue-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity">Criar novo</a>
            </NextLink>

          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th scope="col" className="px-6 p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th scope="col" className="px-6 p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                <th scope="col" className="px-6 p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">E-mail</th>
                <th scope="col" className="px-6 p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefone</th>
                <th scope="col" className="px-6 p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lotação</th>
                <th scope="col" className="px-6 p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map(user => (
                <tr key={user.id}>
                  <td className="px-6 py-4 text-gray-800">
                    <Image className="h-9 w-9 rounded-full shadow-md" src={user.avatar} alt={user.name} />
                  </td>
                  <td className="px-6 py-4 text-gray-800">{user.name}</td>
                  <td className="px-6 py-4 text-gray-800">{user.email}</td>
                  <td className="px-6 py-4 text-gray-800">{user.phone}</td>
                  <td className="px-6 py-4 text-gray-800">{user.location}</td>
                  <td className="px-6 py-4 text-center space-x-1">
                    <button className="bg-blue-500 text-white rounded-sm p-1 hover:opacity-90 transition-opacity">
                      <DocumentSearchIcon className="h-4 w-4" />
                    </button>
                    <button className="bg-green-500 text-white rounded-sm p-1 hover:opacity-90 transition-opacity">
                      <PencilAltIcon className="h-4 w-4" />
                    </button>
                    <button className="bg-red-500 text-white rounded-sm p-1 hover:opacity-90 transition-opacity">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination 
              totalCountOfRegisters={200}
              currentPage={1}
              onPageChange={() => console.log('hi')}
            />
        </div>
      </div>
    </div>
  )
}