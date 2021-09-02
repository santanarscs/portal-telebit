import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Input } from './forms/Input'
import { DatePicker } from './forms/DatePicker'
import { Button } from './forms/Button'

type UpdateProfileFormData = {
  name: string;
  email: string;
  birthday: string;
  location: string
  password: string;
  confirm_password: string;
}

const updateProfileFormSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  birthday: yup.string(),
  location: yup.string().required('Localização obrigatória'),
  password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([null, yup.ref('password') ], 'As senhas precisam ser iguais')
})


function UpdateProfileForm() {
  const { register, control, handleSubmit, formState} = useForm({
    resolver: yupResolver(updateProfileFormSchema)
  })
  const handleUpdateUser: SubmitHandler<UpdateProfileFormData> = async(data) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
  }
  const { errors } = formState

  return (
    <form onSubmit={handleSubmit(handleUpdateUser)}>
      <div className="flex flex-col lg:flex-row lg:space-x-2 lg:mb-4">
        <Input className="mb-2 lg:mb-0" name="name" placeholder="Nome completo" type="text" error={errors.name} {...register('name')} label="Nome Completo" />
        <Input className="mb-2 lg:mb-0" name="email" placeholder="colaborador@telebitbrasil.com" type="email" error={errors.email} {...register('email')} label="E-mail" />
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-2 lg:mb-4">
        <Input className="mb-2 lg:mb-0" name="location" placeholder="Rio de Janeiro" error={errors.location} {...register('location')} type="text" label="Localização" />
        <DatePicker
          name="birthday"
          label="Data de aniversário"
          control={control}
          placeholder="Data de aniversário"
          isRequired={false}
          error={errors.birthday}

          {...register('birthday')} />
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-2 lg:mb-4">
        <Input className="mb-2 lg:mb-0" name="password" placeholder="*****" type="password" error={errors.password} {...register('password')} label="Senha Atual" />
        <Input className="mb-2 lg:mb-0" name="new_password" placeholder="*****" type="password" error={errors.new_password} {...register('new_password')} label="Nova Senha" />
        <Input className="mb-2 lg:mb-0" name="confirm_password" placeholder="*****" type="password" error={errors.confirm_password} {...register('confirm_password')} label="Confirme a Senha" />
      </div>
      <div className="flex justify-end mt-6">
        <Button className="w-full lg:w-32">Atualizar</Button>
      </div>
    </form> 
  )
}

export { UpdateProfileForm }