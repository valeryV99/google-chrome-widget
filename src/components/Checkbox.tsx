import React, { InputHTMLAttributes, ForwardedRef } from 'react'
import { cn } from '../shared/style/twind'
import { EmptyCheckbox } from '../shared/icons/checkbox/empty'
import { CheckedCheckbox } from '../shared/icons/checkbox/checked'

const _Checkbox = ({ className, children, ...props }: Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>, ref: ForwardedRef<HTMLInputElement>) => {
  console.log({ props })
  return (
    <label className={cn('', className)}>
      {props.checked ? <CheckedCheckbox /> : <EmptyCheckbox />}
      {children}
      <input className='sr-only' ref={ref} type="checkbox" {...props} />
    </label>
  )
}

export const Checkbox = React.forwardRef(_Checkbox)
