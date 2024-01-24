import { ValidationError } from '@/types/errors'
import { notoSerif } from '@/utils/fonts'
import React from 'react'

type ErrorWrapperProps = {
    errors: ValidationError[]
    name: string
    children: React.ReactNode
}

function ErrorWrapper({errors, name, children}: ErrorWrapperProps) {
  return (
    <div className='flex flex-col'>
        {children}
        {
            errors.filter((error)=>error.field === name).map((error)=>(
                <p key={error.label} className={`text-red-500 text-bold ${notoSerif.className}`}>{error.label}</p>
            ))
        }
    </div>
  )
}

export default ErrorWrapper