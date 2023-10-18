import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react"
import { cn } from "../shared/style/twind"

const _Input = ({ className, isError, ...props }: InputHTMLAttributes<HTMLInputElement> & { isError?: boolean }, ref: ForwardedRef<HTMLInputElement>) => {
  props.type
  return (
    <input ref={ref} className={cn('p-4 focus:border-purple-primary outline-none focus:outline-none placeholder:text-gray-middle text-sm leading-4 text-black border border-gray-light  rounded-[9px]', isError && 'border-red', className)} {...props} />
  )
}

export const Input = forwardRef(_Input)