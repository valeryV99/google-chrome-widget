import { cn } from '@src/shared/style/twind'

type ButtonProps<T extends React.ElementType> = Omit<React.ComponentPropsWithRef<T>, 'children'> & {
  as?: T
  children: React.ReactNode
  outline?: boolean
  isLoading?: boolean
}

export const nonOutlinedButtonClassName =
  'text-white bg-purple-primary hover:bg-purple-primary-hover disabled:bg-purple-primary-disabled focus:bg-purple-primary-focus disabled:text-purple-primary-disabled-text'
export const outlinedButtonClassName =
  'border text-purple-primary border-purple-primary focus:bg-purple-focus-light hover:bg-purple-primary-disabled disabled:border-purple-primary-outlined-disabled disabled:text-purple-primary-outlined-disabled'
export const Button = <T extends React.ElementType = 'button'>({
  as,
  children,
  className,
  outline = false,
  isLoading = false,
  ...props
}: ButtonProps<T>) => {
  const Tag = as ?? 'button'
  return (
    <Tag
      {...props}
      className={cn(
        'font-bold rounded-[9px] text-base leading-5 p-3.5 transition-colors',
        outline ? outlinedButtonClassName : nonOutlinedButtonClassName,
        className
      )}
    >
      {isLoading ? 'loading...' : children}
    </Tag>
  )
}
