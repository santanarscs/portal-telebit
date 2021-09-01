import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { Controller, FieldError, Control } from 'react-hook-form'
import "react-datepicker/dist/react-datepicker.css";

type DatePickerProps = {
  name: string;
  label: string;
  error: FieldError;
  control: Control;
  className?: string;
  placeholder?: string;
  isRequired?: boolean
}

function DatePicker({ name, label, placeholder, error, className, control, isRequired = true }: DatePickerProps) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label htmlFor={name}>{label} {!isRequired && <span className="text-gray-400 text-sm ml-1/2">(Opcional)</span>} </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <ReactDatePicker
            placeholderText={placeholder}
            onChange={(date) => field.onChange(date)}
            selected={field.value}
            className="rounded-sm relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        )}
      />
      {!!error && <div className="text-red-500 text-sm">{error.message}</div>}
    </div>
  )
}

export { DatePicker }