import { Controller, Control, FieldError } from 'react-hook-form'
import { Switch as HeadlessSwitch } from '@headlessui/react'

type SwitchProps = {
  name: string;
  label: string;
  error: FieldError;
  control: Control;
  className?: string;
}

function Switch({ name, label, error, className, control }: SwitchProps) {

  return (
    <div className={`flex w-full ${className}`}>
      <label htmlFor={name} className="mr-2">{label}</label>
      <Controller
        control={control}
        name='testing'
        render={({ field }) => (
          <HeadlessSwitch
            checked={field.value}
            onChange={field.onChange}
            className={`${
                field.value ? 'bg-blue-500' : 'bg-gray-200'
              } relative inline-flex items-center h-6 rounded-full w-11`}
            >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                field.value ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-4 h-4 transform bg-white rounded-full`}
            />
          </HeadlessSwitch>
        )}
      />
      {!!error && <div className="text-red-500 text-sm">{error.message}</div>}
    </div>
  )
}

export { Switch }