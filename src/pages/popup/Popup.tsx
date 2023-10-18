import logo from '@assets/img/logo.svg'
import withSuspense from '@src/shared/hoc/withSuspense'
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary'
import { Button } from '@root/src/components/Button'
import Carousel from 'nuka-carousel'
import firstSlide from '@src/assets/img/onboarding/1st-slide.webp'
import secondSlide from '@src/assets/img/onboarding/2nd-slide.webp'
import thirdSlide from '@src/assets/img/onboarding/3rd-slide.webp'
import { useState } from 'react'
import { cn } from '@root/src/shared/style/twind'

const onboardingContent = [
  {
    image: firstSlide,
    heading: <h2 className='text-2xl font-bold leading-7 text-black'>Unlock unbeatable <span className='italic text-blue-graphic-element'>savings!</span></h2>,
    text: <p>Get notified instantly when the price of your hotel drops so you can cancel, rebook and save!</p>
  },
  {
    image: secondSlide,
    heading: <h2 className='text-2xl font-bold leading-7 text-black'>Create your <span className='italic text-blue-graphic-element'>subscription list!</span></h2>,
    text: <p>Easily subscribe to hotels that catch your eye and receive notifications when there&apos;s a price decrease or change in availability.</p>
  },
  {
    image: thirdSlide,
    heading: <h2 className='text-2xl font-bold leading-7 text-black'>Get room <span className='italic text-blue-graphic-element'>availability updates!</span></h2>,
    text: <p>Be the first to know when a room becomes available in your chosen hotel. Never miss the opportunity to book your preferred accommodation again!</p>
  }
] as const

const lastSlideIndex = onboardingContent.length - 1

const Popup = () => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0)

  const handleNextButtonClick = () => {
    setCurrentSlideIdx(prev => prev === lastSlideIndex ? 0 : prev + 1)
  }

  const handlePrevButtonClick = () => {
    setCurrentSlideIdx(prev => prev === 0 ? lastSlideIndex : prev - 1)
  }


  return (
    <div className='pb-6 flex w-[410px] h-[600px] flex-col'>
      <header className="pt-8 px-6 flex justify-between items-center">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="text-gray-dark">Skip</button>
      </header>
      <div className='mt-6'>
        <Carousel slideIndex={currentSlideIdx} withoutControls dragging={false}>
          {onboardingContent.map(({ image }, index) => (
            <img key={index} src={image} alt={`slide-${index}`} />
          ))}
        </Carousel>
      </div>
      <div className='mx-auto flex gap-3 mt-6'>
        {onboardingContent.map((_, index) => (
          <div className={cn('h-1.5 rounded-full transition-all', index === currentSlideIdx ? 'w-8 bg-blue-graphic-element' : 'w-1.5 bg-blue-middle')} key={index} />
        ))}
      </div>
      <div className='mt-4'>
        <Carousel slideIndex={currentSlideIdx} withoutControls dragging={false}>
          {onboardingContent.map((content, index) => (
            <div key={index} className='px-6 flex text-gray-dark flex-col gap-4'>
              {content.heading}
              {content.text}
            </div>
          ))}
        </Carousel>
      </div>
      <div className="flex gap-[1.125rem] mx-6 mt-auto">
        <Button onClick={handlePrevButtonClick} disabled={currentSlideIdx === 0} outline className="flex-1">Back</Button>
        <Button className="flex-1" disabled={currentSlideIdx === lastSlideIndex} onClick={handleNextButtonClick}>
          {currentSlideIdx === lastSlideIndex ? 'Done' : 'Next'}
        </Button>
      </div>
    </div>
  )
}

export default withErrorBoundary(
  withSuspense(Popup, <div> Loading ... </div>),
  <div> Error Occur </div>
)
