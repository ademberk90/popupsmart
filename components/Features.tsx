import React from 'react'
import FeaturesCard from '@/components/FeaturesCard'
import secure from '../public/secure.png'
import sync from '../public/sync.png'
import guard from '../public/guard.png'

type Props = {}

const features = [
  {
    id: 1,
    logo: secure,
    header: 'Pixel Perfect',
    desc: 'Helps you calculate your email marketing roi to measure success.',
  },
  {
    id: 1,
    logo: sync,
    header: 'Conversion Ready',
    desc: 'Empowers your emails by generating afree code for a CTA in your subject line.',
  },
  {
    id: 1,
    logo: guard,
    header: 'Modern & Useful',
    desc: 'Enables you to estimate the total profit of your investment on a popup service.',
  },
]
const Features = (props: Props) => {
  return (
    <div className='flex flex-col font-poppins mt-11 items-center'>
        <h1 className='font-semibold text-4xl leading-[48px] tracing-[-0.3%]'>
            Conversion & UX ready popups & modals
        </h1>
        <div className='flex space-x-7 mt-12'>
      {features.map((item, index) => {
        return (
          <FeaturesCard
            logo={item.logo}
            header={item.header}
            desc={item.desc}
            key={item.id}
          />
        )
      })}
      </div>
    </div>
  )
}

export default Features
