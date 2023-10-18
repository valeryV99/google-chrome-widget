import withErrorBoundary from '@root/src/shared/hoc/withErrorBoundary'
import withSuspense from '@root/src/shared/hoc/withSuspense'
import logo from '@assets/img/logo.svg'
import { CloseIcon } from '@root/src/shared/icons/CloseIcon'
import { closePopup } from '@root/src/shared/utils'
import { z } from 'zod'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@root/src/components/Button'
import { Input } from '@root/src/components/Input'
import { Checkbox } from '@root/src/components/Checkbox'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from './router'


const emailSetupSchema = z.object({
  email: z.string().email(),
  agree: z.literal(true)
})

type EmailSetupForm = z.infer<typeof emailSetupSchema>

const formId = 'email-setup-form'

export const EmailSetup = withErrorBoundary(withSuspense(() => {
  const { register,
    formState: { isDirty, isValid, errors },
    handleSubmit,
    control,
  } = useForm<EmailSetupForm>({
    resolver: zodResolver(emailSetupSchema),
    defaultValues: {
      email: '',
    }
  })
  const navigate = useNavigate()

  const disabled = !isValid || !isDirty

  const onSubmit: SubmitHandler<EmailSetupForm> = (data) => {
    navigate(ROUTES.GET_STARTED, { state: { email: data.email } })
  }

  return (
    <div className='h-[600px] w-[410px] p-6 pt-8 flex-col flex gap-8'>
      <header className='flex justify-between items-center'>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={closePopup} className="text-gray-dark p-1"><CloseIcon /></button>
      </header>

      <h1 className='text-[1.75rem] leading-8 font-bold'>Set up your email</h1>

      <form onSubmit={handleSubmit(onSubmit)} id={formId} className='flex flex-col gap-4'>
        <p className='text-sm text-black'>Where should we send the alerts?</p>
        <Input isError={!!errors.email} type='email' placeholder='Enter your email address' {...register('email')} />
        <div>
          <Controller
            control={control}
            name='agree'
            render={({ field: { value, ...rest } }) => (
              <Checkbox {...rest} checked={value} className='flex gap-2 items-center'>
                <span className='text-sm'>I agree to the <a className='text-blue-text'>Terms of service</a> and <a className='text-blue-text'>Privacy policy</a></span>
              </Checkbox>
            )}
          />
        </div>
      </form>

      <Button type="submit" className='mt-auto' form={formId} disabled={disabled}>Confirm email</Button>
    </div>
  )
}, <div> Loading ... </div>),
  <div> Error Occur </div>)

