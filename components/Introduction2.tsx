import React from 'react'
import IntroductionCard from '@/components/IntroductionCard'

type Props = {}

const Introduction2 = (props: Props) => {
  return (
    <div className="container-margin">
      <IntroductionCard />
      <div className=" text-white flex justify-between -translate-y-2/3 flex-wrap space-y-8">
        <div className="flex flex-col min-w-[200px] justify-end">
          <span className="text-7xl font-semibold leading-80">3x</span>
          <span className="font-inter mt-4 max-w-[130px] leading-5 tracking-[-3%]">
            Increase Conversion Rate
          </span>
        </div>

        <div className="flex flex-col min-w-[200px] justify-end">
          <span className="text-7xl font-semibold leading-80">120%</span>
          <span className="font-inter mt-4 max-w-[130px] leading-5 tracking-[-3%]">
            Increase Conversion Rate
          </span>
        </div>

        <div className="flex flex-col min-w-[200px] justify-end">
          <span className="text-7xl font-semibold leading-80">390%</span>
          <span className="font-inter mt-4 max-w-[130px] leading-5 tracking-[-3%]">
            More Customer Engagement
          </span>
        </div>
        <div className='min-w-[150px]'>
            <h1 className='max-w-xs font-semibold text-4xl leading-10 tracking-[-1.5%]'>
            Popupsmart meets all your business needs.
            </h1>
        </div>
      </div>
    </div>
  )
}

export default Introduction2
