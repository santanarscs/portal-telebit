import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/router';

import { Button } from "../components/forms/Button";
import { SubmitHandler, useForm } from 'react-hook-form';
import React from 'react';
import { Input } from '../components/forms/Input';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

export default function Login() {
  const router = useRouter()
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async data => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    await router.push('/dashboard')
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">Entre com a sua conta</h2>
        </div>
        <div className="rounded-sm shadow-md bg-white p-10 space-y-4">
          <form onSubmit={handleSubmit(handleSignIn)}>
            <Input 
              name="email"
              error={errors.email}
              type="email"
              label="E-mail"
              className="mb-4"
              placeholder="Seu e-mail"
              {...register('email')}
            />
            <Input
              name="password"
              label="Senha"
              type="password"
              placeholder="Sua senha"
              error={formState.errors.password}
              className="mb-4"
              {...register('password')}
            />
            <Button className="w-full" isLoading={formState.isSubmitting}>Entrar</Button>
          </form>
        </div>
      </div>

    </div>
  )
}