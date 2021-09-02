import NextLink from 'next/link'
import Image from 'next/image'
import { PencilAltIcon, TrashIcon, CogIcon } from '@heroicons/react/outline'
import { Header } from "../../../components/layout/Header";
import { Sidebar } from "../../../components/Sidebar";
import usersData from '../../../../public/users.json'
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { Dropdown } from '../../../components/Dropdown';
import { DropdownItem } from '../../../components/Dropdown/Item';

export default function Detail({user}) {
  const router = useRouter()
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex my-6 px-6 max-w-screen-2xl">
        <Sidebar />
        <div className="flex-1 rounded-sm bg-white shadow-md p-8">
          <div className="flex mb-8 justify-between items-center">
            <div className="flex items-center justify-between w-full">
              <h1 className="font-semibold text-lg text-gray-800">Detalhe Colaborador</h1>
              <Dropdown label="Opções">
                <DropdownItem  label="Editar" icon={PencilAltIcon} />
                <DropdownItem  label="Resetar Senha" icon={CogIcon} />
                <DropdownItem  label="Remover" icon={TrashIcon} />
              </Dropdown>
            </div>
          </div>
          <Image className="rounded-full" src={user.avatar} width="150" height="150" alt={user.name}/>
          <ul className="text-sm space-y-2 mt-3">
            <li><strong>Nome:</strong> <span>{user.name}</span></li>
            <li><strong>Data de Aniversário:</strong> <span>{user.birthday}</span> </li>
            <li><strong>E-mail:</strong> <span>{user.email}</span> </li>
            <li><strong>Telefone:</strong> <span>{user.phone}</span> </li>
            <li><strong>Localização: </strong> <span>{user.location}</span> </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  const user = usersData.find(user => user.id === +id)

  return {
    props: {
      user
    }
  }  
}