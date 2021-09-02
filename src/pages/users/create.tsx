import Link from 'next/link'
import { useRouter } from "next/router";
import { PencilAltIcon, TrashIcon, DocumentSearchIcon } from '@heroicons/react/outline'
import { Header } from "../../components/layout/Header";
import { Sidebar } from "../../components/Sidebar";

import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../../components/forms/Input';
import { Button } from '../../components/forms/Button';
import { DatePicker } from '../../components/forms/DatePicker';
import { Switch } from '../../components/forms/Switch';

type CreateUserFormData = {
  name: string;
  email: string
  avatar: string;
  birthday: string;
  location: string;
  isAdmin: boolean;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  avatar: yup.string(),
  birthday: yup.string(),
  location: yup.string().required('Localização obrigatória'),
  isAdmin: yup.boolean()
})

export default function Create() {
  const router = useRouter()

  const { register, control, handleSubmit, formState} = useForm({
    resolver: yupResolver(createUserFormSchema)
  })
  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    router.push('/users')
  }
  const { errors } = formState

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex my-6 px-6 max-w-screen-2xl">
        <Sidebar />
        <div className="flex-1 rounded-md bg-white shadow-md p-8">
          <div className="flex mb-8 justify-between items-center">
            <h1 className="font-semibold text-lg text-gray-800">Novo colaborador</h1>
          </div>
          <form onSubmit={handleSubmit(handleCreateUser)}>
            <div className="flex space-x-2 mb-4">
              <Input name="name" placeholder="Nome completo" type="text" error={errors.name} {...register('name')} label="Nome Completo" />
              <Input name="email" placeholder="colaborador@telebitbrasil.com" type="email" error={errors.email} {...register('email')} label="E-mail" />
            </div>
            <div className="flex space-x-2 mb-4">
              <Input name="location" placeholder="Rio de Janeiro" error={errors.location} {...register('location')} type="text" label="Localização" />
              <DatePicker
                name="birthday"
                label="Data de aniversário"
                control={control}
                placeholder="Data de aniversário"
                isRequired={false}
                error={errors.birthday}

                {...register('birthday')} />
            </div>
            <div>
              <Switch
                name="isAdmin"
                label="Administrador"
                control={control}
                error={errors.isAdmin}
                {...register('birthday')}
              />
            </div>
            <div className=" flex justify-end mt-6">
              <Button className="w-32" isLoading={formState.isSubmitting}>Salvar</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}