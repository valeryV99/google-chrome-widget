import logo from '@assets/img/logo.svg'
import withSuspense from '@src/shared/hoc/withSuspense'
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary'
import { Button } from '@root/src/components/Button'
import getStarted from '@assets/img/get-started.webp'
import { useLocation, } from 'react-router-dom'
import { closePopup } from '@root/src/shared/utils'


const GetStarted = () => {
  const { state } = useLocation()
  const email = state?.email || 'your email'

  return (
    <div className='p-6 pt-8  text-black  flex w-[410px] h-[600px] flex-col gap-6'>
      <header className="flex justify-between items-center">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <img src={getStarted} role="presentation" className='mt-[5.5rem] w-[6.25rem] mx-auto' />
      <div className='space-y-4 text-center'>
        <h1 className='text-[1.75rem] font-bold leading-8'>You’re Ready to Go!</h1>
        <p className='text-sm leading-5 font-medium'>A verification email has been sent to: <br /><span className='font-bold'>{email}</span></p>
      </div>
      <Button className='mt-auto' onClick={closePopup}>Get started!</Button>
    </div>
  )
}

export default withErrorBoundary(
  withSuspense(GetStarted, <div> Loading ... </div>),
  <div> Error Occur </div>
)