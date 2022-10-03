import React from 'react'
import Image from 'next/image'
import carImg from '../public/introductionCardImage.png'
import camper from '../public/camper.png'
import lightning from '../public/lightning.png'
import dolar from '../public/dolar.png'


type Props = {}

const IntroductionCard = (props: Props) => {
  return (
    <div className="rounded-[40px] max-w-3xl font-poppins flex relative -translate-y-2/4">
      <div className="flex-col inline-flex w-1/2 items-center pt-10 rounded-l-[40px] bg-white">
        <div>
          <Image alt="" src={camper} className="w-5" />
        </div>
        <h2 className="text-4xl font-semibold mt-8">Join the club</h2>
        <span className="w-2/3 mt-3">
          Subscribe and Get an Extra{' '}
          <span className="font-semibold underline">25% Off</span> on your first
          purchase.
        </span>
        <input
          type="email"
          className="border rounded-xl w-4/6 p-3 mt-7"
          placeholder="Email address"
        />
        <button
          type="button"
          className="mt-7 bg-black rounded-xl text-white w-4/6 px-24 py-3"
        >
          <span>Subscribe</span>
        </button>
        <span className="text-custom-gray mt-5 w-4/6 text-xs">
          By signing up, you agree to{' '}
          <span className="underline">Privacy Policy</span> and{' '}
          <span className="underline">Terms of Use.</span>
        </span>
      </div>
      <div className="inline-block w-1/2 relative">
        <Image alt="" src={carImg} sizes="100vw" className="rounded-r-[40px]" />
        <span className='absolute bottom-7 left-7 text-white text-4xl'>Mediterranean Sneakers®</span>
       <div className='absolute bg-white flex items-center rounded-xl py-4 pl-3 pr-5 -right-32 top-20'>
          <Image alt="" src={lightning} />
          <span className='pl-4 font-medium text-base leading-6 tracking-[-1.5%]'>Grow email list</span>
       </div>
       <div className='absolute bg-white flex items-center rounded-xl py-4 pl-3 pr-5 -right-48 top-36'>
          <Image alt="" src={dolar} />
          <span className='pl-4 font-medium text-base leading-6 tracking-[-1.5%]'>Increase sales conversion</span>
       </div>
      </div>
      <button type="button" className='bg-white w-12 h-12 absolute top-4 right-4 rounded-full'>
      <svg
            className="h-5 w-5 m-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
              clip-rule="evenodd"
            />
          </svg>
      </button>
      <div className='rectangle absolute w-1/2 h-1/2 -z-10 -right-60'/>
    </div>
  )
}

export default IntroductionCard
