import { forwardRef, ForwardRefRenderFunction } from 'react'

import { FieldError } from 'react-hook-form'

type InputProps =  {
  name: string;
  label?: string;
  error?: FieldError
  className?: string;
  placeholder?:string;
  type?: 'text' | 'email' | 'password' | 'number'
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {name, label, error = null, className, type, placeholder, ...rest}, ref
) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && <label htmlFor={name} className="text-gray-800 font-semibold mb-1">{label}</label>}
      <input id={name} name={name} ref={ref} type={type} placeholder={placeholder} {...rest} className="rounded-sm relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
      {!!error && <div className="text-red-500 text-sm">{error.message}</div>}
    </div>
  )
}
export const Input = forwardRef(InputBase)
