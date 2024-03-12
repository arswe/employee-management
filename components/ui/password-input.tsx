'use client'

import { EyeIcon, EyeOffIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { InputHTMLAttributes, forwardRef, useState } from 'react'
import { Input } from './input'

export interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
      <div className='relative'>
        <Input
          type={showPassword ? 'text' : 'password'}
          ref={ref}
          {...props}
          className={cn('pr-10', className)}
        />
        <span className='absolute top-[7px] right-2 cursor-pointer select-none'>
          {showPassword ? (
            <EyeIcon onClick={() => setShowPassword(false)} size={20} />
          ) : (
            <EyeOffIcon onClick={() => setShowPassword(true)} size={20} />
          )}
        </span>
      </div>
    )
  }
)
PasswordInput.displayName = 'Input'

export { PasswordInput }
